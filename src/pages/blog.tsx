import * as React from 'react';
import { AboutWrapper } from '../components/about-page/about-page.styles';
import { Hero } from '../components/hero';
import { BlogContent } from '../components/blog-post/blog-post.styles';
import BlogLink from '../components/blog-link/blog-link';

export const Blog: React.FC = () =>
  <AboutWrapper>
    <Hero header='Blog Posts' subHeader='Here are all the posts I have written' />
    <BlogContent>
      <BlogLink href='next-best-time' date='2020-01-22' title='The next best time is now' description={'Procrastination and imposter theory are real things. It\'s so easy to convince yourself you aren\'t ready for something. But these are simply excuses. The best time to have started something is yesterday. The next best time is now.'} />
      <BlogLink href='stack' title='My first stack' date='2020-01-15' description={'For a long time i\'ve wanted to learn data structures and algorithms. I decided with the new year it was finally time to get started. After all the best time to start something is yesterday. The next best time is today.'} />
      <BlogLink href='updating-bootcamp' title='Updating Bootcamp project for npm security updates' date='2020-01-14' description='Each time I visit my GitHub account page I find myself bemused by the number of security PR requests I see on my old bootcamp projects. A year ago many of these projects seemed almost impossible if not insurmountable. Now a year forward most seem fairly straightforward that I probably could crunch out in a weekend.' />
      <BlogLink href='role-tab' date='2019-12-06' title='Using caution with aria-selected and role="tab"' description='As a front end developer one my weak areas is a11y. I was working a bug today at work involving an implementation that utilized tabs. Per my coworker in order for the feature to work I needed to utilize aria-selected and aria-controls.' />
      <BlogLink href='parse-int' date='2019-11-28' title='Big trouble with parseInt()' description='The need for input validation is important. In my case I was wanting to validate that a URL parameter was infact a valid integer. I went on MDN and found a handy function called parseInt(). I pushed the feature and it appeared to work just fine.' />
      <BlogLink href='hello-world' date='2019-08-19' title='Hello World' description='Hi there. My name is Paul. I am a fairly new web developer with a primary focus on front end. My background before becoming a full-time software dev was 7.5 years in the semiconductor industry as a test engineer.' />
    </BlogContent>
  </AboutWrapper>
  ;
export default Blog;
