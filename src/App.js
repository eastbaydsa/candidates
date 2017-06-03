import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Election from './Election.js';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Election} />
        <Route path="/:section" component={Election} />
      </Switch>
    );
  }
}

export default App;
