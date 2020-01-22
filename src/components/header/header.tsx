import * as React from 'react';
import { StyledHeader, StyledName } from './header.styles';
import { NavBar } from '../nav-bar';
import Link from 'next/link';

export const Header: React.FC = () =>
  <StyledHeader >
    <Link href='/'><StyledName >Paul Coroneos</StyledName></Link>
    <NavBar />
  </StyledHeader>
  ;
