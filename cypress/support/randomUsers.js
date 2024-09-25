const { faker } = require('@faker-js/faker');

export function createRandomUser () {
    return {
  
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    street: faker.location.street(),
    postalCode: faker.location.zipCode(),
    phone: faker.phone.number({ style: 'national' }),
    ssn: faker.string.alpha({ length: { min: 5, max: 10 } }),
    usernames: faker.internet.userName (),
    invalidFirstName: faker.string.alpha(1),
    idNumber: faker.string.numeric(16),
    companyName: faker.company.buzzNoun(),
    humanFormat: faker.string.numeric(11),
    email: faker.internet.exampleEmail()
    }

    


}