const jsonfile = require('jsonfile');
var faker = require('faker');
var loremIpsum = require('lorem-ipsum');
var gsjson = require('google-spreadsheet-to-json');

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

function candidatesFromGS(position, GSdata) {
    var candidates = [];
    
    for(var i in GSdata) {    
        var item = GSdata[i];   
        if (item["whichPositionAreYouRunningFor?"] == position) {
            candidates.push({ 
                name: item["firstAndLastName"],
                imageUrl: faker.image.avatar(),
                involvement: item["pleaseDescribeYourInvolvementInEastBayDsa."],
                qualifications: item["whyAreYouQualifiedForThisSpecificRole?"],
                goals: item["whatDoYouHopeToAccomplishForTheChapterIfElectedToThisRole?"],
                nominiation1Name: fakeName(),
                nominiation2Name: fakeName(),
                nominiation3Name: fakeName(),
                nominiation4Name: fakeName(),
                nominiation5Name: fakeName()

            });
        }
    }

    return candidates
}

var gsCandidateJson;
// TODO: use auth? I made the sheet public for now
gsjson({
        spreadsheetId: '1F5absQLBTy9rrGAVJW7zIaifXAivqx7slD_0I1LRDqg',
})
.then(function(result) {
        console.log(result.length);
        console.log(result);
        gsCandidateJson = result;

  const data = {
  localCouncil: {
    positions: [
      {
        title: 'Co-chair',
        slug: 'co-chair',
        description: `
<p>The Co-Chairs shall be the official public spokespersons for the Local and will initiate such actions and policies as the Local’s general welfare may demand. The Co-Chairs shall organize and preside over all official meetings of the organization and the Local Council. The Co-Chairs shall maintain consistent communication with all committee leaders and facilitate collaboration and coordination between them. Additionally:</p>
<ul>
  <li>a. The Co-Chairs will also act as, or appoint, the official representatives of the Local to the National Organization and to other DSA Locals. This does not apply during official business at the National DSA Convention, when Local Delegates may act independently on behalf of the Local’s membership.</li>
  <li>b. The Co-Chairs serve as executive officers of the Local, and they are listed on financial accounts along with the Treasurer.</li>
  <li>c. At least one Co-Chair must not identify as both White and Cis-Male.</li>
</ul>
        `,
        candidates: candidatesFromGS("Co-chair", gsCandidateJson) 
      },
      {
        title: 'Vice Chair',
        slug: 'vice-chair',
        description: `
<p>The Vice Chair is responsible for assisting the Co-Chairs with all of their duties. If both Co-Chairs are unable to perform their duties, the Vice Chair shall perform all duties and assume all responsibilities of the Co-Chairs until such a time as one or both Co-Chairs are able to resume their posts.</p>
        `,
        candidates: candidatesFromGS("Vice Chair", gsCandidateJson) 
      },
      {
        title: 'Secretary',
        slug: 'secretary',
        description: `
<p>The Secretary is responsible for taking minutes of all General Membership and Local Council Meetings, and shall be responsible for publishing these minutes, as well as resolutions, reports, and other official records of the Local. The Secretary may appoint, but must oversee, a temporary proxy minutes-taker for any meeting. That proxy may not vote on behalf of the Secretary. Additionally:</p>
<ul>
  <li>a. The Secretary shall transfer official records in good condition to their successor.</li>
  <li>b. The Secretary will assume the responsibilities of one of the Co-Chairs, if both Co-Chairs and the Vice Chair is unable to do so.</li>
</ul>
        `,
        candidates: candidatesFromGS("Secretary", gsCandidateJson) 
      },
      {
        title: 'Treasurer',
        slug: 'treasurer',
        description: `
<p>The Treasurer will be responsible for administration of funds, budget, and financial organization of the Local, including overseeing fundraising activities for the Local. The Treasurer will report to the Local Council on the financial status of the organization at each Local Council Meeting. The Treasurer will maintain transparent and open financial reports available to the entire membership upon request by an officer of the Local Council.</p>
        `,
        candidates: candidatesFromGS("Treasurer", gsCandidateJson)
      },
      {
        title: 'Internal Organizers',
        slug: 'internal-organizer',
        description: `
<p>Internal Organizers will jointly oversee the Internal Organizing Committee (see Article VI), which is responsible for fostering a lively participatory and democratic culture within the Local through the development, education, mobilization, and recruitment of members. The Internal Organizing Committee is also charged with organizing General Meetings, Informational Meetings, and social, educational, and fundraising events. Under the direction of the Local Council, the Internal Organizing Committee shall develop and oversee a program of socialist cadre development that includes skills training and political education; and a system of Mobilizers (similar to union shop stewards) who will act as an active conduit of information and engagement between the General Membership and the Local Council.</p>
        `,
        candidates: candidatesFromGS("Internal Organizer", gsCandidateJson) 
      },
      {
        title: 'External Organizers',
        slug: 'external-organizer',
        description: `
<p>External Organizers will jointly oversee the External Organizing Committee (see Article VI), which will lead the Local’s fight for a socialist political agenda in the East Bay and beyond. Under the direction of the Local Council and in order to realize the policies, priorities and campaigns set forth by the General Membership, the External Organizing Committee shall manage or execute all of the Local’s issue and electoral campaigns, direct actions, rallies, and other activities expressly targeted at the general public for political purposes.</p>
        `,
        candidates: candidatesFromGS("External Organizer", gsCandidateJson) 
      },
      {
        title: 'At-Large Local Council Members',
        slug: 'at-large',
        description: `
<p>At-Large Local Council Members will participate in Local Council decision-making, and are responsible for attending all relevant meetings and reading all relevant documents. At-Large Local Council members are also tasked with representing the views of the membership that elected them as well as helping to advance the goals of the Local generally.</p>
        `,
        candidates: candidatesFromGS("At Large Member of Local Council", gsCandidateJson) 
      }
    ]
  },
  nationalConvention: {
    candidates: Array(30).fill().map(candidate)
  }
}

jsonfile.writeFileSync('./public/fixtures.json', data);

});

