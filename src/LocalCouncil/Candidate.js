import React, { Component } from 'react';
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

const nameRules = {
  fontSize: "36px",
  fontFamily: headingFamily,
  margin: 0,
  textTransform: 'uppercase'
}

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

class
Candidate extends Component {
  render() {
    const Name = (props) => {
      return <H4 css={nameRules}>{props.children}</H4>
    }

    const Image = (props) => {
      return <Img css={imageRules} src={this.props.imageUrl} alt={this.props.name} />
    }

    const Question = (props) => {
      return (
        <Span fontWeight="bold" textTransform="uppercase">{props.text} </Span>
      );
    }

    const Answer = (props) => { return <Span>{props.text}</Span> }

    return (
      <Section key={this.props.name} tier={4} id={this.props.slug}>
        <WavyBorder css={wavyBorderRules}>
          <Image />
          <CandidateHeader>
            <Name>{this.props.name}</Name>
          </CandidateHeader>
          <Paragraph>
            <Question text="Please describe your involvement in East Bay DSA" />
            <Answer text={this.props.involvement} />
          </Paragraph>
          <Paragraph>
            <Question text="Why are you qualified for this specific role?" />
            <Answer text={this.props.qualifications} />
          </Paragraph>
          <Paragraph>
            <Question text="What do you hope to accomplish for the chapter if elected to this role?" />
            <Answer text={this.props.goals} />
          </Paragraph>
        </WavyBorder>
        {this.props.nominations.length > 0 ? <Nominations nominations={this.props.nominations}/> : null} 
      </Section>
    )
  }
}

Candidate.defaultProps = {
  nominations: [],
}

export default Candidate;
