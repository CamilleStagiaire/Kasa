import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <Link to="/" aria-label="Accéder à la page d'accueil">Accueil</Link>
        <Link to="/about" aria-label="Accéder à la page A Propos">
          A <span className="capitalize">P</span>ropos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
