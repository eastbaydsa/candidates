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
      marginLeft: '-20px',
      padding: '0 30px',
      ':hover': {
        backgroundColor: 'red',
        color: 'white'
      }
    }, tabletPortraitBreakpoint({
      fontSize: '24px',
    })]

    const menuRules = {
      borderRight: '1px solid black',
    }

    const eventLinkRules = {
      borderLeft: '1px solid black',
    }

    return (
      <Div css={rules}>
        <A css={[linkRules, menuRules]} onClick={this.props.toggleMenu}>MENU</A>
        <Div flex="1 1 0" />
        <A css={[linkRules, eventLinkRules]} href="http://www.eastbaydsa.org/june_general_meeting" target="_blank">JOIN US</A>
      </Div>
    );
  }
}

export default NavBar;
