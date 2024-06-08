import React from 'react';
import './about.css';
import Believe from '../believe';
import Cards from '../cards';
import TextSection from '../textSection';

const aboutParagraphs = [
    "O negócio surgiu a partir da junção de cinco colegas do curso de Engenharia de Computação, participantes de um Bootcamp intitulado Mandacarú.Dev, em um módulo focado em Gestão ágil e inovação. Desenvolveremos uma plataforma web, que foca no aprendizado interativo do usuário, por meio de atividades com quiz e vídeos educativos, sobre educação financeira, tendo como ponto forte a identidade visual e design de nossos serviços, com foco em Pixel Art."
];



const publicParagraphs = [
    "Nosso negócio nasceu da união de cinco colegas do curso de Engenharia de Computação, que participaram juntos de um Bootcamp chamado Mandacarú.Dev. Durante um módulo focado em Gestão Ágil e Inovação, percebemos uma grande oportunidade de transformar a educação financeira.",
    "A partir dessa ideia, desenvolvemos uma plataforma web inovadora, projetada para tornar o aprendizado interativo e envolvente. Nosso objetivo é proporcionar a você uma experiência educativa enriquecedora, utilizando quizzes e vídeos educativos para ensinar conceitos de educação financeira de maneira clara e acessível.",
    "O grande diferencial da nossa plataforma está na sua identidade visual e no design, que são cuidadosamente elaborados com um estilo de Pixel Art. Este estilo não apenas torna o aprendizado mais divertido e visualmente atraente, mas também cria um ambiente amigável e acolhedor para todos os usuários, independentemente de seu nível de familiaridade com a tecnologia. Estamos comprometidos em oferecer uma ferramenta que seja intuitiva e fácil de usar, garantindo que você possa aproveitar ao máximo todos os recursos disponíveis para melhorar sua compreensão e gestão financeira."
];


const About: React.FC = () => {
    return (
        <section className='about-container'>

            <div className='about-container-paragraphs'>
                <h2>Sobre nós</h2>
                <TextSection paragraphs={aboutParagraphs} />
            </div>

            <div className='public-container-paragraphs'>
                <h2>Nosso público</h2>
                <TextSection paragraphs={publicParagraphs} />
            </div>

            <div className='cards-container'>
                <h2>Esquadrão Mandacaru</h2>
                <Cards />
            </div>

            <div className='believe-container'>
                <h2>Veja no que acreditamos</h2>
                <Believe />
            </div>

        <div className='mascote'>
            <h2>Mascote</h2>
            <div>

            </div>
            <div>
                
            </div>
        </div>

        </section>
    );
};

export default About;