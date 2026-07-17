import "./Contact.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";

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
              href="mailto:ton-email@example.com"
            >
              <FaEnvelope />
              <span>ton-email@example.com</span>
            </a>

            <div className="contact__detail">
              <FaLocationDot />
              <span>France</span>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://github.com/Tachour"
              target="_blank"
              rel="noreferrer"
              aria-label="Accéder à mon profil GitHub"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/tarek-achour-660798155"
              target="_blank"
              rel="noreferrer"
              aria-label="Accéder à mon profil LinkedIn"
            >
              <FaLinkedin />
              LinkedIn
            </a>
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

          <button type="submit">Envoyer le message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;