import React, { Component } from 'react';
import { Nav } from 'glamorous';
import { red1 } from '../styles/colors';
import { topNavLayer } from '../styles/layers';

import Links from './Links';
import NavBar from './NavBar';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    ['open', 'close'].forEach((fn) => { this[fn] = this[fn].bind(this); });
  }

  open() {
    console.log('OPEN')
    this.setState({ isOpen: true });
  }

  close() {
    console.log('CLOSE')
    this.setState({ isOpen: false });
  }

  render() {
    const rules = {
      position: 'fixed',
      backgroundColor: red1,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      zIndex: topNavLayer
    }

    return (
      <Nav css={rules}>
        <NavBar isOpen={this.state.isOpen} onOpenClick={this.open} onCloseClick={this.close} />
        { this.state.isOpen ? <Links links={this.props.links} closeMenu={this.close} /> : null }
      </Nav>
    );
  }
}

export default TopNav;
