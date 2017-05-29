import React, { Component } from 'react';
import { Link } from 'react-scroll';

class LinkComponent extends Component {
  render() {
    return (
      <Link {...this.props} smooth={true}>{this.props.children}</Link>
    );
  }
}

export { LinkComponent as Link };
