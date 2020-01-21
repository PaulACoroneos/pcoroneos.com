import * as React from 'react';
import Link from 'next/link';
import { StyledBlogLinkTitle } from '../blog-post/blog-post.styles';

interface BlogLinkProps {
  title: string;
  date: string;
  description: string;
  href: string;
}

const BlogLink: React.FC<BlogLinkProps> = ({ href, date, description, title }) =>
  <>
    <Link href={href}><StyledBlogLinkTitle><a>{title}</a></StyledBlogLinkTitle></Link>
    <p>{`Date Posted: ${date}`}</p>
    <p>{description}</p>
    <Link href={href}><a>Read more</a></Link>
  </>

export default BlogLink;
