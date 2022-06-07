import Logo from '../Images/Logo.jpg'
import Letters from '../Images/letters.jpg'
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <img src={Logo} className="headerLogo" alt="logo" />
            <img src={Letters} className="headerLetters" alt="logo" />
            <p>User</p>
            <button className="headerButton">Salir</button>
        </header>
    )
}