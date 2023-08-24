import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/logement">Logements</Link>
        </nav>
    )
}

export default Header