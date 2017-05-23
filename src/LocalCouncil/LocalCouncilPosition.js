import React, { Component } from 'react';

class LocalCouncilCandidate extends Component {
  render() {
    return (
      <p>{this.props.match.params.position}</p>
    )
  }
}

export default LocalCouncilCandidate;
