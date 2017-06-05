import React from 'react';
import { Div, H3, H4 } from 'glamorous';

import { tabletPortraitBreakpoint, tabletLandscapeBreakpoint } from '../styles/breakpoints';
import { headingFamily } from '../styles/fonts';

const containerRules = [{
  marginTop: '-70px',
  marginBottom: '30px',
  marginLeft: '-60px',
  backgroundColor: 'white',
  border: '1px solid black',
  padding: '20px 40px',
}, tabletPortraitBreakpoint({
  marginLeft: '-80px',
})];

const titleRules = [{
  margin: 0,
  fontSize: '22px',
  lineHeight: '26px',
  fontFamily: headingFamily,
}, tabletPortraitBreakpoint({
  fontSize: '28px',
  lineHeight: '1.2',
}), tabletLandscapeBreakpoint({
  fontSize: '36px',
})];

const subtitleRules = {
  margin: 0,
  fontWeight: 'normal',
  letterSpacing: '0.5px',
};

function IntroHeader(props) {
  return (
    <Div css={containerRules}>
      <H3 css={titleRules}>{props.title}</H3>
      <H4 css={subtitleRules}>{props.subtitle}</H4>
    </Div>
  );
}

export default IntroHeader;
