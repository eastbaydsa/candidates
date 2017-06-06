const jsonfile = require('jsonfile');
var gsjson = require('google-spreadsheet-to-json');
const { serialize, candidateSlug } = require('../data/election-data');
const fakeData = require('../data/fake-data');

function candidatesFromGS(position, candidateData, nominationData) {
    var candidates = [];

    for(var i in candidateData) {
        var item = candidateData[i];
        if (item["whichPositionAreYouRunningFor?"] == position) {
	    var nominations = [];
	    for(var j in nominationData) {
		var nomination = nominationData[j];
		if(item["firstAndLastName"] == nomination["whoAreYouNominating?YouMayMakeOneNominationPerFormSubmission."]) {
		    nominations.push({
			name: nomination["firstAndLastName"],
			comment: nomination["optional:WhyDoYouThinkYourComradeIsRightForThisRole?"]
		    });

	        }
	    }
            candidates.push({
                name: item["firstAndLastName"],
                slug: candidateSlug(position, item["firstAndLastName"]),
                imageUrl: fakeData.image(),
                involvement: item["pleaseDescribeYourInvolvementInEastBayDsa."],
                qualifications: item["whyAreYouQualifiedForThisSpecificRole?"],
                goals: item["whatDoYouHopeToAccomplishForTheChapterIfElectedToThisRole?"],
		nominations: nominations,
		/*
                nominiation1Name: fakeData.name(),
                nominiation2Name: fakeData.name(),
                nominiation3Name: fakeData.name(),
                nominiation4Name: fakeData.name(),
                nominiation5Name: fakeData.name()
		*/
            });
        }
    }

    return candidates;
}

gsjson({
  spreadsheetId: process.env.LOCAL_COUNCIL_ELECTION_SHEET_ID
}).then(function(gsCandidateJson) {
  //console.log(gsCandidateJson.length);
  //console.log(gsCandidateJson);
  // I'm sorry
  // !!! TODO: make this elegant
  gsjson({
    spreadsheetId: process.env.NOMINATIONS_SHEET_ID
    }).then(function(gsNominationsJson) {
	//console.log(gsNominationsJson);
        const data = serialize({
            localCouncil: {
              "Co-chair": candidatesFromGS("Co-chair", gsCandidateJson, gsNominationsJson ),
	      "Vice Chair": candidatesFromGS("Vice Chair", gsCandidateJson, gsNominationsJson),
	      "Secretary": candidatesFromGS("Secretary", gsCandidateJson, gsNominationsJson),
	      "Treasurer": candidatesFromGS("Treasurer", gsCandidateJson, gsNominationsJson),
	      "Internal Organizer": candidatesFromGS("Internal Organizer", gsCandidateJson, gsNominationsJson),
	      "External Organizer": candidatesFromGS("External Organizer", gsCandidateJson, gsNominationsJson),
	      "At Large Member of Local Council": candidatesFromGS("At Large Member of Local Council", gsCandidateJson, gsNominationsJson),
        },
        nationalConvention: {
          candidates: Array(30).fill().map(fakeData.candidate)
        }
      });
	//console.log(data);
	jsonfile.writeFileSync('./src/data/election-data.json', data);
    });
});
