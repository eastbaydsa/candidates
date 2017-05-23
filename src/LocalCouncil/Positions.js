import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';
import './Positions.css';

class Positions extends Component {
  renderPosition(position) {
    return (
      <div key={position.slug}>
        <Link to={`/local-council/${position.slug}`}>{position.title}</Link>
      </div>
    )
  }

  render() {
    return (
      <div className="Positions">{this.props.positions.map(this.renderPosition)}</div>
    );
  }
}

Positions.contextTypes = {
  positionStore: PropTypes.object
};

export default Positions;
