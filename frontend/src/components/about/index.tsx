import './about.css'
import Believe from '../believe';
import Cards from '../cards';

const About = () => {
    return (
        <section className='about-container'>
            <div className='text-container'>
                <h2>Sobre nós</h2>
                <p className='description-about'>O negócio surgiu a partir da junção de cinco colegas do curso de Engenharia de Computação, participantes de um Bootcamp intitulado Mandacarú.Dev, em um módulo focado em Gestão ágil e inovação. Desenvolveremos uma plataforma web, que foca no aprendizado interativo do usuário, por meio de atividades com quiz e vídeos educativos, sobre educação financeira, tendo como ponto forte a identidade visual e design de nossos serviços, com foco em Pixel Art.</p>
            </div>
            <div className='text-container'>
                <h2>Nosso público</h2>
                <p className='description-about'>O público-alvo da nossa empresa se concentra em pessoas com renda baixa e média, com pouco acesso a conteúdos sobre educação financeira e também para pessoas que precisam de uma linguagem mais simples e acessível, além de não compreenderem tanto de tecnologias.</p>
            </div>

            <div className='cards-container'>
                <h2>Esquadrão Mandacaru</h2>
                <Cards />
            </div>

            <div className='believe-container'>
                <h2>Veja no que acreditamos</h2>
                <Believe />

            </div>


        </section>
    )
}

export default About