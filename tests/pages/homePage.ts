import { Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class HomePage extends BasePage {

    headline: Locator = this.page.locator('h3.headline');
    teaserPanel: Locator = this.page.locator('#homepage_teaser_wrapper');
    teaserBtnLeft: Locator = this.page.locator('#homepage_teaser_btn_right');
    teaserBtnRight: Locator = this.page.locator('#homepage_teaser_btn_left');

    topTourTeaser: Locator = this.page.locator('#tour-teaser-8');
    topTourTeaserItem: Locator = this.topTourTeaser.locator('div.tile');

    // loginBtnOnMainPage: Locator = this.page.getByText('Log In');
    // loginBtn: Locator = this.page.locator('button[data-testid="signUp.switchToSignUp"]');
    // loginWithEmail: Locator = this.page.locator('[data-testid="buttonElement"]').getByText('Log in with Email');
    // viewPanel: Locator = this.page.locator('#SITE_HEADER').getByTestId('inline-content').first();
    //
    // emailInput: Locator = this.page.locator("input#emailAddress");
    // passwordInput: Locator = this.page.locator("input#password");
    // tenant: Locator = this.page.locator("input#account");
    // signInButton: Locator = this.page.locator('button[type="submit"]');
    async getHomePageHeadline(name: string){
        return this.headline.getByText(name);
    }
};
