import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Waypoint  from 'react-waypoint';

class NavAnchor extends Component {
  constructor(props) {
    super(props);

    ['updateBrowserHistory'].forEach((fn) => { this[fn] = this[fn].bind(this); });
  }

  updateBrowserHistory() {
    if (this.props.section === undefined) { return }
    const currentPath = ['', this.props.section, this.props.candidate].join('/');
    this.context.router.history.replace(currentPath, { scroll: false });
  }

  render() {
    const id = [this.props.section, this.props.candidate].filter(n => n).join('-');
    return (
      <Waypoint scrollableAncestor={window} topOffset={'40%'} bottomOffset={'40%'} onEnter={this.updateBrowserHistory} fireOnRapidScroll={false}>
        <div id={id}>
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
  section: PropTypes.string,
  candidate: PropTypes.string,
}

export default NavAnchor;
