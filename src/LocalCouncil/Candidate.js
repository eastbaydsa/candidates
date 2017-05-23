import React, { Component } from 'react';
import './Candidate.css';

class Candidate extends Component {
  render() {
    const candidate = this.props.candidate;
    return (
      <div className="Candidate" key={candidate.name}>
        <h3 className="Candidate__name">{candidate.name}</h3>
        <img src={candidate.imageUrl} alt={candidate.name} />
        <div className="Candidate__question">Please describe your involvement in East Bay DSA</div>
        <div className="Candidate__answer">{candidate.involvement}</div>
        <div className="Candidate__question">Why are you qualified for this specific role?</div>
        <div className="Candidate__answer">{candidate.qualifications}</div>
        <div className="Candidate__question">What do you hope to accomplish for the chapter if elected to this role?</div>
        <div className="Candidate__answer">{candidate.goals}</div>
      </div>
    )
  }
}

export default Candidate;
