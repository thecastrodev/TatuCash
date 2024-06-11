import instagramIcon from "../../assets/home/instagram.svg"; 
import youtubeIcon from "../../assets/home/youtube.svg"; 
import facebookIcon from "../../assets/home/facebook.svg"; 
import logo from "../../assets/Logo/Logo_Tatucash_.svg"
import './Rodape.css'

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="container">
        <div className="logo_rodape">
          <img src={logo} alt="Logo" />
        </div>
        <div className="frases">
          <p>2024 Tatucash Soluções Financeiras LTDA</p>
          <p>Todos os direitos reservados</p>
        </div>
        <div className="redes-sociais">
        <img src={instagramIcon} alt="Instagram"/>
        <img src={youtubeIcon} alt="YouTube" />
        <div className="facebook"><img src={facebookIcon} alt="Facebook" /></div>
        </div>
      </div>
    </footer>
  );
}

export default Rodape;
