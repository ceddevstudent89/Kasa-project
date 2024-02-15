import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import styled from "styled-components";

export default function About() {
  return (
    <>
      <div>
        <Banner backgroundImage="../src/assets/mountain.png">
          <div style={{ height: "100%" }}>
            <Collapse title={"Fiabilité"}>
              Les annonces postées sur Kasa garantissent une Fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées pas nos équipes.
            </Collapse>
            <Collapse title={"Respect"}>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de pertubation du voisinage
              entraînera une exclusion de notre plateforme.
            </Collapse>
            <Collapse title={"Service"}>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de pertubation du voisinage
              entraînera une exclusion de notre plateforme.
            </Collapse>
            <Collapse title={"Sécurité"}>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </Collapse>
          </div>
        </Banner>
      </div>
    </>
  );
}
