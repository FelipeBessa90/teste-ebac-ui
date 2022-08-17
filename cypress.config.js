const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ub9nhw',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

