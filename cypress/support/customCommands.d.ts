declare namespace Cypress {
    interface Chainable<Subject> {
        cleanText(): Chainable<any>
        customeClick(): Chainable<any>
        clickXpath(): Chainable<any>
        inputText(): Chainable<any>
        scrollToElement(): Chainable<any>
        scrollToXpath(): Chainable<any>
        assertVisibleAdContainsText(): Chainable<any>
        assertVisibleAdContainsXpath(): Chainable<any>
        waitInSecounds(): Chainable<any>
        assertValueLessThan(): Chainable<any>
        assertVisibleAdContainsVAlue(): Chainable<any>
        resultPriceCalculation(): Chainable<any>
        verifyTotalPrice(): Chainable<any>
        getElement(): Chainable <any>
        visitWithAuth(): Chainable <any>
        selectNextDays(): Chainable<any>
        forceUploadFile(): Chainable<any>
        inputAndSelect(): Chainable<any>
        verifyDownloadAndContent(): Chainable<any>

       
  }
}