import React, { Component } from 'react';
import { Div } from 'glamorous';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import { tabletPortraitBreakpoint } from '../styles/breakpoints';

class Column extends Component {
  render() {
    const rules = css({
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      ':first-child': {
        marginLeft: 0
      }
    }, tabletPortraitBreakpoint({
      marginLeft: '20px',
      flexBasis: '0',
      flexGrow: 1,
    }));

    return (
      <Div {...rules} {...this.props}>{this.props.children}</Div>
    );
  }
}

Column.propTypes = {
  grow: PropTypes.number
}

export default Column;
