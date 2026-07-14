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
          Je développe des sites web modernes, responsives et accessibles avec
          React, JavaScript, HTML et CSS.
        </p>

        <div className="hero__buttons">
          <Button
            text="Voir mes projets"
            href="#projects"
            variant="primary"
          />

          <Button
            text="Me contacter"
            href="#contact"
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;