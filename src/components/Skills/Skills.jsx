import "./Skills.css";
import SectionTitle from "../ui/SectionTitle/SectionTitle";

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

function Skills() {
  return (
    <section className="skills" id="skills">
      <SectionTitle
        subtitle="Compétences"
        title="Mes technologies et méthodes"
      />

      <div className="skills__grid">
        <article className="skills__card">
          <h3>Front-end</h3>

          <ul>
            <li>
              <FaHtml5 className="icon icon--html" />
              HTML5
            </li>

            <li>
              <FaCss3Alt className="icon icon--css" />
              CSS3
            </li>

            <li>
              <FaJs className="icon icon--javascript" />
              JavaScript (ES6+)
            </li>

            <li>
              <FaReact className="icon icon--react" />
              React
            </li>

            <li>
              <MdDevices className="icon icon--responsive" />
              Responsive Design
            </li>
          </ul>
        </article>

        <article className="skills__card">
          <h3>Back-end</h3>

          <ul>
            <li>
              <FaNodeJs className="icon icon--node" />
              Node.js
            </li>

            <li>
              <SiExpress className="icon icon--express" />
              Express.js
            </li>

            <li>
              <SiMongodb className="icon icon--mongodb" />
              MongoDB
            </li>

            <li>
              <MdApi className="icon icon--api" />
              API REST
            </li>

            <li>
              <SiJsonwebtokens className="icon icon--jwt" />
              Authentification JWT
            </li>
          </ul>
        </article>

        <article className="skills__card">
          <h3>Outils</h3>

          <ul>
            <li>
              <FaGitAlt className="icon icon--git" />
              Git
            </li>

            <li>
              <FaGithub className="icon icon--github" />
              GitHub
            </li>

            <li>
              <VscVscode className="icon icon--vscode" />
              VS Code
            </li>

            <li>
              <SiFigma className="icon icon--figma" />
              Figma
            </li>

            <li>
              <SiGooglechrome className="icon icon--chrome" />
              Chrome DevTools
            </li>
          </ul>
        </article>

        <article className="skills__card">
          <h3>Méthodologie</h3>

          <ul>
            <li>
              <FaListCheck className="icon icon--method" />
              Méthode Agile
            </li>

            <li>
              <TbLayoutKanban className="icon icon--kanban" />
              Kanban
            </li>

            <li>
              <HiOutlineBookOpen className="icon icon--stories" />
              User Stories
            </li>

            <li>
              <TbTimelineEvent className="icon icon--points" />
              Story Points
            </li>

            <li>
              <SiNotion className="icon icon--notion" />
              Notion
            </li>

            <li>
              <HiOutlineBookOpen className="icon icon--watch" />
              Veille technologique
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Skills;