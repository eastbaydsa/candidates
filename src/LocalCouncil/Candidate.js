import React, { Component } from 'react';
import Section from '../shared/Section';
import Row from '../shared/Row';
import Column from '../shared/Column';
import { gray6 } from '../styles/colors';
import { Div, H4, Img } from 'glamorous';
import { tabletPortraitBreakpoint } from '../styles/breakpoints';

const imageRules = [
  {
    display: 'block',
    width: '300px',
    height: '300px',
  },
  tabletPortraitBreakpoint({
    alignSelf: 'right',
  })
];

const answersRules = tabletPortraitBreakpoint({
  paddingTop: '100px'
});

class
Candidate extends Component {
  render() {
    const Name = (props) => {
      return <H4 fontSize="24px">{props.children}</H4>
    }

    const Image = (props) => {
      return <Img css={imageRules} src={this.props.imageUrl} alt={this.props.name} />
    }

    const Question = (props) => {
      return (
        <Div fontStyle="italic" fontSize="20px" color={gray6}>{props.text}</Div>
      );
    }

    const Answer = (props) => { return <p>{props.text}</p> }

    return (
      <Section key={this.props.name} tier={4} id={this.props.slug}>
        <Row>
          <Column alignItems="right" flexDirection="row-reverse">
            <Image />
          </Column>
          <Column css={answersRules}>
            <Name>{this.props.name}</Name>
            <Question text="Please describe your involvement in East Bay DSA" />
            <Answer text={this.props.involvement} />
            <Question text="Why are you qualified for this specific role?" />
            <Answer text={this.props.qualifications} />
            <Question text="What do you hope to accomplish for the chapter if elected to this role?" />
            <Answer text={this.props.goals} />
          </Column>
        </Row>
      </Section>
    )
  }
}

export default Candidate;
