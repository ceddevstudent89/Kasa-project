import { useParams } from "react-router-dom";
import Carrousel from "./Carrousel";

import datas from "../data/data.json";

import greyStar from "../assets/grey_star.png";
import redStar from "../assets/red_star.png";

export default function CardDetail() {
  const params = useParams();
  console.log(params.id);

  const idCardDetail = useParams("id").id;
  const dataCurrentCardDetail = datas.filter(
    (data) => data.id === idCardDetail
  );

  const name = dataCurrentCardDetail[0].host.name.split(" ");
  console.log(name);
  const rating = dataCurrentCardDetail[0].rating;
  console.log(rating);
  const description = dataCurrentCardDetail[0].description;
  console.log(description);
  const equipments = dataCurrentCardDetail[0].equipments;
  console.log(equipments);

  return (
    <div>
      <Carrousel cardId={params.id} />
      <section>
        <h1 style={{ color: "#ff6060" }}>{dataCurrentCardDetail[0].title}</h1>
        <p>{dataCurrentCardDetail[0].location}</p>
        <div>
          {dataCurrentCardDetail[0].tags.map((tag, index) => {
            return <button key={index}>{tag}</button>;
          })}
        </div>
      </section>

      <div>
        <div>
          <span>{name[0]}</span>
          <span>{name[1]}</span>
        </div>
        <img
          style={{ borderRadius: "50%" }}
          src={dataCurrentCardDetail[0].host.picture}
          alt="photo de face d'une personne"
        />
      </div>

      <div>
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
      </div>

      <div>
        <div>Here is a collapsed component</div>
        <div>Here is a collapsed component</div>
      </div>
    </div>
  );
}
