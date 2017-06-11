import React from 'react';

import Index from './shared/Index';
import Container from './shared/Container';
import NavAnchor from './shared/NavAnchor';

const containerRules = {
  paddingTop: '250px',
  paddingBottom: '100px',
}
function TOC(props) {
  return (
    <NavAnchor section="toc">
      <Container css={containerRules}>
        <Index title="Your election packet" links={props.links} />
      </Container>
    </NavAnchor>
  )
}

export default TOC;
