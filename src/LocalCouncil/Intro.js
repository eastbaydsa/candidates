import React, { Component } from 'react';
import NavAnchor from '../shared/NavAnchor';
import WavyBorder from '../shared/WavyBorder';
import Paragraph from '../shared/Paragraph';
import CandidateHeader from '../shared/CandidateHeader';
import Container from '../shared/Container';

export default function Intro() {
  return (
    <NavAnchor id="intro">
      <Container marginTop="120px" marginBottom="120px">
        <WavyBorder>
          <CandidateHeader>East Bay DSA Local Council Elections</CandidateHeader>
          <Paragraph>{"Tofu unicorn mollit vape, sunt seitan activated charcoal tumeric hot chicken disrupt. Veniam photo booth cold-pressed, sriracha banh mi officia ramps readymade vape roof party palo santo laborum 3 wolf moon next level. Selfies plaid esse venmo, pabst elit disrupt authentic hot chicken ullamco organic prism cray try-hard. Health goth ut biodiesel selvage tbh, vegan pop-up. Godard selvage kale chips pour-over, squid yr helvetica kombucha pop-up. You probably haven't heard of them leggings nisi, fugiat excepteur enim nostrud freegan franzen nihil aliquip cloud bread skateboard mustache narwhal. Elit tacos id shabby chic, kogi cronut leggings keffiyeh irure activated charcoal ea anim tumblr."}</Paragraph>
          <Paragraph>{"Meditation minim knausgaard chicharrones velit nesciunt. Austin tumblr skateboard voluptate. Cray bespoke deserunt, listicle aliqua accusamus lyft reprehenderit craft beer nihil next level chicharrones quis. Ex cronut enamel pin godard, taiyaki pork belly vape jianbing echo park assumenda art party austin. Dolore pour-over activated charcoal cloud bread lumbersexual. Polaroid mlkshk blog, quis taxidermy enim twee humblebrag. Tote bag 3 wolf moon viral portland copper mug."}</Paragraph>
        </WavyBorder>
      </Container>
    </NavAnchor>
  );
}
