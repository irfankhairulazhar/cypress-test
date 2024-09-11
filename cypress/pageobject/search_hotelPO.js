import { searchHotel } from "../support/selector";
class find_hotel
    
{
    openTaveloka (baseurl)
    {
        cy.viewport(1366, 768);
        cy.visit(baseurl)
    }
    clickHotelMenu ()
    {
        cy.clickXpath(searchHotel.hotelMenu)
        cy.waitInSecounds(3)
    }

    inputHotelLocation(hotelLocation)
    {
        cy.clickXpath(searchHotel.sectionHotel)
        cy.inputText(searchHotel.inputHotel, hotelLocation)
        cy.waitInSecounds(1)
        cy.clickXpath(searchHotel.selectHotelLoc)
    }

    clickSearchButton ()
    {
        cy.clickXpath(searchHotel.searchButton)
        cy.waitInSecounds(2)
       

    }

    scrollToExpectedHotel ()
    {
        cy.xpath(searchHotel.scrollHotel)
        cy.scrollToXpath(searchHotel.scrollHotel)

    }

    verifyExpectedHotel(expectedHotel)
    {
        cy.assertVisibleAdContainsXpath(searchHotel.seeExpectedHotel, expectedHotel)
    }

    verifyPriceLessThan1Mio()
    {
       
        cy.assertValueLessThan(searchHotel.hotelPriceSection, 1000000)
           
    }

    deletedMaxPriceTo1Mio(amountToSetMaxPrice, displayExpectedMaxPrice)
    {
        cy.waitInSecounds(2)
        cy.cleanText(searchHotel.sectionToSetMaxPrice)
        cy.inputText(searchHotel.sectionToSetMaxPrice, amountToSetMaxPrice)
        cy.assertVisibleAdContainsVAlue(searchHotel.sectionToSetMaxPrice, displayExpectedMaxPrice)

    }

    displayListHotelUnderBandung(expectedListHotel)
    {
        cy.assertVisibleAdContainsText(searchHotel.listHotelBandung, expectedListHotel)
    }

    displayListHotelUnderBandungAfterFlterPrice(expectedListHotelAfterFilterPrice)
    {
        cy.assertVisibleAdContainsText(searchHotel.displayTotalProperties, expectedListHotelAfterFilterPrice)
    }

    expectedHotelLocation (expectedHotelLocations)
    {
        cy.assertVisibleAdContainsXpath(searchHotel.locHotelLocation, expectedHotelLocations)
    }

}

export default find_hotel;
