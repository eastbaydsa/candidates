import React, { Component } from 'react';
import { Div } from 'glamorous';
import { css } from 'glamor';

class Container extends Component {
  render() {
    const rules = css({
      padding: '0 10px',
      maxWidth: '768px',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      margin: '0 auto',
      boxSizing: 'border-box'
    });
      
    return (
      <Div {...rules} {...this.props}>{this.props.children}</Div>
    );
  }
}

export default Container;
