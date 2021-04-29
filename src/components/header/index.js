import React from "react";
import { NavLink } from "react-router-dom";
import { HeaderContainer, HeaderLinks } from "./HeaderElements";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderLinks>
          <NavLink to="/react-app/">
            <span>Main</span>
          </NavLink>
          <NavLink to="/favourites">
            <span>Favourites</span>
          </NavLink>
        </HeaderLinks>
      </HeaderContainer>
    </>
  );
};

export default Header;
