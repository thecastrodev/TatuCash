import './formations.css'
import banner from '../../assets/formacoes/banner.png'
import imgLvl1 from '../../assets/formacoes/niveis/1.png'
import imgLvl2 from '../../assets/formacoes/niveis/2.png'
import imgLvl3 from '../../assets/formacoes/niveis/3.png'
import { Link } from 'react-router-dom'
import LevelHover from '../../assets/sound/HoverLevelFormation.mp3';
import LevelClick from '../../assets/sound/ClickLevelFormation.mp3'

export const Formations = () => {

    const playLevelHover = (): void => {
        const audio = new Audio(LevelHover);
        audio.play();
    };
    const playLevelClick = (): void => {
        const audio = new Audio(LevelClick);
        audio.play();
    };

    return (
        <>
            <img src={banner} alt="" className='banner' />

            <section className='pageFormation'>

                <div className='elementsFormation'>
                    <div className='titlesPage'>
                        <h2 className='titleFormations'>Formações</h2>
                        <p className='subtitleFormations'>Acompanhe nossas formações</p>
                    </div>

                    <div className='buttonsPage'>
                        <Link to={'/nivel1'}>
                            <img src={imgLvl1} alt="" className='buttonFormation'
                                onMouseEnter={playLevelHover}
                                onClick={playLevelClick} />
                        </Link>

                        <Link to={'/nivel2'}>
                            <img src={imgLvl2} alt="" className='buttonFormation'
                                onMouseEnter={playLevelHover}
                                onClick={playLevelClick} />
                        </Link>

                        <Link to={'/nivel3'}>
                            <img src={imgLvl3} alt="" className='buttonFormation'
                                onMouseEnter={playLevelHover}
                                onClick={playLevelClick} />
                        </Link>
                    </div>
                </div>
            </section>


        </>
    )
}