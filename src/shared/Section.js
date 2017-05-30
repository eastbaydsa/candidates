import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Div } from 'glamorous';
import Container from '../shared/Container';
import { red1, red4 } from '../styles/colors';
import Waypoint  from 'react-waypoint';

const tiers = [
  {
    backgroundColor: 'white',
    borderTop: `20px solid ${red1}`
  },
  {
    backgroundColor: red1,
    borderTop: `20px solid ${red1}`
  },
  {
    backgroundColor: red4,
    borderTop: `20px solid ${red1}`
  },
  {
    // Candidate
    backgroundColor: 'white',
    border: 'none',
    marginBottom: '200px'
  },
]

class Section extends Component {
  render() {
    const rules = {
      padding: '60px 0',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    };

    const tierRules = tiers[this.props.tier - 1];

    return (
      <Waypoint onEnter={() => {console.log(this.props.id)}}>
        <div>
          <Div css={rules} id={this.props.id}>
            <Container css={tierRules}>{this.props.children}</Container>
          </Div>
        </div>
      </Waypoint>
    );
  }
}

Section.propTypes = {
  tier: PropTypes.oneOf([1, 2, 3, 4]),
  id: PropTypes.string,
}

export default Section;
