import React, { Component } from 'react';
import { H3, Div } from 'glamorous';

import Candidate from './Candidate';

import PositionHeader from './PositionHeader';
import NavAnchor from '../shared/NavAnchor';
import { Link } from '../shared/Link';
import WavyBorder from '../shared/WavyBorder';
import RichText from '../shared/RichText';
import Container from '../shared/Container';
import Index from '../shared/Index';

import { headingFamily } from '../styles/fonts';
import { tabletPortraitBreakpoint } from '../styles/breakpoints';

const containerRules = {
  padding: '30px 40px'
}

const candidateLinksRules = [{
  position: 'relative',
  border: '1px solid black',
  padding: '10px 40px',
  margin: '40px -80px 60px 0',
  left: '60px',
  background: 'white',
}, tabletPortraitBreakpoint({

})];

class Position extends Component {
  renderCandidateDetails() {
    return this.props.candidates.map(candidate => {
      return <Candidate key={candidate.name} {...candidate} />
    });
  }

  render() {
    const candidateLinks = this.props.candidates.map(candidate => {
      return { to: candidate.slug, label: candidate.name }
    });

    return (
      <div>
        <NavAnchor tier={0} id={this.props.slug}>
          <Container max-width={'600px'}>
            <WavyBorder css={containerRules}>
              <PositionHeader title={this.props.title}></PositionHeader>
              <RichText content={this.props.description}></RichText>
              <Div css={candidateLinksRules}>
                <Index links={candidateLinks} />
              </Div>
            </WavyBorder>
          </Container>
        </NavAnchor>
        {this.renderCandidateDetails()}
      </div>
    );
  }
}

export default Position;
