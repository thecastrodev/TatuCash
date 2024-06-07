import tatuLogo from "../../assets/tatucoin.png";
import "./styles.css";
import Rodape from "../Footer/Rodape";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Level from "../Level/Level";
import Contact from "../Contact/Contact"
import Mission from "../Mission/Mission";

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Mission />
      <Level />
      <Contact />
      <Rodape />
    </>
  );
}
