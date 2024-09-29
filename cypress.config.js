const { defineConfig } = require("cypress");
const env = require('./cypress.env.config.js');
const { isFileExist } = require('cy-verify-downloads');


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {isFileExist})
     
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
      logique: env.logique,
      herokuapp: env.herokuapp
    }
  

 
  });