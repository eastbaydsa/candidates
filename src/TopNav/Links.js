import React, { Component } from 'react';
import { Div } from 'glamorous';
import { Link } from '../shared/Link';

class Links extends Component {
  constructor(props) {
    super(props);
    ['renderSections', 'renderLink'].forEach((fn) => { this[fn] = this[fn].bind(this); })
  }

  renderSections(section, i) {
    return (
      <Div key={i} marginBottom="20px">{section.map(this.renderLink)}</Div>
    )
  }

  renderLink(link) {
    return (
      <Div key={link.to} display="block">
        <Link to={link.to} onClick={this.props.closeMenu}>{link.label}</Link>
      </Div>
    )
  }

  render() {
    const rules = {
      padding: '0 20px'
    }

    return (
      <Div css={rules}>
        {this.props.links.map(this.renderSections)}
      </Div>
    );
  }
}

export default Links;
