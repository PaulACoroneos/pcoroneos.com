import * as React from 'react';
import { AboutWrapper } from './about-page.styles';
import { Hero } from '../hero';

const header = 'About Me';
const subHeader = 'A little bit about myself.'

export const AboutPage: React.FC = () =>
  <AboutWrapper>
    <Hero header={header} subHeader={subHeader} />
    <span>Check back soon!</span>
  </AboutWrapper>;
