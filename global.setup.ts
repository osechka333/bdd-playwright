import { chromium, FullConfig } from "@playwright/test";

const globalSetup = async (config: FullConfig) => {
  const { ignoreHTTPSErrors } = config.projects[0].use;
  const browser = await chromium.launch({ slowMo: 700 });
  const context = await browser.newContext({ ignoreHTTPSErrors });
  await context.newPage();

  await browser.close();
};

export default globalSetup;
