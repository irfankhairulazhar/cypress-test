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
/// <reference types="Cypress-xpath" />
/// <reference types='cypress-tags' />

Cypress.Commands.add('customeClick', (selector) => {
    cy.get(selector).click();
})

Cypress.Commands.add('clickXpath', (xpathSelector) => {
    cy.xpath(xpathSelector).click({ force: true });
})


Cypress.Commands.add('inputText', (selector, text, options = {}) => {
    cy.get(selector).type(text,options);
})

Cypress.Commands.add('scrollToElement', (selector) => {
    cy.get(selector).scrollIntoView();
})

Cypress.Commands.add('scrollToXpath', (selector) => {
    cy.xpath(selector).scrollIntoView();
})


Cypress.Commands.add('assertVisibleAdContainsText', (selector, text) => {
    cy.get(selector)
      .should('be.visible')
      .should('contain.text', text)
})

Cypress.Commands.add('assertVisibleAdContainsXpath', (selector, text) => {
    cy.xpath(selector)
      .should('be.visible')
      .should('contain.text', text)
})

Cypress.Commands.add('waitInSecounds', (seconds) => {
    const millisecounds = seconds * 1000;
    cy.wait(millisecounds);
})


Cypress.Commands.add('assertValueLessThan', (selector, threshold) => {
    cy.get(selector).invoke('text').then((text) => {
        const value = parseFloat(text.replace(/[^0-9.]/g, ''));
        expect(value).to.be.lessThan(threshold);
    })

})

    Cypress.Commands.add('assertVisibleAdContainsVAlue', (selector, text) => {
        cy.get(selector)
          .should('be.visible')
          .should('have.value', text)
    })


    Cypress.Commands.add('cleanText', (selector) => {
        cy.get(selector).clear({force : true})
        
    })

    Cypress.Commands.add('verifyTotalPrice', (itemTotal, itemTax, totalPaid, originalPriceSelector, taxSelector, totalPriceSelector) => {
        // Get the original price
        cy.get(originalPriceSelector).invoke('text').then((originalPriceText) => {
        const originalPrice = parseFloat(originalPriceText.replace(/[^0-9.]/g, '')); 
        expect(originalPrice).to.equal(itemTotal);
      
          // Get the tax
        cy.get(taxSelector).invoke('text').then((taxText) => {
        const tax = parseFloat(taxText.replace(/[^0-9.]/g, ''));
        expect(tax).to.equal(itemTax);
      
            // Get the total price
        cy.get(totalPriceSelector).invoke('text').then((totalPriceText) => {
        console.log('Total Price Text:', totalPriceText);
        const totalPrice = parseFloat(totalPriceText.replace(/[^0-9.]/g, '')); 
      
              // Assert total price is correct
        expect(originalPrice + tax).to.equal(totalPrice);
        expect(totalPrice).to.equal(totalPaid);


        })

    })
 })




    
      

    
})



