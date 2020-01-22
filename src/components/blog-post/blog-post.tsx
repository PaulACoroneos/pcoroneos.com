import * as React from 'react';
import { BlogpostWrapper, BlogWrapper, StyledBackLink, BlogPostImage } from './blog-post.styles';
import { Hero } from '../hero';

interface BlogPostProps {
  header: string;
  date: string;
  src: string;
  alt: string;
  desc: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ children, header, date, src, alt, desc }) =>
  <BlogWrapper>
    <Hero header={header} subHeader={`Date posted: ${date}`} />
    <BlogpostWrapper>
      <BlogPostImage>
        <img src={src} alt={alt} />
        <p>{desc}</p>
      </BlogPostImage>
      {children}
      <StyledBackLink onClick={() => window.history.back()}>Return to previous page</StyledBackLink>
    </BlogpostWrapper>
  </BlogWrapper>

export default BlogPost;
