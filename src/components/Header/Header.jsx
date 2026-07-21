import { useEffect, useState } from "react";
import "./Header.css";

import {
  FaHouse,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa6";

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "contact",
];

function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const screenMiddle = window.scrollY + window.innerHeight / 2;

      let currentSection = "home";

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) {
          return;
        }

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
          screenMiddle >= sectionTop &&
          screenMiddle < sectionBottom
        ) {
          currentSection = sectionId;
        }
      });

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (isAtBottom) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="header">
      <nav
        className="header__nav"
        aria-label="Navigation principale"
      >
        <ul className="header__list">
          <li>
            <a
              href="#home"
              title="Accueil"
              aria-label="Accueil"
              aria-current={
                activeSection === "home" ? "location" : undefined
              }
              className={
                activeSection === "home"
                  ? "header__link--active"
                  : ""
              }
            >
              <FaHouse aria-hidden="true" focusable="false" />
            </a>
          </li>

          <li>
            <a
              href="#about"
              title="À propos"
              aria-label="À propos"
              aria-current={
                activeSection === "about" ? "location" : undefined
              }
              className={
                activeSection === "about"
                  ? "header__link--active"
                  : ""
              }
            >
              <FaUser aria-hidden="true" focusable="false" />
            </a>
          </li>

          <li>
            <a
              href="#skills"
              title="Compétences"
              aria-label="Compétences"
              aria-current={
                activeSection === "skills" ? "location" : undefined
              }
              className={
                activeSection === "skills"
                  ? "header__link--active"
                  : ""
              }
            >
              <FaCode aria-hidden="true" focusable="false" />
            </a>
          </li>

          <li>
            <a
              href="#projects"
              title="Projets"
              aria-label="Projets"
              aria-current={
                activeSection === "projects"
                  ? "location"
                  : undefined
              }
              className={
                activeSection === "projects"
                  ? "header__link--active"
                  : ""
              }
            >
              <FaFolderOpen
                aria-hidden="true"
                focusable="false"
              />
            </a>
          </li>

          <li>
            <a
              href="#contact"
              title="Contact"
              aria-label="Contact"
              aria-current={
                activeSection === "contact"
                  ? "location"
                  : undefined
              }
              className={
                activeSection === "contact"
                  ? "header__link--active"
                  : ""
              }
            >
              <FaEnvelope
                aria-hidden="true"
                focusable="false"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;