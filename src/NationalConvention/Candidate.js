import React, { Component } from 'react';

class Candidate extends Component {
  render() {
    return (
      <div className="Candidate" key={this.props.name}>
        <h3 className="Candidate__name">{this.props.name}</h3>
        <div className="Candidate__question">Please describe your involvement in East Bay DSA</div>
        <div className="Candidate__answer">{this.props.involvement}</div>
      </div>
    )
  }
}

export default Candidate;
