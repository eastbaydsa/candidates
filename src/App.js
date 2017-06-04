import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Election from './Election.js';

function App() {
  return (
    <Switch>
      <Route path="/" component={Election} />
      <Route path="/:section" component={Election} />
    </Switch>
  );
}

export default App;