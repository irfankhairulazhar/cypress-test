import { register } from '../../selector'

class registers {

    openParaBank (prabank) {
        cy.visit(prabank);
        cy.url().then((url) => {
            expect(url).to.contain(prabank)
        })


    }

    registerNewCustomerWithValidData (invalidFirstName, last_name, address, city, street, postalCode, phone, ssn, usernames) {
        cy.inputText(register.inputName, invalidFirstName);
        cy.inputText(register.inputCompleteName, last_name);
        cy.inputText(register.addressLoc ,address);
        cy.inputText(register.addressCity ,city);
        cy.inputText(register.addressState, street);
        cy.inputText(register.addressZipCode, postalCode);
        cy.inputText(register.userNumber, phone);
        cy.inputText(register.ssn, ssn);
        cy.inputText(register.newUsername, usernames);

    }

}

export default registers;