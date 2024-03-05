// eslint-disable-next-line no-unused-vars
import React from 'react';
import { DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiSass,
  DiReact,} from "react-icons/di";

import { SiStyledcomponents, SiMysql, SiNextdotjs, SiC} from "react-icons/si";
import { LiaGit } from "react-icons/lia";
import "../Style/components-sass/skills.sass";
import { FaBootstrap } from 'react-icons/fa';

const skills = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />},
  { id: "css", name: "CSS3", icon: <DiCss3 />},
  { id: "bootstrap", name:"Bootstrap", icon: <FaBootstrap/> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />},
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "sass", name: "Sass", icon: <DiSass />},
  { id: "styled", name: "Styled-Components", icon: <SiStyledcomponents />},
  { id: "nextjs", name: "Next.js", icon: <SiNextdotjs />},
  { id: "c", name: "C", icon: <SiC />},
  {id: "mysql", name:"MySQL", icon: <SiMysql/> },
  {id: "git", name:"Git", icon: <LiaGit/>},
];

function Skills () {
  return (
    <section className="skills">
    <h2>Minhas Habilidades</h2>
    <p className='legend'>
    Com uma sólida compreensão das tecnologias fundamentais e um olhar atento para as avançadas, 
    continuo explorando e aprimorando minhas habilidades. Essas são as tecnologias que já tenho um certo entendimento
    e que estou me dedicado a estudar, impulsionando minha jornada no vasto universo da programação.
    </p>
    <div className="skills-grid">
      {skills.map((language) => (
        <div className="skills-card" id={language.id} key={language.id}>
          {language.icon}
          <div className="skills-info">
            <h3>{language.name}</h3>
           </div>
        </div>
      ))}
    </div>
    </section>
  );
}

export default Skills;
