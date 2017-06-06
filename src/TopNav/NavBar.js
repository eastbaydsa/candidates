import React, { Component } from 'react';
import { Div, A } from 'glamorous';
import { headerHeight } from '../styles/layout';

import { tabletPortraitBreakpoint } from '../styles/breakpoints';

class NavBar extends Component {
  render() {
    const rules = {
      display: 'flex',
      paddingLeft: '20px',
      height: headerHeight,
    }

    const linkRules = [{
      fontSize: '18px',
      fontWeight: '700',
      color: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      borderRight: '1px solid black',
      marginLeft: '-20px',
      padding: '0 30px',
      ':hover': {
        backgroundColor: 'red',
        color: 'white'
      }
    }, tabletPortraitBreakpoint({
      fontSize: '24px',
    })]

    return (
      <Div css={rules}>
        <A css={linkRules} onClick={this.props.toggleMenu}>MENU</A>
        <Div flex="1 1 0" />
        <A css={linkRules} onClick={this.props.toggleMenu}>JOIN US</A>
      </Div>
    );
  }
}

export default NavBar;
