import React, { Component } from 'react';
import { Div } from 'glamorous';

class WavyBorder extends Component {
  render() {
    const rules = [{
      borderWidth: '3px',
      borderStyle: 'solid',
      borderImage: 'url("/wavy-border.svg") round',
      borderImageSlice: 8,
      borderImageWidth: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'baseline',
      position: 'relative',
    }, this.props.css];
      
    return (
      <Div css={[rules, this.props.css]}>{this.props.children}</Div>
    );
  }
}

export default WavyBorder;
