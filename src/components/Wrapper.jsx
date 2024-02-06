import styled from "styled-components";

const WrapperContainer = styled.div`
  background-color: #f6f6f6;
  padding: 56px;
  width: 100%;
  height: auto;
  border-radius: 25px;
  margin-top: 43px;

  @media screen and (max-width: 1440px) {
    padding: 0;
    background-color: transparent;
  }
`;

const WrapperDiv = styled.div`
  @media screen and (max-width: 1440px) {
    padding: 0 20px;
  }
`;

export default function Wrapper({ children }) {
  return (
    <WrapperDiv>
      <WrapperContainer className="wrapper-content">
        {children}
      </WrapperContainer>
    </WrapperDiv>
  );
}
