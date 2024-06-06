import './formations.css'
import banner from '../../assets/formacoes/banner.png'
import formacaoBasica from '../../assets/formacoes/formacao_basica.png'
import formacaoContinuada from '../../assets/formacoes/formacao_continuada.png'

export const Formations = () => {
    return (
        <section className='pageFormation'>
            <img src={banner} alt="" className='banner'/>
            
            <div className='elementsFormation'>
                <div className='titlesPage'>
                    <h2 className='titleFormations'>Formações</h2>
                    <p className='subtitleFormations'>Acompanhe nossas formações</p>
                </div>
                <div className='buttonsPage'>
                    <img src={formacaoBasica} alt="" className='buttonFormation'/>
                    <img src={formacaoContinuada} alt=""  className='buttonFormation'/>
                    <img src={formacaoContinuada} alt=""  className='buttonFormation'/>
                </div>
            </div>
        </section>
    )
}