import React from "react";
import "./styles.css";
import Header from "./Header/header";
import Title from "./mainTitle/index";
import Sobre from "./sobre/index";
import Imagen from "./imagen/index";
import Footer from "./footer/index";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Sobre />
      <Imagen />
      <Footer />
    </div>
  );
}
