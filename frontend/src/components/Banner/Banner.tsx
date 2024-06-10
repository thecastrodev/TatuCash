import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../../assets/home/full_banner.svg';
import slide2 from '../../assets/home/banner_family.svg';
import slide3 from '../../assets/home/banner_business.svg';
import './Banner.css';

const Banner: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const productSlideImg = [
    { Img: slide1, ImgName: 'slide1', label: 'Quer ter educação financeira de forma dinâmica?', description: 'Oferecemos educação financeira de forma prática e dinâmica, priorizando seu aprendizado de forma lúdica e enriquecedora.', link: '../../pages/Future/index.tsx' },
    { Img: slide2, ImgName: 'slide2', label: 'Planejamento Financeiro Familiar', description: 'Construa um futuro financeiro sólido para sua família. Explore estratégias para economizar, investir e proteger o patrimônio familiar. Aprenda a lidar com despesas compartilhadas, planejar para educação dos filhos, e preparar-se para emergências financeiras.', link: 'https://example.com/slide2' },
    { Img: slide3, ImgName: 'slide3', label: 'Planejamento Financeiro Empresarial', description: 'Transforme sua visão de negócio em realidade financeira. Desenvolva habilidades para administrar as finanças de sua empresa, desde o planejamento de capital inicial até a expansão e gestão de lucros. Domine conceitos-chave como fluxo de caixa, investimento e estratégias de crescimento sustentável.', link: 'https://example.com/slide3' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Desabilitar as setas
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {productSlideImg.map((item, index) => (
          <div key={index} className="slider-content">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                className="slider-image"
                src={item.Img}
                alt={`Slide ${index + 1}`}
                onClick={() => console.log(`Image ${item.ImgName} clicked`)}
              />
              <div className="slider-overlay">
                <h2 className="slider-label">{item.label}</h2>
                <p className="slider-description">{item.description}</p>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
