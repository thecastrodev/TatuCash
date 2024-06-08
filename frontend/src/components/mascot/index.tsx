import './mascot.css';
import TextSection from "../textSection";


const mascot = [
    "Nome: Tatuca Silva Hidalgo."
];



const Mascot = () => {
    return (
        <div className="mascot-container">
            <div className="mascot-image-container">

            </div>

            <div className="mascot-bio-container">
                <h3>Biografia</h3>
                <TextSection paragraphs={mascot}/>

            </div>
        </div>
    )
}

export default Mascot;