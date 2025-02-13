import { createBdd } from 'playwright-bdd';
import { HomePage } from '../pages/homePage';

const { Given } = createBdd();

Given('I am on home page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.openBasePage();
});