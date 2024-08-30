class find_hotel
    
{
    openTaveloka (baseurl)
    {
        cy.viewport(1366, 768);
        cy.visit(baseurl)
    }
    clickHotelMenu ()
    {
        cy.xpath("(//div[.='Hotels'])[1]").click({ force: true })
        cy.wait(2000)
    }

    inputHotelLocation(hotelLocation)
    {
        cy.xpath("//input[@placeholder='City, hotel, place to go']").click({ force: true })
        cy.get("[placeholder='City, hotel, place to go']").type(hotelLocation)
        cy.wait(1000)
        cy.xpath("(//span[1]/span[.='Dago'])[1]").click()
    }

    clickSearchButton ()
    {
        cy.xpath("(//div[contains(text(),'Search Hotels')])[2]").click()
        cy.wait(2000)
       

    }

    scrollToExpectedHotel ()
    {
        cy.xpath("(//h3[contains(text(),'The Jayakarta Suites Bandung')])[1]").scrollIntoView()
    }

    verifyExpectedHotel(expectedHotel)
    {
      cy.xpath("(//h3[contains(text(),'The Jayakarta Suites Bandung')])[1]")
      .should('be.visible')
      .should('contain.text', expectedHotel)
    }

    verifyPriceLessThan1Mio()
    {
        cy.get("[data-index='3'] div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1)")
        .invoke('text')
        .then((priceText) => {
          const cleanedPriceText = priceText.replace(/[^\d.-]/g, '')
          const numericPrice = parseFloat(cleanedPriceText);
          expect(numericPrice).to.be.lessThan(1000000)
      
      
        })
      
    }

    deletedMaxPriceTo1Mio()
    {
        cy.wait(2000)
        cy.get("[data-testid='tvat-priceUpperBound']").clear({ force: true })
        cy.get("[data-testid='tvat-priceUpperBound']").type('1000000')
        cy.get("[data-testid='tvat-priceUpperBound']").should('have.value','1.000.000')

    }

    displayListHotelUnderBandung(expectedListHotel)
    {
        cy.get("[data-testid='total-property']")
        .should('be.visible')
        .should('contain.text', expectedListHotel)
    }

    displayListHotelUnderBandungAfterFlterPrice(expectedListHotelAfterFilterPrice)
    {
        cy.get("[data-testid='total-property']")
        .should('be.visible')
        .should('contain.text', expectedListHotelAfterFilterPrice)
    }

    expectedHotelLocation (expectedHotelLocations)
    {
        cy.xpath("(//div[contains(text(),'Dago Atas, Dago')])[3]")
        .should('be.visible')
        .should('contain.text', expectedHotelLocations)
    }

}

export default find_hotel;
