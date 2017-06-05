import React from 'react';
import { Span, H4, Img } from 'glamorous';

import { headingFamily } from '../styles/fonts';
import { tabletPortraitBreakpoint, tabletLandscapeBreakpoint } from '../styles/breakpoints';

import Section from '../shared/Section';
import CandidateHeader from '../shared/CandidateHeader';
import WavyBorder from '../shared/WavyBorder';
import Paragraph from '../shared/Paragraph';

import Nominations from './Nominations';

const imageRules = [
  {
    position: 'absolute',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    top: '-170px',
    right: '-20px'
  },
  tabletPortraitBreakpoint({
    top: 'auto',
    bottom: '80px',
    right: '-10px',
  }),
  tabletLandscapeBreakpoint({
    right: '-90px',
    width: '260px',
    bottom: '40px',
    height: '260px',
  })
];

const wavyBorderRules = [
  {
    padding: '20px',
    margin: '0 -20px',
  }, tabletPortraitBreakpoint({
    padding: '80px 200px 80px 80px',
    margin: 0,
  }),
  tabletLandscapeBreakpoint({
    padding: '80px 200px 260px 80px',
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
    <Section key={props.name} tier={4} id={props.slug}>
      <WavyBorder css={wavyBorderRules}>
        <Image />
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
    </Section>
  )
}

Candidate.defaultProps = {
  nominations: [],
}

export default Candidate;