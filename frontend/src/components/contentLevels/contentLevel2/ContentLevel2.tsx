import { Link } from 'react-router-dom'
import '../contentLevel.css'
import { LevelSection, LevelTitleSection, VideoSection } from '../ContentLevel';
import imgVoltar from '../../../assets/formacoes/botoes/voltar.svg'

const titlelevel2 = [
    "Endividamento e golpes"
]

const subtitle1level2 = [
    "Dívidas e endividamento"
]



const paragraph1Level2 = [
    "O endividamento existe quando há empréstimos em aberto e compras parceladas no cartão de crédito, parcelas de empréstimos ou até mesmo boletos. Ainda que os pagamentos não estejam atrasados, são considerados dívidas.",
    "Consumidores com contas vencidas e atrasadas são considerados inadimplentes. Muito diferente do endividamento financeiro, a inadimplência pode gerar registro nos órgãos de proteção ao crédito e restrições de crédito."
]

const subtitle2level2 = [
    "Golpes e como evitá-los"
]



const paragraph2Level2 = [
    "O golpe financeiro é um crime cujo objetivo é roubar o dinheiro de uma pessoa ou de uma empresa. Uma característica desse tipo de infração é que os criminosos usam a dissimulação para fazer com que a vítima forneça seus dados financeiros."
]

const subtitle3level2 = [
    "Fique atento"
]



const paragraph3Level2 = [
    "Fontes Diversas de Golpes: Golpes podem vir de e-mails, telefonemas, SMS, redes sociais, sites falsos e até pessoalmente.",
    "Ofertas Boas Demais: Desconfie de promessas de ganhos rápidos e fáceis, como investimentos com altos retornos ou preços muito baixos, pois geralmente são fraudes.",
    "Urgência Exagerada: Criminosos se aproveitam da sensação de urgência para impedir que as vítimas pensem claramente.",
    "Pressão para Agir Rápido: Golpistas frequentemente pressionam as vítimas a tomar decisões rápidas, sem reflexão.",
    "Pedidos de Informações Pessoais: Empresas legítimas não solicitam dados pessoais ou financeiros por e-mail, SMS ou redes sociais.",
    "Verificação da Informação: Sempre verifique a fonte antes de compartilhar dados ou clicar em links.",
    "Inconsistências: Preste atenção a erros ou informações inconsistentes, que podem indicar um golpe."
]

const subtitle4level2 = [
    "Confirme a veracidade das informações"
]

const paragraph4Level2 = [
    "Desconfie de mensagens que pedem para repassar informações: como senhas, dados bancários ou números de cartão de crédito.",
    "Verifique a fonte da informação: antes de compartilhar ou clicar em qualquer link.",
    "Entre em contato diretamente com a empresa ou instituição envolvida para confirmar a veracidade da informação.",
    ""
]

const subtitle5level2 = [
    "Se você suspeitar de um golpe"
]

const paragraph5Level2 = [
    "Não responda à mensagem ou clique em nenhum link.",
    "Entre em contato com a empresa ou instituição que supostamente está sendo usada no golpe.",
    "Denuncie o golpe às autoridades: como a Polícia Civil ou o Procon."
]

const videoLevel2 = [
    "https://www.youtube.com/embed/DwEub8hN98E?si=cf9SpJw_9QNFfkmC",
    "https://www.youtube.com/embed/IP4eWCIgm6s?si=ubm-pKEtU1I_TPG_",
    "https://www.youtube.com/embed/21HHuJNQSiw?si=jeHCeQMhNaDc8oE8",
    "https://www.youtube.com/embed/zRRfYAsLqbM?si=bLoj2UFR7NPLrxjF",
    "https://www.youtube.com/embed/cXvC9L4JdvU?si=C2WawVROTL81-m-7"
]



export const ContentLevel2 = () => {
    return(
        <>           
            <section className="content">
                <Link to={'/nivel2'}>
                    <img src={imgVoltar} alt="Voltar para o Nivel" />
                </Link>

                <LevelTitleSection titles={titlelevel2} />
                <LevelSection subtitles={subtitle1level2} paragraphs={paragraph1Level2}/>
                <LevelSection subtitles={subtitle2level2} paragraphs={paragraph2Level2}/>
                <LevelSection subtitles={subtitle3level2} paragraphs={paragraph3Level2}/>    
                <LevelSection subtitles={subtitle4level2} paragraphs={paragraph4Level2}/>    
                <LevelSection subtitles={subtitle5level2} paragraphs={paragraph5Level2}/>    

                <div className="contentVideos">
                    <VideoSection videos={videoLevel2} />

                </div>
            </section>
        </>
    )
}