import React, { Component } from 'react';
import { P } from 'glamorous';
import { tabletPortraitBreakpoint, desktopBreakpoint } from '../styles/breakpoints';

class Paragraph extends Component {
  render() {
    const rules = [{
      margin: '0 0 20px 0',
      lineHeight: '1.3',
      letterSpacing: '0.5px',
      fontSize: '16px',
      hyphens: 'auto',
    }, tabletPortraitBreakpoint({
      fontSize: '18px',
    }), desktopBreakpoint({
      textAlign: 'justify',
    })];
      
    return (
      <P css={[rules, this.props.css]}>{this.props.children}</P>
    );
  }
}

export default Paragraph;
