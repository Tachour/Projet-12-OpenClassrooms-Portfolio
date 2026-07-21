import { useEffect, useState } from "react";
import "./Header.css";

import {
  FaHouse,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa6";

function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll(
      "#home, #about, #skills, #projects, #contact"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="header">
      <nav className="header__nav" aria-label="Navigation principale">
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
                activeSection === "home" ? "header__link--active" : ""
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
                activeSection === "about" ? "header__link--active" : ""
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
                activeSection === "skills" ? "header__link--active" : ""
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
                activeSection === "projects" ? "location" : undefined
              }
              className={
                activeSection === "projects"
                  ? "header__link--active"
                  : ""
              }
            >
              <FaFolderOpen aria-hidden="true" focusable="false" />
            </a>
          </li>

          <li>
            <a
              href="#contact"
              title="Contact"
              aria-label="Contact"
              aria-current={
                activeSection === "contact" ? "location" : undefined
              }
              className={
                activeSection === "contact" ? "header__link--active" : ""
              }
            >
              <FaEnvelope aria-hidden="true" focusable="false" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;