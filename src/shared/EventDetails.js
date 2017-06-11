import React from 'react';
import { Div, Span } from 'glamorous';

import Paragraph from './Paragraph';
import Container from './Container';

import { headingFamily } from '../styles/fonts';
import { tabletPortraitBreakpoint } from '../styles/breakpoints';

const containerRules = [{
  padding: '33px',
  color: 'white',
  alignSelf: 'stretch',
}, tabletPortraitBreakpoint({
  padding:'100px 53px',
})];

function EventDetails() {
  return (
    <Div backgroundColor="black">
      <Container css={containerRules}>
        <Paragraph css={{ textAlign: 'left' }}>
          <Span fontSize="22px" fontWeight="bold" textTransform="uppercase" fontFamily={headingFamily}>East Bay DSA Special Election Meeting</Span><br />
          Saturday, June 24, 2017<br />
          10:30am—2:30pm<br />
          <a href="https://goo.gl/maps/UYwNXR72hkQ2" target="_blank">California Nurses Association, 155 Grand Ave, Oakland, CA 94612</a>
        </Paragraph>
        <Paragraph>The space is wheelchair-accessible and childcare will be provided. Please contact <a href="mailto:elections@eastbaydsa.org">elections@eastbaydsa.org</a> with any questions!</Paragraph>
      </Container>
    </Div>
  )
}

export default EventDetails;