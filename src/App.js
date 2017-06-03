import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Election from './Election.js';


class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Election} />
        <Route path="/:section" component={Election} />
      </div>
    );
  }
}

export default App;
