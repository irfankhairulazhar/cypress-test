import registers from "../pageobject/register/register";
import { createRandomUser } from "../support/randomUsers"


describe('parabank register', () => {

   const rs = new registers();
   const rd = new createRandomUser();


   it.only('register new user parabank', () => {
    rs.openParaBank(Cypress.env('prabank'));
    rs.inputFullName(rd.invalidFirstName);
    rs.inputLastOfName(rd.last_name);
    rs.inputAddress(rd.address);
    rs.inputCity(rd.city);
    rs.inputStreet(rd.street);
    rs.inputPostalCode(rd.postalCode);
    rs.inputPhone(rd.phone);
    rs.inputSsn(rd.ssn);
    rs.inputNewusername(rd.usernames);
   })

    

})