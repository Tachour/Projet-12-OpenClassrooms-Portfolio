import "./Projects.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import CardProject from "../ui/Cards/CardProject";

const projects = [
  {
    title: "Booki",
    className: "project-card--booki",
    image: "/images/Booki.webp",
    description:
      "Intégration d'une page d'accueil responsive pour une agence de voyage à partir d'une maquette.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/Tachour/Projet2-Booki",
    demo: "https://tachour.github.io/Projet2-Booki/",
  },
  {
    title: "Sophie Bluel",
    className: "project-card--sophie-bluel",
    image: "/images/sophie-bluel.webp",
    description:
      "Développement d'une galerie dynamique avec JavaScript, authentification et communication avec une API.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/Tachour/Projet3-Sophie-Bluel",
    demo: "https://bluels-j1z41ek3v-achours-projects-41e6f9a5.vercel.app/",
  },
  {
    title: "Nina Carducci",
    className: "project-card--nina-carducci",
    image: "/images/nina.webp",
    description:
      "Optimisation des performances, de l'accessibilité et du référencement SEO d'un site existant.",
    technologies: ["HTML", "CSS", "JavaScript", "SEO"],
    github: "https://github.com/Tachour/Projet4-Nina-Carducci-Dev.git",
    demo: "https://tachour.github.io/Projet4-Nina-Carducci-Dev/",
  },
  {
    title: "Kasa",
    className: "project-card--kasa",
    image: "/images/Kasa.webp",
    description:
      "Application de location immobilière développée avec React et React Router.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/Tachour/Projet5-Kasa",
    demo: "https://kasa-five-orcin.vercel.app/",
  },
  {
    title: "Mon Vieux Grimoire",
    className: "project-card--mon-vieux-grimoire",
    image: "/images/grimoire.webp",
    description:
      "Création d'une API sécurisée avec Node.js, Express et MongoDB pour la gestion de livres.",
    technologies: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/Tachour/Projet6-Mon-Vieux-Grimoire",
    demo: "",
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