import { useState } from "react";
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
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Hridoy004/tasker",
    live: "https://tasker-ha.vercel.app/",

    challenges: [
      "Built a clean and responsive user interface.",
      "Managed application state efficiently.",
      "Implemented CRUD operations for tasks.",
    ],

    future: [
      "Add user authentication.",
      "Enable task reminders and notifications.",
      "Support drag-and-drop task management.",
    ],
  },
  {
    id: 2,
    title: "Landing Page",
    description: "Responsive landing page built with React and Tailwind CSS.",
    image: landing,
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Hridoy004/brillance-the-landing-page",
    live: "https://brillance-the-landing-page-ha.vercel.app/",

    challenges: [
      "Created a fully responsive layout.",
      "Maintained a clean and consistent UI.",
      "Optimized the page for different screen sizes.",
    ],

    future: [
      "Add smooth scroll animations.",
      "Improve accessibility and SEO.",
      "Integrate a contact form.",
    ],
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    description: "Tic-Tac-Toe game built with React and Tailwind CSS.",
    image: tic,
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Hridoy004/Tic-Tac-Toe",
    live: "https://tic-tac-toe-ha.vercel.app/",

    challenges: [
      "Implemented game logic for each move.",
      "Detected winning combinations accurately.",
      "Designed a responsive and interactive UI.",
    ],

    future: [
      "Add score tracking.",
      "Include single-player mode with AI.",
      "Add game history and reset options.",
    ],
  },
  {
    id: 4,
    title: "Foodies",
    description:
      "A static food website built with HTML and CSS, showcasing responsive design and clean UI principles.",
    image: foodies,
    tech: ["HTML", "CSS"],
    github: "https://github.com/Hridoy004/foodies",
    live: "https://foodies-alpha-ten.vercel.app/",

    challenges: [
      "Built a fully responsive layout.",
      "Created a clean and modern UI.",
      "Maintained consistent spacing and typography.",
    ],

    future: [
      "Add interactive animations.",
      "Integrate an online ordering feature.",
      "Convert the project to React.",
    ],
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

    challenges: [
      "Implemented secure user authentication.",
      "Managed shopping cart and order flow.",
      "Built responsive admin and user dashboards.",
    ],

    future: [
      "Add product reviews and ratings.",
      "Implement wishlist and order tracking.",
    ],
  },
  {
    id: 6,
    title: "Facial Expressions Recognition",
    description:
      "A CNN-based facial emotion recognition system using Keras to classify human emotions from facial images.",
    image: emotion,
    tech: ["Python", "Keras", "CNN"],
    github: "https://github.com/Hridoy004/Facial-Expressions-Recognition",

    challenges: [
      "Preprocessed facial image datasets.",
      "Trained and optimized the CNN model.",
      "Improved emotion classification accuracy.",
    ],

    future: [
      "Support real-time webcam detection.",
      "Increase model accuracy with larger datasets.",
      "Deploy the model as a web application.",
    ],
  },
  {
    id: 7,
    title: "Home Security Device",
    description:
      "A GSM-based alarm system using Arduino, PIR sensor, and GSM module to send SMS alerts on motion detection.",
    image: device,
    tech: ["Arduino", "PIR Sensor", "GSM Module"],
    github: "https://github.com/Hridoy004/Home-Security-Device",

    challenges: [
      "Integrated Arduino with GSM and PIR modules.",
      "Implemented reliable motion detection.",
      "Configured SMS alerts for security events.",
    ],

    future: [
      "Develop a mobile monitoring app.",
      "Add a camera for live surveillance.",
      "Support Wi-Fi and IoT connectivity.",
    ],
  },
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

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
                <button
                  onClick={() => setSelectedProject(project)}
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(59,130,246,.35)]"
                >
                  View Details
                  <FaExternalLinkAlt className="transition group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-2xl text-gray-300 transition hover:bg-red-500 hover:text-white"
            >
              ×
            </button>

            <div className="max-h-[92vh] overflow-y-auto">
              {/* Project Image */}
              <div className="border-b border-white/10 bg-gradient-to-b from-[#1e293b] to-[#0f172a] p-8">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827] shadow-xl">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="mx-auto max-h-[430px] w-full object-contain p-4 transition duration-300 hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-6">
                  <h2 className="text-3xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-10 p-8">
                {/* Overview */}
                <div>
                  <h3 className="mb-3 border-l-4 border-blue-500 pl-3 text-xl font-semibold text-white">
                    Project Overview
                  </h3>

                  <p className="leading-8 text-gray-400">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Technology */}
                <div>
                  <h3 className="mb-4 border-l-4 border-blue-500 pl-3 text-xl font-semibold text-white">
                    Technology Stack
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div>
                  <h3 className="mb-4 border-l-4 border-blue-500 pl-3 text-xl font-semibold text-white">
                    Challenges
                  </h3>

                  <div className="space-y-3">
                    {selectedProject.challenges.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/5 p-4 text-gray-400"
                      >
                        • {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Future Improvements */}
                <div>
                  <h3 className="mb-4 border-l-4 border-blue-500 pl-3 text-xl font-semibold text-white">
                    Future Improvements
                  </h3>

                  <div className="space-y-3">
                    {selectedProject.future.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/5 p-4 text-gray-400"
                      >
                        • {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-medium text-white transition-all duration-300 hover:border-blue-500 hover:bg-blue-600"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-700"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
