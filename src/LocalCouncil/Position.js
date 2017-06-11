import React from 'react';
import { Div } from 'glamorous';

import Candidate from './Candidate';
import PositionHeader from './PositionHeader';

import NavAnchor from '../shared/NavAnchor';
import WavyBorder from '../shared/WavyBorder';
import RichText from '../shared/RichText';
import Container from '../shared/Container';
import Index from '../shared/Index';

import { tabletPortraitBreakpoint } from '../styles/breakpoints';

const wavyBorderRules = [{
  padding: '30px 20px',
}, tabletPortraitBreakpoint({
  padding: '30px 40px',
})];

const containerRules = {
  maxWidth: '600px',
  marginBottom: '100px',
  paddingTop: '100px',
}

const candidateLinksRules = [{
  position: 'relative',
  border: '1px solid black',
  padding: '10px 0 10px',
  background: 'white',
  marginRight: '-34px',
  alignSelf: 'stretch',
}, tabletPortraitBreakpoint({
  padding: '10px 40px',
  left: '60px',
  margin: '20px -80px 40px 0',
})];

function Position(props) {
  const candidateLinks = props.candidates.map(candidate => {
    return { to: `/${props.slug}/${candidate.slug}`, label: candidate.name }
  });

  return (
    <div>
      <NavAnchor section={props.slug}>
        <Container css={containerRules}>
          <WavyBorder css={wavyBorderRules}>
            <PositionHeader title={props.title}></PositionHeader>
            <RichText content={props.description}></RichText>
            <Div css={candidateLinksRules}>
              <Index title="Nominees" links={candidateLinks} />
            </Div>
          </WavyBorder>
        </Container>
      </NavAnchor>
      {props.candidates.map(candidate => {
        return <Candidate key={candidate.name} section={props.slug} {...candidate} />
      })}
    </div>
  );
}

export default Position;
