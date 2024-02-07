import { Link } from "react-router-dom";
import styled from "styled-components";
import "../index.css";
import Footer from "../components/Footer";

const ErrorContent = styled.section`
  padding-top: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

const ErrorStatus = styled.div`
  color: #ff6060;
  font-weight: 700;
  font-size: clamp(24px, 12vw, 288px);
`;

const ErrorMessage = styled.p`
  text-align: center;
  color: #ff6060;
  font-size: clamp(24px, 4vw, 36px);
`;

const ErrorLink = styled(Link)`
  color: #000;
  font-size: 18px;
  font-weight: 500;
`;

export default function PageNotFound() {
  return (
    <>
      <div>
        <main>
          <ErrorContent>
            <ErrorStatus>404</ErrorStatus>
            <ErrorMessage>
              Oups, La page que vous demandez n'existe pas.
            </ErrorMessage>
            <ErrorLink to="/">Retourner sur la page d'accueil</ErrorLink>
          </ErrorContent>
        </main>
      </div>
      <Footer />
    </>
  );
}
