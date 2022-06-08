import Logo from '../Images/Logo.jpg'
import Letters from '../Images/letters.jpg'
import './Header.css';
import {
    useNavigate,
    useLocation,
  } from "react-router-dom";

export default function Header() {
    let navigate = useNavigate();
    let location = useLocation();
    const exit = () => {
        navigate("/" + location.search);
    }
    return (
        <header className="header">
            <img src={Logo} className="headerLogo" alt="logo" />
            <img src={Letters} className="headerLetters" alt="logo" />
            <p className="headerUser">User</p>
            <button onClick= {exit}className="headerButton">Salir</button>
        </header>
    )
}