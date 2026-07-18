import { cloneElement } from "react";
import "./CardSkills.css";

function CardSkills({ title, skills }) {
  return (
    <article className="skills__card">
      <h3>{title}</h3>

      <ul>
        {skills.map((skill) => (
          <li key={skill.label}>
            {cloneElement(skill.icon, {
              "aria-hidden": true,
              focusable: false,
            })}
            {skill.label}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default CardSkills;