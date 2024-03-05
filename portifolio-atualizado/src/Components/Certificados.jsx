// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../Style/components-sass/certificado.sass';
import diploma from '../assets/diploma.png';
import vnw from '../assets/vnw.png';

const Certificados = () => {
  const certificados = [
    // Adicione o caminho das suas imagens de certificados aqui
    diploma,
    vnw,
    // Adicione quantos certificados você precisar
  ];

  const [certificadoAtual, setCertificadoAtual] = useState(0);

  const avancarCertificado = () => {
    setCertificadoAtual((prev) => (prev + 1) % certificados.length);
  };

  const retrocederCertificado = () => {
    setCertificadoAtual((prev) => (prev - 1 + certificados.length) % certificados.length);
  };

  return (
    <div className='certificado'>
      <h2>Meus Certificados</h2>
      <div className="certificado-container">
        <button className="certificado-botao" onClick={retrocederCertificado}><span>&lt;</span></button>
        <img 
          className="certificado-imagem" 
          src={certificados[certificadoAtual]} 
          alt={`Certificado ${certificadoAtual + 1}`} 
        />
        <button className="certificado-botao" onClick={avancarCertificado}><span>&gt;</span></button>
      </div>
    </div>
  );
};

export default Certificados;