import { useParams, Navigate } from "react-router-dom";
import Carrousel from "./Carrousel";

import datas from "../data/data.json";

import greyStar from "../assets/grey_star.png";
import redStar from "../assets/red_star.png";

import styled from "styled-components";
import Footer from "../components/Footer";

const CardContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1440px) {
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CardInfos = styled.div`
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
  h1 {
    font-size: 36px;
    font-weight: 500;
    color: #ff6060;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 20px;
      letter-spacing: 0.5px;
      line-height: 1.4;
    }
  }
  p {
    font-size: 18px;
    font-weight: 500;
    color: #000;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 15px;
      margin-bottom: 10px;
    }
  }
  div {
    display: flex;
    flex-wrap: wrap;
    button {
      background-color: #ff6060;
      border: none;
      border-radius: 10px;
      padding: 5px 30px;
      margin-right: 10px;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 700;
      color: #fff;

      @media (max-width: 768px) {
        border-radius: 5px;
      }
    }
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;
  }
`;

const CardInfosName = styled.div`
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    span {
      font-size: 18px;
      font-weight: 500;
      color: #ff6060;
      margin-bottom: 5px;
    }
  }
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    margin-left: 10px;
  }
`;

const StarsRating = styled.div`
  display: flex;
  img {
    width: 24px;
    height: 24px;
    margin-right: 5px;
    margin-top: 15px;

    @media (max-width: 768px) {
      margin-top: 0;
      width: 16px;
      height: 16px;
    }
  }
`;

export default function CardDetail() {
  const params = useParams();
  console.log(params.id);

  const idCardDetail = useParams("id").id;
  const dataCurrentCardDetail = datas.filter(
    (data) => data.id === idCardDetail
  );

  /* je redirige l'utilisateur vers la page d'erreur 404 
  si l'id n'existe pas dans le tableau de data.json() */
  if (dataCurrentCardDetail.length === 0) {
    /* redirection page 404 to="*" Navigate est un composant qui
  permet de changer l'emplacement actuel lorsqu'il est rendu */
    return <Navigate to="*" />;
  }

  const name = dataCurrentCardDetail[0].host.name.split(" ");
  console.log(name);
  const rating = dataCurrentCardDetail[0].rating;
  console.log(rating);
  const description = dataCurrentCardDetail[0].description;
  console.log(description);
  const equipments = dataCurrentCardDetail[0].equipments;
  console.log(equipments);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "auto auto 1fr auto",
        gap: "20px",
      }}
    >
      <Carrousel cardId={params.id} />
      <CardContainer>
        <CardInfos>
          <h1>{dataCurrentCardDetail[0].title}</h1>
          <p>{dataCurrentCardDetail[0].location}</p>
          <div>
            {dataCurrentCardDetail[0].tags.map((tag, index) => {
              return <button key={index}>{tag}</button>;
            })}
          </div>
        </CardInfos>
        <CardContent>
          <CardInfosName>
            <div>
              <span>{name[0]}</span>
              <span>{name[1]}</span>
            </div>
            <img
              style={{ borderRadius: "50%" }}
              src={dataCurrentCardDetail[0].host.picture}
              alt="photo de face d'une personne"
            />
          </CardInfosName>

          <StarsRating>
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1;
              return (
                <img
                  key={index}
                  src={ratingValue <= rating ? redStar : greyStar}
                  alt="star rating"
                />
              );
            })}
          </StarsRating>
        </CardContent>
      </CardContainer>

      <div
        style={{
          color: "#fff",
          background: "#ff6060",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div>Here is a collapsed component</div>
        <div>Here is a collapsed component</div>
      </div>
      <Footer />
    </div>
  );
}
