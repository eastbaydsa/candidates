import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Election from './Election.js';


class App extends Component {
  render() {
    return (
      <Route path="/:section" component={Election} />
    );
  }
}

export default App;
