import styled from 'styled-components';
import media from 'styled-media-query';
import { rem } from 'polished';

export const AboutMe = styled.section`
  background: #666699;
  padding: 8px;
  color: #fff;
  font-size: 16px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.greaterThan('medium')`
  font-size: ${rem('28px')};
  `}

  ${media.greaterThan('large')`
  font-size: ${rem('32px')};
`}
`;

export const StyledProfileImg = styled.img`
  border-radius: 50%;
  max-width: 150px;
  height: 150px;

  ${media.greaterThan('medium')`
  max-width: 200px;
  height: 200px;
  `}

  ${media.greaterThan('large')`
  max-width: 450px;
  height: 250px;
`}
`;

export const AboutMeDescription = styled.div`
  margin-left: 8px;
  position: relative;
  font-size: 18px;

  span:first-child {
    font-size: 24px;
    flex: 1;
  }

  ${media.greaterThan('medium')`
  font-size: ${rem('28px')};
  span:first-child {
    font-size: 32px;
    flex: 1;
  }
  `}

  ${media.greaterThan('large')`
  font-size: ${rem('32px')};
  span:first-child {
    font-size: 38px;
    flex: 1;
  }
`}
`;
