import { Page } from "@playwright/test";

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async openBasePage(): Promise<void> {
    await this.page.goto("/", { timeout: 3000 });
  }
}
