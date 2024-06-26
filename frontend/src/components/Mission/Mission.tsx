import React from 'react';
import iconSaiba from '../../assets/home/saiba_mais.svg';
import './Mission.css';
import Level from "../Level/Level";
import Contact from "../Contact/Contact"
import { Link } from 'react-router-dom';

const Mission: React.FC = () => {
  return (
    <section className='home-container'>
      <div className="mission-container">
        <h3 className="level-title">Nossa Missão</h3>
        <p className="level-paragraph">
        Facilitar o aprendizado em finanças pessoais e propagar a educação financeira para as pessoas de diferentes classes econômicas e sociais.
        </p>
        <Link to={'/sobre'}><img src={iconSaiba} alt="Icon" className="icon-saiba" /></Link>
      </div>
      <div className='container-level'>
        <h3 className ='level-title'>Descubra o seu potencial</h3>
        <p className='level-paragraph'>Adquira níveis de conhecimento com nossos conteúdos e desfrute da educação financeira conquistando novas habilidades ao longo da sua jornada!</p>
        <Level />
      </div>
      <div className='container-contact'>
        <h3 className ='level-title'>Tem alguma dúvida?</h3>
        <p className='level-paragraph'>Entre em contato conosco para mais informações.</p>
        <Contact />
      </div>
      
    </section>
  );
}

export default Mission;
