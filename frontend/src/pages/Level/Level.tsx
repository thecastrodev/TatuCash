import React, { useEffect, useRef } from 'react';
import image1 from '../../assets/home/perfil_tatu_bebe.png';
import image2 from '../../assets/home/perfil_tatu_jovem.png';
import image3 from '../../assets/home/perfil_tatu_adulto.png';
import './Level.css';

const Level: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = containerRef.current?.querySelectorAll('.nivel-image-container');
    elements?.forEach(element => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);
  

  return (
    <div className="nivel-container" ref={containerRef}>
      <div className="nivel-items">
        <div className="nivel-item">
        <label className="nivel-label"><h4>Tatu Bebê</h4></label>
          <div className="nivel-image-container">
            <img src={image1} alt="Imagem 1" className="nivel-image" />
            <div className="nivel-overlay">
              <p className="nivel-item-description">Parabéns! Você iniciou sua jornada de aprendizado. Nesse nível, você adquiriu noções básicas de educação financeira, bem como se familiarizou com a plataforma. Com isso, você é capaz de aplicar conceitos iniciais de forma acertada.</p>
            </div>
          </div>
        </div>
        <div className="nivel-item">
        <label className="nivel-label"><h4>Tatu Jovem</h4></label>
          <div className="nivel-image-container">
            <img src={image2} alt="Imagem 2" className="nivel-image" />
            <div className="nivel-overlay">
              <p className="nivel-item-description">Você atingiu o segundo nível de conhecimento! Agora você é capaz de analisar suas finanças de forma satisfatória e elaborar planos detalhados para garantir sua saúde financeira, bem como de gerenciar o fluxo econômico de pequenas e médias empresas.</p>
            </div>
          </div>
        </div>
        <div className="nivel-item">
        <label className="nivel-label"><h4>Tatu Adulto</h4></label>
          <div className="nivel-image-container">
            <img src={image3} alt="Imagem 3" className="nivel-image" />
            <div className="nivel-overlay">
              <p className="nivel-item-description">Viva! Agora você é expert em saúde financeira. Parabéns! Com isso, você é capaz de gerenciar a saúde financeira de grandes empresas, bem como de investir em ações das mais variadas naturezas. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Level;
