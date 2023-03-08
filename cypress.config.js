const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gav2sg',
  e2e: {
    defaultCommandTimeout: 8000,
    watchForFileChanges: false,
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    env: {
      baseurl: "https://rahulshettyacademy.com",
    }
  },
});
