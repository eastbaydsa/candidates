import React from 'react';
import { Div, H4 } from 'glamorous';

import { tabletPortraitBreakpoint } from '../styles/breakpoints';
import { headingFamily } from '../styles/fonts';

const containerRules = [{
  marginTop: '-80px',
  marginRight: '60px',
  marginBottom: '40px',
  textAlign: 'center',
  backgroundColor: 'white',
  border: '1px solid black',
  padding: '20px',
  alignSelf: 'stretch',
}, tabletPortraitBreakpoint({
  marginTop: '-125px',
  marginRight: '0',
})];

const titleRules = {
  fontSize: "36px",
  fontFamily: headingFamily,
  margin: 0,
  textTransform: 'uppercase'
}

function SectionHeader(props) {
  return (
    <Div css={containerRules}>
      <H4 css={titleRules}>{props.title}</H4>
    </Div>
  );
}

export default SectionHeader;
