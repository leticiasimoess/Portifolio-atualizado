// eslint-disable-next-line no-unused-vars
import React from 'react';
import FotoPerfil from '../assets/FotoPerfil.png';

import '../Style/components-sass/aboutme.sass';

function AboutMe () {
  return (
    
    <div className="sobre">
      <div className="image-container-fotoPerfil">
        <img src={FotoPerfil} alt="Foto" className="foto-perfil" />
      </div>
      <div className="text-container-aboutme">
        <h2>Sobre Mim</h2>
        <p className='paragraph-3'>
        Me chamo Leticia Simões, graduanda no curso de Análise e Desenvolvimento de Sistemas pela UNIP e desenvolvedora Front-end pelo Vai na Web.

        Tenho experiência no desenvolvimento de páginas e sistemas web responsivos, priorizando layouts atrativos. Atualmente, meu foco de aprendizado
        contínuo está nas tecnologias JavaScript,e frameworks React e Angular, possuo habilidades em React, HTML, CSS e JavaScript e conhecimento nos pre processadores como Sass e Styled Components.
        Com dedicação e paixão pela área, busco oportunidades no mercado como desenvolvedora Front-end jr. Meu objetivo é aprimorar ainda mais minhas habilidades
        e, em um futuro próximo, consolidar-me como uma desenvolvedora Front-end referência.
        Estou entusiasmada para contribuir em projetos desafiadores e continuar crescendo profissionalmente no universo da programação.
         </p>
      </div>
    </div>
  );
}

export default AboutMe;  
