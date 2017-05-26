import React, { Component } from 'react';

class Candidate extends Component {
  render() {
    return (
      <div key={this.props.name}>
        <h3>{this.props.name}</h3>
        <div>Please describe your involvement in East Bay DSA</div>
        <div>{this.props.involvement}</div>
      </div>
    )
  }
}

export default Candidate;
