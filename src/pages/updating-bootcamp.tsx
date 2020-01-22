import * as React from 'react';
import BlogPost from '../components/blog-post/blog-post';

const UpdatingBootcamp = () => <BlogPost header='Updating Bootcamp project for npm security updates' date='2020-01-14' src='bootcamp.jpg' alt='A woman coding on her laptop' desc='I spent many hours starting at my laptop with no idea what I was doing' >
  <p > {'Each time I visit my GitHub account page I find myself bemused by the number of security PR requests I see on my old bootcamp projects. A year ago many of these projects seemed almost impossible if not insurmountable. Now a year forward most seem fairly straightforward that I probably could crunch out in a weekend.'}</p>
  <p>{'I had a moment where I considered whether it was worth to continue updating these dependencies every few weeks. It might save a me a little time and let me leave these behind.'}</p>
  <p>{'In the end i decided to take the time and make the update. These project are a representation of who I was months ago and the journey I took to come to this point. My job now is to continue building things that will lead me to be the developer I want to be.'}</p>
  <p>{'So if dependabot wants to make a call. I will be there to merge them all. 😃'}</p>
</BlogPost>

export default UpdatingBootcamp;
