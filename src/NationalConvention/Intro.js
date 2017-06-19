import React, { Component } from 'react';

import NavAnchor from '../shared/NavAnchor';
import WavyBorder from '../shared/WavyBorder';
import Paragraph from '../shared/Paragraph';
import IntroHeader from '../shared/IntroHeader';
import Container from '../shared/Container';

import { tabletPortraitBreakpoint } from '../styles/breakpoints';

const containerRules = {
  paddingTop: '150px',
  paddingBottom: '150px'
}

const wavyBorderRules = [{
  padding:'40px 20px 20px 20px',
}, tabletPortraitBreakpoint({
  padding:'40px 40px 20px 40px',
})];

class Intro extends Component {
  render() {
    return (
      <NavAnchor section={'dsa-national-convention-delegates'}>
        <Container css={containerRules}>
          <WavyBorder css={wavyBorderRules}>
            <IntroHeader title="DSA National Convention Delegates" />
            <Paragraph>{"In early August, DSA members from across the county will get together for our national convention in Chicago to make crucial decisions about how to structure work and allocate resources in light of our unprecedented growth in membership since the 2016 election. This will be one of the largest and most consequential gatherings of socialists this country has seen in generations, and the decisions we make in Chicago will set a powerful working agenda for what is now the third largest socialist organization in American history."}</Paragraph>
            <Paragraph>{"Delegates will represent the will of thier comrades in East Bay DSA on a number of important issues. They will be expected to attend a meeting with other EBDSA members to gauge their sentiments before the convention, and the top delegate vote-getters will serve as whips, travel coordinators, and leadership for the delegation."}</Paragraph>
          </WavyBorder>
        </Container>
      </NavAnchor>
    );
  }
}

export default Intro;
