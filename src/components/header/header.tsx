import * as React from 'react';
import { StyledHeader, StyledName } from './header.styles';
import { NavBar } from '../nav-bar';
import { FULL_NAME } from '../../constants/constants';
import Link from 'next/link';

export const Header: React.FC = () =>
  <StyledHeader >
    <Link href='/'><StyledName >{FULL_NAME}</StyledName></Link>
    <NavBar />
  </StyledHeader>
  ;
