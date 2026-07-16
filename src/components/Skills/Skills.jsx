import "./Skills.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";
import CardSkills from "../ui/Cards/CardSkills";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiFigma,
  SiNotion,
  SiJsonwebtokens,
  SiGooglechrome,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { MdDevices, MdApi } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { TbLayoutKanban, TbTimelineEvent } from "react-icons/tb";
import { HiOutlineBookOpen } from "react-icons/hi2";

const skillsCategories = [
  {
    title: "Front-end",
    skills: [
      {
        icon: <FaHtml5 className="icon icon--html" />,
        label: "HTML5",
      },
      {
        icon: <FaCss3Alt className="icon icon--css" />,
        label: "CSS3",
      },
      {
        icon: <FaJs className="icon icon--javascript" />,
        label: "JavaScript (ES6+)",
      },
      {
        icon: <FaReact className="icon icon--react" />,
        label: "React",
      },
      {
        icon: <MdDevices className="icon icon--responsive" />,
        label: "Responsive Design",
      },
    ],
  },
  {
    title: "Back-end",
    skills: [
      {
        icon: <FaNodeJs className="icon icon--node" />,
        label: "Node.js",
      },
      {
        icon: <SiExpress className="icon icon--express" />,
        label: "Express.js",
      },
      {
        icon: <SiMongodb className="icon icon--mongodb" />,
        label: "MongoDB",
      },
      {
        icon: <MdApi className="icon icon--api" />,
        label: "API REST",
      },
      {
        icon: <SiJsonwebtokens className="icon icon--jwt" />,
        label: "Authentification JWT",
      },
    ],
  },
  {
    title: "Outils",
    skills: [
      {
        icon: <FaGitAlt className="icon icon--git" />,
        label: "Git",
      },
      {
        icon: <FaGithub className="icon icon--github" />,
        label: "GitHub",
      },
      {
        icon: <VscVscode className="icon icon--vscode" />,
        label: "VS Code",
      },
      {
        icon: <SiFigma className="icon icon--figma" />,
        label: "Figma",
      },
      {
        icon: <SiGooglechrome className="icon icon--chrome" />,
        label: "Chrome DevTools",
      },
    ],
  },
  {
    title: "Méthodologie",
    skills: [
      {
        icon: <FaListCheck className="icon icon--method" />,
        label: "Méthode Agile",
      },
      {
        icon: <TbLayoutKanban className="icon icon--kanban" />,
        label: "Kanban",
      },
      {
        icon: <HiOutlineBookOpen className="icon icon--stories" />,
        label: "User Stories",
      },
      {
        icon: <TbTimelineEvent className="icon icon--points" />,
        label: "Story Points",
      },
      {
        icon: <SiNotion className="icon icon--notion" />,
        label: "Notion",
      },
      {
        icon: <HiOutlineBookOpen className="icon icon--watch" />,
        label: "Veille technologique",
      },
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <SectionTitle
        subtitle="Compétences"
        title="Mes technologies et méthodes"
      />

      <div className="skills__grid">
        {skillsCategories.map((category) => (
          <CardSkills
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;