import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Div } from 'glamorous';
import Container from '../shared/Container';
import { red1, red4, red7 } from '../styles/colors';

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
      padding: '60px 0'
    };

    const tierRules = tiers[this.props.tier - 1];

    return (
      <Div css={[rules, tierRules]}>
        <Container>{this.props.children}</Container>
      </Div>
    );
  }
}

Section.propTypes = {
  tier: PropTypes.oneOf([1, 2, 3, 4])
}

export default Section;
