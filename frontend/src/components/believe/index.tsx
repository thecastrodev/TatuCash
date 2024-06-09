import './believe.css'
import Missioncards from '../missioncards'

const MissionData = [
    {title: 'Missão', description: 'Facilitar o aprendizado em finanças pessoais e propagar a educação financeira para as pessoas de diferentes classes econômicas e sociais.'},
    {title: 'Visão', description: 'Uma empresa que facilita a propagação de educação financeira em todo o Brasil, tornando os usuários de nossos serviços mais capazes de gerir suas finanças pessoais.'},
    {title: 'Valores', description: 'Educação colaborativa, qualidade em nossos conteúdos e bem-estar para o usuário.'}
]

const Believe = () => {
    return (
        <div>
            <div className='mission-section'>
                {MissionData.map((missioncard, index) => (
                    <Missioncards key={index} title={missioncard.title} description={missioncard.description} />
                ))}

            </div>
        </div>
    )
}

export default Believe;