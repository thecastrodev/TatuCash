import './formations.css'
import banner from '../../assets/formacoes/banner.png'
import imgLvl1 from '../../assets/formacoes/Nivel 1.svg'
import imgLvl2 from '../../assets/formacoes/Nivel 2.svg'
import imgLvl3 from '../../assets/formacoes/Nivel 3.svg'
import { Link } from 'react-router-dom'

export const Formations = () => {
    return (
        <>
            <img src={banner} alt="" className='banner'/>
            

            <section className='pageFormation'>
                
                <div className='elementsFormation'>
                    <div className='titlesPage'>
                        <h2 className='titleFormations'>Formações</h2>
                        <p className='subtitleFormations'>Acompanhe nossas formações</p>
                    </div>

                    <div className='buttonsPage'>
                        <Link to={'/nivel1'}>
                            <img src={imgLvl1} alt="" className='buttonFormation'/>
                        </Link>

                        <Link to={'/nivel2'}>
                            <img src={imgLvl2} alt=""  className='buttonFormation'/>
                        </Link>

                        <Link to={'/nivel3'}>
                            <img src={imgLvl3} alt=""  className='buttonFormation'/>
                        </Link>
                    </div>
                </div>
            </section>

            
        </>
    )
}