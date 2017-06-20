import React from 'react';
import { Img } from 'glamorous';

import { tabletPortraitBreakpoint, tabletLandscapeBreakpoint } from '../styles/breakpoints';

import CandidateHeader from '../shared/CandidateHeader';
import WavyBorder from '../shared/WavyBorder';
import NavAnchor from '../shared/NavAnchor';
import Container from '../shared/Container';
import QA from '../shared/QA';

import Nominations from './Nominations';

const containerRules = {
  paddingTop: '150px',
  paddingBottom: '100px',
}

const wavyBorderRules = [
  {
    padding: '20px 20px 70px 20px',
    margin: '0 -20px',
  }, tabletPortraitBreakpoint({
    padding: '80px 200px 80px 80px',
    margin: 0,
  })
];

const imageRules = [
  {
    position: 'absolute',
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    top: '-120px',
    right: '30px',
  },
  tabletPortraitBreakpoint({
    top: '95px',
    right: '-10px',
    width: '150px',
    height: '150px',
  }),
  tabletLandscapeBreakpoint({
    right: '-90px',
    width: '260px',
    bottom: '40px',
    height: '260px',
  })
];

const Image = (props) => {
  return <Img css={imageRules} src={props.imageUrl} alt={props.name} />
}

function Candidate(props) {
  return (
    <NavAnchor section={props.section} candidate={props.slug}>
      <Container css={containerRules}>
        <WavyBorder css={wavyBorderRules}>
          <Image {...props} />
          <CandidateHeader invert={props.invertHeader} title={props.name} subtitle={`${props.positionTitle} Nominee`}/>
          {props.questions.map(q => <QA question={q.question} answer={q.answer} key={q.question} /> )}
        </WavyBorder>
        {props.nominations.length > 0 ? <Nominations nominations={props.nominations}/> : null} 
      </Container>
    </NavAnchor>
  )
}

Candidate.defaultProps = {
  nominations: [],
}

export default Candidate;
