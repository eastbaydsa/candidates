import React from 'react';
import Candidate from './Candidate';
import Section from '../shared/Section';

function Candidates(props) {
  return (
    <Section tier={4}>
      {props.candidates.map(candidate => {
        return <Candidate key={candidate.name} {...candidate} />
      })}
    </Section>
  );
}

export default Candidates;
