import {
  FaCode,
  FaDownload,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";
import logoImg from "../../assets/img/Mypic.jpeg";

export default function About() {
  const highlights = [
    {
      icon: <FaCode size={22} />,
      title: "Clean Code",
      desc: "Writing maintainable and scalable applications.",
    },
    {
      icon: <FaLaptopCode size={22} />,
      title: "Full Stack",
      desc: "React, Node.js, Express & PostgreSQL.",
    },
    {
      icon: <FaGraduationCap size={22} />,
      title: "Continuous Learning",
      desc: "Always learning modern technologies.",
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
              <h3 className="text-4xl font-bold text-blue-500">2+</h3>
              <p className="text-gray-400">Years Learning</p>
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
              I'm Shahjahan Hridoy, a passionate Full Stack Web Developer who
              enjoys building responsive, user-friendly, and scalable web
              applications. I love solving real-world problems with clean code
              and continuously learning new technologies.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              My main stack includes React, Tailwind CSS, Node.js, Express.js,
              PostgreSQL, and Prisma ORM. My goal is to build impactful digital
              products and grow as a software engineer.
            </p>

            {/* Cards */}
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
                <p className="text-gray-400">Projects</p>
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

            {/* Button */}
            <a
              href="/cv.pdf"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
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
