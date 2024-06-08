import React from 'react';
import iconImage from '../../assets/home/play.png';
import './Banner.css';


const Banner: React.FC = () => {
  return (
          <div className="text-container">
            <h1 className="title">Quer ter educação financeira de forma dinâmica?</h1>
            <p className='banner-description'>Oferecemos educação financeira de forma prática e dinâmica, priorizando seu aprendizado de forma lúdica e enriquecedora.</p>
            <div className="image-word-container">
              <img src={iconImage} alt="Icon" className="icon-image" />
              <span className="word">Play</span>
            </div>      
          </div>
  );
}

export default Banner;
