import "./Projects.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import booki from "../../assets/images/booki.png";

function Projects() {
  return (
    <section className="projects" id="projects">
      <SectionTitle
        subtitle="Projets"
        title="Quelques réalisations"
      />

      <div className="projects__grid">
        <article className="project-card">
          <div className="project-card__image">
            <img
              src={booki}
              alt="Capture d'écran du projet Booki"
            />
          </div>

          <div className="project-card__content">
            <h3>Booki</h3>

            <p>
              Intégration d'une page d'accueil responsive pour une agence de
              voyage à partir d'une maquette.
            </p>

            <div className="project-card__technologies">
              <span>HTML</span>
              <span>CSS</span>
            </div>

            <div className="project-card__links">
              <a
                href="https://github.com/Tachour/Projet2-Booki"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://tachour.github.io/Projet2-Booki/"
                target="_blank"
                rel="noreferrer"
              >
                Voir le projet
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;