import registers from "../../support/pageobject/register/register";
import { createRandomUser } from "../../support/randomUsers"


describe('parabank register', () => {

   const rs = new registers();
   const rd = new createRandomUser();
   let pr;

   beforeEach(() => {
   
   cy.fixture('testdata').then((data)=>{
      pr = data.parabank;
   //    cy.log(`Loaded username: ${pr.usernameBank}`);
   })
})


   it('register new user parabankw= with valid data', () => {
    rs.openParaBank(Cypress.env('prabank'));
    rs.registerNewCustomerWithValidData(rd.invalidFirstName, rd.last_name, rd.address, rd.city, rd.street, rd.postalCode, rd.phone, rd.ssn, rd.usernames, pr.passwordBank, pr.confirmPassBank, pr.accBankCreated);
   })

   it('register with input firstname', ()=> {
      rs.openParaBank(Cypress.env('prabank'));
      rs.registerNewCustomerWitoutFirstNAme(rd.last_name, rd.address, rd.city, rd.street, rd.postalCode, rd.phone, rd.ssn, rd.usernames, pr.passwordBank, pr.confirmPassBank, pr.errorFirstName);

   })

   it('regisyet without input lastname', ()=> {
     rs.openParaBank(Cypress.env('prabank'));
     rs.registerWithoutUsingLastName(rd.invalidFirstName, rd.address, rd.city, rd.street, rd.postalCode, rd.phone, rd.ssn, rd.usernames, pr.passwordBank, pr.confirmPassBank, pr.errorLastName);

   })

   it('register without address', ()=> {
      rs.openParaBank(Cypress.env('prabank'));
      rs.registerWithoutUsingAddress(rd.invalidFirstName, rd.last_name, rd.city, rd.street, rd.postalCode, rd.phone, rd.ssn, rd.usernames, pr.passwordBank, pr.confirmPassBank, pr.errorAddress);
   })

   it('register without city', ()=> {
      rs.openParaBank(Cypress.env('prabank'));
      rs.registerWithoutUsingCity(rd.invalidFirstName, rd.last_name, rd.address, rd.street, rd.postalCode, rd.phone, rd.ssn, rd.usernames, pr.passwordBank, pr.confirmPassBank, pr.errorCity);
   })

   it('register without state', ()=> {
      rs.openParaBank(Cypress.env('prabank'));
      rs.registerWithoutUsingState(rd.invalidFirstName, rd.last_name, rd.address, rd.city, rd.postalCode, rd.phone, rd.ssn, rd.usernames, pr.passwordBank, pr.confirmPassBank, pr.errorState);
   })

   it('register without zipCode', ()=> {
      rs.openParaBank(Cypress.env('prabank'));
      rs.registerWithoutUsingZipCode(rd.invalidFirstName, rd.last_name, rd.address, rd.city, rd.street, rd.phone, rd.ssn, rd.usernames, pr.passwordBank, pr.confirmPassBank, pr.errorZipCode);
   })

   it('register without using SSN', ()=> {
      rs.openParaBank(Cypress.env('prabank'));
      rs.registerWithoutUsingSSN(rd.invalidFirstName, rd.last_name, rd.address, rd.city, rd.street, rd.postalCode, rd.phone, rd.usernames, pr.passwordBank, pr.confirmPassBank, pr.errorSSN);
   })

   it('regiser without using username',()=> {
      rs.openParaBank(Cypress.env('prabank'));
      rs.registerWithoutUsingUsername(rd.invalidFirstName, rd.last_name, rd.address, rd.city, rd.street, rd.postalCode, rd.phone, rd.ssn, pr.passwordBank, pr.confirmPassBank, pr.errorUserName);
   })

   it('reguster without using pass', ()=> {
      rs.openParaBank(Cypress.env('prabank'));
      rs.registerWithoutUsingPass(rd.invalidFirstName, rd.last_name, rd.address, rd.city, rd.street, rd.postalCode, rd.phone, rd.ssn, rd.usernames, pr.confirmPassBank, pr.errorPassword);

   })

   it('register without using recom pass', ()=> {
      rs.openParaBank(Cypress.env('prabank'));
      rs.registerWithoutInputRecomPass(rd.invalidFirstName, rd.last_name, rd.address, rd.city, rd.street, rd.postalCode, rd.phone, rd.ssn, rd.usernames, pr.passwordBank, pr.errorConfirmPassword);
   })

   it('registe with different pas and re confirn pass',()=>{
      rs.openParaBank(Cypress.env('prabank'));
      rs.registerWithPassNotMatch(rd.invalidFirstName, rd.last_name, rd.address, rd.city, rd.street, rd.postalCode, rd.phone, rd.ssn, rd.usernames, pr.passwordBank, pr.paasNotMatch, pr.errorPassNotMatch)
   })



    

})