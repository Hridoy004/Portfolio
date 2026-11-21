import {
  FaAward,
  FaBookOpen,
  FaCalendarAlt,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

const courses = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Software Engineering",
  "Operating Systems",
  "Computer Networks",
  "Artificial Intelligence",
  "Web Engineering",
  "Object-Oriented Programming",
];

const highlights = [
  "Built full-stack web applications with React, Node.js, Express, PostgreSQL, and Prisma ORM.",
  "Completed academic and personal projects spanning web development and machine learning.",
  "Developed problem-solving and software engineering skills through coursework and hands-on projects.",
];

export default function Education() {
  return (
    <section id="education" className="section section-muted">
      <div className="page-shell">
        <div className="section-heading">
          <p className="eyebrow">Learning & growth</p>
          <h2 className="section-title">Academic <span>background</span></h2>
          <p>A foundation in computer science, software engineering, and practical project work.</p>
        </div>
        <article className="education-card">
          <div className="education-top">
            <div className="education-degree">
              <span className="education-symbol"><FaGraduationCap aria-hidden="true" /></span>
              <div>
                <h3>Bachelor of Science (B.Sc.)</h3>
                <h4>Computer Science & Engineering</h4>
                <div className="education-facts">
                  <span><FaUniversity aria-hidden="true" /> Metropolitan University, Sylhet, Bangladesh</span>
                  <span><FaCalendarAlt aria-hidden="true" /> 2019 – 2023</span>
                  <span><FaAward aria-hidden="true" /> CGPA: 3.47 / 4.00</span>
                </div>
              </div>
            </div>
            <div className="education-coursework">
              <h4><FaBookOpen aria-hidden="true" /> Relevant coursework</h4>
              <div className="course-tags">
                {courses.map((course) => <span key={course}>{course}</span>)}
              </div>
            </div>
          </div>
          <div className="education-divider" />
          <div className="education-highlights">
            <h4>Academic highlights</h4>
            <ul>{highlights.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </article>
      </div>
    </section>
  );
}
