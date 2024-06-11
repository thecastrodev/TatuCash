import React from 'react';
import './textSection.css'

interface TextSectionProps {
    paragraphs: string[];
}

const TextSection: React.FC<TextSectionProps> = ({ paragraphs }) => {
    return (
        <div className='text-container'>
            {paragraphs.map((paragraph, index) => (               
                <p key={index} className='description-about'>
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

export default TextSection;