import './Header.css';
import logo from "../../assets/tatucoin.png"; // Adjust the path as necessary
import userImage from "../../assets/user_icon.png"; // Adjust the path as necessary

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#estudar">Estudar</a></li>
          <li><a href="#jogar">Jogar</a></li>
        </ul>
      </nav>
      <div className="image-container">
        <a href="#profile" className="profile-link">Hidalgo</a>
        <img src={userImage} alt="User" className="user-image" />
      </div>
    </header>
  );
}

export default Header;
