import tatuLogo from "../../assets/tatucoin.png";
import "./styles.css";
import Rodape from "../Footer/Rodape";
import Header from "../Header/Header";

export function Home() {
  return (
    <>
      <Header />
      {/* <div>
        <a href="https://react.dev" target="_blank">
          <img src={tatuLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>TatuCash</h1>
      <h2>Seu app de educação financeira</h2> */}
      <Rodape />
    </>
  );
}
