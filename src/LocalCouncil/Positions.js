import React, { Component } from 'react';
import Position from './Position';
import './Positions.css';

class Positions extends Component {
  renderPositionLinks() {
    return this.props.positions.map(position => {
      return (
        <div key={position.slug}>
          <a href={`/local-council/${position.slug}`}>{position.title}</a>
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
      <div className="Positions">
        <div className="Positions__all">
          {this.renderPositionLinks()}
        </div>
        {this.renderPositionDetails()}
      </div>
    );
  }
}

export default Positions;
