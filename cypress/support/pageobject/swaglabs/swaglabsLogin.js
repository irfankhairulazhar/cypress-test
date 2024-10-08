import { logins,checkout } from '../../selector';

class loginSwagLabs 
{

    openSwaglabsLandingPage (swagLabs) {
        cy.visit(swagLabs);
        cy.url().then((url) => {
            expect(url).to.contain(swagLabs);

        }) 
        
    }

    inputCredetialLogin (usernameSwagLabs, passwordSWagLabs) {
        cy.inputText(logins.username, usernameSwagLabs);
        cy.inputText(logins.password, passwordSWagLabs);
        cy.customeClick(logins.loginButton);

    }

    selectItem () {
        cy.scrollToElement(checkout.addItem);
        cy.customeClick(checkout.addItem);
        cy.waitInSecounds(3);

    }

    openCheckoutMenu () {
        cy.customeClick(checkout.checkoutMenu);
        
    }

    checkDetailIteamsOnCheckout (itemName, itemPrice) {
        cy.assertVisibleAdContainsText(checkout.itemName, itemName);
        cy.assertVisibleAdContainsText(checkout.itemPrice,itemPrice);
    }

    buttonCheckout () {
        cy.customeClick(checkout.checkoutButton);
    }

    userData (first_name, last_name, postalCode) {
        cy.inputText(checkout.inputFirstName, first_name);
        cy.inputText(checkout.inputLastName, last_name);
        cy.inputText(checkout.inputPostalCode, postalCode);

    }

    continueButton () {
        cy.customeClick(checkout.continueButton);
    }

    verifyTotalPrice (itemTotal, itemTax, totalPaid) {
   
        cy.verifyTotalPrice(itemTotal, itemTax, totalPaid, checkout.totalIteams, checkout.totalTaxs, checkout.totalTobePaids);

          
    }

}

export default loginSwagLabs;