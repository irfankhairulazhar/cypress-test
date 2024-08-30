Cypress Page Object Model (POM) Setup

Overview
This repository uses the Page Object Model (POM) pattern for organizing Cypress end-to-end tests. 
The Page Object Model helps in managing and maintaining test code by encapsulating the interaction with web pages in page objects, making tests more readable and maintainable.
For sample automation, I used "Traveloka Landing Page" with scenario search a hotel under Bandung location

Folder Structure

cypress/
| e2e/
  - search_hotelSteps.cy.js ==> step scenario
| pageobjects/
  - search_hotelPO.js ==> to define elment which used for step 
| fixtures/
  - testdata.json ==> to save test data that i used and called on step
| reports/
  - videos ==> recording video during run the automation
  - index.html ==> report detail that we can open on browser    
| support/
  - commands.js ==> To import our reference
  - e2e.js ==> To setup /import custome command
| node_module/ ==> all package /depedency 
  - cypressconfig.json ==> to setup global configuration

Running Tests
  To run the tests, use the following commands:

  - Run tests in headless mode: npx cypress run
  - Run test without headless mode : npx cypress run --headed
  - Open Cypress Test Runner: npx cypress open
