import "./Hero.css";
import Button from "../ui/Button/Button";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="hero__intro">Bonjour, je suis</p>

        <h1 className="hero__title">Tarek Achour</h1>

        <h2 className="hero__job">Développeur web</h2>

        <p className="hero__description">
            Je développe des applications web modernes, responsives et accessibles avec
            la stack MERN (MongoDB, Express, React et Node.js).
        </p>

        <div className="hero__buttons">
          <Button
            href="#projects"
            variant="primary"
          >
            Voir mes projets
          </Button>

          <Button
            href="#contact"
            variant="secondary"
          >
            Me contacter
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;