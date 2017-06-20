import React from 'react';

import Candidate from './Candidate';

const involvementQuestion = "Please describe your involvement in East Bay DSA";
const qualifiedQuestion = "Why are you qualified for this specific role?";
const accomplishQuestion = "What do you hope to accomplish for the chapter if elected to this role?";

function Candidates(props) {
  const candidates = props.candidates.map(candidate => {
    const questions = [
      { question: involvementQuestion, answer: candidate.involvement },
      { question: qualifiedQuestion, answer: candidate.qualifications },
      { question: accomplishQuestion, answer: candidate.goals }
    ];

    return <Candidate key={candidate.name} section={props.slug} CandidatesTitle={props.title} questions={questions} {...candidate} />
  });

  return <div>{candidates}</div>
}

export default Candidates;
