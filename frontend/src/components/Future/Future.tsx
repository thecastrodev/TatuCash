import React from 'react';
import './Future.css';
import image from '../../assets/future.jpg'
import icone from '../../assets/saiba_mais.svg'

const Future: React.FC = () => {
  return (
    <div className="image-label-icon-container">
      <img src={image} alt="Main" className="image" />
      <div className="label-icon">
        <span className="label">Funcionalidade em desenvolvimento</span>
        <img src={icone} alt="Icon" className="icon" />
      </div>
    </div>
  );
};

export default Future;
