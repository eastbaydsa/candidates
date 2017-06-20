import React from 'react';
import { Div, H4 } from 'glamorous';

import { tabletPortraitBreakpoint } from '../styles/breakpoints';

import QA from '../shared/QA';

const containerRules = [
  {
    padding: '20px 20px 13px 20px',
    backgroundColor: 'white',
    border: '1px solid black',
    margin: '-70px 60px 0 0',
    position: 'relative',
    boxSizing: 'border-box',
  },
  tabletPortraitBreakpoint({
    margin: '-70px -40px 0 40px',
  }),
];

const labelRules = [{
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  margin: '0 0 20px 0'
}];

function Nominations(props) {
  return (
    <Div css={containerRules} >
      <H4 css={labelRules}>Nominated By:</H4>
      {props.nominations.map((nomination, i) => {
        return (
          <QA key={`${nomination.name}-${i}`} question={nomination.name} answer={nomination.comment} />
        );
      })}
    </Div>
  );
}

export default Nominations;
