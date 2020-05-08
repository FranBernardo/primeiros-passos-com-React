import React from "react";
import Foto from "./fran.jpeg";
import git from "./git claro.png";
import link from "./link claro.png";
import "./style.css";

const Imagens = () => (
  <div className="fotos">
    <img className="imagem" src={Foto} alt="Franciele" /> Franciele
    <a href="https://github.com/FranBernardo" target="_blank">
      <img src={git} className="iconeP" />
    </a>
    <a
      href="https://www.linkedin.com/in/franciele-bernardo-172005193/"
      target="_blank"
    >
      <img src={link} className="iconeP" />
    </a>
  </div>
);
export default Imagens;
