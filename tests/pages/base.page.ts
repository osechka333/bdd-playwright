import { Page, Locator } from "@playwright/test";
import { Timeout } from "../constants/timeouts";

export abstract class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  public qtLocator(element: string): Locator {
    return this.page.locator(`[data-testid='${element}']`);
  }

  async openBasePage(): Promise<void> {
    await this.page.goto("/", { timeout: 3000 });
  }

  async waitForVisibility(element: Locator): Promise<void> {
    return element.waitFor({ state: 'visible', timeout: Timeout.L });
  }

  async extendedWaitForVisibility(element: Locator): Promise<void> {
    return element.waitFor({ state: 'visible', timeout: Timeout.XL });
  }

  async waitForInvisible(element: Locator): Promise<void> {
    return element.waitFor({ state: 'hidden' });
  }
  async isSelected(element: Locator): Promise<boolean> {
    return (await element.getAttribute('class')).includes('active');
  }

  async waitForPageUrl(url: string): Promise<void> {
    await this.page.waitForURL(url, { waitUntil: 'domcontentloaded' });
  }
}
