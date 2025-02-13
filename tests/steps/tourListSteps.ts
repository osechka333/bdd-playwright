import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import {HomePage} from "../pages/homePage";

const { Given } = createBdd();

Given('I see in headline {string}', async ({ page }, keyword) => {
    const homePage = new HomePage(page);
    await expect(homePage.headline.getByText(keyword)).toBeVisible();
});

Given('I see a list of tours', async ({ page }, emailAddress ) => {
    const homePage = new HomePage(page);
    await expect(homePage.topTourTeaser).toBeVisible();
    await expect(homePage.topTourTeaserItem.first()).toBeVisible();
});
