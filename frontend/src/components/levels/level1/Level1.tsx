import '../levels.css'
import cactu from '../../../assets/formacoes/banner_formacao_basica.png'
import { Link } from 'react-router-dom'

export const Level1 = () => {
    return(
        <>
            <section className='pageLevel'>
                <Link to={'/formacao'}>Voltar</Link>
                <div className='elementsLevel'>

                    <img src={cactu} alt="" className='imgLevel'/>
                    
                    <div className='textLevel'>
                        <h2 className='titleLevel'>Formação Nível 1</h2>
                        <p className='descriptionLevel'>Nesta formação, você vai se deparar com os conceitos e fundamentos de educação financeira, abordando desde eventos históricos até a solidificação do que conhecemos hoje como economia. A cada módulo, você terá a oportunidade de assistir vídeos e ler artigos sobre cada temática. Inicie seus estudos com o pé direito!</p>
                    </div>
                </div>
                <div>
                    <Link to={'/conteudoNivel1'}>conteudo</Link>
                </div>
                <div className='quizButton'>
                    quiz
                </div>
            </section>
            
        </>
    )
}