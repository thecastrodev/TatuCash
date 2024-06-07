import tatuLogo from "../../assets/tatucoin.png";
import "./styles.css";
import Rodape from "../../components/Footer/Rodape";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Mission from "../../components/Mission/Mission";

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Mission />
      <Rodape />
    </>
  );
}
