import hero from "../../support/pageobject/herokuapp/learnDownload"

const hr = new hero;



describe ('learn download and upload', () => {
    
   
let dataHr;
beforeEach( ()=> {
    cy.fixture('testdata.json').then((data)=>{
        dataHr = data.heroapp;

    });

});

    it.only('download png file', ()=> {
        hr.openHerokupAppLandingPage(Cypress.env('herokuapp'));
        hr.downloadFilePng();

    })

    it.only('download txt file', () => {
        hr.openHerokupAppLandingPage(Cypress.env('herokuapp'));
        hr.downloadTxtFile(dataHr.selenideIntro);
    })

    it('download doc file', () => {
        hr.openHerokupAppLandingPage(Cypress.env('herokuapp'));
        hr.downloadDocFile();
    })

    it('download pdf file', ()=> {
        hr.openHerokupAppLandingPage(Cypress.env('herokuapp'));
        hr.downloadPdfFile();
    })

})