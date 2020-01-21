import * as React from 'react';
import { StyledHeader, StyledName } from './header.styles';
import { NavBar } from '../nav-bar';
import { FULL_NAME } from '../../constants/constants';

export const Header: React.FC = () =>
  <StyledHeader >
    <StyledName href='/'>{FULL_NAME}</StyledName>
    <NavBar />
  </StyledHeader>
  ;
