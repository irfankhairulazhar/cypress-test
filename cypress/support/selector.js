
export const searchHotel = {
    hotelMenu: "(//div[.='Hotels'])[1]",
    inputHotel: "[placeholder='City, hotel, place to go']",
    selectHotelLoc: "(//span[1]/span[.='Dago'])[1]",
    sectionHotel: "//input[@placeholder='City, hotel, place to go']",
    searchButton: "(//div[contains(text(),'Search Hotels')])[2]",
    scrollHotel: "(//h3[contains(text(),'The Jayakarta Suites Bandung')])[1]",
    seeExpectedHotel: "(//h3[contains(text(),'The Jayakarta Suites Bandung')])[1]",
    hotelPriceSection: "[data-index='3'] div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(3) > div:nth-of-type(1)",
    sectionToSetMaxPrice: "[data-testid='tvat-priceUpperBound']",
    listHotelBandung: "[data-testid='total-property']",
    displayTotalProperties: "[data-testid='total-property']",
    locHotelLocation: "(//div[contains(text(),'Dago Atas, Dago')])[3]"

}


export const logins = {
        username: '#user-name',
        password: '#password',
        loginButton: '#login-button'
    
}


export const checkout = {
    addItem : "div:nth-of-type(6) .btn_primary",
    checkoutMenu: "path",
    itemName: ".inventory_item_name",
    itemPrice: ".inventory_item_price",
    checkoutButton: ".btn_action",
    inputFirstName: "#first-name",
    inputLastName: "#last-name",
    inputPostalCode: "#postal-code",
    continueButton: ".btn_primary",
    totalIteams: ".summary_subtotal_label",
    totalTaxs: ".summary_tax_label",
    totalTobePaids: ".summary_total_label"

}


export const register = {
    inputName: "[name='customer.firstName']",
    inputCompleteName: "[name='customer.lastName']",
    addressLoc: "[name='customer.address.street']",
    addressCity: "[name='customer.address.city']",
    addressState: "[name='customer.address.state']",
    addressZipCode: "[name='customer.address.zipCode']",
    userNumber: "[name='customer.phoneNumber']",
    ssn: "[name='customer.ssn']",
    newUsername: "[name='customer.username']",
    passwordBank: "[name='customer.password']",
    confirmPassBank: "#repeatedPassword",
    regisButton: "//input[@value='Register']",
    successRegister: "#rightPanel > p",
    invalidFirstName: "//span[@id='customer.firstName.errors']",
    invalidLastname: "//span[@id='customer.lastName.errors']",
    invalidAddress: "//span[@id='customer.address.street.errors']",
    invalidCity: "//span[@id='customer.address.city.errors']",
    invalidState: "[id='customer.address.state.errors']",
    invalidZipCode: "[id='customer.address.zipCode.errors']",
    invalidSSN: "[id='customer.ssn.errors']",
    invalidUserName: "[id='customer.username.errors']",
    invalidPassword: "[id='customer.password.errors']",
    invalidReconfirmPass: "[id='repeatedPassword.errors']"

}

export const logique = {
    firtsName: "[placeholder='Nama Depan']",
    lastName: "[placeholder='Nama Belakang']",
    pob: "[placeholder='Tempat Lahir']",
    datePickerColumn: "//div[@class='container max-w-3xl mx-auto']//div[@class='mb-5']//input[@class='dp__pointer dp__input_readonly dp__input dp__input_icon_pad dp__input_reg  undefined']",
    dateChooses: "//div[@class='dp__calendar_wrap']//div[@class='dp__calendar_item']/div",
    selectDate: "//span[@class='dp__action dp__select']",
    userIdNumber: "[placeholder='Nomor KTP']",
    uploadEktp: "[type='file']",
    columnEktp: "//span[@class='break-all pr-2 text-black']",
    columnOccpation: "[aria-placeholder='Pilih Pekerjaan']",
    optionOccupation: "//li[@id='multiselect-option-IBU RUMAH TANGGA']",
    companyNames: "[placeholder='Nama Perusahaan']",
    companyAddress: ".container div:nth-of-type(3) .p-3",
    companyNumber: "[placeholder='Nomor Telepon Perusahaan']",
    hasNpwp: "//button[.='Ada NPWP']",
    inputNpwp: "[placeholder='Nomor NPWP']",
    ektpDatePickerColumn: ".mb-2 [placeholder='DD/MM/YYYY']",
    columnVehicle: "[aria-placeholder='Jenis Kendaraan']",
    vehicleOption: "//li[@id='multiselect-option-bike and car']",
    findVehicle: "[aria-placeholder='Pilih Kendaraan']",
    purposes: "[aria-placeholder='Pilih Tujuan']",
    provinces: "[aria-placeholder='Pilih Provinsi']",
    userCity: "[aria-placeholder='Pilih Kota']",
    userAddress: "//div[@class='container max-w-3xl mx-auto']//div[1]/div[@class='mb-5 min-h-[148px]']/div[@class='relative']",
    userEmail: "[name='email']",
    userNumber: "[placeholder='Nomor Telepon']",
    userPass: "[name='new_password']",
    userRecomPass: "[name='confirm_password']"
}


export const herokuapp = {
    fileDownload: "[href='/download']",
    karateLogo: "[href='download/karate-logo.png']",
    fileTxt: "[href='download/selenide-intro.txt']",
    resume: "[href='download/8th class physics.docx']",
    pdfFile: "[href='download/dummy.pdf']"


}