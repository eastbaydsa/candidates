import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Link className="Home__link" to="/local-council">East Bay DSA Local Council Elections</Link>
        <Link className="Home__link" to="/national-convention">DSA National Convention Delegates</Link>
      </div>
    );
  }
}

export default Home;
