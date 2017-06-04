import React from 'react';
import { Div, Span } from 'glamorous';
import { Link } from 'react-router-dom';

import { red0 } from '../styles/colors'

const containerRules = {
  display: 'flex',
  alignItems: 'center',
  minHeight: '30px',
  fontSize: '24px',
  textTransform: 'uppercase',
  fontWeight: 700,
  ":hover": {
    color: red0
  },
}

const dashRules = {
  flex: '1 1 0',
  position: 'relative',
  borderBottom: '1px solid black',
  margin: '0 10px',
}

export default function IndexLink(props) {
  const prefix = props.number >= 10 ? '' : '0';

  return (
    <Link to={props.to}>
      <Div css={containerRules}>
        <span>{props.label}</span>
        <Span css={dashRules}></Span>
        <span>{`${prefix}${props.number}`}</span>
      </Div>
    </Link>
  );
}
