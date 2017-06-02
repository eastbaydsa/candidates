const jsonfile = require('jsonfile');
const { serialize } = require('../data/election-data');
const fakeData = require('../data/fake-data');

const data = serialize({
  localCouncil: {
    "Co-chair": Array(3).fill().map(() => fakeData.candidate('Co-Chair')),
    "Vice Chair": Array(2).fill().map(() => fakeData.candidate('Vice Chair')),
    "Secretary": Array(1).fill().map(() => fakeData.candidate('Secretary')),
    "Treasurer": Array(2).fill().map(() => fakeData.candidate('Treasurer')),
    "Internal Organizer": Array(7).fill().map(() => fakeData.candidate('Internal Organizer')),
    "External Organizer": Array(4).fill().map(() => fakeData.candidate('External Organizer')),
    "At Large Member of Local Council": Array(5).fill().map(() => fakeData.candidate('At Large Member of Local Council')),
  },
  nationalConvention: {
    candidates: Array(30).fill().map(() => fakeData.candidate('National Convention'))
  }
});

jsonfile.writeFileSync('./src/data/sample-data.json', data);

