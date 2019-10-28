import * as React from 'react';
import { StyledHeader } from './header.styles';
import { NavBar } from '../nav-bar';
import { FULL_NAME } from '../../constants/constants';

export const Header: React.FC = () =>
  <StyledHeader>
    <span>{FULL_NAME}</span>
    <NavBar />
  </StyledHeader>
  ;
