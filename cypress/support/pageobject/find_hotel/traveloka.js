import { searchHotel } from "../../selector";
class find_hotel
    
{
    openTaveloka (baseurl)
    {
        cy.viewport(1366, 768);
        cy.visit(baseurl);
        cy.url().then((url) => {
            expect(url).to.contain(baseurl);
        })
    }
    clickHotelMenu ()
    {
        cy.customeClick(searchHotel.hotelMenu)
        cy.waitInSecounds(3)
    }

    inputHotelLocation(hotelLocation)
    {
        cy.customeClick(searchHotel.sectionHotel)
        cy.inputText(searchHotel.inputHotel, hotelLocation)
        cy.waitInSecounds(1)
        cy.customeClick(searchHotel.selectHotelLoc)
    }

    clickSearchButton ()
    {
        cy.customeClick(searchHotel.searchButton)
        cy.waitInSecounds(2)
       

    }

    scrollToExpectedHotel ()
    {
        cy.customeClick(searchHotel.scrollHotel)
        cy.scrollToElement(searchHotel.scrollHotel)

    }

    verifyExpectedHotel(expectedHotel)
    {
        cy.assertVisibleAdContainsText(searchHotel.seeExpectedHotel, expectedHotel)
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
        cy.assertVisibleAdContainsText(searchHotel.locHotelLocation, expectedHotelLocations)
    }

}

export default find_hotel;
