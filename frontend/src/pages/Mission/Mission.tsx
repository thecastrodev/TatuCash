import React from 'react';
import iconSaiba from '../../assets/home/saiba_mais.svg';
import './Mission.css';

const Mission: React.FC = () => {
  return (
    <div className="mission-container">
      <h2 className="mission-title">Nossa Missão</h2>
      <p className="mission-description">
      Facilitar o aprendizado em finanças pessoais e propagar a educação financeira para as pessoas de diferentes classes econômicas e sociais.
      </p>
      <img src={iconSaiba} alt="Icon" className="icon-saiba" />
    </div>
  );
}

export default Mission;
