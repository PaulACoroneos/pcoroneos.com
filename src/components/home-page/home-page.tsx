import * as React from 'react';
import {
  HomePageWrapper,
  StyledSection,
} from './home-page.styles';
import { Blogpost } from '..';
import { Hero } from '../hero';

const blogPosts = [
  {
    header: 'Using caution with aria-selected and role="tab"',
    date: '2019-12-06',
    body:
      ['As a front end developer one my weak areas is a11y. I was working a bug today at work involving an implementation that utilized tabs. Per my coworker in order for the feature to work I needed to utilize aria-selected and aria-controls. I implemented the feature and things were working great in Chrome with voiceover. However to my surprise and dissapointed it failed testing in Safari. Initially I was very confused as to how this was possible. Finally after about 15 minutes of debug I realized that I had placed the aria-select one level too high. Oddly enough chrome seems to automatically appends aria-selected=true when a tab has role="tab" and it is tab active. Safari makes no such behavior. I hope this helps you if you run into a similar situation!']
  },
  {
    header: 'Big trouble with parseInt()',
    date: '2019-11-28',
    body:
      ['The need for input validation is important. In my case I was wanting to validate that a URL parameter was infact a valid integer. I went on MDN and found a handy function called parseInt(). I pushed the feature and it appeared to work just fine.', 'However my QA engineer pointed out that when she tried to use a URL param of 123wlkdfasdfasdf that infact the number 123 was parsed. I re-read MDN and realized that it turns out parseInt will actually parse an integer happily until it hits something thats not an integer. Then it discards the rest of the input.', 'The solution I went to instead involved using a regex where I basically looks for characters only between 0 - 9.']
  },
  {
    header: 'Hello World',
    date: '2019-08-19',
    body:
      ['Hi there. My name is Paul. I am a fairly new web developer with a primary focus on front end. My background before becoming a full-time software dev was 7.5 years in the semiconductor industry as a test engineer.', 'I\'ve been helped quite a bit by posts on the web as I have continued to improve my javascript accumen. So I want to give back and give everyone some perspective as I learn new and cool things. Check back as I make occasional posts on things I learn. Take care!']
  }
];

export const HomePage: React.FC = () =>
  <>

    <HomePageWrapper>
      <Hero />
      <StyledSection>
        <h2>Recent Blog Posts</h2>
        {blogPosts.map(blogpost =>
          <Blogpost key={blogpost.header} blogpost={blogpost} />
        )}
      </StyledSection>
    </HomePageWrapper>
  </>
  ;
