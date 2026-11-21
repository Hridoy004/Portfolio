import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(formData.get("subject"));
    const body = encodeURIComponent(
      `From: ${formData.get("name")} (${formData.get("email")})\n\n${formData.get("message")}`,
    );
    window.location.href = `mailto:hridoyahmed2435@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section section-muted">
      <div className="page-shell">
        <div className="contact-heading">
          <p className="eyebrow">Have a good one in mind?</p>
          <h2 className="section-title">Let&apos;s make it <span>happen.</span></h2>
          <p>I&apos;m happy to talk about a project, an opportunity, or just say hello.</p>
        </div>
        <div className="contact-layout">
          <div className="contact-details">
            <a className="contact-item" href="mailto:hridoyahmed2435@gmail.com">
              <span className="contact-icon"><FaEnvelope aria-hidden="true" /></span>
              <span><small>Email me</small><strong>hridoyahmed2435@gmail.com</strong></span>
            </a>
            <a className="contact-item" href="tel:+8801924143235">
              <span className="contact-icon"><FaPhoneAlt aria-hidden="true" /></span>
              <span><small>Call me</small><strong>+880 1924-143235</strong></span>
            </a>
            <div className="contact-item">
              <span className="contact-icon"><FaMapMarkerAlt aria-hidden="true" /></span>
              <span><small>Based in</small><strong>Sylhet, Bangladesh</strong></span>
            </div>
            <div className="contact-socials">
              <a href="https://github.com/Hridoy004" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shahjahan-hridoy/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a message</h3>
            <p>Your message will open in your email app, ready to send.</p>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" autoComplete="name" placeholder="Jane Smith" required />
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="jane@example.com" required />
            <label htmlFor="contact-subject">Subject</label>
            <input id="contact-subject" name="subject" placeholder="What would you like to discuss?" required />
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="4" placeholder="Tell me a little about it..." required />
            <button className="button button-primary" type="submit">
              {submitted ? "Open your email app" : "Prepare email"} <FaPaperPlane aria-hidden="true" />
            </button>
            {submitted && <p className="form-feedback" role="status">Your email app should open with this message ready to send.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
