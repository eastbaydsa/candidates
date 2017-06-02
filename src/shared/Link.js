import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LinkComponent extends Component {
  render() {

    return (
      <Link {...this.props}>{this.props.children}</Link>
    );
  }
}

export { LinkComponent as Link };
