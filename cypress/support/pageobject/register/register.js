import { register } from '../../selector'

class registers {

    openParaBank (prabank) {
        cy.visit(prabank);
        cy.url().then((url) => {
            expect(url).to.contain(prabank)
        })


    }

    registerNewCustomerWithValidData (invalidFirstName, last_name, address, city, street, postalCode, phone, ssn, usernames, passwordBank, confirmPassBank, accBankCreated) {
        cy.inputText(register.inputName, invalidFirstName);
        cy.inputText(register.inputCompleteName, last_name);
        cy.inputText(register.addressLoc ,address);
        cy.inputText(register.addressCity ,city);
        cy.inputText(register.addressState, street);
        cy.inputText(register.addressZipCode, postalCode);
        cy.inputText(register.userNumber, phone);
        cy.inputText(register.ssn, ssn);
        cy.inputText(register.newUsername, usernames);
        cy.inputText(register.passwordBank, passwordBank);
        cy.inputText(register.confirmPassBank, confirmPassBank);
        cy.customeClick(register.regisButton);
        cy.waitInSecounds(2);
        cy.assertVisibleAdContainsText(register.successRegister ,accBankCreated)

    }
    registerNewCustomerWitoutFirstNAme (last_name, address, city, street, postalCode, phone, ssn, usernames, passwordBank, confirmPassBank, errorFirstName) {
        cy.inputText(register.inputCompleteName, last_name);
        cy.inputText(register.addressLoc ,address);
        cy.inputText(register.addressCity ,city);
        cy.inputText(register.addressState, street);
        cy.inputText(register.addressZipCode, postalCode);
        cy.inputText(register.userNumber, phone);
        cy.inputText(register.ssn, ssn);
        cy.inputText(register.newUsername, usernames);
        cy.inputText(register.passwordBank, passwordBank);
        cy.inputText(register.confirmPassBank, confirmPassBank);
        cy.customeClick(register.regisButton);
        cy.assertVisibleAdContainsText(register.invalidFirstName, errorFirstName);

    }

    registerWithoutUsingLastName (invalidFirstName, address, city, street, postalCode, phone, ssn, usernames, passwordBank, confirmPassBank, errorLastName) {
        cy.inputText(register.inputName, invalidFirstName);
        cy.inputText(register.addressLoc ,address);
        cy.inputText(register.addressCity ,city);
        cy.inputText(register.addressState, street);
        cy.inputText(register.addressZipCode, postalCode);
        cy.inputText(register.userNumber, phone);
        cy.inputText(register.ssn, ssn);
        cy.inputText(register.newUsername, usernames);
        cy.inputText(register.passwordBank, passwordBank);
        cy.inputText(register.confirmPassBank, confirmPassBank);
        cy.customeClick(register.regisButton);
        cy.assertVisibleAdContainsText(register.invalidLastname, errorLastName);

    }

    registerWithoutUsingAddress(invalidFirstName, last_name, city, street, postalCode, phone, ssn, usernames, passwordBank, confirmPassBank, errorAddress) {
        cy.inputText(register.inputName, invalidFirstName);
        cy.inputText(register.inputCompleteName, last_name);
        cy.inputText(register.addressCity ,city);
        cy.inputText(register.addressState, street);
        cy.inputText(register.addressZipCode, postalCode);
        cy.inputText(register.userNumber, phone);
        cy.inputText(register.ssn, ssn);
        cy.inputText(register.newUsername, usernames);
        cy.inputText(register.passwordBank, passwordBank);
        cy.inputText(register.confirmPassBank, confirmPassBank);
        cy.customeClick(register.regisButton);
        cy.assertVisibleAdContainsText(register.invalidAddress ,errorAddress)

    }

    registerWithoutUsingCity(invalidFirstName, last_name, address, street, postalCode, phone, ssn, usernames, passwordBank, confirmPassBank, errorCity) {
        cy.inputText(register.inputName, invalidFirstName);
        cy.inputText(register.inputCompleteName, last_name);
        cy.inputText(register.addressLoc ,address);
        cy.inputText(register.addressState, street);
        cy.inputText(register.addressZipCode, postalCode);
        cy.inputText(register.userNumber, phone);
        cy.inputText(register.ssn, ssn);
        cy.inputText(register.newUsername, usernames);
        cy.inputText(register.passwordBank, passwordBank);
        cy.inputText(register.confirmPassBank, confirmPassBank);
        cy.customeClick(register.regisButton);
        cy.assertVisibleAdContainsText(register.invalidCity ,errorCity);

    }

    registerWithoutUsingState(invalidFirstName, last_name, address, city, postalCode, phone, ssn, usernames, passwordBank, confirmPassBank, errorState) {
        cy.inputText(register.inputName, invalidFirstName);
        cy.inputText(register.inputCompleteName, last_name);
        cy.inputText(register.addressLoc ,address);
        cy.inputText(register.addressCity ,city);
        cy.inputText(register.addressZipCode, postalCode);
        cy.inputText(register.userNumber, phone);
        cy.inputText(register.ssn, ssn);
        cy.inputText(register.newUsername, usernames);
        cy.inputText(register.passwordBank, passwordBank);
        cy.inputText(register.confirmPassBank, confirmPassBank);
        cy.customeClick(register.regisButton);
        cy.assertVisibleAdContainsText(register.invalidState ,errorState);

    }

