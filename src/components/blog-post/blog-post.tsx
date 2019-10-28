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
}) =>
  <BlogpostWrapper>
    <h3>{header}</h3>
    <h4>{`Date Posted: ${date}`}</h4>
    <p>{body}</p>
  </BlogpostWrapper>
  ;
