import "./Header.css";

import {
  FaHouse,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa6";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav" aria-label="Navigation principale">
        <ul className="header__list">
          <li>
            <a href="#home" title="Accueil">
              <FaHouse />
            </a>
          </li>

          <li>
            <a href="#about" title="À propos">
              <FaUser />
            </a>
          </li>

          <li>
            <a href="#skills" title="Compétences">
              <FaCode />
            </a>
          </li>

          <li>
            <a href="#projects" title="Projets">
              <FaFolderOpen />
            </a>
          </li>

          <li>
            <a href="#contact" title="Contact">
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;