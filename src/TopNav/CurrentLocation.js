import React from 'react';
import { Div, Span } from 'glamorous';
import { Link } from 'react-router-dom';

import { tabletLandscapeBreakpoint } from '../styles/breakpoints';

const containerRules = [{
  display: 'none',
  alignItems: 'stretch',
  borderTop: '1px solid black'
}, tabletLandscapeBreakpoint({
  display: 'flex',
})];

const linkStyles = {
  flex: '1 1 0',
  display: 'flex',
  alignItems: 'stretch',
};

const sectionLabelRules = {
  fontSize: '16px',
  color: 'black',
  cursor: 'pointer',
  padding: '5px 10px',
  flex: '1 1 0',
  textTransform: 'uppercase',
  fontWeight: '700',
  margin: '0',
  lineHeight: '1.3',
  letterSpacing: '0.5px',
  ':hover': {
    backgroundColor: 'red',
    color: 'white'
  }
};

const navigationLabelRules = {
  display: 'block',
  fontWeight: 'normal',
  fontSize: '14px',
}

const currentRules = {
  borderRight: '1px solid black',
  borderLeft: '1px solid black',
}

function CurrentLocation(props) {
  const currentSectionPath = `/${props.currentSection}`;
  let currentSectionLink = props.links.find(l => l.to === currentSectionPath);
  const currentSectionIndex = props.links.indexOf(currentSectionLink);
  const nextSectionLink = props.links[currentSectionIndex + 1];
  const previousSectionLink = props.links[currentSectionIndex - 1];
  if (currentSectionLink === undefined) { currentSectionLink = {} }

  return (
    <Div css={containerRules}>
      {previousSectionLink ? <Link style={linkStyles} to={previousSectionLink.to}>
        <Span css={sectionLabelRules}>
          <Span css={navigationLabelRules}>Go to previous section</Span>
          {previousSectionLink.label}
        </Span>
      </Link> : <Span style={linkStyles}/>}
      {currentSectionLink.to ? <Link style={linkStyles} to={currentSectionLink.to}>
        <Span css={[sectionLabelRules, currentRules]}>
          <Span css={navigationLabelRules}>Current section </Span>
          {currentSectionLink.label}
        </Span>
      </Link> : <Span style={linkStyles} css={currentRules} />}
      {nextSectionLink ? <Link style={linkStyles} to={nextSectionLink.to}>
        <Span css={sectionLabelRules}>
          <Span css={navigationLabelRules}>Go to next section </Span>
          {nextSectionLink.label}
        </Span>
      </Link> : <Span style={linkStyles}/>}
    </Div>
  );
}

export default CurrentLocation;
