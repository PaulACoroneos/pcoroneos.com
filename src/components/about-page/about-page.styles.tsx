import styled from 'styled-components';
import { rem } from 'polished';
import media from 'styled-media-query';

export const AboutWrapper = styled.section`
  padding: ${rem('8px')};
  margin: 0 auto;
  max-width: 800px;
  height:100%;
`;


export const AboutMeContent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:5px;
  background:#FAFAFA;
  padding:8px;
  margin: 8px 0px;
  font-size:18px;
`;

export const CaptionedImageContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  padding:8px;
  max-width:300px;

  img {
    max-width:284px;
    margin:8px;
    align-self: center;
  }

  span {
    font-size:16px;
  }

  ${media.greaterThan('medium')`
  max-width:425px;

  img {
    max-width:400px;
  }

  `}

  ${media.greaterThan('large')`
  max-width:600px;

  img {
    max-width:575px;
    margin:8px;
    align-self: center;
  }
`}
`;
