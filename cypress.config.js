const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin/writer')(on, config);
      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    env: {
      allure: true
    },
    baseUrl: 'https://practicetestautomation.com/practice-test-login/',
    screenshotOnRunFailure : true,
     screenshotsFolder: 'screenshots-only'
  },
});
