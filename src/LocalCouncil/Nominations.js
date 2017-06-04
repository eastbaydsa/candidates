import React from 'react';
import { Div, H4 } from 'glamorous';

import { tabletPortraitBreakpoint, tabletLandscapeBreakpoint } from '../styles/breakpoints';

import Paragraph from '../shared/Paragraph';

const wrapperRules = [{
    padding: '20px',
    backgroundColor: 'white',
    border: '1px solid black',
    margin: '-20px 60px 0 0',
  }, tabletPortraitBreakpoint({
    position: 'absolute',
    margin: 0,
    top: '170px',
    right: '-10px',
    width: '160px',
  }),
  tabletLandscapeBreakpoint({
    right: '-90px',
  }),
];

const labelRules = [{
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  margin: '0 0 10px 0'
}];

function Nominations(props) {
  return (
    <Div css={wrapperRules} >
      <H4 css={labelRules}>Nominated By:</H4>
      {props.nominations.map(nomination => {
        return <Paragraph key={nomination} marginBottom="10px">{nomination}</Paragraph>
      })}
    </Div>
  );
}

export default Nominations;
