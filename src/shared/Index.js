import React from 'react';
import { Div, H5 } from 'glamorous';
import IndexLink from '../shared/IndexLink';

const rules = {
  padding: '0 20px',
  marginBottom: '10px',
}

const titleRules = {
  textTransform: 'uppercase',
  fontWeight: 700,
  textDecoration: 'none',
  fontSize: '24px',
  margin: '0 0 10px 0'
}

export default function Index(props) {
  return (
    <Div css={rules}>
      <H5 css={titleRules}>{props.title}</H5>
      {props.links.map((link, i) => {
        return <IndexLink number={i+1} key={link.to} {...link}></IndexLink>
      })}
    </Div>
  );
}
