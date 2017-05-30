import React, { Component } from 'react';
import { Span, H4, Img } from 'glamorous';

import { gray6 } from '../styles/colors';
import { headingFamily } from '../styles/fonts';
import { tabletPortraitBreakpoint } from '../styles/breakpoints';

import Section from '../shared/Section';
import SectionHeader from '../shared/SectionHeader';
import WavyBorder from '../shared/WavyBorder';
import Paragraph from '../shared/Paragraph';

const imageRules = [
  {
    display: 'block',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    position: 'absolute',
    bottom: '0',
    right: '-250px',
  },
  tabletPortraitBreakpoint({
    alignSelf: 'right',
  })
];

const nameRules = {
  fontSize: "24px",
  fontFamily: headingFamily,
  margin: 0,
  textTransform: 'uppercase'
}

const answersRules = tabletPortraitBreakpoint({
  paddingTop: '100px'
});

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
        <WavyBorder padding="80px 200px 200px 80px">
          <SectionHeader>
            <Name>{this.props.name}</Name>
          </SectionHeader>
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
          <Image />
        </WavyBorder>
      </Section>
    )
  }
}

export default Candidate;
