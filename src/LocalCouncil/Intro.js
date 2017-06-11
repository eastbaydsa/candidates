import React from 'react';
import { Span } from 'glamorous';

import NavAnchor from '../shared/NavAnchor';
import WavyBorder from '../shared/WavyBorder';
import Paragraph from '../shared/Paragraph';
import IntroHeader from '../shared/IntroHeader';
import Container from '../shared/Container';
import EventDetails from '../shared/EventDetails';

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

function Intro() {
  return (
    <NavAnchor section="intro">
      <Container css={containerRules}>
        <WavyBorder css={wavyBorderRules}>
          <IntroHeader title="Welcome to a Summer of Historic Elections for Socialism in America and the East Bay" />
          <Paragraph css={{ fontFamily: headingFamily, fontWeight: 'bold', textTransform: "uppercase" }}>Hello comrades!</Paragraph>
          <Paragraph>At East Bay DSA’s upcoming special election meeting (see box for details), members will participate in two pivotal moments for socialist organizing in the 21st century.  We will elect local East Bay DSA leadership to enact the organizational structure voted in with our new bylaws, and we will elect a delegation to DSA’s national convention this August. </Paragraph>
          <Paragraph>East Bay DSA’s new leadership, the Local Council (formerly the Executive Committee), will oversee the implementation of an entirely new configuration of internal and external organizers. These organizers will lead the fantastic work we are already engaged in — campaigning for single-payer, educating and communicating with members, hosting public events — and take on much more, like securing housing for all, resisting ICE detentions, or joining labor struggles. With this new operating structure — lean, transparent, and deeply democratic — we can support our growing membership to build power, win fights, and transform life for working people in the East Bay for years to come. </Paragraph>
          <Paragraph>At the national convention in Chicago this August 3–6, delegates will vote for national leadership and set the agenda for DSA to build a winning mass socialist movement in America.</Paragraph>
          <Paragraph>In this packet, you will find all the information you need to participate in these historic elections, including descriptions of the new Local Council roles, statements from the candidates, proxy-voting forms for members who cannot attend the special election meeting, and information about how to nominate delegates to the national convention.</Paragraph>
          <Paragraph>East Bay DSA will only ever be as strong as its membership participation. We are counting on you to learn about the candidates running for your vote, select the strongest and most thoughtful leaders, and join hundreds of your comrades at the special election meeting to enjoy a deeply participatory democracy!</Paragraph>
          <Paragraph>If you have any questions about the meeting or the election process, please contact the Elections Committee at <a href="mailto:elections@eastbaydsa.org">elections@eastbaydsa.org</a>.</Paragraph>
          <Paragraph css={{ textAlign: 'left' }}>
            In solidarity,<br />
            <Span fontWeight="bold">East Bay DSA Elections Committee</Span><br />
            <Span fontStyle='italic'>Frances Reade, Jess Dervin-Ackerman, Megan Svoboda, and Michael Kaufman</Span>
          </Paragraph>
        </WavyBorder>
      </Container>
      <EventDetails />
    </NavAnchor>
  );
}

export default Intro;