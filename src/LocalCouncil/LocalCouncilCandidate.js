import React, { Component } from 'react';

class LocalCouncilCandidate extends Component {
  render() {
    return (
      <div className="Candidate" key={this.props.name}>
        <h3 className="Candidate__name">{this.props.name}</h3>
        <img src={this.props.imageUrl} alt={this.props.name} />
        <div className="Candidate__question">Please describe your involvement in East Bay DSA</div>
        <div className="Candidate__answer">{this.props.involvement}</div>
        <div className="Candidate__question">Why are you qualified for this specific role?</div>
        <div className="Candidate__answer">{this.props.qualifications}</div>
        <div className="Candidate__question">What do you hope to accomplish for the chapter if elected to this role?</div>
        <div className="Candidate__answer">{this.props.goals}</div>
      </div>
    )
  }
}

export default LocalCouncilCandidate;
