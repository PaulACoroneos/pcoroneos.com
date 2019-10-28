import styled from 'styled-components';
import { rem } from 'polished';

export const HomePageWrapper = styled.section`
  padding: ${rem('8px')};
  margin: 0 auto;
  max-width: 800px;
`;

export const StyledSection = styled.section`
  border-radius: 5px;
  font-size: ${rem('18px')};

  h2:first-child {
    border-radius: 5px;
    padding: 8px;
    color: #2e3532;
  }
`;
