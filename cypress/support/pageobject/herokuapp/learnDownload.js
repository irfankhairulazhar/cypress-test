import { herokuapp } from "../../selector";

class hero {

    openHerokupAppLandingPage(herokuapp) {
        cy.visit(herokuapp);
    }

    downloadFilePng() {

        cy.customeClick(herokuapp.fileDownload);
        cy.customeClick(herokuapp.karateLogo);
        cy.verifyDownload('karate-logo.png');

    }

    downloadTxtFile (selenideIntro) {
        cy.customeClick(herokuapp.fileDownload);
        cy.customeClick(herokuapp.fileTxt);
        cy.verifyDownloadAndContent('selenide-Intro.txt', selenideIntro);
        
    }

    downloadDocFile () {
        cy.customeClick(herokuapp.fileDownload);
        cy.customeClick(herokuapp.resume);
        cy.readFile('cypress\\downloads\\8th class physics.docx').should('eq', 'INSTRUCTIONS')

        // cy.readDocx('cypress\\downloads\\Priya_Resume.docx').then((content) => {
        //     // Step 5: Assert the expected content in the file
        //     expect(content).to.include('PRIYA.K'); // Adjust this to your expected content
        // });
        cy.verifyDownloadAndContent('Priya_Resume.docx', 'PRIYA.K');
    }


    downloadPdfFile () {
        cy.customeClick(herokuapp.fileDownload);
        cy.customeClick(herokuapp.pdfFile);
        cy.verifyDownload('dummy.pdf');
        const pdfFilePath = 'cypress\\downloads\\dummy.pdf';  // Specify your PDF file path here
    
        cy.task('parsePdf', { filePath: pdfFilePath }).then((text) => {
            // Assert the text extracted from the PDF
            expect(text).to.include('Dummy PDF file');

        });

    }



}

export default hero;