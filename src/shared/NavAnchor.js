import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Waypoint  from 'react-waypoint';

class NavAnchor extends Component {
  constructor(props) {
    super(props);

    ['updateBrowserHistory'].forEach((fn) => { this[fn] = this[fn].bind(this); });
  }

  updateBrowserHistory() {
    if (this.props.id === undefined) { return }
    const currentPath = `/${this.props.id}`
    this.context.router.history.replace(currentPath, { scroll: false });
  }

  render() {
    return (
      <Waypoint scrollableAncestor={window} topOffset={'40%'} bottomOffset={'40%'} onEnter={this.updateBrowserHistory} fireOnRapidScroll={false}>
        <div id={this.props.id}>
          {this.props.children}
        </div>
      </Waypoint>
    );
  }
}

NavAnchor.contextTypes = {
  router: PropTypes.object.isRequired
};

NavAnchor.propTypes = {
  id: PropTypes.string,
}

export default NavAnchor;
