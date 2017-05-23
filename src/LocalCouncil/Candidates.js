import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Candidates.css';

class Candidates extends Component {
  constructor(props) {
    super(props);
    ['renderCandidates'].forEach(fn => this[fn] = this[fn].bind(this))
  }
  renderCandidates(candidate) {
    return (
      <div key={candidate.slug}>
        <Link to={`/local-council/${this.props.position.slug}/${candidate.slug}`}>{candidate.name}</Link>
      </div>
    )
  }

  render() {
    return (
      <div className="Candidates">{this.props.candidates.map(this.renderCandidates)}</div>
    );
  }
}

export default Candidates;
