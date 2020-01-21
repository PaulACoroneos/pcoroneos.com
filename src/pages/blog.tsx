import * as React from 'react';
import { AboutWrapper } from '../components/about-page/about-page.styles';
import { Hero } from '../components/hero';
import Link from 'next/link';
import { StyledBlogLinkTitle, BlogContent } from '../components/blog-post/blog-post.styles';

export const About: React.FC = () =>
  <AboutWrapper>
    <Hero header='Blog Posts' subHeader='Here are all the posts I have written' />
    <BlogContent>
      <Link href='stack'><StyledBlogLinkTitle>My first stack</StyledBlogLinkTitle></Link>
      <p>{'Date Posted: 2020-01-15'}</p>
      <p>{'For a long time i\'ve wanted to learn data structures and algorithms. I decided with the new year it was finally time to get started. After all the best time to start something is yesterday. The next best time is today.'}</p>
      <Link href='stack'>Read more</Link>
      <Link href='updating-bootcamp'><StyledBlogLinkTitle>Updating Bootcamp project for npm security updates</StyledBlogLinkTitle></Link>
      <p>{'Date Posted: 2020-01-14'}</p>
      <p>Each time I visit my GitHub account page I find myself bemused by the number of security PR requests I see on my old bootcamp projects. A year ago many of these projects seemed almost impossible if not insurmountable. Now a year forward most seem fairly straightforward that I probably could crunch out in a weekend.</p>
      <Link href='updating-bootcamp'>Read more</Link>
      <Link href='role-tab'><StyledBlogLinkTitle>{'Using caution with aria-selected and role="tab"'}</StyledBlogLinkTitle></Link>
      <p>{'Date posted: 2019-12-06'}</p>
      <p>As a front end developer one my weak areas is a11y. I was working a bug today at work involving an implementation that utilized tabs. Per my coworker in order for the feature to work I needed to utilize aria-selected and aria-controls.</p>
      <Link href='role-tab'>Read more</Link>
      <Link href='parse-int'><StyledBlogLinkTitle>Big trouble with parseInt()</StyledBlogLinkTitle></Link>
      <p>{'Date Posted:  2019-11-28'}</p>
      <p>The need for input validation is important. In my case I was wanting to validate that a URL parameter was infact a valid integer. I went on MDN and found a handy function called parseInt(). I pushed the feature and it appeared to work just fine.</p>
      <Link href='parse-int'>Read more</Link>
      <Link href='hello-world'><StyledBlogLinkTitle>Hello World</StyledBlogLinkTitle></Link>
      <p>{'Date Posted: 2019-08-19'}</p>
      <p>Hi there. My name is Paul. I am a fairly new web developer with a primary focus on front end. My background before becoming a full-time software dev was 7.5 years in the semiconductor industry as a test engineer.</p>
      <Link href='hello-world'>Read more</Link>
    </BlogContent>
  </AboutWrapper>;
;
export default About;
