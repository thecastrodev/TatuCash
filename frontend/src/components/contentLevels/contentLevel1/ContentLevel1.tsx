import { Link } from 'react-router-dom'
import '../contentLevel.css'
import { LevelSection, LevelTitleSection, VideoSection } from '../ContentLevel';
import imgVoltar from '../../../assets/formacoes/botoes/voltar.svg'

const titlelevel1 = [
    "Gestão Financeira"
]

const subtitle1level1 = [
    "Conceitos importantes"
]



const paragraph1Level1 = [
    "Orçamento é um plano que ajuda a estimar despesas, ganhos e oportunidades de investimentos em um período determinado de tempo. Com um orçamento bem definido é possível estabelecer objetivos, que vão permitir que os resultados sejam acompanhados de perto e medidos.",
    "Controle de gastos é fundamental para evitar endividamento e garantir a saúde financeira do negócio ou vida pessoal.",
    "Planejamento financeiro é essencial para a vida financeira, permitindo definir metas e objetivos a curto, médio e longo prazo."
]

const subtitle2level1 = [
    "Gestão Financeira Pessoal"
]



const paragraph2Level1 = [
    "Organizar as finanças pessoais é muito importante para ter mais tranquilidade na vida e manter todas as contas, fixas e variáveis, em dia é um desafio para muitas pessoas",
    "O primeiro passo para ter mais controle sobre seus gastos é listar todas as suas despesas e identificar quais são realmente essenciais e eliminar aqueles desnecessários, com isso em mãos, é hora de fazer o planejamento e definir uma meta financeira factível.",
    "Com o planejamento feito, priorize pagar as dívidas existentes sem contrair novas e se necessário, buscar uma negociação com a instituição financeira. Estando ciente de sua situação financeira, agora é importante criar uma reserva de emergência para gastos imprevistos, inclusive controlando os gastos com cartão de crédito.",
    "Quando suas finanças começarem a ficarem em ordem e tiver uma reserva de emergência, é hora de pensar em poupar dinheiro e começar a investir, procurando investimentos mais rentáveis e estudando sobre o assunto. E para todo o esforço de fazer a gestão financeira da sua vida funcionar, toda a família deve estar envolvida  e utilizar a tecnologia a ser favor, existem diversos aplicativos e plataformas como a Tatucash para auxiliar na gestão financeira da sua vida e da sua família."
]

const videoLevel1 = [
    "https://www.youtube.com/embed/7Qvoc7Ur6X4",
    "https://www.youtube.com/embed/6IEQ_m6aPm4?si=u9X_jgaPTJRmk99b",
    "https://www.youtube.com/embed/jvJBjO24PVs?si=3jceoDVSl5mARGVa"
]



export const ContentLevel1 = () => {
    return(
        <>           
            <section className="content">
                <Link to={'/nivel1'}>
                    <img src={imgVoltar} alt="Voltar para o Nivel" />
                </Link>

                <LevelTitleSection titles={titlelevel1} />
                <LevelSection subtitles={subtitle1level1} paragraphs={paragraph1Level1}/>
                <LevelSection subtitles={subtitle2level1} paragraphs={paragraph2Level1}/>


                <div className="contentVideos">
                    <VideoSection videos={videoLevel1} />

                </div>
            </section>
        </>
    )
}