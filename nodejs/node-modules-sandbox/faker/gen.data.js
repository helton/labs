const faker = require('faker')

console.log(faker.name.firstName(), faker.name.lastName())
console.log(faker.helpers.createCard())
console.log(faker.internet.avatar())
console.log(faker.internet.email())