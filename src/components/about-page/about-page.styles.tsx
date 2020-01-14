import styled from 'styled-components';
import { rem } from 'polished';

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
  border: 5px solid ${props => props.theme.color.primary};
  border-radius:5px;
  background:${props => props.theme.color.white};
  border-radius:10px;
  padding:8px;
  margin: 8px 0px;
  font-size:18px;
`;

export const CaptionedImageContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  border: 5px solid ${props => props.theme.color.primary};
  border-radius:5px;
  padding:8px;
  max-width:450px;

  img {
    max-width:375px;
    margin:8px;
    align-self: center;
  }

  span {
    font-size:16px;
  }
`;
