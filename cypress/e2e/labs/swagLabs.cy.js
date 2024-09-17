import loginSwagLabs from "../../support/pageobject/swaglabs/swaglabsLogin"
import { createRandomUser } from "../../support/randomUsers"



describe('My First Test', () => {

const ls = new loginSwagLabs();
const rd = new createRandomUser();

let userdata
    beforeEach(    ()=> {
     cy.fixture('testdata.json').then((data)=> {
        userdata=data
  })
})   

    it('swagLabs checkout', () => {
        ls.openSwaglabsLandingPage(Cypress.env('swagLabs'));
        ls.inputCredetialLogin(userdata.swaglabls.usernameSwagLabs, userdata.swaglabls.passwordSWagLabs);
        ls.selectItem();
        ls.openCheckoutMenu();
        ls.checkDetailIteamsOnCheckout(userdata.swaglabls.itemName, userdata.swaglabls.itemPrice);
        ls.buttonCheckout();
        ls.userData(rd.first_name , rd.last_name, rd.postalCode)
        ls.continueButton();
        ls.verifyTotalPrice(userdata.swaglabls.itemTotal, userdata.swaglabls.itemTax, userdata.swaglabls.totalPaid);

})

})

