import React, { Component } from 'react';

import TopNav from './TopNav/TopNav';
import Cover from './Cover.js';
import TOC from './TOC.js';
import LocalCouncilIntro from './LocalCouncil/Intro.js';
import LocalCouncilPosition from './LocalCouncil/Position.js';
import LocalCouncilElectionStore from './stores/LocalCouncilElectionStore.js';

import NationalConventionIntro from './NationalConvention/Intro.js';
import NationalConventionCandidates from './NationalConvention/Candidates.js';

import EventDetails from './shared/EventDetails.js';
import ElectionRules from './shared/ElectionRules.js';

import electionData from './data/election-data.json';

class Election extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localCouncilElectionStore: new LocalCouncilElectionStore(electionData.localCouncil),
      nationalConventionCandidates: electionData.nationalConvention.candidates
    };
  }

  navLinks() {
    return [
      { label: 'Introduction', to: 'intro' },
      ...this.state.localCouncilElectionStore.positions().map((position) => {
        return { label: position.title, to: position.slug }
      }),
      // { label: 'DSA National Convention Delegates', to: 'dsa-national-convention-delegates' },
      { label: 'Election Rules', to: 'election-rules' },
    ]
  }

  render() {
    const links = this.navLinks();

    return (
      <div>
        <TopNav links={links} />
        <Cover />
        <TOC links={links} />
        <LocalCouncilIntro />
        {this.state.localCouncilElectionStore.positions().map(position => {
          return <LocalCouncilPosition key={position.slug} {...position} />
        })}
        {/*<NationalConventionIntro />*/}
        {/*<NationalConventionCandidates candidates={this.state.nationalConventionCandidates} />*/}
        <EventDetails />
        <ElectionRules />
        <EventDetails />
      </div>
    );
  }
}

export default Election;
