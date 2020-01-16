import * as React from 'react';
import {
  HomePageWrapper,
  StyledSection,
} from './home-page.styles';
import { Hero } from '../hero';
import { HelloWorld } from '../blog-posts/hello-world';
import { ParseInt } from '../blog-posts/parse-int';
import { RoleTab } from '../blog-posts/role-tab';
import { UpdatingBootcamp } from '../blog-posts/updating-bootcamp'
import { Stack } from '../blog-posts/stack'

const header = 'Howdy!';
const subHeader = 'My name is Paul. I am a front-end developer with a passion for solving problems.';

export const HomePage: React.FC = () =>
  <HomePageWrapper>
    <Hero header={header} subHeader={subHeader} />
    <StyledSection>
      <h2>Recent Blog Posts</h2>
      <Stack />
      <UpdatingBootcamp />
      <RoleTab />
      <ParseInt />
      <HelloWorld />
    </StyledSection>
  </HomePageWrapper>
  ;
