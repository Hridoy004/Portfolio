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
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Prisma ORM", icon: SiPrisma, color: "text-cyan-300" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "SQL", icon: FaDatabase, color: "text-purple-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0b0b0b] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-400 uppercase tracking-widest text-sm">
            My Skills
          </span>

          <h2 className="text-5xl font-bold mt-4">Technologies I Use</h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            I enjoy building fast, scalable and responsive web applications
            using modern frontend and backend technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group bg-[#151515] border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
              >
                <Icon
                  className={`${skill.color} text-5xl group-hover:scale-110 transition`}
                />

                <h3 className="mt-5 text-lg font-medium">{skill.name}</h3>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-[#151515] rounded-2xl p-6 text-center border border-white/10">
            <h3 className="text-4xl font-bold text-blue-500">10+</h3>
            <p className="text-gray-400 mt-2">Projects</p>
          </div>

          <div className="bg-[#151515] rounded-2xl p-6 text-center border border-white/10">
            <h3 className="text-4xl font-bold text-blue-500">12+</h3>
            <p className="text-gray-400 mt-2">Technologies</p>
          </div>

          <div className="bg-[#151515] rounded-2xl p-6 text-center border border-white/10">
            <h3 className="text-4xl font-bold text-blue-500">2+</h3>
            <p className="text-gray-400 mt-2">Years Learning</p>
          </div>

          <div className="bg-[#151515] rounded-2xl p-6 text-center border border-white/10">
            <h3 className="text-4xl font-bold text-blue-500">100%</h3>
            <p className="text-gray-400 mt-2">Passion</p>
          </div>
        </div>
      </div>
    </section>
  );
}
