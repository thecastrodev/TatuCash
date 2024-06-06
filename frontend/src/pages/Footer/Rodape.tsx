import facebookIcon from "../../assets/tatucoin.png"; // Importe a imagem do ícone do Facebook
import youtubeIcon from "../../assets/tatucoin.png"; // Importe a imagem do ícone do YouTube
import instagramIcon from "../../assets/tatucoin.png"; // Importe a imagem do ícone do Instagram
import logo from "../../assets/user_icon.png"
import './Rodape.css'

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="container">
        <div className="logo_rodape">
          <img src={logo} alt="Logo" />
        </div>
        <div className="frases">
          <p>Primeira frase do rodapé</p>
          <p>Segunda frase do rodapé</p>
        </div>
        <div className="redes-sociais">
          <img src={facebookIcon} alt="Facebook" />
          <img src={youtubeIcon} alt="YouTube" />
          <img src={instagramIcon} alt="Instagram" />
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
