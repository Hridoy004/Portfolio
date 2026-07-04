import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiNodedotjs, SiPostgresql, SiReact } from "react-icons/si";
import pic from "../../assets/img/pic.jpeg";

export default function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0b0b0b] text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-[160px]" />

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-5 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <div>
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
              🚀 Available for Work
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Hi,
              <br />
              I'm
              <span className="text-blue-500"> Shahjahan Hridoy</span>
            </h1>

            <h2 className="mt-6 text-3xl font-semibold text-gray-300">
              Full Stack Web Developer
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              I build modern, scalable and responsive web applications using
              React, Node.js, Express and PostgreSQL.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="/cv.pdf"
                className="rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
              >
                Download CV
              </a>

              <a
                href="#contact"
                className="flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 transition hover:border-blue-500"
              >
                Let's Talk
                <FaArrowRight />
              </a>
            </div>

            <div className="mt-10 flex gap-5">
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 hover:bg-blue-600"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 hover:bg-blue-600"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">
            <div className="h-[420px] w-[420px] rounded-full border border-blue-500/20 bg-gradient-to-b from-blue-500/20 to-transparent p-5">
              <img
                src={pic}
                alt="profile"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            {/* Floating Cards */}

            <div className="absolute left-0 top-16 rounded-2xl border border-white/10 bg-[#151515] px-6 py-4">
              <div className="flex items-center gap-3">
                <SiReact className="text-3xl text-cyan-400" />
                <p>React</p>
              </div>
            </div>

            <div className="absolute right-0 top-32 rounded-2xl border border-white/10 bg-[#151515] px-6 py-4">
              <div className="flex items-center gap-3">
                <SiNodedotjs className="text-3xl text-green-500" />
                <p>Node.js</p>
              </div>
            </div>

            <div className="absolute bottom-16 left-10 rounded-2xl border border-white/10 bg-[#151515] px-6 py-4">
              <div className="flex items-center gap-3">
                <SiPostgresql className="text-3xl text-blue-400" />
                <p>PostgreSQL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
