import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/about";
import "./main.css";
import Header from "./components/Header/Header";
import Rodape from "./components/Footer/Rodape";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <About />
    <Rodape />
  </React.StrictMode>
);
