import React from 'react';
import QA from '../shared/QA';

function Candidate(props) {
  return (
    <QA
      question={props.name}
      answer={props.involvement}
    />
  );
}

export default Candidate;
