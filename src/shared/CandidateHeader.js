import React from 'react';
import { Div, H4, H5 } from 'glamorous';

import { tabletPortraitBreakpoint } from '../styles/breakpoints';
import { headingFamily } from '../styles/fonts';

const containerRules = [{
  marginTop: '-80px',
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
  textTransform: 'uppercase',
  lineHeight: '1',
}

const subtitleRules = {
  margin: 0,
  fontWeight: 'normal',
  letterSpacing: '0.5px',
};

function CandidateHeader(props) {
  const rules = Array(containerRules);
  if (props.invert) {
    rules.push({ filter: 'invert()' });
  }
  return (
    <Div css={rules}>
      <H4 css={titleRules}>{props.title}</H4>
      <H5 css={subtitleRules}>{props.subtitle}</H5>
    </Div>
  );
}

export default CandidateHeader;
