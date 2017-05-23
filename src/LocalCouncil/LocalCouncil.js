import React, { Component } from 'react';
import './LocalCouncil.css';
import LocalCouncilCandidate from '../Candidate/LocalCouncilCandidate.js';

class LocalCouncil extends Component {
  constructor(props) {
    super(props);
    this.state = { positions: [] };
    ['renderPosition', 'renderCandidate'].forEach((fn) => { this[fn] = this[fn].bind(this); });
  }

  componentDidMount() {
    fetch('/api/elections/local-council').then((response) => {
      response.json().then((data) => {
        this.setState(data);
      });
    });
  }

  renderPosition(position) {
    return (
      <div key={position.title}>
        <h2>{position.title}</h2>
        {position.candidates.map(this.renderCandidate)}
      </div>
    )
  }

  renderCandidate(candidate) {
    return <LocalCouncilCandidate {...candidate} key={candidate.name} />
  }

  render() {
    return (
      <div className="LocalCouncil">
        {this.state.positions.map(this.renderPosition)}
      </div>
    );
  }
}

export default LocalCouncil;
