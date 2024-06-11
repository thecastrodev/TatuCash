import { useRef } from 'react';
import '../levels.css'
import imgLevel from '../../../assets/formacoes/niveis/lvl1.png'
import btnVoltar from '../../../assets/formacoes/botoes/voltar.svg'
import btnFormations from '../../../assets/formacoes/botoes/2.png'
import btnQuiz from '../../../assets/formacoes/botoes/1.png'
import { Link } from 'react-router-dom'
import LevelHover from '../../../assets/sound/HoverLevelFormation.mp3';
import LevelClick from '../../../assets/sound/ClickLevelFormation.mp3';

export const Level1 = () => {
    const audioRef = useRef<HTMLAudioElement>(new Audio(LevelHover));
      
    const playLevelHover = (): void => {
        const audio = audioRef.current;
        audio.volume = 0.1;
        audio.currentTime = 0;
        audio.play();
      }

    const stopSoundLevel = (): void => {
        const audio = audioRef.current;
        audio.pause();
        audio.currentTime = 0;
      }

      const playLevelClick = (): void => {
        const audio = new Audio(LevelClick);
        audio.volume = 0.3;
        audio.play();
    };
    

    return(
        <>
            <section className='pageLevel'>
                <Link to={'/formacao'}>
                    <img src={btnVoltar} alt='Voltar' className='backButton' />
                </Link>
                <div className='elementsLevel'>

                    <img src={imgLevel} alt="Imagem de cactus do nivel 1" className='imgLevel'/>
                    
                    <div className='textLevel'>
                        <h2 className='titleLevel'>Formação Nível 1</h2>
                        <p className='descriptionLevel'>Nesta formação, você vai se deparar com os conceitos e fundamentos de educação financeira, abordando desde eventos históricos até a solidificação do que conhecemos hoje como economia. A cada módulo, você terá a oportunidade de assistir vídeos e ler artigos sobre cada temática. Inicie seus estudos com o pé direito!</p>
                    </div>

                    <div className='contentAndQuiz'>
                        <div className='contentButton'>
                            <Link to={'/conteudoNivel1'}>
                                <img src={btnFormations} alt="Conteúdo da Formação Nível 1" className='formationsButton'
                                onMouseEnter={playLevelHover}
                                onClick={playLevelClick}
                                onMouseLeave={stopSoundLevel}/>
                            </Link>
                        </div>
                        <div className='quizButton'>
                            <Link to={'/quiz'} state={{from: 'lvl1'}}>
                                <img src={btnQuiz} alt="Ir para o quiz do Nível 1" className='quizButton'
                                onMouseEnter={playLevelHover}
                                onClick={playLevelClick}
                                onMouseLeave={stopSoundLevel}/>
                            </Link>
                        </div>
                    </div>
                </div>

            </section>
            
        </>
    )
}