import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const groups = [
  {
    name: "Frontend",
    description: "Accessible interfaces and responsive experiences",
    skills: [
      ["HTML5", FaHtml5, "orange"],
      ["CSS3", FaCss3Alt, "blue"],
      ["JavaScript", FaJs, "yellow"],
      ["TypeScript", SiTypescript, "blue"],
      ["React", FaReact, "cyan"],
      ["Next.js", SiNextdotjs, "white"],
      ["Tailwind CSS", SiTailwindcss, "cyan"],
    ],
  },
  {
    name: "Backend & data",
    description: "APIs, application logic, and persistence",
    skills: [
      ["Node.js", FaNodeJs, "green"],
      ["Express.js", SiExpress, "white"],
      ["PostgreSQL", SiPostgresql, "blue"],
      ["MongoDB", SiMongodb, "green"],
      ["Prisma ORM", SiPrisma, "cyan"],
      ["SQL", FaDatabase, "purple"],
    ],
  },
  {
    name: "Tools",
    description: "Workflow, collaboration, and source control",
    skills: [
      ["Git", FaGitAlt, "orange"],
      ["GitHub", FaGithub, "white"],
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section section-muted">
      <div className="page-shell">
        <div className="section-heading">
          <p className="eyebrow">Tools of the trade</p>
          <h2 className="section-title">Skills & <span>technologies</span></h2>
          <p>A growing toolkit for designing, building, and shipping web applications.</p>
        </div>
        <div className="skill-groups">
          {groups.map((group) => (
            <article className="skill-group" key={group.name}>
              <div className="skill-group-heading">
                <h3>{group.name}</h3>
                <p>{group.description}</p>
              </div>
              <div className="skill-list">
                {group.skills.map(([name, Icon, color]) => (
                  <div className="skill-chip" key={name}>
                    <Icon className={`skill-icon icon-${color}`} aria-hidden="true" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
