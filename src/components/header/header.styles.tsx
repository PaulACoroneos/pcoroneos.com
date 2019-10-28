import styled from 'styled-components';
import { rem } from 'polished';
import media from 'styled-media-query';

export const StyledHeader = styled.header`
  background: #2e3532;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: ${rem('8px')} ;
  font-size: ${rem('16px')};

  ${media.greaterThan('medium')`
  font-size: ${rem('20px')};
  `}

  ${media.greaterThan('large')`
  font-size: ${rem('24px')};
`}

`;
