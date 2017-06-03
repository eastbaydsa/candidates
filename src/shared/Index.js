import React, { Component } from 'react';
import { Div } from 'glamorous';
import IndexLink from '../shared/IndexLink';

const rules = {
  padding: '0 20px'
}

export default function Index(props) {
  return (
    <Div css={rules}>
      {props.links.map(link => {
        return <IndexLink key={link.to} {...link}></IndexLink>
      })}
    </Div>
  );
}
