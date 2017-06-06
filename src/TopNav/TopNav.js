import React, { Component } from 'react';
import { Nav, Div } from 'glamorous';
import { topNavLayer } from '../styles/layers';

import Index from '../shared/Index';
import NavBar from './NavBar';

const navRules = {
  position: 'fixed',
  top: '0',
  backgroundColor: 'white',
  borderBottom: '1px solid black',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  zIndex: topNavLayer
}

const menuRules = {
  borderTop: '1px solid black',
  paddingTop: '10px',
}

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    ['toggleMenu', 'closeMenu', 'storeElRef', 'closeIfClickOutside'].forEach((fn) => { this[fn] = this[fn].bind(this); });
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
    this.closeMenu();
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  closeMenu() {
    console.log('close menu!')
    this.setState({ isOpen: false });
  }

  renderMenu() {
    return (
      <Div css={menuRules}>
        <Index title="Your election packet" links={this.props.links} onAnyLinkClicked={this.closeMenu} />
      </Div>
    )
  }

  render() {
    return (
      <Nav css={navRules} innerRef={this.storeElRef}>
        <NavBar isOpen={this.state.isOpen} toggleMenu={this.toggleMenu} />
        { this.state.isOpen ? this.renderMenu() : null }
      </Nav>
    );
  }
}

export default TopNav;
