import React, { Component } from 'react';
import { Div } from 'glamorous';

import { tabletPortraitBreakpoint } from '../styles/breakpoints';

class SectionHeader extends Component {
  render() {
    const rules = [{
      marginTop: '-80px',
      marginRight: '60px',
      marginBottom: '40px',
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid black',
      padding: '20px',
    }, tabletPortraitBreakpoint({
      marginTop: '-125px',
    })];

    return (
      <Div css={rules}>{this.props.children}</Div>
    );
  }
}

export default SectionHeader;
