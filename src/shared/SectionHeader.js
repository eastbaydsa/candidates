import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Div } from 'glamorous';

class SectionHeader extends Component {
  render() {
    const rules = {
      marginTop: '-125px',
      marginBottom: '40px',
      textAlign: 'center',
      backgroundColor: 'white',
      border: '1px solid black',
      padding: '20px',
    };

    return (
      <Div css={rules}>{this.props.children}</Div>
    );
  }
}

export default SectionHeader;
