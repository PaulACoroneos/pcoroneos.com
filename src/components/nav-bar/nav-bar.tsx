import * as React from 'react';
import { StyledNavbar, StyledAnchor } from './nav-bar.styles';

export const NavBar: React.FC = () =>
  <StyledNavbar>
    <StyledAnchor href="Blog">Blog</StyledAnchor>
    <StyledAnchor href="Portfolio">Portfolio</StyledAnchor>
    <StyledAnchor href="About">About</StyledAnchor>
  </StyledNavbar>
  ;
