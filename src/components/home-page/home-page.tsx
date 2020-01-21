import * as React from 'react';
import {
  HomePageWrapper,
  StyledSection,
} from './home-page.styles';
import { Hero } from '../hero';

export const HomePage: React.FC = () =>
  <HomePageWrapper>
    <Hero header='Howdy!' subHeader='My name is Paul. I am a front-end developer with a passion for solving problems.' />
    <StyledSection>
      <h2>Recent Blog Posts</h2>
    </StyledSection>
  </HomePageWrapper>
  ;
