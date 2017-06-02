import React, { Component } from 'react';
import { Nav } from 'glamorous';
import { topNavLayer } from '../styles/layers';

import Links from './Links';
import NavBar from './NavBar';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    ['open', 'close', 'storeElRef', 'closeIfClickOutside'].forEach((fn) => { this[fn] = this[fn].bind(this); });
  }

  componentDidMount() {
    window.document.addEventListener('click', this.closeIfClickOutside);
  }

  componentWillUnmount() {
    window.document.removeEventListener('click', this.closeIfClickOutside);
  }

  storeElRef(componentElement) {
    this.setState({ el: componentElement })
  }

  closeIfClickOutside(event) {
    if (!this.state.el) { return }
    if (this.state.el === event.target || this.state.el.contains(event.target)) {
      return;
    }
    this.close();
  }

  open() {
    this.setState({ isOpen: true });
  }

  close() {
    this.setState({ isOpen: false });
  }

  render() {
    const rules = {
      position: 'fixed',
      backgroundColor: 'white',
      borderBottom: '1px solid black',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      zIndex: topNavLayer
    }

    return (
      <Nav css={rules} innerRef={this.storeElRef}>
        <NavBar isOpen={this.state.isOpen} onOpenClick={this.open} onCloseClick={this.close} />
        { this.state.isOpen ? <Links links={this.props.links} closeMenu={this.close} /> : null }
      </Nav>
    );
  }
}

export default TopNav;
