import { Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class HomePage extends BasePage {

    headline: Locator = this.page.locator('h3.headline');
    teaserPanel: Locator = this.page.locator('#homepage_teaser_wrapper');
    teaserBtnLeft: Locator = this.page.locator('#homepage_teaser_btn_right');
    teaserBtnRight: Locator = this.page.locator('#homepage_teaser_btn_left');

    topTourTeaser: Locator = this.page.locator('#tour-teaser-8');
    topTourTeaserItem: Locator = this.topTourTeaser.locator('div.tile');

    async getHomePageHeadline(name: string){
        return this.headline.getByText(name);
    }
}
