import Banner from "../components/Banner";
import Wrapper from "../components/Wrapper";
import { Link } from "react-router-dom";
import data from "../data/data.json";
import "../index.css";

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
        <div className="cards-list">{dataElements}</div>
      </Wrapper>
    </div>
  );
}
