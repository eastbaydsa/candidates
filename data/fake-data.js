const faker = require('faker');
const loremIpsum = require('lorem-ipsum');

function randomBetween(start, end) {
  return Math.floor(Math.random() * end) + start; 
}

function fakeName() {
  return faker.fake("{{name.firstName}} {{name.lastName}}");
}

function candidate() {
  return {
    name: fakeName(),
    imageUrl: faker.image.avatar(),
    involvement: loremIpsum({ count: randomBetween(1, 3), units: 'paragraphs' }),
    qualifications: loremIpsum({ count: randomBetween(1, 2), units: 'paragraphs' }),
    goals: loremIpsum({ count: randomBetween(2, 3), units: 'paragraphs' }),
    nominiation1Name: fakeName(),
    nominiation2Name: fakeName(),
    nominiation3Name: fakeName(),
    nominiation4Name: fakeName(),
    nominiation5Name: fakeName()
  }
}

function image() {
  return faker.image.avatar()
}

module.exports = {
  name: fakeName,
  candidate: candidate,
  image: image
}