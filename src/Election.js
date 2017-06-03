import React, { Component } from 'react';

import TopNav from './TopNav/TopNav';

import Cover from './Cover.js';
import LocalCouncilIntro from './LocalCouncil/Intro.js';
import LocalCouncilPositions from './LocalCouncil/Positions.js';
import LocalCouncilElectionStore from './stores/LocalCouncilElectionStore.js';

import NationalConventionIntro from './NationalConvention/Intro.js';
import NationalConventionCandidates from './NationalConvention/Candidates.js';

import electionData from './data/sample-data.json';

class Election extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localCouncilElectionStore: new LocalCouncilElectionStore(electionData.localCouncil),
      nationalConventionCandidates: []
    };
  }

  navLinks() {
    return [
      [{ label: 'Introduction', to: '#intro' }],
      this.state.localCouncilElectionStore.positions().map((position) => {
        return { label: position.title, to: position.slug }
      }),
      [{ label: 'DSA National Convention Delegates', to: '#dsa-national-convention-delegates' }],
    ]
  }

  render() {
    const links = this.navLinks();

    return (
      <div>
        <TopNav links={links} />
        <Cover />
        <LocalCouncilIntro />
        <LocalCouncilPositions positions={this.state.localCouncilElectionStore.positions()} />
        <NationalConventionIntro />
        <NationalConventionCandidates candidates={this.state.nationalConventionCandidates} />
      </div>
    );
  }
}

export default Election;
