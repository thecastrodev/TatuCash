import React from 'react';
import image1 from '../../assets/home/mensagem.svg';
import image2 from '../../assets/home/text.svg';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Tem alguma dúvida?</h2>
      <p className="contact-description">Entre em contato conosco para mais informações.</p>
      <div className="contact-images">
        <div className="contact-image-container">
          <img src={image1} alt="Contato 1" className="contact-image" />
        </div>
        <div className="contact-image-container">
          <img src={image2} alt="Contato 2" className="contact-image" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
