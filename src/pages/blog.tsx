import * as React from 'react';
import { AboutWrapper } from '../components/about-page/about-page.styles';
import { Hero } from '../components/hero';
import { BlogContent } from '../components/blog-post/blog-post.styles';
import BlogLink from '../components/blog-link/blog-link';
import { BLOG_POST_LINK_DATA } from '../components/blog-link/blog-link-data';

export const Blog: React.FC = () =>
  <AboutWrapper>
    <Hero header='Blog Posts' subHeader='Here are all the posts I have written' />
    <BlogContent>
      {BLOG_POST_LINK_DATA.map(post => <BlogLink href={post.href} date={post.date} title={post.title} description={post.description} key={post.title} />)}
    </BlogContent>
  </AboutWrapper>
  ;
export default Blog;
