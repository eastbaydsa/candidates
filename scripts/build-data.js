const jsonfile = require('jsonfile');
var gsjson = require('google-spreadsheet-to-json');
const { serialize, candidateSlug } = require('../data/election-data');
const fakeData = require('../data/fake-data');

function candidatesFromGS(position, candidatesData, nominationData) {
  return candidatesData
    .filter(c => c["whichPositionAreYouRunningFor?"] === position)
    .map((item) => {
      const nominations = nominationData
        .filter(n => n["whoAreYouNominating?YouMayMakeOneNominationPerFormSubmission."] === item["firstAndLastName"])
        .map((nomination) => {
          return {
            name: nomination["firstAndLastName"],
            comment: nomination["optional:WhyDoYouThinkYourComradeIsRightForThisRole?"]
          }
        });

      return {
        name: item["firstAndLastName"],
        slug: candidateSlug(item["firstAndLastName"]),
        imageUrl: undefined,
        involvement: item["pleaseDescribeYourInvolvementInEastBayDsa."],
        qualifications: item["whyAreYouQualifiedForThisSpecificRole?"],
        goals: item["whatDoYouHopeToAccomplishForTheChapterIfElectedToThisRole?"],
        nominations: nominations,
      }
    })
}

function delegatesFromGS(delegatesData, delegateNominationsData) {
  return delegatesData
    .map((delegate) => {
      const nominations = delegateNominationsData
        .filter(n => n["whoAreYouNominating?"] === delegate["what'sYourName?"])
        .map((nomination) => {
          return {
            name: nomination["yourName"],
          }
        });

      return {
        name: delegate["what'sYourName?"],
        reason: delegate["whyDoYouWantToRepresentYourComradesAtTheDsaNationalConvention?"],
        nominations: nominations,
      }
    })
}

async function getElectionJson() {
  try {
    const candidates = await gsjson({ spreadsheetId: process.env.LOCAL_COUNCIL_ELECTION_SHEET_ID });
    const candidateNominations = await gsjson({ spreadsheetId: process.env.NOMINATIONS_SHEET_ID });
    const delegates = await gsjson({ spreadsheetId: process.env.NATIONAL_CONVENTION_ELECTION_SHEET_ID });
    const delegateNominations = await gsjson({ spreadsheetId: process.env.CONVENTION_NOMINATIONS_SHEET_ID });

    return { candidates, candidateNominations, delegates, delegateNominations };
  } catch(e) {
    console.log(e);
  }
}

getElectionJson().then((election) => {
	jsonfile.writeFileSync('./src/data/election-data.json', serialize({
		localCouncil: {
      "Co-chair": candidatesFromGS("Co-chair", election.candidates, election.candidateNominations),
      "Vice Chair": candidatesFromGS("Vice Chair", election.candidates, election.candidateNominations),
      "Secretary": candidatesFromGS("Secretary", election.candidates, election.candidateNominations),
      "Treasurer": candidatesFromGS("Treasurer", election.candidates, election.candidateNominations),
      "Internal Organizer": candidatesFromGS("Internal Organizer", election.candidates, election.candidateNominations),
      "External Organizer": candidatesFromGS("External Organizer", election.candidates, election.candidateNominations),
      "At Large Member of Local Council": candidatesFromGS("At Large Member of Local Council", election.candidates, election.candidateNominations),
		},
		nationalConvention: {
			candidates: delegatesFromGS(election.delegates, election.delegateNominations),
		}
	}));
}).catch(e => { console.log(e) });
