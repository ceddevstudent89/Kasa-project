import React, { useState, useEffect, useRef } from "react";
import "../index.css";
import chevron from "../assets/chevron.png";

import styled from "styled-components";

const CollapseContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  border-radius: 5px;
  background: #f6f6f6;
`;

const CollapseVisible = styled.button`
  margin-top: 20px;
  background: #ff6060;
  width: 100%;
  color: #fff;
  cursor: pointer;
  border: 1px solid #ff6060;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const CollapseTitle = styled.span`
  font-family: inherit;
  font-size: 24px;
  font-weight: 700;
  padding: 10px 0;
`;

const CollapseImg = styled.img`
  width: 20px;
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out;

  &.active {
    transform: rotate(0deg);
  }
`;

const CollapseToggle = styled.div`
  height: 0px;
  font-size: 18px;
  opacity: 0;
  transform: translateY(-20px);
  transition: opacity 0.3s ease-in-out, transform 0.3s 0.3s ease-in-out,
    height 0.3s 0.3s ease-in-out;
  color: #000;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  &.animated {
    opacity: 1;
    transform: translateY(0px);
    transition: height 0.3s ease-in-out, transform 0.3s 0.25s ease-in-out,
      opacity 0.3s 0.3s ease-in-out;
  }
`;

const CollapseText = styled.p`
  font-size: 22px;
  font-weight: 400;
  margin: 0;
  padding: 22px 15px;
  pointer-events: none;
  line-height: 1.3;
  @media screen and (max-width: 940px) {
    .collapse-toggle p {
      font-size: 18px;
    }
`;

export default function collapse({ title, children }) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  /* useEffect est utilisé ici pour mesurer la hauteur de l’élément de la collapse
  après le rendu, afin de pouvoir animer sa hauteur plus tard lorsque
  la collapse est ouvert ou fermé. */

  useEffect(() => {
    // console.log(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  // console.log(toggle);
  return (
    <CollapseContainer>
      <CollapseVisible onClick={toggleState}>
        <CollapseTitle>{title}</CollapseTitle>
        <CollapseImg className={toggle ? "active" : undefined} src={chevron} />
      </CollapseVisible>

      <CollapseToggle
        className={toggle ? "collapse-toggle animated" : "collapse-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        <CollapseText aria-hidden={toggle ? "true" : "false"}>
          {children}
        </CollapseText>
      </CollapseToggle>
    </CollapseContainer>
  );
}
