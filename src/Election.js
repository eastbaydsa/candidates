import React, { Component } from 'react';
import LocalCouncilPositions from './LocalCouncil/Positions.js';
import LocalCouncilIntro from './LocalCouncil/Intro.js';
import LocalCouncilElectionStore from './stores/LocalCouncilElectionStore.js';
import './Election.css';

class Election extends Component {
  constructor(props) {
    super(props);
    this.state = { electionStore: new LocalCouncilElectionStore() };
  }

  componentDidMount() {
    fetch('/api/elections/local-council').then((response) => {
      response.json().then((data) => {
        this.setState({
          electionStore: new LocalCouncilElectionStore(data)
        });
      });
    });
  }

  render() {
    return (
      <div>
        <LocalCouncilIntro />
        <LocalCouncilPositions positions={this.state.electionStore.positions()}/>
      </div>
    );
  }
}

export default Election;
