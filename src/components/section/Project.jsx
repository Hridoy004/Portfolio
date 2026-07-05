import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import device from "../../assets/img/device.png";
import emotion from "../../assets/img/emotion.png";
import foodies from "../../assets/img/foodies.png";
import landing from "../../assets/img/landing.png";
import tasker from "../../assets/img/tasker.png";
import techmart from "../../assets/img/techmart.png";
import tic from "../../assets/img/tic-tac-toe.png";

const projects = [
  {
    id: 1,
    title: "Tasker",
    description:
      "Tasker helps you organize and track your daily tasks with ease.",
    image: tasker,
    tech: ["React", "Tailwind CSS", "Javascript"],
    github: "https://github.com/Hridoy004/tasker",
    live: "https://tasker-ha.vercel.app/",
  },
  {
    id: 2,
    title: "Landing page",
    description: "Responsive landing page built with React and Tailwind CSS.",
    image: landing,
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Hridoy004/brillance-the-landing-page",
    live: "https://brillance-the-landing-page-ha.vercel.app/",
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    description: "Tic-Tac-Toe game built with React and Tailwind CSS.",
    image: tic,
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Hridoy004/Tic-Tac-Toe",
    live: "https://tic-tac-toe-ha.vercel.app/",
  },
  {
    id: 4,
    title: "Foodies",
    description:
      "A static food website built with HTML and CSS, showcasing responsive design and clean UI principles",
    image: foodies,
    tech: ["HTML", "CSS"],
    github: "https://github.com/Hridoy004/foodies",
    live: "https://foodies-alpha-ten.vercel.app/",
  },
  {
    id: 5,
    title: "E-Commerce Website",
    description:
      "A modern full-stack e-commerce application with authentication, shopping cart, payment integration and admin dashboard.",
    image: techmart,
    tech: ["Angular", "Node.js", "Express", "MongoDB"],
    github:
      "https://docs.google.com/document/d/1RTmc35sE-TMnuCTlhiTnPktQW4Ff7L-yNoQyyKeh_oA/edit?tab=t.0",
    // live: "#",
  },
  {
    id: 6,
    title: "Facial Expressions Recognition",
    description:
      "A CNN-based facial emotion recognition system using Keras to classify human emotions from facial images.",
    image: emotion,
    tech: ["Python", "Keras", "CNN"],
    github: "https://github.com/Hridoy004/Facial-Expressions-Recognition",
    // live: "#",
  },
  {
    id: 7,
    title: "Home-Security-Device",
    description:
      "A GSM-based alarm system using Arduino, PIR sensor, and GSM module to send SMS alerts on motion detection.",
    image: device,
    tech: ["Arduino", "PIR Sensor", "GSM Module"],
    github: "https://github.com/Hridoy004/Home-Security-Device",
    // live: "#",
  },
];

export default function Project() {
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
