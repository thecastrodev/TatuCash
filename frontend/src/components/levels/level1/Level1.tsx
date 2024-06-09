import Rodape from '../../../pages/Footer/Rodape'
import Header from '../../../pages/Header/Header'
import './level1.css'
import cactu from '../../../assets/formacoes/banner_formacao_basica.png'

export const Level1 = () => {
    return(
        <>
            <Header />
            <section className='pageLevel'>
                <div className='elementsLevel'>
                    <img src={cactu} alt="" className='imgLevel'/>

                    <div className='textLevel'>
                        <h2 className='titleLevel'>Formação Nível 1</h2>
                        <p className='descriptionLevel'>Nesta formação, você vai se deparar com os conceitos e fundamentos de educação financeira, abordando desde eventos históricos até a solidificação do que conhecemos hoje como economia. A cada módulo, você terá a oportunidade de assistir vídeos e ler artigos sobre cada temática. Inicie seus estudos com o pé direito!</p>

                    </div>
                </div>
                <div className='quizButton'>

                </div>
            </section>
            <Rodape />
        </>
    )
}