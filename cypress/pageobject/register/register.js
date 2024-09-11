import { register } from '../../support/selector'

class registers {

    openParaBank (prabank) {
        cy.visit(prabank);

    }

    inputFullName (invalidFirstName) {
        cy.inputText(register.inputName, invalidFirstName);

    }

    inputLastOfName (last_name) {
        cy.inputText(register.inputCompleteName, last_name);

    }

    inputAddress (address) {
        cy.inputText(register.addressLoc ,address);
        
    }

    inputCity(city) {
        cy.inputText(register.addressCity ,city);

    }

    inputStreet (street) {
        cy.inputText(register.addressState, street);
    }

    inputPostalCode(postalCode) {
        cy.inputText(register.addressZipCode, postalCode);
    }

    inputPhone(phone) {
        cy.inputText(register.userNumber, phone);
    }

    inputSsn (ssn) {
        cy.inputText(register.ssn, ssn);
    }

    inputNewusername (usernames) {
        cy.inputText(register.newUsername, usernames);
    }










}

export default registers;