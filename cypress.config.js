const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    screenshotOnRunFailure=true;
    require('cypress-mochawesome-reporter/plugin')(on);
    },
    video: true,
    videoUploadOnPasses: false,
    videoCompression: 32, 
    videosFolder: 'cypress/videos'
    
  },
});
