
import "./CardProject.css";

function CardProject({
  className = "",
  title,
  image,
  description,
  technologies,
  github,
  demo,
}) {
  return (
    <article className={`project-card ${className}`}>
      <div className="project-card__image">
        <img
          src={image}
          alt={`Capture d'écran du projet ${title}`}
          loading="lazy"
          width="600"
          height="350"
        />
      </div>

      <div className="project-card__content">
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-card__technologies">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-card__links">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label={`Voir le code GitHub du projet ${title}`}
          >
            GitHub
          </a>

          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`Voir la démonstration du projet ${title}`}
            >
              Voir le projet
            </a>
          ) : (
            <span className="project-card__disabled">
              Bientôt disponible
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default CardProject;