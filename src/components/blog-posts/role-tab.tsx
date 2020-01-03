import * as React from 'react';
import { BlogpostWrapper } from './blog-posts.styles';

export const RoleTab = () => <BlogpostWrapper>
  <h3>{'Using caution with aria-selected and role="tab"'}</h3>
  <h4>{'Date Posted: 2019-12-06'}</h4>
  <p>{'As a front end developer one my weak areas is a11y. I was working a bug today at work involving an implementation that utilized tabs. Per my coworker in order for the feature to work I needed to utilize aria-selected and aria-controls.'}</p>
  <p>{'I implemented the feature and things were working great in Chrome with voiceover. However to my surprise and dissapointed it failed testing in Safari. Initially I was very confused as to how this was possible. Finally after about 15 minutes of debug I realized that I had placed the aria-select one level too high. Oddly enough chrome seems to automatically appends aria-selected=true when a tab has role="tab" and it is tab active. Safari makes no such behavior.'}</p>
  <p>{'I hope this helps you if you run into a similar situation!'}</p>
</BlogpostWrapper>
