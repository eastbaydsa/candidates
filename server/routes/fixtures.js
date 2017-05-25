var express = require('express');
var router = express.Router();
var faker = require('faker');
var loremIpsum = require('lorem-ipsum');

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

/* GET fixtures. */
router.get('/', function(req, res, next) {
  res.json({
    localCouncil: {
      positions: [
        {
          title: 'Co-chair',
          slug: 'co-chair',
          description: loremIpsum({ count: randomBetween(1, 3), units: 'paragraphs' }),
          candidates: Array(3).fill().map(candidate)
        },
        {
          title: 'Vice Chair',
          slug: 'vice-chair',
          description: loremIpsum({ count: randomBetween(1, 3), units: 'paragraphs' }),
          candidates: Array(2).fill().map(candidate)
        },
        {
          title: 'Treasurer',
          slug: 'treasurer',
          description: loremIpsum({ count: randomBetween(1, 3), units: 'paragraphs' }),
          candidates: Array(2).fill().map(candidate)
        },
        {
          title: 'Secretary',
          slug: 'secretary',
          description: loremIpsum({ count: randomBetween(1, 3), units: 'paragraphs' }),
          candidates: Array(1).fill().map(candidate)
        },
        {
          title: 'Internal Organizer',
          slug: 'internal-organizer',
          description: loremIpsum({ count: randomBetween(1, 3), units: 'paragraphs' }),
          candidates: Array(7).fill().map(candidate)
        },
        {
          title: 'External Organizer',
          slug: 'external-organizer',
          description: loremIpsum({ count: randomBetween(1, 3), units: 'paragraphs' }),
          candidates: Array(4).fill().map(candidate)
        },
        {
          title: 'At-Large',
          slug: 'at-large',
          description: loremIpsum({ count: randomBetween(1, 3), units: 'paragraphs' }),
          candidates: Array(5).fill().map(candidate)
        }
      ]
    },
    nationalConvention: {
      candidates: Array(30).fill().map(candidate)
    }
  });
});

module.exports = router;
