import React, { Component } from 'react';
import { Nav } from 'glamorous';
import { topNavLayer } from '../styles/layers';

import Index from '../shared/Index';
import NavBar from './NavBar';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    ['toggleMenu', 'storeElRef', 'closeIfClickOutside'].forEach((fn) => { this[fn] = this[fn].bind(this); });
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

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const rules = {
      position: 'fixed',
      top: '0',
      backgroundColor: 'white',
      borderBottom: '1px solid black',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      zIndex: topNavLayer
    }

    return (
      <Nav css={rules} innerRef={this.storeElRef}>
        <NavBar isOpen={this.state.isOpen} toggleMenu={this.toggleMenu} />
        { this.state.isOpen ? <Index title="Your election packet" links={this.props.links} /> : null }
      </Nav>
    );
  }
}

export default TopNav;
