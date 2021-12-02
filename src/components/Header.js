import '../styles/Header.css';
import Logo from '../images/logo-header.png';
import { IoMdArrowDropdown } from "react-icons/io";

export default function Header() {
    return (
        <header className="Header">
            <img className="Header-logo" src={ Logo } alt="logo" />
            <div className="Header-right">
                <div className="Header-text">
                    <p>Olá, Luis Fernando</p>
                </div>
                <div className="Header-icon">
                    <IoMdArrowDropdown />
                </div>
            </div>
        </header>
    )
}
