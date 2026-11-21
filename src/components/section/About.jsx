import { FaCode, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import portrait from "../../assets/img/my-pic.png";

const highlights = [
  {
    icon: FaCode,
    title: "Thoughtful code",
    description:
      "I value clear, maintainable solutions built around real needs.",
  },
  {
    icon: FaLaptopCode,
    title: "End-to-end thinking",
    description:
      "I enjoy connecting polished interfaces with reliable backends.",
  },
  {
    icon: FaLightbulb,
    title: "Always learning",
    description: "Curiosity keeps me exploring tools and better ways to build.",
  },
];

export default function About() {
  return (
    <section id="about" className="section section-about">
      <div className="page-shell">
        <div className="about-layout">
          <div className="about-photo">
            <img src={portrait} alt="Shahjahan Hridoy" loading="lazy" />
            <span className="photo-note">Based in Sylhet, Bangladesh</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">A little about me</p>
            <h2 className="section-title">
              Turning curiosity into <span>useful things.</span>
            </h2>
            <p>
              I&apos;m Shahjahan Hridoy, a Full Stack Developer who first got
              curious about how websites work and turned that curiosity into a
              journey through HTML, CSS, and JavaScript. Since then, I&apos;ve
              grown my skills with React, Node.js, Express, PostgreSQL, and
              Prisma by building projects and learning through practice.
            </p>
            <p>
              I enjoy taking an idea from a clean, accessible interface all the
              way to the data and logic behind it. I care about making software
              feel intuitive, work reliably, and stay easy to improve. Outside
              of coding, I like reading technology articles, solving coding
              challenges, and exploring new ideas.
            </p>
            <div className="highlight-grid">
              {highlights.map(({ icon: Icon, title, description }) => (
                <article className="highlight-card" key={title}>
                  <Icon aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
