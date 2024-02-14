import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import styled from "styled-components";

// Définir les points de rupture
const sizes = {
  mobile: "600px",
  tablet: "768px",
  desktop: "1024px",
};

// Utiliser les points de rupture dans les media queries
const device = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

const HeaderContent = styled.header`
  height: 110px;
  display: flex;
  align-items: center;
  padding-block: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;

  @media screen and (max-width: 1440px) {
    padding: 0 20px;
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const StyledLink = styled(Link)`
  margin-right: auto;
  height: 68px;
  width: 210.32px;

  @media ${device.mobile} {
    height: 32px;
    width: 110.32px;
  }
`;

const StyledImg = styled.img`
  height: 100%;
  /* Media query pour tablette */
  @media ${device.mobile} {
    height: 30px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 40px;

  @media ${device.mobile} {
    gap: 25px;
  }
`;

export default function Navbar() {
  return (
    <HeaderContent>
      <StyledLink to="/" className="site-logo">
        <StyledImg src={logo} alt="Logo Kasa" />
      </StyledLink>
      <StyledNav>
        <NavLink
          className={({ isActive }) => `${isActive && "activeLink"}`}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => `${isActive && "activeLink"}`}
          to="/about"
        >
          A propos
        </NavLink>
      </StyledNav>
    </HeaderContent>
  );
}
