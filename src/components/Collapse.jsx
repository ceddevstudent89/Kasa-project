import styled from "styled-components";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// Composant collapse
const StyleCollapseContainer = styled.div`
  margin: 10px auto 20px;
  max-width: 1300px;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0px 0px 20px;
  }
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
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 700;
  margin: 0;

  @media (max-width: 375px) {
    font-size: 13px;
  }
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

  @media (max-width: 390px) {
    font-size: 13px;
  }
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
        <StyledCollapseContent open={isOpen} className="collapse-content">
          <StyledCollapseUl>
            <StyledCollapseLi>{props.children}</StyledCollapseLi>
          </StyledCollapseUl>
        </StyledCollapseContent>
      )}
    </StyleCollapseContainer>
  );
}
