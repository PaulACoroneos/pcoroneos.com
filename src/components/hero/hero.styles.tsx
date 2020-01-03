import styled from 'styled-components';
import media from 'styled-media-query';
import { rem } from 'polished';

export const AboutMe = styled.hgroup`
  background: ${props => props.theme.color.secondary};
  padding: ${rem('8px')};
  color: #fff;
  font-size: ${rem('16px')};
  border-radius: ${rem('10px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align:left;

  ${media.greaterThan('medium')`
  flex-direction:row;
  font-size: ${rem('28px')};
  `}

  ${media.greaterThan('large')`
  font-size: ${rem('32px')};
`}
`;

export const StyledProfileImg = styled.img`
  border-radius: 50%;
  max-width: ${rem('100px')};
  height: ${rem('100px')};

${
  media.greaterThan('medium')`
  max-width: ${rem('200px')};
  height: ${rem('200px')};
  `}

${
  media.greaterThan('large')`
  max-width: ${rem('450px')};
  height: ${rem('250px')};
`}
`;

export const AboutMeDescription = styled.div`
margin-left: ${rem('8px')};
font-size: ${rem('18px')};

h1 {
  font-size: ${rem('24px')};
}

h2 {
  font-size: ${rem('16px')};;
}

${
  media.greaterThan('medium')`
    font-size: ${rem('28px')};
    h1{
      font-size: ${rem('32px')};
    }

    h2 {
    font-size:${rem('20px')};
  }
  `}

${
  media.greaterThan('large')`
    font-size: ${rem('32px')};
    h1 {
      font-size: ${rem('44px')};
    }

    h2 {
    font-size:${rem('24px')};
  }
`}
`;
