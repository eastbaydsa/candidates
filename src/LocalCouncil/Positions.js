import React, { Component } from 'react';
import Position from './Position';
import { Link } from '../shared/Link';

class Positions extends Component {
  renderPositionLinks() {
    return this.props.positions.map(position => {
      return (
        <div key={position.slug}>
          <Link to={position.slug}>{position.title}</Link>
        </div>
      )
    });
  }

  renderPositionDetails() {
    return this.props.positions.map(position => {
      return <Position key={position.slug} {...position} />
    });
  }

  render() {
    return (
      <div>
        {this.renderPositionDetails()}
      </div>
    );
  }
}

export default Positions;
