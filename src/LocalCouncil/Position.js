import React, { Component } from 'react';
import Candidate from './Candidate';
import Section from '../shared/Section';

class Position extends Component {
  renderCandidateLinks() {
    return this.props.candidates.map(candidate => {
      return (
        <div key={candidate.name}>
          <a href={`/local-council/${candidate.slug}`}>{candidate.name}</a>
        </div>
      );
    });
  }

  renderCandidateDetails() {
    return this.props.candidates.map(candidate => {
      return <Candidate key={candidate.name} {...candidate} />
    });
  }

  render() {
    return (
      <div>
        <Section tier={3} id={this.props.slug}>
          <h2>{this.props.title}</h2>
          <div dangerouslySetInnerHTML={{__html: this.props.description}}></div>
          <div>
            {this.renderCandidateLinks()}
          </div>
        </Section>
        {this.renderCandidateDetails()}
      </div>
    );
  }
}

export default Position;
