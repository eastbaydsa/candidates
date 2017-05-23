import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';

class Positions extends Component {
  renderPosition(position) {
    return (
      <div key={position.slug}>
        <Link to={`/local-council/${position.slug}`}>{position.title}</Link>
      </div>
    )
  }

  render() {
    const positions = this.context.positionStore.all();
    if (positions.length === 0) { return null }
    return (
      <div>{positions.map(this.renderPosition)}</div>
    );
  }
}

Positions.contextTypes = {
  positionStore: PropTypes.object
};

export default Positions;
