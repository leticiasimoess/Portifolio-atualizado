// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../Style/components-sass/contact.sass';

function Contact() {
  const [name, setName] = useState({ value: '', visible: true });
  const [email, setEmail] = useState({ value: '', visible: true });
  const [message, setMessage] = useState({ value: '', visible: true });

  const handleInputFocus = (setState) => {
    setState((prevState) => ({ ...prevState, visible: false }));
  };

  const handleInputBlur = (setState, e) => {
    if (!e.target.value) {
      setState((prevState) => ({ ...prevState, visible: true }));
    }
  };

  return (
    <section className='contact'>
      <h2>Contato</h2>
      <form className="contact-form">
        <div className="form-group">
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={name.value} 
            onFocus={() => handleInputFocus(setName)}
            onBlur={(e) => handleInputBlur(setName, e)}
            onChange={(e) => setName({ value: e.target.value, visible: false })} 
            placeholder="Nome:"
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email.value} 
            onFocus={() => handleInputFocus(setEmail)}
            onBlur={(e) => handleInputBlur(setEmail, e)}
            onChange={(e) => setEmail({ value: e.target.value, visible: false })} 
            placeholder="Email:"
          />
        </div>
        <div className="form-group">
          <textarea 
            id="message" 
            name="message" 
            value={message.value} 
            onFocus={() => handleInputFocus(setMessage)}
            onBlur={(e) => handleInputBlur(setMessage, e)}
            onChange={(e) => setMessage({ value: e.target.value, visible: false })} 
            placeholder="Como posso ajudar:"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Entrar em Contato</button>
      </form>
      <div className="container-text">
        <p className='special-talk'>Vamos conversar sobre algo especial</p>
        <p className="special-text">Procuro ultrapassar os limites da criatividade para criar experiências interativas altamente envolventes, fáceis de usar e memoráveis</p>
      </div>
    </section>
  );
}

export default Contact;
