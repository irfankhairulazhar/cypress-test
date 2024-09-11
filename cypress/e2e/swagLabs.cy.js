import loginSwagLabs from "../pageobject/swaglabs/swaglabsLogin"


describe('My First Test', () => {

const ls = new loginSwagLabs();

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
        ls.userData(userdata.swaglabls.name, userdata.swaglabls.callName, userdata.swaglabls.homeCode)
        ls.continueButton();
        ls.verifyTotalPrice(userdata.swaglabls.itemTotal, userdata.swaglabls.itemTax, userdata.swaglabls.totalPaid);

})

})

