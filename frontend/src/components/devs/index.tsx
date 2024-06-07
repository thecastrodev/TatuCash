import React from 'react';
import './devs.css';
import cardSoundHover from '../../assets/sound/cards.mp3';
import cardSoundClick from '../../assets/sound/CardClick.mp3'

interface DevsProps {
    image: string;
    link: string;
    devName: string;
}

const Devs: React.FC<DevsProps> = ({ image, link, devName }) => {
    const playSoundHover = (): void => {
        const audio = new Audio(cardSoundHover);
        audio.play();
    };
    const playSoundClick = (): void => {
        const audio = new Audio(cardSoundClick);
        audio.play();
    };

    return (
        <div className='cards-section'>
            <a href={link} className='bottom__ancora' target='_blank' rel='noopener noreferrer'>
                <img className='card-image' src={image} alt={devName} 
                onMouseEnter={playSoundHover} 
                onClick={playSoundClick}
                />

            </a>
        </div>
    );
}

export default Devs;
