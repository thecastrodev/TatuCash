import tatuLogo from "../../assets/tatucoin.png";
import "./styles.css";
import Rodape from "../Footer/Rodape";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Mission from "../Mission/Mission";

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
