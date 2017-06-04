import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Div } from 'glamorous';
import Container from '../shared/Container';
import { red1, red4 } from '../styles/colors';
import NavAnchor from './NavAnchor';

const tiers = [
  {
    backgroundColor: 'transparent',
    border: `none`
  },
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
  constructor(props) {
    super(props);

    ['updateBrowserHistory'].forEach((fn) => { this[fn] = this[fn].bind(this); });
  }

  updateBrowserHistory() {
    if (this.props.id === undefined) { return }
    const currentPath = `/${this.props.id}`
    console.log(`update browser history! ${currentPath}`);
    this.context.router.history.replace(currentPath, { scroll: false });
  }

  render() {
    const rules = {
      padding: '150px 0',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    };

    const tierRules = tiers[this.props.tier];

    return (
      <NavAnchor id={this.props.id}>
        <div>
          <Div css={rules} >
            <Container css={tierRules}>{this.props.children}</Container>
          </Div>
        </div>
      </NavAnchor>
    );
  }
}

Section.propTypes = {
  tier: PropTypes.oneOf([1, 2, 3, 4]),
  id: PropTypes.string,
}

Section.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Section;
