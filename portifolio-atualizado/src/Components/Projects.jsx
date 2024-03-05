// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { BsEye } from "react-icons/bs";
import { DiHtml5, DiCss3, DiJsBadge, DiSass, DiReact } from "react-icons/di";

import "../Style/components-sass/projetos.sass";

import LaPizza from '../assets/image-projetos/La Pizza.png';
import FoodJP from '../assets/image-projetos/Food JP.jpg';
import HomeYou from '../assets/image-projetos/HomeYou.png';

const projectsData = [
  {
    title: 'La Pizza',
    image: LaPizza,
    description: 'Descrição do Projeto 1.',
    languages: [
      <DiHtml5 className="html5-icon" key="html5" />,
      <DiCss3 className="css3-icon" key="css3" />,
      <DiJsBadge className="javascript-icon" key="javascript" />
    ],    
    githubLink: 'https://github.com/leticiasimoess/La-pizza-vnw.git',
    projectLink: 'https://www.projeto1.com',
  },
  {
    title: 'FoodJP',
    image: FoodJP,
    description: 'Landing-page para restaurante de comida japonesa.',
    languages: [
      <DiJsBadge className="javascript-icon" key="javascript" />,
      <DiReact className="react-icon" key='reacjs'/>,
      <DiSass className="sass-icon" key='sass'/>
    ],         
    githubLink: 'https://github.com/seu-usuario/projeto2',
    projectLink: 'https://www.projeto2.com',
  },
  {
    title: 'HomeYou',
    image: HomeYou,
    description: 'Descrição do Projeto 1.',
    languages: [
      <DiHtml5 className="html5-icon" key="html5" />,
      <DiCss3 className="css3-icon" key="css3" />,
      <DiJsBadge className="javascript-icon" key="javascript" />
    ],    
    githubLink: 'https://github.com/seu-usuario/projeto1',
    projectLink: 'https://www.projeto1.com',
  },
  {
    title: 'FoodJP',
    image: FoodJP,
    description: 'Landing-page para restaurante de comida japonesa.',
    languages: [
      <DiJsBadge className="javascript-icon" key="javascript" />,
      <DiReact className="react-icon" key='reacjs'/>,
      <DiSass className="sass-icon" key='sass'/>
    ],    
    githubLink: 'https://github.com/seu-usuario/projeto2',
    projectLink: 'https://www.projeto2.com',
  },
  {
    title: 'La Pizza',
    image: LaPizza,
    description: 'Descrição do Projeto 1.',
    languages: [
      <DiHtml5 className="html5-icon" key="html5" />,
      <DiCss3 className="css3-icon" key="css3" />,
      <DiJsBadge className="javascript-icon" key="javascript" />
    ],
    githubLink: 'https://github.com/seu-usuario/projeto1',
    projectLink: 'https://www.projeto1.com',
  },
  {
    title: 'FoodJP',
    image: FoodJP,
    description: 'Landing-page para restaurante de comida japonesa.',
    languages: [
      <DiJsBadge className="javascript-icon" key="javascript" />,
      <DiReact className="react-icon" key='reacjs'/>,
      <DiSass className="sass-icon" key='sass'/>
    ],    
    githubLink: 'https://github.com/seu-usuario/projeto2',
    projectLink: 'https://www.projeto2.com',
  },
];

function Projects() {
  return (
    <div className="projects">
      <h2>Meus Projetos</h2>
      <p className='paragraph-4'>Aqui estão alguns projetos nos quais trabalhei recentemente.</p>
      <div className="project-grid">
        {projectsData.map((project, index) => (
          <div className="project" key={index}>
            <h5>{project.title}</h5>
            <img src={project.image} alt={project.title} className="project-image" />
            <p  className='description'>{project.description}</p>
            <div className="languages">
              {project.languages.map((languages) => (
              <span key={languages.id}>{languages}</span>
             ))}
             </div>
            <div className="buttons-container">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <button className='button-github'>
                  <FaGithub />
                </button>
              </a>
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                <button className='button-project'>
                  <BsEye />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;