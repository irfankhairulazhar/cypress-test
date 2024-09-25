const { defineConfig } = require("cypress");
const env = require('./cypress.env.config.js');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
     
          screenshotOnRunFailure=true;
          require('cypress-mochawesome-reporter/plugin')(on);
     
    
    },
    video: true,
    videoCompression: 32, 
    videosFolder: 'cypress/videos'
    
  },

    env: {
      baseurl: env.baseUrl,
      swagLabs: env.swagLabs,
      prabank: env.prabank,
      logique: env.logique
    }
  

 
  });