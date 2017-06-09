import React from 'react';

import Candidate from './Candidate';
import Container from '../shared/Container';

const containerRules = {
  paddingBottom: '150px'
}

function Candidates(props) {
  return (
    <Container css={containerRules}>
      {props.candidates.map(candidate => {
        return <Candidate key={candidate.name} {...candidate} />
      })}
    </Container>
  );
}

export default Candidates;
