import React from 'react';
import { Div, Span } from 'glamorous';
import { Link } from 'react-router-dom';

import { red0 } from '../styles/colors'

const containerRules = {
  display: 'flex',
  alignItems: 'center',
  minHeight: '30px',
  marginBottom: '5px',

  fontSize: '24px',
  fontWeight: 700,
  textTransform: 'uppercase',

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

function IndexLink(props) {
  const prefix = props.number >= 10 ? '' : '0';

  return (
    <Link to={props.to} onClick={props.onClick}>
      <Div css={containerRules}>
        <span>{props.label}</span>
        <Span css={dashRules}></Span>
        <span>{`${prefix}${props.number}`}</span>
      </Div>
    </Link>
  );
}

export default IndexLink;
