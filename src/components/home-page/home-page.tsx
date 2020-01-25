import * as React from 'react';
import {
  HomePageWrapper,
  StyledSection,
} from './home-page.styles';
import { Hero } from '../hero';
import { BlogContent } from '../blog-post/blog-post.styles';
import BlogLink from '../blog-link/blog-link';
import { BLOG_POST_LINK_DATA } from '../blog-link/blog-link-data';

export const HomePage: React.FC = () =>
  <HomePageWrapper>
    <Hero header='Howdy!' subHeader='My name is Paul. I am a front-end developer with a passion for solving problems.' />
    <StyledSection>
      <h2 style={{ padding: '16px' }}>Recent Blog Posts</h2>
      <BlogContent>
        {BLOG_POST_LINK_DATA.map((post, index) => index < 5 && <BlogLink href={post.href} date={post.date} title={post.title} description={post.description} key={post.title} />)}
      </BlogContent>
    </StyledSection>
  </HomePageWrapper>
  ;
