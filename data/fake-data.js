const faker = require('faker');
const loremIpsum = require('lorem-ipsum');
const { candidateSlug } = require('./election-data');

function randomBetween(start, end) {
  return Math.floor(Math.random() * end) + start;
}

function fakeName() {
  return faker.fake("{{name.firstName}} {{name.lastName}}");
}

function candidate(position) {
  const name = fakeName();
  return {
    name: name,
    slug: candidateSlug(name),
    imageUrl: faker.image.avatar(),
    involvement: loremIpsum({ count: randomBetween(1, 3), units: 'paragraphs' }),
    qualifications: loremIpsum({ count: randomBetween(1, 2), units: 'paragraphs' }),
    goals: loremIpsum({ count: randomBetween(2, 3), units: 'paragraphs' }),
    nominations: Array(randomBetween(1, 5)).fill().map(fakeName),
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