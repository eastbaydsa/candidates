import React, { Component } from 'react';
import { Div, A } from 'glamorous';

class NavBar extends Component {
  render() {
    const rules = {
      display: 'flex',
      paddingLeft: '20px',
      height: '60px'
    }

    const linkRules = {
      fontSize: '24px',
      color: 'black',
      width: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer'
    }

    return (
      <Div css={rules}>
        <Div flex="1 1 0" />
        { this.props.isOpen ? <A css={linkRules} onClick={this.props.onCloseClick}>&times;</A> : <A css={linkRules} onClick={this.props.onOpenClick}>+</A> }
      </Div>
    );
  }
}

export default NavBar;
