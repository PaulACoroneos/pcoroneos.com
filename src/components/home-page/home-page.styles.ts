import styled from 'styled-components';
import { rem } from 'polished';

export const HomePageWrapper = styled.section`
  padding: ${rem('8px')};
`;

export const StyledSection = styled.section`
  border-radius: 5px;
  padding: 24px 8px;
  margin: 16px 0px;
  font-size: ${rem('18px')};
`;

export const AboutMe = styled.section`
  background: #666699;
  padding: 16px 8px;
  color: #fff;
  font-size: 32px;
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledProfileImg = styled.img`
  border-radius: 50%;
  max-width: 300px;
`;

export const AboutMeDescription = styled.span`
  margin-left: 8px;
`;
