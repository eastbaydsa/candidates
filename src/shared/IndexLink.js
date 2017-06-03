import React, { Component } from 'react';
import { Div, Span } from 'glamorous';
import { Link } from 'react-router-dom';

import { red0 } from '../styles/colors'

const containerRules = {
  display: 'flex',
  alignItems: 'center',
  minHeight: '30px',
  fontSize: '24px',
  ":hover": {
    color: red0
  },
}

const labelRules = {
  textTransform: 'uppercase',
  fontWeight: 700,
  textDecoration: 'none'
}

const dashRules = {
  flex: '1 1 0',
  position: 'relative',
  borderBottom: '1px solid black',
  margin: '0 10px',
}

export default function IndexLink(props) {
  return (
    <Link to={props.to}>
      <Div css={containerRules}>
        <Span css={labelRules}>{props.label}</Span>
        <Span css={dashRules}></Span>
      </Div>
    </Link>
  );
}
