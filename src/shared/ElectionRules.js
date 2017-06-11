import React from 'react';
import { Span, Div } from 'glamorous';

import NavAnchor from './NavAnchor';
import WavyBorder from './WavyBorder';
import Paragraph from './Paragraph';
import IntroHeader from './IntroHeader';
import Container from './Container';
import EventDetails from './EventDetails';

import { tabletPortraitBreakpoint } from '../styles/breakpoints';
import { headingFamily } from '../styles/fonts';

const containerRules = {
  paddingTop: '150px',
  paddingBottom: '50px'
}

const wavyBorderRules = [{
  padding:'40px 20px 20px 20px',
}, tabletPortraitBreakpoint({
  padding:'40px 40px 20px 40px',
})];

const subheadRules = {
  fontFamily: headingFamily,
  fontWeight: 'bold', 
  textTransform: "uppercase"
};

function ElectionRules() {
  return (
    <NavAnchor id="election-rules">
      <Container css={containerRules}>
        <WavyBorder css={wavyBorderRules}>
          <IntroHeader title="Election rules" />
          <Paragraph>For this special election meeting, the East Bay DSA Local Council has appointed an elections committee to prepare this website and oversee our elections. The committee is Frances Reade, Jess Dervin-Ackerman, Megan Svoboda, and Michael Kaufman.</Paragraph>
          <Paragraph>The Elections Committee has followed the rules and regulations of our East Bay DSA bylaws, which may be found at <a href="http://www.eastbaydsa.org/bylaws" target="_blank">http://www.eastbaydsa.org/bylaws.</a></Paragraph>
          <Paragraph css={subheadRules}>Rules and Regulations for Voters</Paragraph>
          <Paragraph>All members who joined DSA on or before May 25, 2017, and whose dues are current may vote in our elections.</Paragraph>
          <Paragraph>Any voting member who is present at the June 24 election may carry up to two signed proxy forms (included in this packet) from non-present, eligible DSA members based on rule 1 above. That present member may cast ballots for themselves and on behalf of the one or two proxy-identified members.</Paragraph>
          <Paragraph>Where multiple candidates may be elected to a position, voters may not vote for more than the number allowed. For example, zero, one, or two votes for Co-chair are allowed, but casting additional votes invalidates those votes for that position. </Paragraph>
          <Paragraph css={subheadRules}>Rules and Regulations for Local Council Elections</Paragraph>
          <Paragraph>All candidates for Local Council positions in this packet have been validated by the Elections Committee as being DSA members in good standing for at least 90 days prior to the election date. </Paragraph>
          <Paragraph>Nominations for Local Council roles will be accepted from the floor at the special election meeting. A floor nominee must be present at the meeting, conform to rule 1 above, and have at least eight East Bay DSA members present and voting to second their nomination. A floor nominee may only run for one position.</Paragraph>
          <Paragraph>To fulfill the mandate of our bylaws that both Co-chairs not be white cis men, nominees may be asked to privately share their racial and/or gender identification with the Elections Committee ahead of the vote.  If two white cis men receive the most votes for the Co-chair positions, the candidate with the next highest voting score will replace the ineligible candidate who received fewer votes.</Paragraph>
        </WavyBorder>
      </Container>
    </NavAnchor>
  );
}

export default ElectionRules;