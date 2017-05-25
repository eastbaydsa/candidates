import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Positions from './Positions.js';
import Candidates from './Candidates.js';
import Candidate from './Candidate.js';
import LocalCouncilElectionStore from '../stores/LocalCouncilElectionStore.js';
import './LocalCouncil.css';

class LocalCouncil extends Component {
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
    const position = this.state.electionStore.find(this.props.match.params.position);
    const candidate = this.state.electionStore.candidate(this.props.match.params.position, this.props.match.params.candidate);
    return (
      <div className="LocalCouncil">
        <div className="LocalCouncil__positions">
          <Positions positions={this.state.electionStore.all()}/>
        </div>
        <div className="LocalCouncil__candidates">
          {position ? <Candidates position={position} candidates={this.state.electionStore.candidates(position.slug)}/> : null}
        </div>
        <div className="LocalCouncil__candidate">
          {candidate ? <Candidate position={position} candidate={this.state.electionStore.candidate(position.slug, candidate.slug)}/> : null}
        </div>
      </div>
    );
  }
}

LocalCouncil.childContextTypes = {
  electionStore: PropTypes.object
}

export default LocalCouncil;
