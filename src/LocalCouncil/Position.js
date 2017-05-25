import React, { Component } from 'react';
import Candidate from './Candidate';

class Position extends Component {
  renderCandidateLinks() {
    return this.props.candidates.map(candidate => {
      return (
        <div key={candidate.slug}>
          <a href={`/local-council/${candidate.slug}`}>{candidate.name}</a>
        </div>
      );
    });
  }

  renderCandidateDetails() {
    return this.props.candidates.map(candidate => {
      return <Candidate key={candidate.slug} {...candidate} />
    });
  }

  render() {
    return (
      <div className="Position">
        <div>
          <h2>{this.props.title}</h2>
          <p>{"Tofu unicorn mollit vape, sunt seitan activated charcoal tumeric hot chicken disrupt. Veniam photo booth cold-pressed, sriracha banh mi officia ramps readymade vape roof party palo santo laborum 3 wolf moon next level. Selfies plaid esse venmo, pabst elit disrupt authentic hot chicken ullamco organic prism cray try-hard. Health goth ut biodiesel selvage tbh, vegan pop-up. Godard selvage kale chips pour-over, squid yr helvetica kombucha pop-up. You probably haven't heard of them leggings nisi, fugiat excepteur enim nostrud freegan franzen nihil aliquip cloud bread skateboard mustache narwhal. Elit tacos id shabby chic, kogi cronut leggings keffiyeh irure activated charcoal ea anim tumblr."}</p>
        </div>
        <div className="candidates">
          <div className="candidates__all">
            {this.renderCandidateLinks()}
          </div>
          {this.renderCandidateDetails()}
        </div>
      </div>
    );
  }
}

export default Position;
