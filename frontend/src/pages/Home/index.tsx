import tatuLogo from "../../assets/tatucoin.png";
import "./styles.css";

export function Home() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={tatuLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>TatuCash</h1>
      <h2>Seu app de educação financeira</h2>
    </>
  );
}
