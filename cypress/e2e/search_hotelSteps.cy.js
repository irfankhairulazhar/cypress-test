import find_hotel from "../pageobject/search_hotelPO.js";

describe('My First Test', () => {

const ln=new find_hotel();

let userdata
  beforeEach(    ()=> {
    cy.fixture('testdata').then((data)=> {
      userdata=data
  })
})

    it('search without filter price and success', () => {

      ln.openTaveloka(userdata.baseurl)
      ln.clickHotelMenu()
      ln.inputHotelLocation(userdata.hotelLocation)
      ln.clickSearchButton()
      ln.displayListHotelUnderBandung(userdata.expectedListHotel)
      ln.scrollToExpectedHotel()
      ln.verifyExpectedHotel(userdata.expectedHotel)
      ln.expectedHotelLocation(userdata.expectedHotelLocations)
      ln.verifyPriceLessThan1Mio()

  })

  it('filter using set max price but in end display traveloka captcha', () => {

      ln.openTaveloka(userdata.baseurl)
      ln.clickHotelMenu()
      ln.inputHotelLocation(userdata.hotelLocation)
      ln.clickSearchButton()
      ln.deletedMaxPriceTo1Mio()
      ln.scrollToExpectedHotel()
      ln.verifyExpectedHotel(userdata.expectedHotel)
      ln.expectedHotelLocation(userdata.expectedHotelLocations)
      ln.verifyPriceLessThan1Mio()



 })

})