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
                slug: candidateSlug(item["firstAndLastName"]),
                imageUrl: undefined,
                involvement: item["pleaseDescribeYourInvolvementInEastBayDsa."],
                qualifications: item["whyAreYouQualifiedForThisSpecificRole?"],
                goals: item["whatDoYouHopeToAccomplishForTheChapterIfElectedToThisRole?"],
		nominations: nominations,
            });
        }
    }

    return candidates;
}

function delegatesFromGS(delegateData, delegateNominationData) {
    var delegates = [];

    for(var i in delegateData) {
        var item = delegateData[i];
	    var nominations = [];
	    for(var j in delegateNominationData) {
		var nomination = delegateNominationData[j];
		if(item["what'sYourName?"] == nomination["whoAreYouNominating?"]) {
		    nominations.push({
			name: nomination["yourName"],
		    });

	        }
	    }
            delegates.push({
                name: item["what'sYourName?"],
                slug: candidateSlug(item["what'sYourName?"]),
                imageUrl: fakeData.image(),
                reason: item["whyDoYouWantToRepresentYourComradesAtTheDsaNationalConvention?"],
		nominations: nominations,
            });
    }

    return delegates;
}

gsjson({
  spreadsheetId: process.env.LOCAL_COUNCIL_ELECTION_SHEET_ID
}).then(function(gsCandidateJson) {
  // I'm sorry
  // !!! TODO: make this elegant
  gsjson({
    spreadsheetId: process.env.NOMINATIONS_SHEET_ID
  }).then(function(gsNominationsJson) {
	gsjson({
	spreadsheetId: process.env.NATIONAL_CONVENTION_ELECTION_SHEET_ID
	}).then(function(gsDelegatesJson) {
		gsjson({
		    spreadsheetId: process.env.CONVENTION_NOMINATIONS_SHEET_ID
		}).then(function(gsDelegateNominationsJson) {
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
					candidates: delegatesFromGS(gsDelegatesJson, gsDelegateNominationsJson),
				}
			});

		jsonfile.writeFileSync('./src/data/election-data.json', data);
		});
	});
  });
});
