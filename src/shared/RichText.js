import React, { Component } from 'react';
import './RichText.css';

class RichText extends Component {
  render() {
    return (
      <div className="RichText" dangerouslySetInnerHTML={{__html: this.props.content}}></div>
    );
  }
}

export default RichText;
