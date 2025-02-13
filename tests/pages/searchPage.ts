import { Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class SearchPage extends BasePage {
    searchForm: Locator = this.page.locator('#header-search-form');
    searchInput: Locator = this.page.locator('#input-search');
    searchBtn: Locator = this.searchForm.getByRole('button');

    async searchItem(name: string): Promise<void> {
        await this.searchInput.click();
        await this.searchInput.fill(name);
    }
}