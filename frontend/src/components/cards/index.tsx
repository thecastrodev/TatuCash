import './cards.css'

import Devs from '../devs'
import HaroldImage from '../../assets/equipe/Harold.svg'
import JoanaImage from '../../assets/equipe/Joana.svg'
import CastroImage from '../../assets/equipe/Castro.svg';
import PauloImage from '../../assets/equipe/Paulo.svg'
import ViniciusImage from '../../assets/equipe/Vinicius.svg'

const DevsData = [
    { image: HaroldImage, link: 'https://www.linkedin.com/in/haroldcalixto', devName: 'Harold Calixto' },
    { image: JoanaImage, link: 'https://www.linkedin.com/in/joanasthefanny', devName: 'Joana Sthefanny' },
    { image: CastroImage, link: 'https://www.linkedin.com/in/thecastrodev', devName: 'Eduardo Castro' },
    { image: ViniciusImage, link: 'https://www.linkedin.com/in/vinicius-tabosa-0162a7177', devName: 'Vinicius Tabosa' },
    { image: PauloImage, link: 'https://www.linkedin.com/in/pauloricardo8', devName: 'PauloRicardo' }
];

const Cards = () => {
    return (
        <div className='cards'>

        {DevsData.map((dev, index) => (
            <Devs key={index} image={dev.image} link={dev.link} devName={dev.devName} />
        ))}
    </div>
    )
}

export default Cards;