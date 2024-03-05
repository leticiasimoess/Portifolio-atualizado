// eslint-disable-next-line no-unused-vars
import React from "react";

import Home from "./Components/Home";
import Sobre from "./Components/Sobre";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Certificados from './Components/Certificados';
import Navbar from "./Components/Navbar";
import Contact from './Components/Contact';
import "./Style/components-sass/app.sass";
import Footer from './Components/Footer';


export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Sobre/>
      <Skills/>
      <Projects/>
      <Certificados/>
      <Contact/>
      <Footer/>
    </div>    
    
  );
}
