import * as React from 'react';
import { BlogpostWrapper } from './blog-posts.styles';
import styled from 'styled-components';

const StyledImage = styled.img`
  display: block;
  width:100%;
  margin: 0 auto;
`;


export const Stack = () => <BlogpostWrapper>
  <h3>{'My first stack'}</h3>
  <h4>{'Date Posted: 2019-01-14'}</h4>
  <p>{'For a long time i\'ve wanted to learn data structures and algorithms. I decided with the new year it was finally time to get started. After all the best time to start something is yesterday. The next best time is today.'}</p>
  <p>{'The first stop in learning data structures is stacks. You can technically use an array as the base of building a stack in JavaScript but I instead elected to start with an object. This is my version of the implementation:'}</p>
  <StyledImage alt='My implementation of a stack with explanation below' src='/stack.png' />
  <p>{'The implementation starts out by using a class object. The constructor method is used to initialize the class with a known state. In this case the'}</p>
</BlogpostWrapper>
