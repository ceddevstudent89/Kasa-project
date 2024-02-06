import Banner from "../components/Banner";
import Wrapper from "../components/Wrapper";

export default function Home() {
  const title = "Chez vous, partout et ailleurs";

  return (
    <div>
      <Banner title={title} backgroundImage="../src/assets/cote.png" />
      <Wrapper>Galerie d'image ici</Wrapper>
    </div>
  );
}
