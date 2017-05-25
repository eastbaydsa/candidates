import React, { Component } from 'react';
import Candidate from './Candidate';

class Candidates extends Component {
  renderCandidateDetails() {
    return this.props.candidates.map(candidate => {
      return <Candidate key={candidate.slug} {...candidate} />
    });
  }

  render() {
    return (
      <div className="Candidates">
        <div className="candidates">
          {this.renderCandidateDetails()}
        </div>
      </div>
    );
  }
}

export default Candidates;
