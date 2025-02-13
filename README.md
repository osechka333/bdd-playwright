# bdd-playwright

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- playwright/test: (1.50 or higher) 
- playwright-bdd: (8.1 or higher)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/bdd-playwright.git
    ```

2. Install dependencies:
    ```sh
    npm install
    npm i @playwright/test playwright-bdd 
    npx playwright install
    ```

### Running Tests

To run the tests, use the following command:
   ```sh
    npx bddgen && npx playwright test
   ```

### Approach
This project uses the Behavior-Driven Development (BDD) approach with Playwright for end-to-end testing. 
The tests are written in Gherkin syntax and the step definitions are implemented using TypeScript.
The Page Object Model (POM) pattern is used to encapsulate the page interactions, making the tests more maintainable and readable. 

### Key Files
playwright.config.ts: Configures the Playwright test runner.
tests/features/: Contains the feature files that describe the test scenarios.
tests/pages/: Contains the page objects that abstract the interactions with the web pages.
tests/steps/: Contains the step definitions that map the Gherkin steps to the actual test code.

### Report
After each test run, it's generated the report, to open the last HTML report with traces and screenshots: 
   ```sh
    npx playwright show-report
   ```
### Generated tests
Generated tests can be checked in the folder: .features-gen

#### License
This project is owned by ospokolenko@gmail.com