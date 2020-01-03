import * as React from 'react';
import {
  HomePageWrapper,
  StyledSection,
} from './home-page.styles';
import { Hero } from '../hero';
import { HelloWorld } from '../blog-posts/hello-world';
import { ParseInt } from '../blog-posts/parse-int';
import { RoleTab } from '../blog-posts/role-tab';

export const HomePage: React.FC = () =>
  <>

    <HomePageWrapper>
      <Hero />
      <StyledSection>
        <h2>Recent Blog Posts</h2>
        <RoleTab />
        <ParseInt />
        <HelloWorld />
      </StyledSection>
    </HomePageWrapper>
  </>
  ;
