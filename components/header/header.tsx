import * as React from "react";
import { StyledHeader } from "./header.styles";
import { NavBar } from "../nav-bar";

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <span>Paul Coroneos</span>
      <NavBar />
    </StyledHeader>
  );
};
