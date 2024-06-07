import React from 'react';
import bannerImage from "../../assets/home/full_banner.svg"; // Importe a imagem do banner
import iconImage from '../../assets/home/play.png';
import './Banner.css';

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="overlay">
        <div className="text-container">
          <h1 className="title">Quer ter educação financeira de forma dinâmica?</h1>
          <p className="description">Oferecemos educação financeira de forma prática e dinâmica, priorizando seu aprendizado de forma lúdica e enriquecedora.</p>
          <div className="image-word-container">
            <img src={iconImage} alt="Icon" className="icon-image" />
            <span className="word">Play</span>
          </div>      
        </div>
      </div>
    </div>
  );
}

export default Banner;
