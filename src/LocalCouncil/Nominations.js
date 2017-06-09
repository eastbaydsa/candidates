import React from 'react';
import { Div, H4 } from 'glamorous';

import { tabletPortraitBreakpoint, tabletLandscapeBreakpoint } from '../styles/breakpoints';

import Paragraph from '../shared/Paragraph';

const containerRules = [{
    padding: '20px',
    backgroundColor: 'white',
    border: '1px solid black',
    margin: '-70px 60px 0 0',
    position: 'relative',
    boxSizing: 'border-box',
  }, tabletPortraitBreakpoint({
    position: 'absolute',
    margin: 0,
    top: '420px',
    right: '-10px',
    width: '180px',
  }),
  tabletLandscapeBreakpoint({
    right: '-90px',
    top: '530px',
    width: '260px',
  }),
];

const labelRules = [{
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  margin: '0 0 10px 0'
}];

const nameRules = {
  marginBottom: '7px',
}

function Nominations(props) {
  return (
    <Div css={containerRules} >
      <H4 css={labelRules}>Nominated By:</H4>
      {props.nominations.map((nomination, i) => {
        return <Paragraph key={nomination.name + i} css={nameRules}>{nomination.name}</Paragraph>
      })}
    </Div>
  );
}

export default Nominations;
