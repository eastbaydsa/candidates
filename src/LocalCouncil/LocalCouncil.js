import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Positions from './Positions.js';
import LocalCouncilPosition from './LocalCouncilPosition.js';
import LocalCouncilCandidate from './LocalCouncilCandidate.js';
import PositionStore from '../stores/PositionStore.js';
import './LocalCouncil.css';

class LocalCouncil extends Component {
  constructor(props) {
    super(props);
    this.state = { positionStore: new PositionStore() };
    ['renderPosition', 'renderCandidate'].forEach((fn) => { this[fn] = this[fn].bind(this); });
  }

  getChildContext() {
    return {
      positionStore: this.state.positionStore
    }
  }

  componentDidMount() {
    fetch('/api/elections/local-council').then((response) => {
      response.json().then((data) => {
        this.setState({
          positionStore: new PositionStore(data)
        });
      });
    });
  }

  renderPosition(position) {
    return (
      <div key={position.slug}>
        <Link to={`/local-council/${position.slug}`}>{position.title}</Link>
        {position.candidates.map(this.renderCandidate)}
      </div>
    )
  }

  renderCandidate(candidate) {
    // return <LocalCouncilCandidate {...candidate} key={candidate.name} />
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/local-council" component={Positions} />
          <Route path="/local-council/:position" component={LocalCouncilPosition} />
          <Route path="/local-council/:position/:candidate" component={LocalCouncilCandidate} />
        </div>
      </Router>
    );
  }
}

LocalCouncil.childContextTypes = {
  positionStore: PropTypes.object
}

export default LocalCouncil;
