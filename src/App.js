import React, { Component } from 'react';
import { applyRouterMiddleware, browserHistory, Router, Route } from 'react-router';
import { useScroll } from 'react-router-scroll';
import Election from './Election.js';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory} render={applyRouterMiddleware(useScroll())}>
          <Route path="/*" component={Election} />
        </Router>
      </div>
    );
  }
}

export default App;
