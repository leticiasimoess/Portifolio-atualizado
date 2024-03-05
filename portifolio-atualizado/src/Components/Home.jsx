// eslint-disable-next-line no-unused-vars
import React from "react";

import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

import "../Style/components-sass/home.sass"; // Importe o arquivo de estilo para a Home

import girl1 from "../assets/girl1.png";

const redessociais = [
  { id: "github", icon: <FaGithubSquare />, link:"https://github.com/leticiasimoess" },
  { id: "linkedin", icon: <FaLinkedin />, link:"https://www.linkedin.com/in/leesimoes/" },
  { id: "insta", icon: <FaInstagramSquare />, link:"https://www.instagram.com/simoes_lee/" },
];

function Home () {
  const redirectToLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="inicio">
      <div className="content">
        <div className="text-container">
          <h1>
            Olá, sou a  
            <span className="frontend"> Leticia Simões,</span>
          </h1>
          <h6 className="job-title">
            Desenvolvedora 
            <span className="frontend"> Front-end.</span>
          </h6>
          <p className="paragraph-1">
            Acredito que a tecnologia é uma ferramenta poderosa para transformar o
            mundo,
          </p>
          <p className="paragraph-2">
            como desenvolvedora Front-End, estou comprometida em ser uma agente
            dessa
            transformação.
          </p>
        </div>
        <div className="redessociais-grid">
          {redessociais.map((redesocial) => (
            <div
              className="redessociais-card"
              id={redesocial.id}
              key={redesocial.id}
              onClick={() => redirectToLink(redesocial.link)}
              role="button"
              tabIndex={0}
            >
              {redesocial.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="image-container">
        <img src={girl1} alt="Imagem" className="home-image" />
      </div>
    </div>
  );
}

export default Home;