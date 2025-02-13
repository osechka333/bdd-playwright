import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const testDir = defineBddConfig({
  features: ['tests/features/tourList.feature', 'tests/features/search.feature'],
  steps: ['tests/steps/tourListSteps.ts',
    'tests/steps/searchSteps.ts',
    "tests/steps/commonSteps.ts"
  ]
});

export default defineConfig({
  testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://www.metaltix.com/',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
      headless: false,
      screenshot: "on",
      trace: 'on',
      },
    }
  ],
});
