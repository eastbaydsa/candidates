import React, { Component } from 'react';
import Candidate from './Candidate';
import Section from '../shared/Section';

class Candidates extends Component {
  renderCandidateDetails() {
    return this.props.candidates.map(candidate => {
      return <Candidate key={candidate.name} {...candidate} />
    });
  }

  render() {
    return (
      <Section tier={4}>
        {this.renderCandidateDetails()}
      </Section>
    );
  }
}

export default Candidates;
