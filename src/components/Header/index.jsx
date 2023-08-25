import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg';

function Header() {
    return (
      <header>
        <img src={logo} alt="Logo" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/logement">Logements</Link>
        </nav>
      </header>
    );
  }
  
  export default Header;