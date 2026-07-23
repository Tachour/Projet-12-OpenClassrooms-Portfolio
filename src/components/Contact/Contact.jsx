import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import Button from "../ui/Button/Button";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";

function Contact() {
  const [state, handleSubmit] = useForm("mvzeqwjn");

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

            <a
              className="contact__detail"
              href="tel:+33782080427"
              aria-label="Appeler le (+33) 7 82 08 04 27"
            >
              <FaPhone aria-hidden="true" focusable="false" />
              <span>(+33) 7 82 08 04 27</span>
            </a>

            <div className="contact__detail">
              <FaLocationDot aria-hidden="true" focusable="false" />

              <a
                href="https://www.google.com/maps/place/France"
                target="_blank"
                rel="noreferrer"
                aria-label="Voir la localisation de la France"
              >
                France
              </a>
            </div>
          </div>

          <div className="contact__socials">
            <Button
              href="https://github.com/Tachour"
              variant="primary"
              target="_blank"
              rel="noreferrer"
              ariaLabel="Accéder à mon profil GitHub"
            >
              <FaGithub aria-hidden="true" focusable="false" />
              <span>GitHub</span>
            </Button>

            <Button
              href="https://www.linkedin.com/in/tarek-achour-660798155"
              variant="primary"
              target="_blank"
              rel="noreferrer"
              ariaLabel="Accéder à mon profil LinkedIn"
            >
              <FaLinkedin aria-hidden="true" focusable="false" />
              <span>LinkedIn</span>
            </Button>
          </div>
        </div>

        <form
          className="contact__form"
          onSubmit={handleSubmit}
        >
          <h3 id="contact-form-title">Envoyez-moi un message</h3>

          {state.succeeded ? (
            <p
              className="contact__success"
              role="status"
            >
              Votre message a bien été envoyé. Merci, je vous répondrai dès que
              possible.
            </p>
          ) : (
            <>
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

                <ValidationError
                  className="contact__error"
                  prefix="Nom"
                  field="name"
                  errors={state.errors}
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

                <ValidationError
                  className="contact__error"
                  prefix="Adresse e-mail"
                  field="email"
                  errors={state.errors}
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

                <ValidationError
                  className="contact__error"
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <ValidationError
                className="contact__error contact__error--general"
                errors={state.errors}
              />

              <Button
                type="submit"
                variant="secondary"
                disabled={state.submitting}
              >
                {state.submitting
                  ? "Envoi en cours..."
                  : "Envoyer le message"}
              </Button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;