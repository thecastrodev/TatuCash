import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../../assets/home/full_banner.svg';
import slide2 from '../../assets/home/banner_family.svg';
import slide3 from '../../assets/home/banner_business.svg';
import previous from '../../assets/home/anterior.png';
import next from '../../assets/home/next.png'
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const productSlideImg = [
    { Img: slide1, ImgName: 'slide1', label: 'Quer ter educação financeira de forma dinâmica?', description: 'Oferecemos educação financeira de forma prática e dinâmica, priorizando seu aprendizado de forma lúdica e enriquecedora.', link: '/formacao' },
    { Img: slide2, ImgName: 'slide2', label: 'Planejamento Financeiro Familiar', description: 'Construa um futuro financeiro sólido para sua família. Explore estratégias para economizar, investir e proteger o patrimônio familiar. Aprenda a lidar com despesas compartilhadas, planejar para educação dos filhos, e preparar-se para emergências financeiras.', link: '/futuro'},
    { Img: slide3, ImgName: 'slide3', label: 'Planejamento Financeiro Empresarial', description: 'Transforme sua visão de negócio em realidade financeira. Desenvolva habilidades para administrar as finanças de sua empresa, desde o planejamento de capital inicial até a expansão e gestão de lucros. Domine conceitos-chave como fluxo de caixa, investimento e estratégias de crescimento sustentável.', link: '/futuro' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
      <div className="slider-container">
      {/* <Header /> */}
      <Slider ref={sliderRef} {...settings}>
        {productSlideImg.map((item, index) => (
          <div key={index} className="slider-content">
            <Link to={item.link} rel="noopener noreferrer">
            <img
              className="slider-image"
              src={item.Img}
              alt={`Slide ${index + 1}`}
              onClick={() => {
                setCurrentSlide(index);
                console.log(`Image ${item.ImgName} clicked`);
              }}
            />
            <div className="slider-overlay">
              <h2 className="slider-label">{item.label}</h2>
              <p className="slider-description">{item.description}</p>
            </div>
              </Link>
          </div>
        ))}
      </Slider>
      <div className="custom-arrows">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          disabled={currentSlide === 0}
        >
          <img src={previous} alt="Slide anterior" />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          disabled={currentSlide === productSlideImg.length - 1}
        >
          <img src={next} alt="Próximo slide" />
        </button>
      </div>
      </div>
  );
};

export default Banner;
