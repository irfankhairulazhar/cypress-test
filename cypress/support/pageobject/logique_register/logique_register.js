import { logique } from "../../selector";

class register_logique 


{
    openLogicResPage (logique, username, password) {
        cy.visitWithAuth(logique, username, password)

    }


    registerNewUcAccount (first_name, last_name, city,idNumber,companyName, address, humanFormat, opVehicle, purpose, province, cities, email, pass, rePass) {
        cy.inputText(logique.firtsName, first_name);
        cy.customeClick(logique.columnOccpation);
        cy.customeClick(logique.optionOccupation);
        cy.inputText(logique.lastName, last_name);
        cy.inputText(logique.companyNames, companyName);
        cy.inputText(logique.companyNumber ,humanFormat);
        cy.inputText(logique.pob, city);
        cy.inputText(logique.companyAddress, address);
        cy.selectNextDays(logique.datePickerColumn, logique.dateChooses,logique.selectDate);
        cy.inputText(logique.userIdNumber, idNumber);
        const fileName = 'forLearn.jpg';
        cy.forceUploadFile(fileName, logique.uploadEktp);
        cy.assertVisibleAdContainsText(logique.columnEktp, fileName);
        cy.customeClick(logique.hasNpwp);
        cy.inputText(logique.inputNpwp, idNumber);
        cy.selectNextDays(logique.ektpDatePickerColumn,logique.dateChooses,logique.selectDate);
        cy.customeClick(logique.columnVehicle);
        cy.customeClick(logique.vehicleOption);
        cy.inputAndSelect(logique.findVehicle, opVehicle);
        cy.inputAndSelect(logique.purposes, purpose);
        cy.inputAndSelect(logique.provinces, province);
        cy.inputAndSelect(logique.userCity, cities);
        cy.inputText(logique.userAddress, address);
        cy.inputText(logique.userEmail, email);
        cy.inputText(logique.userNumber, humanFormat);
        cy.inputText(logique.userPass, pass);
        cy.inputText(logique.userRecomPass, rePass);

        
       



        
        

    }
}

export default register_logique;