import './missioncards.css';

interface DevsProps {
    title: string;
    description: string;
}

const Missioncards: React.FC<DevsProps> = ({ title, description }) => {
    return (
        <div className='believe-section'>
            <h3 className='title-mission'>{title}</h3>
            <p className='description-mission'>{description}</p>


        </div>
    );
}

export default Missioncards;