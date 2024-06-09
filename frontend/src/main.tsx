import React from "react";
import ReactDOM from "react-dom/client";
// import About from "./components/about";
import "./main.css";
// import Header from "./components/Header/Header";
// import Rodape from "./components/Footer/Rodape";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