    registerWithoutUsingZipCode (invalidFirstName, last_name, address, city, street, phone, ssn, usernames, passwordBank, confirmPassBank, errorZipCode) {
        cy.inputText(register.inputName, invalidFirstName);
        cy.inputText(register.inputCompleteName, last_name);
        cy.inputText(register.addressLoc ,address);
        cy.inputText(register.addressCity ,city);
        cy.inputText(register.addressState, street);
        cy.inputText(register.userNumber, phone);
        cy.inputText(register.ssn, ssn);
        cy.inputText(register.newUsername, usernames);
        cy.inputText(register.passwordBank, passwordBank);
        cy.inputText(register.confirmPassBank, confirmPassBank);
        cy.customeClick(register.regisButton);
        cy.assertVisibleAdContainsText(register.invalidZipCode ,errorZipCode);

    }

    registerWithoutUsingSSN (invalidFirstName, last_name, address, city, street, postalCode, phone, usernames, passwordBank, confirmPassBank, errorSSN) {
        cy.inputText(register.inputName, invalidFirstName);
        cy.inputText(register.inputCompleteName, last_name);
        cy.inputText(register.addressLoc ,address);
        cy.inputText(register.addressCity ,city);
        cy.inputText(register.addressState, street);
        cy.inputText(register.addressZipCode, postalCode);
        cy.inputText(register.userNumber, phone);
        cy.inputText(register.newUsername, usernames);
        cy.inputText(register.passwordBank, passwordBank);
        cy.inputText(register.confirmPassBank, confirmPassBank);
        cy.customeClick(register.regisButton);
        cy.assertVisibleAdContainsText(register.invalidSSN ,errorSSN);

    }

    registerWithoutUsingUsername (invalidFirstName, last_name, address, city, street, postalCode, phone, ssn, passwordBank, confirmPassBank, errorUserName) {
        cy.inputText(register.inputName, invalidFirstName);
        cy.inputText(register.inputCompleteName, last_name);
        cy.inputText(register.addressLoc ,address);
        cy.inputText(register.addressCity ,city);
        cy.inputText(register.addressState, street);
        cy.inputText(register.addressZipCode, postalCode);
        cy.inputText(register.userNumber, phone);
        cy.inputText(register.ssn, ssn);
        cy.inputText(register.passwordBank, passwordBank);
        cy.inputText(register.confirmPassBank, confirmPassBank);
        cy.customeClick(register.regisButton);
        cy.assertVisibleAdContainsText(register.invalidUserName ,errorUserName);

    }

    registerWithoutUsingPass(invalidFirstName, last_name, address, city, street, postalCode, phone, ssn, usernames, confirmPassBank, errorPassword) {
        cy.inputText(register.inputName, invalidFirstName);
        cy.inputText(register.inputCompleteName, last_name);
        cy.inputText(register.addressLoc ,address);
        cy.inputText(register.addressCity ,city);
        cy.inputText(register.addressState, street);
        cy.inputText(register.addressZipCode, postalCode);
        cy.inputText(register.userNumber, phone);
        cy.inputText(register.ssn, ssn);
        cy.inputText(register.newUsername, usernames);
        cy.inputText(register.confirmPassBank, confirmPassBank);
        cy.customeClick(register.regisButton);
        cy.assertVisibleAdContainsText(register.invalidPassword ,errorPassword);

    }

    registerWithoutInputRecomPass (invalidFirstName, last_name, address, city, street, postalCode, phone, ssn, usernames, passwordBank, errorConfirmPassword) {
        cy.inputText(register.inputName, invalidFirstName);
        cy.inputText(register.inputCompleteName, last_name);
        cy.inputText(register.addressLoc ,address);
        cy.inputText(register.addressCity ,city);
        cy.inputText(register.addressState, street);
        cy.inputText(register.addressZipCode, postalCode);
        cy.inputText(register.userNumber, phone);
        cy.inputText(register.ssn, ssn);
        cy.inputText(register.newUsername, usernames);
        cy.inputText(register.passwordBank, passwordBank);
        cy.customeClick(register.regisButton);
        cy.assertVisibleAdContainsText(register.invalidReconfirmPass ,errorConfirmPassword);

    }

    registerWithPassNotMatch (invalidFirstName, last_name, address, city, street, postalCode, phone, ssn, usernames, passwordBank, paasNotMatch, errorPassNotMatch) {
        cy.inputText(register.inputName, invalidFirstName);
        cy.inputText(register.inputCompleteName, last_name);
        cy.inputText(register.addressLoc ,address);
        cy.inputText(register.addressCity ,city);
        cy.inputText(register.addressState, street);
        cy.inputText(register.addressZipCode, postalCode);
        cy.inputText(register.userNumber, phone);
        cy.inputText(register.ssn, ssn);
        cy.inputText(register.newUsername, usernames);
        cy.inputText(register.passwordBank, passwordBank);
        cy.inputText(register.confirmPassBank, paasNotMatch);
        cy.customeClick(register.regisButton);
        cy.assertVisibleAdContainsText(register.invalidReconfirmPass ,errorPassNotMatch)

    }





}

export default registers;