import React from 'react';
import './contentLevel.css'

interface LevelSectionProps {
    paragraphs: string[];
    subtitles: string[];
}

interface LevelSectionTitleProps {
    titles: string[];
}

interface VideoSectionProps {
    videos: string[];
}




const LevelSection: React.FC<LevelSectionProps> = ({ paragraphs, subtitles }) => {
    return (
        <div className='level-container'>
            {subtitles.map((subtitle, index) => (
                <h3 key={index} className='contentSubtitle'>
                    {subtitle}
                </h3>
            ))}
            {paragraphs.map((paragraph, index) => (
                <p key={index} className='contentparagraph'>
                    {paragraph}
                </p>
            ))}
        </div>
    );
};




const LevelTitleSection: React.FC<LevelSectionTitleProps> = ({titles}) => {
    return (
        <div className='Title-container'>
            {titles.map((title, index) => (
                <h2 key={index} className='contenttitle'>
                    {title}
                </h2>
            ))}
        </div>
    );
    };


    const VideoSection: React.FC<VideoSectionProps> = ({ videos }) => {
        return (
            <div className='video-container'>
                {videos.map((video, index) => (
                    <div key={index} className='video-wrapper'>
                        <iframe 
                            src={video} 
                            title={`Video ${index}`} 
                            frameBorder="0"
                            allowFullScreen 
                        ></iframe>
                    </div>
                ))}
            </div>
        );
    };    
    
    
    export { LevelSection, LevelTitleSection, VideoSection };