// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

import "../Style/components-sass/navbar.sass";

import { GoDownload } from "react-icons/go";

const Navbar = () => {

  return (
    <nav>
      <div className="logo">
      <Link to='inicio' smooth duration={1000}>
        <img src={Logo} alt="Logo" />
        </Link>
      </div>
        <div className='nav'>
          <ul>
            <li>
              <Link to='inicio' smooth duration={1000}>Inicio</Link>
            </li>
            <li>
              <Link to='sobre' smooth duration={1000}>Sobre</Link>
            </li>
            <li>
              <Link to='skills' smooth duration={1000}>Skills</Link>
            </li>
            <li>
              <Link to='projects' smooth duration={1000}>Projetos</Link>
            </li>
          </ul>

            {/* Adicionando botões */}
       <div className="action-buttons">
       <Link to='contact' smooth duration={1000}>
              <button>Contact Me</button>
            </Link>
            <Link to="https://drive.google.com/file/d/1B1ZDV8spIKSLNk2vwP5fnjYLvF_v7P2w/view?usp=drive_link">
              <button>
                Curriculo <GoDownload />{""}
              </button>
            </Link>
            </div>
        </div>

    
    </nav>
  );
};

export default Navbar;