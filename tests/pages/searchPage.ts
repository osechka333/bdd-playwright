import { Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class SearchPage extends BasePage {
    searchForm: Locator = this.page.locator('#header-search-form');
    searchInput: Locator = this.page.locator('#input-search');
    searchBtn: Locator = this.searchForm.getByRole('button');

    dropDownList: Locator = this.searchForm.locator('.tt-dropdown-menu');
    searchResultsArtist: Locator = this.dropDownList.locator('div.tt-dataset-artists');
    searchResultsTours: Locator = this.dropDownList.locator('div.tt-dataset-tours');
    searchResultsEvents: Locator = this.dropDownList.locator('div.tt-dataset-events');
    searchResultsProducts: Locator = this.dropDownList.locator('div.tt-dataset-products');
    searchResultsCities: Locator = this.dropDownList.locator('div.tt-dataset-cities');

    async searchItem(name: string): Promise<void> {
        await this.searchInput.click();
        await this.searchInput.fill(name);
    }

    async getFoundResultsInDropDown(): Promise<string[]> {
        const data = await this.dropDownList.innerText();
        const results = data.split('\n').map(value => value.trim());
        return results.filter(element => element !== '');
    }

    async searchByHotKey(name: string): Promise<void> {
        await this.searchItem(name);
        await this.page.keyboard.press('Enter');
    }

    async clearSearchInput(): Promise<void> {
        await this.waitForVisibility(this.searchInput);
        await this.searchInput.clear();
    }
}