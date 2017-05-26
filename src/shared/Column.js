import React, { Component } from 'react';
import { Div } from 'glamorous';
import { css } from 'glamor';
import PropTypes from 'prop-types';

class Column extends Component {
  render() {
    const rules = css({
      position: 'relative',
      flexBasis: '0',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      ':first-child': {
        marginLeft: 0
      },
      '@media(min-width: 768px)': {
        marginLeft: '20px',
      }
    });
      
    return (
      <Div {...rules} {...this.props}>{this.props.children}</Div>
    );
  }
}

Column.propTypes = {
  grow: PropTypes.number
}

export default Column;
