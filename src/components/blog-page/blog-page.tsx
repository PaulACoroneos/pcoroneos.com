import * as React from 'react';
import { AboutWrapper, AboutMeContent } from '../about-page/about-page.styles';
import { Hero } from '../hero';
import { Stack } from '../blog-posts/stack';
import { UpdatingBootcamp } from '../blog-posts/updating-bootcamp';
import { RoleTab } from '../blog-posts/role-tab';
import { ParseInt } from '../blog-posts/parse-int';
import { HelloWorld } from '../blog-posts/hello-world';

export const BlogPage: React.FC = () =>
  <AboutWrapper>
    <Hero header='Blog Posts' subHeader='Here are all the posts I have written' />
    <AboutMeContent>
      <Stack />
      <UpdatingBootcamp />
      <RoleTab />
      <ParseInt />
      <HelloWorld />
    </AboutMeContent>
  </AboutWrapper>;
