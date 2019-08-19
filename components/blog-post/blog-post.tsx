import * as React from "react";
import { BlogpostWrapper } from "./blog-post.styles";

interface IBlogpost {
  header: string;
  date: string;
  body: string;
}
interface IBlogpostProps {
  blogpost: IBlogpost;
}
export const Blogpost: React.FC<IBlogpostProps> = ({
  blogpost: { header, date, body }
}) => (
  <BlogpostWrapper>
    <h2>{header}</h2>
    <h3>{`Date Posted: ${date}`}</h3>
    <p>{body}</p>
  </BlogpostWrapper>
);
