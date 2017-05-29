import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Div } from 'glamorous';
import Container from '../shared/Container';
import { red1, red4, red7 } from '../styles/colors';
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
    backgroundColor: 'white',
    borderBottom: `20px solid ${red7}`
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
          <Div css={[rules, tierRules]} id={this.props.id}>
            <Container>{this.props.children}</Container>
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
