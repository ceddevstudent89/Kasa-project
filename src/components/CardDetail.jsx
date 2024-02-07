import { useParams } from "react-router-dom";
import Carrousel from "./Carrousel";

export default function CardDetail() {
  const params = useParams();
  console.log(params.id);

  return (
    <div>
      <Carrousel cardId={params.id} />
    </div>
  );
}
