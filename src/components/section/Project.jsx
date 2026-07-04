export const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A modern full-stack e-commerce application with authentication, shopping cart, payment integration and admin dashboard.",
    image: "/projects/ecommerce.png",
    tech: ["React", "Tailwind", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.vercel.app",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A task manager with authentication, drag & drop, and real-time updates.",
    image: "/projects/task.png",
    tech: ["React", "TypeScript", "Prisma", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio built using React and Tailwind CSS.",
    image: "/projects/portfolio.png",
    tech: ["React", "Tailwind"],
    github: "#",
    live: "#",
  },
];

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0b0b0b] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
            Portfolio
          </span>

          <h2 className="mt-6 text-5xl font-bold">Featured Projects</h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Here are some projects that showcase my experience in frontend and
            backend development.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#141414] transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                <p className="mt-4 text-gray-400">{project.description}</p>

                {/* Tech */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 transition hover:border-blue-500"
                  >
                    <FaGithub />
                    Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 transition hover:bg-blue-700"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
