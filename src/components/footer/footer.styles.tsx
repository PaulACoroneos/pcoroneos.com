import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height:52px;
  width:100%;
  background: ${props => props.theme.color.quaternary};
  color:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 16px;
  margin-top:auto;
  bottom:0px;
`;
