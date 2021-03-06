import React, { Component } from 'react';
import { Div } from 'glamorous';
import { css } from 'glamor';
import { tabletPortraitBreakpoint } from '../styles/breakpoints';

class Row extends Component {
  render() {
    const rules = css({
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'column',
    }, tabletPortraitBreakpoint({
      flexDirection: 'row'
    }));
      
    return (
      <Div {...rules} {...this.props}>{this.props.children}</Div>
    );
  }
}

export default Row;
