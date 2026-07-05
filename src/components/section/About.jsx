import {
  FaCode,
  FaDownload,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";
import cv from "../../assets/cv/Shahjahan-Hridoy-CV.pdf";
import logoImg from "../../assets/img/mypic-preview.jpg";

export default function About() {
  const highlights = [
    {
      icon: <FaCode size={22} />,
      title: "Problem Solver",
      desc: "Building efficient and scalable solutions with clean code.",
    },
    {
      icon: <FaLaptopCode size={22} />,
      title: "Full Stack Development",
      desc: "Creating responsive frontend and robust backend applications.",
    },
    {
      icon: <FaGraduationCap size={22} />,
      title: "Fast Learner",
      desc: "Passionate about learning modern technologies and best practices.",
    },
  ];

  return (
    <section id="about" className="bg-[#0b0b0b] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div className="relative flex justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111] p-3">
              <img
                src={logoImg}
                alt="Profile"
                className="h-[520px] w-[400px] rounded-2xl object-cover"
              />
            </div>

            {/* Experience Card */}
            <div className="absolute -bottom-8 -right-4 rounded-2xl border border-white/10 bg-[#171717] px-8 py-5 shadow-xl">
              <h3 className="text-3xl font-bold text-blue-500">2+</h3>
              <p className="text-sm text-gray-400">
                Years Learning Web Development
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
              About Me
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              Passionate Full Stack
              <br />
              Web Developer
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Hi, I'm{" "}
              <span className="font-semibold text-white">Shahjahan Hridoy</span>
              , a passionate Full Stack Web Developer with a strong interest in
              building modern, responsive, and user-friendly web applications.
              My programming journey began with curiosity about how websites
              work, which gradually inspired me to learn HTML, CSS, JavaScript,
              and later modern technologies like React, Node.js, Express.js,
              PostgreSQL, and Prisma ORM. Since then, I have been continuously
              improving my skills by building real-world projects and exploring
              new technologies.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              I enjoy developing clean, scalable, and problem-solving
              applications that provide an excellent user experience. My
              favorite part of development is working on full-stack projects
              where I can design beautiful frontends and build efficient backend
              systems. Outside of programming, I enjoy learning new
              technologies, reading tech articles, solving coding challenges,
              and exploring innovative ideas. I consider myself a dedicated,
              self-motivated, and fast learner who is always eager to take on
              new challenges and grow as a software engineer.
            </p>

            {/* Highlights */}
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#141414] p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
                >
                  <div className="mb-4 text-blue-500">{item.icon}</div>

                  <h3 className="font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-bold text-blue-500">10+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-500">15+</h3>
                <p className="text-gray-400">Technologies</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-500">100%</h3>
                <p className="text-gray-400">Dedication</p>
              </div>
            </div>

            {/* Download CV */}
            <a
              href={cv}
              download="Shahjahan_Hridoy_CV.pdf"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold transition duration-300 hover:bg-blue-700"
            >
              <FaDownload />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
