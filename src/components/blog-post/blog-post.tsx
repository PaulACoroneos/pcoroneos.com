import * as React from 'react';
import { BlogpostWrapper, BlogWrapper, StyledBackLink } from './blog-post.styles';
import { Hero } from '../hero';

interface BlogPostProps {
  header: string;
  date: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ children, header, date }) =>
  <BlogWrapper>
    <Hero header={header} subHeader={`Date posted: ${date}`} />
    <BlogpostWrapper>{children}
      <StyledBackLink onClick={() => window.history.back()}>Return to previous page</StyledBackLink>
    </BlogpostWrapper></BlogWrapper>

export default BlogPost;
