import React from 'react';

function Candidate(props) {
  return (
    <div key={props.name}>
      <h3>{props.name}</h3>
      <div>Please describe your involvement in East Bay DSA</div>
      <div>{props.involvement}</div>
    </div>
  );
}

export default Candidate;
