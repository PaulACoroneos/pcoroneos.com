import * as React from 'react';
import { AboutWrapper, AboutMeContent } from '../about-page/about-page.styles';
import { Hero } from '../hero';

export const BlogPage: React.FC = () =>
  <AboutWrapper>
    <Hero header='Blog Posts' subHeader='Here are all the posts I have written' />
    <AboutMeContent>
      <a href='stack'>stack</a>
      <a href='updating-bootcamp'>Updating Bootcamp</a>
      <a href='role-tab'>Role Tab</a>
      <a href='parse-int'>Parse Int</a>
      <a href='hello-world'>Hello World</a>
    </AboutMeContent>
  </AboutWrapper>;
