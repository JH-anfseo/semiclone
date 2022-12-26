import React from "react";
import { StyledHeader, StyledP } from "./style";
import { Link } from "react-router-dom";
function Header() {
  return (
    <StyledHeader>
      <StyledP>
        <Link to="/">Home</Link>
      </StyledP>
      <StyledP>TODO APP</StyledP>
    </StyledHeader>
  );
}

export default Header;
