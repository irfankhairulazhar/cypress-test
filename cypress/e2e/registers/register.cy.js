import registers from "../../support/pageobject/register/register";
import { createRandomUser } from "../../support/randomUsers"


describe('parabank register', () => {

   const rs = new registers();
   const rd = new createRandomUser();


   it.only('register new user parabank', () => {
    rs.openParaBank(Cypress.env('prabank'));
    rs.registerNewCustomerWithValidData(rd.invalidFirstName, rd.last_name, rd.address, rd.city, rd.street, rd.postalCode, rd.phone, rd.ssn, rd.usernames);
   })

    

})