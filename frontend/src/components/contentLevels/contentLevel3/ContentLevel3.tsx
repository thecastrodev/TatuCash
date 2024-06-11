import { Link } from 'react-router-dom'
import '../contentLevel.css'
import { LevelSection, LevelTitleSection, VideoSection } from '../ContentLevel';
import imgVoltar from '../../../assets/formacoes/botoes/voltar.svg'

const titlelevel3 = [
    "Investimentos"
]

const subtitle1level3 = [
    "O que é investir"
]



const paragraph1Level3 = [
    "Investir é, basicamente, emprestar o seu dinheiro ao banco para receber os juros pelo dinheiro emprestado. Também você pode aplicar o seu dinheiro em um negócio que vai render lucros. Mas seu objetivo em investir não precisa ser apenas guardar dinheiro pensando no futuro ou acumular riqueza."
]

const subtitle2level3 = [
    "Tipos de investimento"
]



const paragraph2Level3 = [
    "Renda Fixa é uma modalidade de investimento seguro, de bons retornos e com uma taxa de rendimento fixa, o que torna uma ótima indicação para sua reserva de emergência e para quem está começando a investir. Exemplos: Tesouro Direto, Certificados de Depósito Bancário (CDBs), Letra de Crédito Imobiliário (LCIs).",
    "Renda variável é o investimento que, como o próprio nome já diz, não garante uma estabilidade no retorno investido no momento da aplicação, podendo ter alta ou baixa rentabilidade. Por isso, é considerado um investimento de risco mais alto se comparado à renda fixa. Exemplos: Ações de empresas, Fundos de ações, Fundos imobiliários,ouro e algumas operações de câmbio."
]

const subtitle3level3 = [
    ""
]



const paragraph3Level3 = [
    ""
]

const videoLevel3 = [
    "https://www.youtube.com/embed/Fi6qyD4LZnA?si=oZMQF9h3zp231DUJ"
]



export const ContentLevel3 = () => {
    return(
        <>           
            <section className="content">
                <Link to={'/nivel3'}>
                    <img src={imgVoltar} alt="Voltar para o Nivel" />
                </Link>

                <LevelTitleSection titles={titlelevel3} />
                <LevelSection subtitles={subtitle1level3} paragraphs={paragraph1Level3}/>
                <LevelSection subtitles={subtitle2level3} paragraphs={paragraph2Level3}/>
                <LevelSection subtitles={subtitle3level3} paragraphs={paragraph3Level3}/>    

                <div className="contentVideos">
                    <VideoSection videos={videoLevel3} />

                </div>
            </section>
        </>
    )
}