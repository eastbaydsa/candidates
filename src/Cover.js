import React from 'react';
import { Div, H1, H2, H3 } from 'glamorous';
import smoothScroll from 'smooth-scroll';

import NavAnchor from './shared/NavAnchor';
import { red0, grayDark } from './styles/colors';
import { headingFamily } from './styles/fonts';
import { headerHeight } from './styles/layout';

const outerContainerRules = {
  position: 'relative',
  backgroundColor: grayDark,
  color: red0,
  border: `10px solid ${red0}`,
  marginTop: '60px',
  minHeight: `calc(95vh - ${headerHeight})`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
}

const titleRules = {
  fontFamily: headingFamily,
  fontSize: '8vmax',
  lineHeight: '7vmax',
  position: 'absolute',
  top: '4vmax',
  right: '4vmax',
  textAlign: 'right',
  margin: 0,
  textTransform: 'uppercase'
}

const subtitleRules = {
  position: 'absolute',
  bottom: '4vmax',
  left: '4vmax',
  fontSize: '4vmax',
  lineHeight: '3.9vmax',
  margin: '0',
}

const yearRules = {
  fontFamily: headingFamily,
  fontWeight: '300',
  fontSize: '8vmax',
  lineHeight: '8vmax',
  position: 'absolute',
  bottom: '4vmax',
  right: '4vmax',
  textAlign: 'right',
  margin: 0,
}

const gradientRules = {
  height: '16vmax',
  backgroundImage: 'linear-gradient(-180deg, rgba(255,0,0,255) 0%, rgba(255,0,0,0) 90%)',
  marginTop: '1vmax'
}

function scrollToIntro() {
  const intro = document.querySelector('#intro');
  smoothScroll.animateScroll(intro);
}

function Cover() {
  return (
    <NavAnchor id="">
      <Div css={outerContainerRules} onClick={scrollToIntro}>
          <H1 css={titleRules}>
            <div>General </div>
            <div>Meeting </div>
            <div>Voting </div>
            <div>Guide </div>
          </H1>
          <H2 css={subtitleRules}>
            <div>East Bay</div>
            <div>Democratic </div>
            <div>Socialists</div>
            <div>of America</div>
            <Div css={gradientRules}></Div>
          </H2>
          <H3 css={yearRules}>2017</H3>
      </Div>
    </NavAnchor>
  );
}

export default Cover;