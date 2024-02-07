import Banner from "../components/Banner";
import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import data from "../data/data.json";
import styled from "styled-components";
import Footer from "../components/Footer";

const CardsList = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 50px 60px;
  justify-content: center;
`;

export default function Home() {
  const title = "Chez vous, partout et ailleurs";

  const dataElements = data.map((data) => (
    <div key={data.id} className="cards-tile">
      <Link to={`/cards/${data.id}`} className="cards-content">
        <img src={data.cover} alt={data.title} />
        <h3>{data.title}</h3>
      </Link>
    </div>
  ));

  return (
    <div>
      <Banner title={title} backgroundImage="../src/assets/cote.png" />
      <Wrapper>
        <CardsList>{dataElements}</CardsList>
      </Wrapper>
      <Footer />
    </div>
  );
}
