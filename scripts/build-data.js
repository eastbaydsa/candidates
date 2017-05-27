const jsonfile = require('jsonfile');
var gsjson = require('google-spreadsheet-to-json');
const { serialize, candidateSlug } = require('../data/election-data');
const fakeData = require('../data/fake-data');

function candidatesFromGS(position, GSdata) {
    var candidates = [];

    for(var i in GSdata) {
        var item = GSdata[i];
        if (item["whichPositionAreYouRunningFor?"] == position) {
            candidates.push({
                name: item["firstAndLastName"],
                slug: candidateSlug(position, item["firstAndLastName"]),
                imageUrl: fakeData.image(),
                involvement: item["pleaseDescribeYourInvolvementInEastBayDsa."],
                qualifications: item["whyAreYouQualifiedForThisSpecificRole?"],
                goals: item["whatDoYouHopeToAccomplishForTheChapterIfElectedToThisRole?"],
                nominiation1Name: fakeData.name(),
                nominiation2Name: fakeData.name(),
                nominiation3Name: fakeData.name(),
                nominiation4Name: fakeData.name(),
                nominiation5Name: fakeData.name()
            });
        }
    }

    return candidates;
}

gsjson({
  spreadsheetId: process.env.LOCAL_COUNCIL_ELECTION_SHEET_ID
}).then(function(gsCandidateJson) {
  console.log(gsCandidateJson.length);
  console.log(gsCandidateJson);

  const data = serialize({
    localCouncil: {
      "Co-chair": candidatesFromGS("Co-chair", gsCandidateJson),
      "Vice Chair": candidatesFromGS("Vice Chair", gsCandidateJson),
      "Secretary": candidatesFromGS("Secretary", gsCandidateJson),
      "Treasurer": candidatesFromGS("Treasurer", gsCandidateJson),
      "Internal Organizer": candidatesFromGS("Internal Organizer", gsCandidateJson),
      "External Organizer": candidatesFromGS("External Organizer", gsCandidateJson),
      "At Large Member of Local Council": candidatesFromGS("At Large Member of Local Council", gsCandidateJson),
    },
    nationalConvention: {
      candidates: Array(30).fill().map(fakeData.candidate)
    }
  });

  jsonfile.writeFileSync('./public/election-data.json', data);
});
