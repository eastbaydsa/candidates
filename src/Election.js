import React, { Component } from 'react';

import LocalCouncilIntro from './LocalCouncil/Intro.js';
import LocalCouncilPositions from './LocalCouncil/Positions.js';
import LocalCouncilElectionStore from './stores/LocalCouncilElectionStore.js';

import NationalConventionIntro from './NationalConvention/Intro.js';
import NationalConventionCandidates from './NationalConvention/Candidates.js';

import './Election.css';

class Election extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localCouncilElectionStore: new LocalCouncilElectionStore(),
      nationalConventionCandidates: []
    };
  }

  componentDidMount() {
    fetch('/api/fixtures').then((response) => {
      response.json().then((data) => {
        this.setState({
          localCouncilElectionStore: new LocalCouncilElectionStore(data.localCouncil),
          nationalConventionCandidates: data.nationalConvention.candidates
        });
      });
    });
  }

  render() {
    return (
      <div>
        <LocalCouncilIntro />
        <LocalCouncilPositions positions={this.state.localCouncilElectionStore.positions()} />
        <NationalConventionIntro />
        <NationalConventionCandidates candidates={this.state.nationalConventionCandidates} />
      </div>
    );
  }
}

export default Election;
