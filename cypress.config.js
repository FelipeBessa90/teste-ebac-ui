const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ub9nhw",
  e2e: {
    //projectId: '93yhz3',
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: true,
      json: true,
    },
    browser: "electron",
    video: true,
    screenshot: true,
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    setupNodeEvents(on, config) {},
  },
});
