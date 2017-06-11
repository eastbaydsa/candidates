import React from 'react';
import { Div, Span } from 'glamorous';
import { Link } from 'react-router-dom';

import { tabletPortraitBreakpoint } from '../styles/breakpoints';
import { headerHeight } from '../styles/layout';

const rules = {
  display: 'flex',
  paddingLeft: '20px',
  height: headerHeight,
}

const linkRules = [{
  fontSize: '18px',
  fontWeight: '700',
  color: 'black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  marginLeft: '-20px',
  padding: '0 30px',
  ':hover': {
    backgroundColor: 'red',
    color: 'white'
  }
}, tabletPortraitBreakpoint({
  fontSize: '24px',
})]

const menuRules = {
  borderRight: '1px solid black',
}

const eventLinkRules = {
  borderLeft: '1px solid black',
}

function CurrentLocation(props) {
  const currentLinkPath = `/${props.currentSection}`;
  let currentLink = props.links.find(l => l.to === currentLinkPath);
  if (currentLink === undefined) { currentLink = {} }

  return (
    <Div css={rules}>
      <Link to={currentLink.to}>
        <Span css={[linkRules, menuRules]}>{currentLink.label}</Span>
      </Link>
      <Div flex="1 1 0" />
      {/*<Link>
        <Span css={[linkRules, eventLinkRules]}>JOIN US</Span>
      </Link>*/}
    </Div>
  );
}

export default CurrentLocation;
