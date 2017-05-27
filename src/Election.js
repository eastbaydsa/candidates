import React, { Component } from 'react';

import TopNav from './TopNav/TopNav';

import LocalCouncilIntro from './LocalCouncil/Intro.js';
import LocalCouncilPositions from './LocalCouncil/Positions.js';
import LocalCouncilElectionStore from './stores/LocalCouncilElectionStore.js';

import NationalConventionIntro from './NationalConvention/Intro.js';
import NationalConventionCandidates from './NationalConvention/Candidates.js';

class Election extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localCouncilElectionStore: new LocalCouncilElectionStore(),
      nationalConventionCandidates: []
    };
  }

  componentDidMount() {
    fetch('/sample-data.json').then((response) => {
      response.json().then((data) => {
        this.setState({
          localCouncilElectionStore: new LocalCouncilElectionStore(data.localCouncil),
          nationalConventionCandidates: data.nationalConvention.candidates
        });
      });
    });
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
    return (
      <div>
        <TopNav links={this.navLinks()} />
        <LocalCouncilIntro />
        <LocalCouncilPositions positions={this.state.localCouncilElectionStore.positions()} />
        <NationalConventionIntro />
        <NationalConventionCandidates candidates={this.state.nationalConventionCandidates} />
      </div>
    );
  }
}

export default Election;
