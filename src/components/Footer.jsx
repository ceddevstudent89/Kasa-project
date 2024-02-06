import logo from "../assets/logo.svg";
import styled from "styled-components";

const FooterContent = styled.footer`
  width: 100%;
  background: #000;
  padding: 66px 0 29px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const FooterImg = styled.img`
  width: 122px;
  height: 39.444px;
  filter: invert(1) sepia(1) saturate(5) hue-rotate(175deg) brightness(10)
    contrast(100%);
`;

const FooterCopy = styled.p`
  font-family: inherit;
  font-size: 24px;
  font-size: clamp(18px, 4vw, 24px);
  font-weight: 500;
  color: #fff;
`;

export default function Footer() {
  return (
    <FooterContent>
      <FooterImg src={logo} alt="logo Kasa" />
      <FooterCopy>© 2020 Kasa. All rights reserved</FooterCopy>
    </FooterContent>
  );
}
