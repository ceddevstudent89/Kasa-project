import styled from "styled-components";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// Composant collapse
const StyleCollapseContainer = styled.div`
  margin-bottom: 20px;
  max-width: 1300px;
  width: 100%;
  margin: 20px auto;
`;

const StyleCollapseHeader = styled.div`
  border-radius: 5px;
  background-color: #ff6060;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  .chevron-icon {
    font-size: 1.5em;
    color: #fff;
    transition: transform 0.3s ease-in-out;
    transform: rotate(0deg);
  }

  .chevron-icon.down {
    transform: rotate(180deg);
  }
`;

const StyledCollapseTitle = styled.h2`
  font-family: Montserrat;
  font-weight: 400;
  margin: 0;
`;

const StyledCollapseContent = styled.div`
  background-color: #f3f3f3;
  padding: 10px;
`;

const StyledCollapseUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 10px;
  overflow: hidden;
`;

const StyledCollapseLi = styled.li`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 400;
  color: #d9534f;
  margin-bottom: 5px;
  // idée d'animation :
  // transform: translateY(${(props) => (props.open ? "0px" : "-20px")});
  // opacity: ${(props) => (props.open ? "1" : "0")};
  // transition: all 0.3s ease-out;
`;

export default function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyleCollapseContainer>
      <StyleCollapseHeader onClick={() => setIsOpen(!isOpen)}>
        <StyledCollapseTitle>{props.title}</StyledCollapseTitle>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`chevron-icon ${isOpen ? "up" : "down"}`}
        />
      </StyleCollapseHeader>
      {isOpen && (
        <StyledCollapseContent className="collapse-content">
          <StyledCollapseUl>
            <StyledCollapseLi open={isOpen}>{props.children}</StyledCollapseLi>
          </StyledCollapseUl>
        </StyledCollapseContent>
      )}
    </StyleCollapseContainer>
  );
}
