import "../index.css";
import styled from "styled-components";

const BannerDiv = styled.div`
  @media screen and (max-width: 1440px) {
    margin: 0;
    padding: 0 20px;
  }
`;

const BannerContainer = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),
    url(${(props) => props.$backgroundImage}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 223px;
  color: white;
  padding: 45px 23px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerTitle = styled.h1`
  font-family: inherit;
  color: #fff;
  font-weight: 500;
  font-size: clamp(24px, 4vw, 48px);
  letter-spacing: 1px;
`;

export default function Banner({ backgroundImage, className, title }) {
  return (
    <BannerDiv>
      <BannerContainer $backgroundImage={backgroundImage}>
        <div className={className}>
          <BannerTitle>{title}</BannerTitle>
        </div>
      </BannerContainer>
    </BannerDiv>
  );
}
