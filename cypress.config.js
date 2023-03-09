const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:5000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
       
    },
    baseUrl:'https://demo.playwright.dev/todomvc'
    },
    screenshotOnRunFailure:true,
    screenshotsFolder:'cypress/screenshots',
    viewportHeight:720,
    viewportWidth:1280,
});
