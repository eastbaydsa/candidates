import React, { Component } from 'react';

import TopNav from './TopNav/TopNav';
import Cover from './Cover.js';
import TOC from './TOC.js';
import LocalCouncilIntro from './LocalCouncil/Intro.js';
import LocalCouncilPosition from './LocalCouncil/Position.js';
import LocalCouncilCandidates from './LocalCouncil/Candidates.js';

import NationalConventionCandidates from './NationalConvention/Candidates.js';

import EventDetails from './shared/EventDetails.js';
import ElectionRules from './shared/ElectionRules.js';

import electionData from './data/election-data.json';

class Election extends Component {
  navLinks() {
    return [
      { label: 'Introduction', to: '/intro' },
      ...electionData.localCouncil.positions.map((position) => {
        return { label: position.title, to: `/${position.slug}` }
      }),
      { label: 'DSA National Convention Delegates', to: '/dsa-national-convention-delegates' },
      { label: 'Election Rules', to: '/election-rules' },
    ]
  }

  render() {
    const links = this.navLinks();

    return (
      <div>
        <TopNav links={links} currentSection={this.props.match.params.section} />
        <Cover />
        <TOC links={links} />
        <LocalCouncilIntro />
        {electionData.localCouncil.positions.map(position => {
          return (
            <div key={position.slug}>
              <LocalCouncilPosition {...position} />
              <LocalCouncilCandidates candidates={position.candidates} positionTitle={position.title} />
            </div>
          );
        })}
        <LocalCouncilPosition
          candidates={electionData.nationalConvention.candidates}
          title="DSA National Convention Delegates"
          slug="dsa-national-convention-delegates"
          description='In early August, DSA members from across the county will get together for our national convention in Chicago to make crucial decisions about how to structure work and allocate resources in light of our unprecedented growth in membership since the 2016 election. This will be one of the largest and most consequential gatherings of socialists this country has seen in generations, and the decisions we make in Chicago will set a powerful working agenda for what is now the third largest socialist organization in American history.</br></br>Delegates will represent the will of thier comrades in East Bay DSA on a number of important issues. They will be expected to attend a meeting with other EBDSA members to gauge their sentiments before the convention, and the top delegate vote-getters will serve as whips, travel coordinators, and leadership for the delegation.'
        />
        <NationalConventionCandidates candidates={electionData.nationalConvention.candidates} />
        <EventDetails />
        <ElectionRules />
        <EventDetails />
      </div>
    );
  }
}

export default Election;
