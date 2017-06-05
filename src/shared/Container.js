import React, { Component } from 'react';
import { Div } from 'glamorous';
import { containerWidth } from '../styles/layout';

class Container extends Component {
  render() {
    const rules = {
      paddingLeft: '10px',
      paddingRight: '10px',
      maxWidth: containerWidth,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      boxSizing: 'border-box',
      position: 'relative',
    };
      
    return (
      <Div css={[rules, this.props.css]}>{this.props.children}</Div>
    );
  }
}

export default Container;
