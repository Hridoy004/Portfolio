import {
  FaArrowDown,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import cv from "../../assets/cv/Shahjahan_Hridoy_Resume.pdf";

export default function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-shell page-shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> Available for opportunities
          </p>
          <p className="hero-intro">Hello, I&apos;m</p>
          <h1>
            Shahjahan <span>Hridoy</span>
          </h1>
          <h2>Full Stack Developer</h2>
          <p className="hero-description">
            I build thoughtful, responsive web experiences and dependable
            applications with modern JavaScript technologies.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={cv}
              download="Shahjahan_Hridoy_Resume.pdf"
            >
              Download resume <FaArrowRight aria-hidden="true" />
            </a>
            <a className="button button-quiet" href="#projects">
              Explore my work <FaArrowDown aria-hidden="true" />
            </a>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            <span>Find me on</span>
            <a
              href="https://github.com/Hridoy004"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shahjahan-hridoy/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div
          className="hero-visual"
          role="img"
          aria-label="A preview of a modern web development workspace"
        >
          <div className="visual-glow" aria-hidden="true" />
          <div className="code-window">
            <div className="window-chrome">
              <span className="window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="window-filename">portfolio.tsx</span>
              <span className="window-live">
                <span /> Live
              </span>
            </div>
            <div className="editor-lines" aria-hidden="true">
              <div>
                <span className="line-number">01</span>
                <code>
                  <span className="code-purple">const</span>{" "}
                  <span className="code-blue">developer</span> = {"{"}
                </code>
              </div>
              <div>
                <span className="line-number">02</span>
                <code>
                  &nbsp;&nbsp;name:{" "}
                  <span className="code-green">&quot;Hridoy&quot;</span>,
                </code>
              </div>
              <div>
                <span className="line-number">03</span>
                <code>
                  &nbsp;&nbsp;focus:{" "}
                  <span className="code-green">&quot;Full stack&quot;</span>,
                </code>
              </div>
              <div>
                <span className="line-number">04</span>
                <code>
                  &nbsp;&nbsp;tools: [
                  <span className="code-green">&quot;React&quot;</span>,
                </code>
              </div>
              <div>
                <span className="line-number">05</span>
                <code>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-green">&quot;Node.js&quot;</span>,{" "}
                  <span className="code-green">&quot;PostgreSQL&quot;</span>],
                </code>
              </div>
              <div>
                <span className="line-number">06</span>
                <code>
                  &nbsp;&nbsp;openTo: <span className="code-purple">new</span>{" "}
                  <span className="code-blue">Opportunities</span>()
                </code>
              </div>
              <div>
                <span className="line-number">07</span>
                <code>{"}"}</code>
              </div>
              <div className="editor-cursor-line">
                <span className="line-number">08</span>
                <code>
                  <span className="code-purple">export default</span>{" "}
                  <span className="code-blue">developer</span>
                  <span className="cursor-block" />
                </code>
              </div>
            </div>
            <div className="window-footer">
              <span>
                <i /> All systems operational
              </span>
              <span>JavaScript · TypeScript</span>
            </div>
          </div>
          <div className="visual-float visual-float-top">
            <span className="float-icon">✳</span>
            <span>
              <strong>Ideas into interfaces</strong>
              <small>Thoughtful, user-first design</small>
            </span>
          </div>
          <div className="visual-float visual-float-bottom">
            <span className="float-icon float-icon-blue">⌘</span>
            <span>
              <strong>Built to work</strong>
              <small>Reliable from UI to API</small>
            </span>
          </div>
          <div className="visual-orbit visual-orbit-one" aria-hidden="true" />
          <div className="visual-orbit visual-orbit-two" aria-hidden="true" />
        </div>
      </div>
      <a className="scroll-cue" href="#about">
        <span /> Scroll to explore
      </a>
    </section>
  );
}
