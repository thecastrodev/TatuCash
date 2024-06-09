import './mascot.css';
import TextSection from "../textSection";
import TatucaBioImg from "../../assets/equipe/Tatuca.svg"


const mascot = [
    "Tatuca nasceu em um dia ensolarado, com uma missão clara: levar educação financeira com um toque de humor e leveza para todos os clientes da Tatucash. Com apenas dois meses, este pequeno tatu já se tornou um símbolo de confiança e amizade, representando a dedicação e os valores da empresa.",
    "Atualmente, Tatuca está mergulhado nos estudos de saúde financeira. Entre uma aula e outra, ele é frequentemente visto devorando livros sobre investimentos, poupança e planejamento financeiro. Seu foco é ajudar todos a alcançar a estabilidade financeira com suas dicas valiosas. Claro, como todo bom mascote, Tatuca sabe que um pouco de humor torna o aprendizado muito mais agradável.",
];



const Mascot = () => {
    return (
        <div className="mascot-container">
            <div className="mascot-image-container">
                <img className='img-tatuca' src={TatucaBioImg} alt='Foto do mascote Tatuca'/>
                <h4>Tatuca S. Hidalgo</h4>
                <p className='tagline-paragraph'><strong>Bordão:</strong> Economizar é como cavar: com esforço, você encontra grandes tesouros!</p>
            </div>

            <div className="mascot-bio-container">
                <h3>Biografia</h3>
                <p className='bio-paragraph'><strong>Nome:</strong> Tatuca Silva Hidalgo</p>
                <p className='bio-paragraph'><strong>Idade:</strong> 2 meses</p>
                <p className='bio-paragraph'><strong>Profissão:</strong> Mascote oficial da Tatucash Soluções Financeiras LTDA</p>
                <TextSection paragraphs={mascot}/>

            </div>
        </div>
    )
}

export default Mascot;