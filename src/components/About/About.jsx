import "./About.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";

function About() {
  return (
    <section className="about" id="about">
      <SectionTitle
        subtitle="À propos"
        title="Qui suis-je ?"
      />

      <div className="about__content">
        <div className="about__text">
          <p>
            Actuellement en reconversion professionnelle, je suis une formation
            Développeur Web chez OpenClassrooms afin de faire de ma passion mon
            métier.
          </p>

          <p>
              J’apprécie particulièrement la création d’applications web modernes,
              responsives et accessibles, aussi bien côté front-end avec React,
              JavaScript, HTML et CSS que côté back-end avec Node.js, Express et
              MongoDB.
          </p>

          <p>
              Mon objectif est d’intégrer une entreprise où je pourrai continuer à
              apprendre, relever de nouveaux défis et participer à des projets web
              complets et concrets.
          </p>
        </div>

        <div className="about__card">
          <h3>Informations</h3>

          <ul>
            <li><strong>Nom :</strong> Tarek Achour</li>
            <li><strong>Formation :</strong> Développeur Web</li>
            <li><strong>Localisation :</strong> France</li>
            <li><strong>Disponibilité :</strong> Immédiate</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;