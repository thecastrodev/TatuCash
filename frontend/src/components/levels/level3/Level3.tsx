import '../levels.css'
import imgLevel from '../../../assets/formacoes/niveis/lvl3.png'
import btnVoltar from '../../../assets/formacoes/botoes/voltar.svg'
import btnFormations from '../../../assets/formacoes/botoes/4.png'
import btnQuiz from '../../../assets/formacoes/botoes/1.png'
import { Link } from 'react-router-dom'

export const Level3 = () => {
    return(
        <>
            <section className='pageLevel'>
                <Link to={'/formacao'}>
                    <img src={btnVoltar} alt='Voltar' className='backButton' />
                </Link>
                <div className='elementsLevel'>
                    <img src={imgLevel} alt="" className='imgLevel'/>

                    <div className='textLevel'>
                        <h2 className='titleLevel'>Formação Nível 3</h2>
                        <p className='descriptionLevel'>Nesta formação, você vai se deparar com os conceitos e fundamentos de educação financeira, abordando desde eventos históricos até a solidificação do que conhecemos hoje como economia. A cada módulo, você terá a oportunidade de assistir vídeos e ler artigos sobre cada temática. Inicie seus estudos com o pé direito!</p>
                    </div>
                    <div className='contentAndQuiz'>
                        <div className='contentButton'>
                            <Link to={'/conteudoNivel3'}>
                                <img src={btnFormations} alt="Conteúdo da Formação Nível 3" className='formationsButton'/>
                            </Link>
                        </div>
                        <div className='quizButton'>
                            <Link to={'/quiz'} state={{from: 'lvl3'}}>
                                <img src={btnQuiz} alt="Ir para o quiz do Nível 3" className='quizButton'/>
                            </Link>
                        </div>
                    </div>
                </div>

            </section>
            
        </>
    )
}