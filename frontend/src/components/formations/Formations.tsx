import './formations.css'
import banner from '../../assets/formacoes/banner.png'
import imgLvl1 from '../../assets/formacoes/Nivel 1.svg'
import imgLvl2 from '../../assets/formacoes/Nivel 2.svg'
import imgLvl3 from '../../assets/formacoes/Nivel 3.svg'
import Header from '../../pages/Header/Header'
import Rodape from '../Footer/Rodape'

export const Formations = () => {
    return (
        <>
            <img src={banner} alt="" className='banner'/>
            <Header />

            <section className='pageFormation'>
                
                <div className='elementsFormation'>
                    <div className='titlesPage'>
                        <h2 className='titleFormations'>Formações</h2>
                        <p className='subtitleFormations'>Acompanhe nossas formações</p>
                    </div>

                    <div className='buttonsPage'>
                        <img src={imgLvl1} alt="" className='buttonFormation'/>
                        <img src={imgLvl2} alt=""  className='buttonFormation'/>
                        <img src={imgLvl3} alt=""  className='buttonFormation'/>
                    </div>
                </div>
            </section>

            <Rodape />
        </>
    )
}