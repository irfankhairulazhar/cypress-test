import find_hotel from "../pageobject/traveloka";


describe('My First Test', () => {

const ln=new find_hotel();

let userdata
  beforeEach(    ()=> {
    cy.fixture('testdata').then((data)=> {
      userdata=data
  })
})

    it('search without filter price and success', () => {
      
      ln.openTaveloka(Cypress.env('baseurl'))
      ln.clickHotelMenu()
      ln.inputHotelLocation(userdata.traveloka.hotelLocation)
      ln.clickSearchButton()
      ln.displayListHotelUnderBandung(userdata.traveloka.expectedListHotel)
      ln.scrollToExpectedHotel()
      ln.verifyExpectedHotel(userdata.traveloka.expectedHotel)
      ln.expectedHotelLocation(userdata.traveloka.expectedHotelLocations)
      ln.verifyPriceLessThan1Mio()
      

  })

  it('filter using set max price but in end display traveloka captcha', () => {

      ln.openTaveloka(Cypress.env('baseurl'))
      ln.clickHotelMenu()
      ln.inputHotelLocation(userdata.traveloka.hotelLocation)
      ln.clickSearchButton()
      ln.deletedMaxPriceTo1Mio(userdata.traveloka.amountToSetMaxPrice, userdata.traveloka.displayExpectedMaxPrice)
      ln.scrollToExpectedHotel()
      ln.verifyExpectedHotel(userdata.traveloka.expectedHotel)
      ln.expectedHotelLocation(userdata.traveloka.expectedHotelLocations)
      ln.verifyPriceLessThan1Mio()



 })

})