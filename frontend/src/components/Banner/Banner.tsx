import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import slide1 from '../../assets/home/full_banner.svg';
import slide2 from '../../assets/home/full_banner.svg';
import slide3 from '../../assets/home/full_banner.svg';
import previous from '../../assets/home/anterior.png';
import next from '../../assets/home/next.png'
import './Banner.css';

import Header from '../Header/Header';

const Banner: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const productSlideImg = [
    { Img: slide1, ImgName: 'slide1', label: 'Slide 1', description: 'This is the first slide description.' },
    { Img: slide2, ImgName: 'slide2', label: 'Slide 2', description: 'This is the second slide description.' },
    { Img: slide3, ImgName: 'slide3', label: 'Slide 3', description: 'This is the third slide description.' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
      <div className="slider-container">
      <Header />
      <Slider ref={sliderRef} {...settings}>
        {productSlideImg.map((item, index) => (
          <div key={index} className="slider-content">
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
