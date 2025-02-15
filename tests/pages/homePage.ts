import { Locator, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class HomePage extends BasePage {
    headline: Locator = this.page.locator('h3.headline');
    topMenu: Locator = this.page.locator('#header-topmenu');
    loginBtn: Locator = this.qtLocator('yat-nav-login-link')

    teaserPanel: Locator = this.page.locator('#homepage_teaser_wrapper');
    teaserBtnLeft: Locator = this.page.locator('#homepage_teaser_btn_right');
    teaserBtnRight: Locator = this.page.locator('#homepage_teaser_btn_left');

    deLanguage: Locator = this.page.locator('#language-de');
    enLanguage: Locator = this.page.locator('#language-en');

    topTourTeaser: Locator = this.page.locator('#tour-teaser-8');
    topTourTeaserItem: Locator = this.topTourTeaser.locator('div.tile');
    tourList: Locator = this.page.locator('.tour-list');
    artist: Locator = this.tourList.locator('span.artist');
    artistTourTitle: Locator = this.page.locator('#tours section');


    async getHomePageHeadline(){
        await this.waitForVisibility(this.headline);
        return this.headline.innerText();
    }
    async switchLanguage(language: string) {
        switch (language) {
            case 'de':
                await this.deLanguage.click();
                break;
            case 'en':
                await this.enLanguage.click();
                break;
            default:
                throw new Error(`Could not select the language: ${language}`);
        }
    }

    async selectMainTab(name: string){
        await this.topMenu.locator(`ul.nav :text(\`${name}\`)`).click();
    }

    async openArtistTourFromList(name: string): Promise<void> {
        await expect(async () => {
            await this.artist.getByText(name).click();
            await expect(this.artistTourTitle.getByText(name)).toBeVisible()
        }).toPass();
    }
}
