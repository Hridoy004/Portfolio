import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import device from "../../assets/img/device.png";
import emotion from "../../assets/img/emotion.png";
import foodies from "../../assets/img/foodies.png";
import landing from "../../assets/img/landing.png";
import syno from "../../assets/img/syno.png";
import tasker from "../../assets/img/tasker.png";
import tasknest from "../../assets/img/tasknest.png";
import techmart from "../../assets/img/techmart.png";
import tic from "../../assets/img/tic-tac-toe.png";

const projects = [
  {
    id: "synoflow",
    title: "Synoflow",
    category: "Project Management SaaS",
    description:
      "A collaborative project management platform to organize teams, manage projects, track tasks, and streamline workflows.",
    image: syno,
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Redis",
    ],
    github: "https://github.com/Hridoy004/synoflow-web",
    live: "https://synoflow-web-beta.vercel.app/",
    challenges: [
      "Implementing multi-tenant architecture with organizations, teams, and projects.",
      "Managing complex task workflows, role-based access control, and secure data isolation.",
    ],
    future: [
      "Introduce real-time collaboration, notifications, and advanced activity tracking.",
      "Expand reporting, analytics, and integrations to improve team productivity.",
    ],
  },
  {
    id: "tasknest",
    title: "TaskNest",
    category: "Home Services Marketplace",
    description:
      "A convenient platform to discover, book, and manage trusted home services.",
    image: tasknest,
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma",
      "PostgreSQL",
    ],
    github: "https://github.com/Hridoy004/TaskNest-Frontend",
    live: "https://tasknest-frontend-beta.vercel.app",
    challenges: [
      "Designing a reliable service booking workflow with multiple user roles.",
      "Managing service providers, bookings, and availability efficiently.",
    ],
    future: [
      "Integrate online payments and real-time booking notifications.",
      "Add provider ratings, reviews, and advanced service recommendations.",
    ],
  },
  {
    id: "tasker",
    title: "Tasker",
    category: "Productivity app",
    description:
      "A focused task manager to organize and keep track of everyday work.",
    image: tasker,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Hridoy004/tasker",
    live: "https://tasker-ha.vercel.app/",
    challenges: [
      "Designing a clear, responsive interface for everyday task management.",
      "Keeping task state and CRUD interactions predictable.",
    ],
    future: [
      "Add authentication and cross-device task sync.",
      "Support reminders and drag-and-drop organization.",
    ],
  },
  {
    id: "landing-page",
    title: "Brillance Landing Page",
    category: "Web experience",
    description:
      "A responsive marketing page built around a clean visual hierarchy.",
    image: landing,
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Hridoy004/brillance-the-landing-page",
    live: "https://brillance-the-landing-page-ha.vercel.app/",
    challenges: [
      "Building a consistent responsive layout across screen sizes.",
      "Keeping spacing and visual hierarchy cohesive throughout the page.",
    ],
    future: [
      "Improve accessibility and search metadata.",
      "Add an integrated contact form and subtle motion.",
    ],
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    category: "Interactive game",
    description:
      "A simple, responsive two-player game with clear turn and win states.",
    image: tic,
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Hridoy004/Tic-Tac-Toe",
    live: "https://tic-tac-toe-ha.vercel.app/",
    challenges: [
      "Modeling game turns and winning combinations accurately.",
      "Making each move and game state easy to understand.",
    ],
    future: [
      "Add a single-player mode with an AI opponent.",
      "Keep score and provide a game history.",
    ],
  },
  {
    id: "foodies",
    title: "Foodies",
    category: "Responsive website",
    description:
      "A food-focused website exploring responsive layout and clean UI.",
    image: foodies,
    tech: ["HTML", "CSS"],
    github: "https://github.com/Hridoy004/foodies",
    live: "https://foodies-alpha-ten.vercel.app/",
    challenges: [
      "Building a responsive layout with foundational web technologies.",
      "Maintaining consistent spacing and visual rhythm.",
    ],
    future: [
      "Add an online ordering experience.",
      "Introduce richer interactions and reusable components.",
    ],
  },
  {
    id: "techmart",
    title: "Techmart",
    category: "E-commerce concept",
    description:
      "An e-commerce project exploring authentication, shopping flows, and administration.",
    image: techmart,
    tech: ["Angular", "Node.js", "Express", "MongoDB"],
    github: null,
    live: null,
    challenges: [
      "Connecting authentication with the shopping and order flows.",
      "Designing distinct experiences for customers and administrators.",
    ],
    future: [
      "Add product reviews, wishlists, and order tracking.",
      "Publish a public repository and live demo when available.",
    ],
  },
  {
    id: "emotion-recognition",
    title: "Facial Expression Recognition",
    category: "Machine learning",
    description:
      "A CNN-based experiment using Keras to classify emotions from facial images.",
    image: emotion,
    tech: ["Python", "Keras", "CNN"],
    github: "https://github.com/Hridoy004/Facial-Expressions-Recognition",
    live: null,
    challenges: [
      "Preparing facial image data for model training.",
      "Training and tuning a convolutional neural network.",
    ],
    future: [
      "Explore real-time webcam inference.",
      "Evaluate performance with larger, more diverse datasets.",
    ],
  },
  {
    id: "home-security",
    title: "Home Security Device",
    category: "Hardware project",
    description:
      "An Arduino, PIR, and GSM-based alarm concept that sends SMS alerts when motion is detected.",
    image: device,
    tech: ["Arduino", "PIR Sensor", "GSM Module"],
    github: "https://github.com/Hridoy004/Home-Security-Device",
    live: null,
    challenges: [
      "Integrating the motion sensor and GSM module with the Arduino.",
      "Sending useful SMS alerts in response to detected motion.",
    ],
    future: [
      "Build a mobile monitoring experience.",
      "Explore Wi-Fi connectivity and live camera support.",
    ],
  },
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const previousFocus = document.activeElement;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector(".dialog-close")?.focus();

    const handleDialogKeys = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      } else if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleDialogKeys);
    return () => {
      document.removeEventListener("keydown", handleDialogKeys);
      document.body.style.overflow = "";
      previousFocus?.focus();
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="section">
      <div className="page-shell">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2 className="section-title">
            A few things I&apos;ve <span>built.</span>
          </h2>
          <p>
            Experiments and projects across web development, machine learning,
            and hardware.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <button
                className="project-image-button"
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-label={`View details for ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  loading="lazy"
                  decoding="async"
                  fetchPriority={index < 3 ? "auto" : "low"}
                />
                <span className="project-image-link">
                  View project <FaArrowRight />
                </span>
              </button>
              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <button
                  className="project-details-link"
                  type="button"
                  onClick={() => setSelectedProject(project)}
                >
                  View details <FaArrowRight aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="project-dialog-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
        >
          <section
            className="project-dialog"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
          >
            <button
              className="dialog-close"
              type="button"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <img className="dialog-image" src={selectedProject.image} alt="" />
            <div className="dialog-content">
              <p className="eyebrow">{selectedProject.category}</p>
              <h2 id="project-dialog-title">{selectedProject.title}</h2>
              <div className="dialog-block">
                <h3>Overview</h3>
                <p>{selectedProject.description}</p>
              </div>
              <div className="dialog-block">
                <h3>Technology stack</h3>
                <div className="project-tags">
                  {selectedProject.tech.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div className="dialog-columns">
                <div className="dialog-block">
                  <h3>Challenges</h3>
                  <ul>
                    {selectedProject.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="dialog-block">
                  <h3>Future plans</h3>
                  <ul>
                    {selectedProject.future.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="dialog-actions">
                {selectedProject.github && (
                  <a
                    className="button button-outline"
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub aria-hidden="true" /> GitHub repository
                  </a>
                )}
                {!selectedProject.github && (
                  <span className="project-link-note">
                    Repository link not available
                  </span>
                )}
                {selectedProject.live && (
                  <a
                    className="button button-primary"
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live project <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                )}
                {!selectedProject.live && (
                  <span className="project-link-note">
                    Live demo not available
                  </span>
                )}
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
