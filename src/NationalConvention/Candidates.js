import React from 'react';

import Candidate from './Candidate';
import Container from '../shared/Container';
import QA from '../shared/QA';

const containerRules = {
  paddingBottom: '150px'
}

function Candidates(props) {
  return (
    <Container css={containerRules}>
      {props.candidates.length === 0 ? <QA question="No one yet"></QA> : null}
      {props.candidates.map(candidate => {
        return <Candidate key={candidate.name} {...candidate} />
      })}
    </Container>
  );
}

export default Candidates;
