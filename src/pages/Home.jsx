import Banner from "../components/Banner";

export default function Home() {
  const title = "Chez vous, partout et ailleurs";

  return (
    <div>
      <Banner title={title} backgroundImage="../src/assets/cote.png" />
    </div>
  );
}
