import React from 'react';
import { Span, H4, Img } from 'glamorous';

import { headingFamily } from '../styles/fonts';
import { tabletPortraitBreakpoint, tabletLandscapeBreakpoint } from '../styles/breakpoints';

import CandidateHeader from '../shared/CandidateHeader';
import WavyBorder from '../shared/WavyBorder';
import Paragraph from '../shared/Paragraph';
import NavAnchor from '../shared/NavAnchor';
import Container from '../shared/Container';

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
  }),
  tabletLandscapeBreakpoint({
    // padding: '80px 200px 80px 80px',
  })
];

const imageRules = [
  {
    position: 'absolute',
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    // top: '-170px',
    top: '-120px',
    right: '30px',
    // left: '50%',
    // transform: 'translate(-50%)',
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

const Question = (props) => {
  return (
    <Span fontWeight="bold" textTransform="uppercase">{props.text} </Span>
  );
}

const Answer = (props) => { return <Span>{props.text}</Span> }

function Candidate(props) {
  return (
    <NavAnchor id={props.slug}>
      <Container css={containerRules}>
        <WavyBorder css={wavyBorderRules}>
          {props.imageUrl ? <Image {...props} /> : null}
          <CandidateHeader title={props.name} />
          <Paragraph>
            <Question text="Please describe your involvement in East Bay DSA" />
            <Answer text={props.involvement} />
          </Paragraph>
          <Paragraph>
            <Question text="Why are you qualified for this specific role?" />
            <Answer text={props.qualifications} />
          </Paragraph>
          <Paragraph>
            <Question text="What do you hope to accomplish for the chapter if elected to this role?" />
            <Answer text={props.goals} />
          </Paragraph>
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