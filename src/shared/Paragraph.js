import React, { Component } from 'react';
import { p } from 'glamorous';

class Paragraph extends Component {
  render() {
    const rules = {
      textAlign: 'justify',
      margin: '0 0 20px 0'
    };
      
    return (
      <p css={rules} {...this.props}>{this.props.children}</p>
    );
  }
}

export default Paragraph;
