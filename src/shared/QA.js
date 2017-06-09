import React from 'react';
import { Span } from 'glamorous';

import Paragraph from './Paragraph';

const Question = (props) => {
  return (
    <Span fontWeight="bold" textTransform="uppercase">{props.text} </Span>
  );
}

const Answer = (props) => { return <Span>{props.text}</Span> }

function QA(props) {
  return (
    <Paragraph>
      <Question text={props.question} />
      <Answer text={props.answer} />
    </Paragraph>
  )
}

export default QA;
