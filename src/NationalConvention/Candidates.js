import React from 'react';

import Candidate from '../LocalCouncil/Candidate';
import Container from '../shared/Container';
import QA from '../shared/QA';

const containerRules = {
  paddingBottom: '150px'
}

function Candidates(props) {
  return (
    <Container css={containerRules}>
      {props.candidates.length === 0 ? <QA question="No one yet"></QA> : null}
      {props.candidates.map((candidate, i) => {
        const questions = [];
        if (candidate.reason) {
          questions.push({ question: "Why do you want to represent your comrades at the DSA national convention?", answer: candidate.reason });
        }
        return <Candidate invertHeader={true} key={candidate.name + i} section="dsa-national-convention-delegates" positionTitle="National Convention Delegate" questions={questions} {...candidate} />
      })}
    </Container>
  );
}

export default Candidates;
