import { useEffect, useId, useRef, useState } from "react";
import { FaGithub, FaXmark } from "react-icons/fa6";
import Button from "../Button/Button";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalTitleId = useId();
  const openButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      openButtonRef.current?.focus();
    };
  }, [isModalOpen]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
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

          <div className="project-card__technologies">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <button
            ref={openButtonRef}
            className="project-card__details-button"
            type="button"
            onClick={openModal}
            aria-haspopup="dialog"
          >
            Voir les détails
          </button>

          <div className="project-card__links">
            <Button
              href={github}
              variant="primary"
              target="_blank"
              rel="noreferrer"
              ariaLabel={`Voir le code GitHub du projet ${title}`}
            >
              <FaGithub aria-hidden="true" focusable="false" />
              GitHub
            </Button>

            {demo ? (
              <Button
                href={demo}
                text="Voir le projet"
                variant="secondary"
                target="_blank"
                rel="noreferrer"
                ariaLabel={`Voir la démonstration du projet ${title}`}
              />
            ) : (
              <span className="project-card__disabled">
                Bientôt disponible
              </span>
            )}
          </div>
        </div>
      </article>

      {isModalOpen && (
        <div
          className="project-modal"
          role="presentation"
          onMouseDown={handleOverlayClick}
        >
          <div
            className="project-modal__content"
            role="dialog"
            aria-modal="true"
            aria-labelledby={modalTitleId}
          >
            <button
              ref={closeButtonRef}
              className="project-modal__close"
              type="button"
              onClick={closeModal}
              aria-label={`Fermer les détails du projet ${title}`}
            >
              <FaXmark aria-hidden="true" focusable="false" />
            </button>

            <div className="project-modal__image">
              <img
                src={image}
                alt={`Capture d'écran du projet ${title}`}
                width="600"
                height="350"
              />
            </div>

            <div className="project-modal__body">
              <h3 id={modalTitleId}>{title}</h3>

              <div className="project-modal__technologies">
                {technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <p>{description}</p>

              <div className="project-modal__links">
                <Button
                  href={github}
                  variant="primary"
                  target="_blank"
                  rel="noreferrer"
                  ariaLabel={`Voir le code GitHub du projet ${title}`}
                >
                  <FaGithub aria-hidden="true" focusable="false" />
                  GitHub
                </Button>

                {demo ? (
                  <Button
                    href={demo}
                    text="Voir le projet"
                    variant="secondary"
                    target="_blank"
                    rel="noreferrer"
                    ariaLabel={`Voir la démonstration du projet ${title}`}
                  />
                ) : (
                  <span className="project-card__disabled">
                    Bientôt disponible
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardProject;