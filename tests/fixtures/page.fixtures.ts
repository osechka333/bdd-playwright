import { test as base, Page } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { SearchPage } from "../pages/searchPage";

export const test = base.extend<{
  homePage: HomePage;
  searchPage: SearchPage;
}>({
  homePage: async ({ page }: { page: Page }, use: (loginPage: HomePage) => Promise<void>) => {
    await use(new HomePage(page));
  },
  searchPage: async ({ page }: { page: Page }, use: (profilePage: SearchPage) => Promise<void>) => {
    await use(new SearchPage(page));
  },
});

export const { expect } = test;
