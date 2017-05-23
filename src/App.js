import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Home/Home.js';
import LocalCouncil from './LocalCouncil/LocalCouncil.js';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/local-council">East Bay DSA Local Council Elections</Link></li>
              {/*<li><Link to="/national-convention">DSA National Convention Delegates</Link></li>*/}
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Switch>
              <Route path="/local-council/:position/:candidate" component={LocalCouncil}/>
              <Route path="/local-council/:position" component={LocalCouncil}/>
              <Route path="/local-council" component={LocalCouncil}/>
            </Switch>
            {/*<Route path="/national-convention" component={NationalConvention}/>*/}
          </div>
        </Router>
    );
  }
}

export default App;
