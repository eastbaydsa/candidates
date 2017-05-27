const jsonfile = require('jsonfile');
const electionData = require('../data/election-data');
const fakeData = require('../data/fake-data');

const data = electionData({
  localCouncil: {
    "Co-chair": Array(3).fill().map(fakeData.candidate),
    "Vice Chair": Array(2).fill().map(fakeData.candidate),
    "Secretary": Array(1).fill().map(fakeData.candidate),
    "Treasurer": Array(2).fill().map(fakeData.candidate),
    "Internal Organizer": Array(7).fill().map(fakeData.candidate),
    "External Organizer": Array(4).fill().map(fakeData.candidate),
    "At Large Member of Local Council": Array(5).fill().map(fakeData.candidate),
  },
  nationalConvention: {
    candidates: Array(30).fill().map(fakeData.candidate)
  }
});

jsonfile.writeFileSync('./public/sample-data.json', data);

