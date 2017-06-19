import React from 'react';
import { Div } from 'glamorous';

import QA from '../shared/QA';

function Candidate(props) {
  return (
    <Div>
      <QA
        question={props.name}
        answer={props.reason}
      />
    </Div>
  );
}

export default Candidate;
