import "./Contact.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import Button from "../ui/Button/Button";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";

function Contact() {
  return (
    <section className="contact" id="contact">
      <SectionTitle
        subtitle="Contact"
        title="Travaillons ensemble"
      />

      <div className="contact__container">
        <div className="contact__information">
          <h3>Vous avez un projet ou une opportunité ?</h3>

          <p>
            Je suis disponible pour échanger autour d’un projet,
            d’une alternance ou d’une opportunité professionnelle.
          </p>

          <div className="contact__details">
            <a
              className="contact__detail"
              href="mailto:tarek-achour@outlook.fr"
            >
              <FaEnvelope aria-hidden="true" focusable="false" />
              <span>tarek-achour@outlook.fr</span>
            </a>

            <div className="contact__detail">
              <FaLocationDot aria-hidden="true" focusable="false" />

              <a
                href="https://www.google.com/maps/place/France"
                target="_blank"
                rel="noreferrer"
                aria-label="Voir la localisation de la France"
              >
                <span>France</span>
              </a>
            </div>
          </div>

          <div className="contact__socials">
            <Button
              href="https://github.com/Tachour"
              variant="secondary"
              target="_blank"
              rel="noreferrer"
              ariaLabel="Accéder à mon profil GitHub"
            >
              <FaGithub aria-hidden="true" focusable="false" />
              <span>GitHub</span>
            </Button>

            <Button
              href="https://www.linkedin.com/in/tarek-achour-660798155"
              variant="secondary"
              target="_blank"
              rel="noreferrer"
              ariaLabel="Accéder à mon profil LinkedIn"
            >
              <FaLinkedin aria-hidden="true" focusable="false" />
              <span>LinkedIn</span>
            </Button>
          </div>
        </div>

        <form className="contact__form">
          <div className="contact__field">
            <label htmlFor="name">Nom</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              autoComplete="name"
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email">Adresse e-mail</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="votre@email.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Écrivez votre message..."
              required
            />
          </div>

          <Button
            type="submit"
            variant="primary"
          >
            Envoyer le message
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;