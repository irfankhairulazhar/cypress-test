// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
/// <reference types='cypress-tags' />
import mammoth from 'mammoth';
require('cy-verify-downloads').addCustomCommand();
require('cypress-downloadfile/lib/downloadFileCommand')


Cypress.Commands.add('getElement', (selector) => {
    if (selector.startsWith('//') || selector.startsWith('(')) {
        return cy.xpath(selector);
    }
    else {
        return cy.get(selector);
    }
});

Cypress.Commands.add('customeClick', (selector) => {
    cy.getElement(selector).click({ force: true });
})


Cypress.Commands.add('inputText', (selector, text, options = {}) => {
    cy.getElement(selector).clear().type(text,options);
})

Cypress.Commands.add('scrollToElement', (selector) => {
    cy.getElement(selector).scrollIntoView();
})


Cypress.Commands.add('assertVisibleAdContainsText', (selector, text) => {
    cy.getElement(selector)
      .should('be.visible')
      .should('contain.text', text)
})


Cypress.Commands.add('waitInSecounds', (seconds) => {
    const millisecounds = seconds * 1000;
    cy.wait(millisecounds);
})


Cypress.Commands.add('assertValueLessThan', (selector, threshold) => {
    cy.getElement(selector).invoke('text').then((text) => {
        const value = parseFloat(text.replace(/[^0-9.]/g, ''));
        expect(value).to.be.lessThan(threshold);
    })

})

    Cypress.Commands.add('assertVisibleAdContainsVAlue', (selector, text) => {
        cy.getElement(selector)
          .should('be.visible')
          .should('have.value', text)
    })


    Cypress.Commands.add('cleanText', (selector) => {
        cy.getElement(selector).clear({force : true})
        
    })

    Cypress.Commands.add('verifyTotalPrice', (itemTotal, itemTax, totalPaid, originalPriceSelector, taxSelector, totalPriceSelector) => {
        cy.getElement(originalPriceSelector).invoke('text').then((originalPriceText) => {
        const originalPrice = parseFloat(originalPriceText.replace(/[^0-9.]/g, '')); 
        expect(originalPrice).to.equal(itemTotal);
      
          
        cy.getElement(taxSelector).invoke('text').then((taxText) => {
        const tax = parseFloat(taxText.replace(/[^0-9.]/g, ''));
        expect(tax).to.equal(itemTax);
      
            // Get the total price
        cy.getElement(totalPriceSelector).invoke('text').then((totalPriceText) => {
        console.log('Total Price Text:', totalPriceText);
        const totalPrice = parseFloat(totalPriceText.replace(/[^0-9.]/g, '')); 
      
              // Assert total price is correct
        expect(originalPrice + tax).to.equal(totalPrice);
        expect(totalPrice).to.equal(totalPaid);


        });

    });

  });

});

  Cypress.Commands.add('visitWithAuth', (url, username, password) => {
    cy.visit(url, {
      auth: {
        username: username,
        password: password,
      },
    });
});

    Cypress.Commands.add('selectNextDays', (datePickerSection, daySelector, selectDate) => {
        const today = new Date();
        const currentDay = today.getDate();
        cy.customeClick(datePickerSection);
        cy.waitInSecounds(2);
        cy.customeClick(`${daySelector}[.='${currentDay}']`);
        cy.customeClick(selectDate); 
    
});

    Cypress.Commands.add('forceUploadFile', (fileName, inputSelector) => {
        const filePath = `cypress/fixtures/${fileName}`;
        cy.getElement(inputSelector).selectFile(filePath, { force: true }); 
});

    Cypress.Commands.add('inputAndSelect', (selector, text) => {
        cy.log(`Typing text: ${text}`); 
        cy.get(selector).clear().type(text).type('{Enter}');

});

    Cypress.Commands.add('verifyDownloadAndContent', (fileName, expectedContent) => {
        cy.verifyDownload(fileName).then(() => {
        cy.readFile(`cypress/downloads/${fileName}`)
            .should('eq', expectedContent);
    });
});

Cypress.Commands.add('readDocx', (filePath) => {
    return cy.readFile(filePath, 'binary').then((binaryContent) => {
        return mammoth.convertToText({ buffer: binaryContent }).then((result) => {
            return result.value; // The plain text from the .docx
        });
    });
});


// const pdf = require('pdf-parse');

// // Create a Cypress custom command to use pdf-parse
// Cypress.Commands.add('parsePdf', (filePath) => {
//     return cy.readFile(filePath, 'binary')
//       .then((file) => {
//         const dataBuffer = Buffer.from(file, 'binary'); // Convert binary data to Buffer
//         return pdf(dataBuffer);
//       })
//       .then((data) => {
//         return data.text;  // Return the text extracted from the PDF
//       });
//   });
  

        
  

      




