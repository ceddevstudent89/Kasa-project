import { useState } from "react";
import data from "../data/data.json";

import arrowLeft from "../assets/chevron_carousel_left.png";
import arrowRight from "../assets/chevron_carousel_right.png";

import styled from "styled-components";

const Carousel = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 1440px) {
    padding: 0 20px;
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const CarouselImg = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

const CarouselNumber = styled.span`
  color: #fff;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-weight: bold;
`;

const CarouselControls = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

const CarouselButtons = styled.button`
  width: 50px;
  height: auto;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 18px;
    height: 30px;
    font-size: 20px;
  }
`;

const CarouselIcons = styled.img`
  @media screen and (max-width: 768px) {
    width: 18px;
  }
`;

export default function Carrousel({ cardId }) {
  // ajout cardId en tant que prop
  // console.log(data[0].pictures);

  // Hook d'état pour stocker l'index de l'image actuelle
  const [index, setIndex] = useState(0);

  // Utilisez cardId pour récupérer les bonnes images
  const pictures = data.find((card) => card.id === cardId).pictures;

  /* Fonction qui augmente l'index de 1 et le ramène à 0
  si il dépasse la longueur du tableau
  */
  const nextImage = () => {
    setIndex((index + 1) % pictures.length);
  };

  /* Fonction qui diminue l'index de 1 et le ramène à la
  longueur du tableau -1 si il devient négatif
  */
  const prevImage = () => {
    setIndex((index - 1 + pictures.length) % pictures.length);
  };

  /* Fonction qui change l'index en fonction du paramètre 
  passé
  */
  const selectImage = (i) => {
    setIndex(i);
  };

  // Rendu du composant :
  return (
    <Carousel>
      <CarouselContainer>
        <CarouselImg src={pictures[index]} alt="Carousel image" />
        <CarouselNumber>
          {index + 1} / {pictures.length}
        </CarouselNumber>
        <CarouselControls>
          <CarouselButtons onClick={prevImage}>
            <CarouselIcons src={arrowLeft} alt="arrow left icon" />
          </CarouselButtons>
          <CarouselButtons onClick={nextImage}>
            <CarouselIcons src={arrowRight} alt="arrow right icon" />
          </CarouselButtons>
        </CarouselControls>
      </CarouselContainer>
    </Carousel>
  );
}
