import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { SearchPage } from '../pages/searchPage';

const { When, Then } = createBdd();

When('I search for {string}', async ({ page }, searchTerm) => {
    const searchPage = new SearchPage(page);
    await searchPage.searchItem(searchTerm);
});

When('I click on the search page button', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.searchBtn.click();
});

Then('I am redirect to the page with tickets {string}', async ({ page }, searchTerm) => {
    await page.waitForLoadState('load');
    expect(await page.locator('.tour-list span.artist').innerText()).toContain(searchTerm);
});