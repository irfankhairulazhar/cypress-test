import register_logique from "../../support/pageobject/logique_register/logique_register";
import { createRandomUser } from "../../support/randomUsers";


describe ('test by pass auth and upload', ()=> {

   const lq = new register_logique ();
   const rd = new createRandomUser ();


   let dataLq;

   beforeEach ( ()=> {
    cy.fixture('testdata.json').then((data) => {
        dataLq = data.logique;
    });

   });


    it('register with by pass auth', ()=> {
        lq.openLogicResPage (Cypress.env('logique'), dataLq.username, dataLq.password);
        // cy.log('Vehicle Option:', dataLq.opVehicle);
        lq.registerNewUcAccount(rd.first_name, rd.last_name, rd.city, rd.idNumber, rd.companyName, rd.address, rd.humanFormat, dataLq.opVehicle, dataLq.purpose, dataLq.province, dataLq.cities, rd.email, dataLq.pass, dataLq.rePass);
        // tes for first commit 
    })
})