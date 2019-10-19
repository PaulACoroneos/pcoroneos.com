import * as React from 'react';
import { BlogpostWrapper } from './blog-post.styles';

interface Blogpost {
  header: string;
  date: string;
  body: string;
}
interface BlogpostProps {
  blogpost: Blogpost;
}
export const Blogpost: React.FC<BlogpostProps> = ({
  blogpost: { header, date, body }
}) => (
  <BlogpostWrapper>
    <h2>{header}</h2>
    <h3>{`Date Posted: ${date}`}</h3>
    <p>{body}</p>
  </BlogpostWrapper>
);
