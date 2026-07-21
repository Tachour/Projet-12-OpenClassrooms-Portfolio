import "./Projects.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import CardProject from "../ui/Cards/CardProject";

const projects = [
  {
    title: "Booki",
    className: "project-card--booki",
    image: "/images/Booki.webp",
    description:
      "Projet de formation visant à intégrer une maquette responsive d’une agence de voyage. L’enjeu était de respecter fidèlement le design avec HTML et CSS. Le résultat est un site responsive et accessible, avec des optimisations possibles sur les performances.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/Tachour/Projet2-Booki",
    demo: "https://tachour.github.io/Projet2-Booki/",
  },
  {
    title: "Sophie Bluel",
    className: "project-card--sophie-bluel",
    image: "/images/sophie-bluel.webp",
    description:
      "Projet de formation consistant à développer une galerie connectée à une API. L’enjeu était de permettre à un administrateur de gérer les réalisations de manière sécurisée. J’ai développé l’authentification, les filtres et la gestion des projets en JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/Tachour/Projet3-Sophie-Bluel",
    demo: "https://bluels-j1z41ek3v-achours-projects-41e6f9a5.vercel.app/",
  },
  {
    title: "Nina Carducci",
    className: "project-card--nina-carducci",
    image: "/images/nina.webp",
    description:
      "Projet d’optimisation d’un site existant. L’enjeu était d’améliorer les performances, l’accessibilité et le référencement. J’ai optimisé les images, le SEO et la structure du site afin d’obtenir de meilleurs résultats Lighthouse.",
    technologies: ["HTML", "CSS", "JavaScript", "SEO"],
    github: "https://github.com/Tachour/Projet4-Nina-Carducci-Dev.git",
    demo: "https://tachour.github.io/Projet4-Nina-Carducci-Dev/",
  },
  {
    title: "Kasa",
    className: "project-card--kasa",
    image: "/images/Kasa.webp",
    description:
      "Projet de formation réalisé avec React. L’enjeu était de créer une application moderne, responsive et basée sur des composants réutilisables. J’ai développé la navigation, les pages dynamiques et l’interface utilisateur.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Tachour/Projet5-Kasa",
    demo: "https://kasa-five-orcin.vercel.app/",
  },
  {
    title: "Mon Vieux Grimoire",
    className: "project-card--mon-vieux-grimoire",
    image: "/images/grimoire.webp",
    description:
      "Projet back-end consistant à développer une API sécurisée avec Node.js, Express et MongoDB. L’enjeu était de gérer les livres, les images et les utilisateurs de manière fiable. J’ai mis en place l’authentification JWT, le CRUD et le système de notation.",
    technologies: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/Tachour/Projet6-Mon-Vieux-Grimoire",
    demo: "https://projet6-mon-vieux-grimoire.vercel.app",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <SectionTitle
        subtitle="Projets"
        title="Quelques réalisations"        
      />
      <p className="projects__note">
        Toujours en apprentissage, je continue à me former, les tests automatisés et l'accessibilité pour rendre mes prochains projets encore plus robustes.
      </p>

      <div className="projects__grid">
        {projects.map((project) => (
          <CardProject
            key={project.title}
            className={project.className}
            title={project.title}
            image={project.image}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;