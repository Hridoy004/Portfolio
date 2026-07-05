import {
  FaAward,
  FaBookOpen,
  FaCalendarAlt,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

export default function Education() {
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
    "Built multiple full-stack web applications using React, Node.js, Express.js, PostgreSQL, and Prisma ORM.",
    "Completed academic and personal projects focused on modern web development and machine learning.",
    "Developed strong problem-solving, teamwork, and software engineering skills through coursework and practical projects.",
  ];

  return (
    <section id="education" className="bg-[#0b0b0b] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
            Educational Qualification
          </span>

          <h2 className="mt-6 text-5xl font-bold">Academic Background</h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-400 leading-8">
            My educational journey has provided me with a strong foundation in
            computer science, software engineering, databases, and modern web
            technologies. Alongside academics, I have developed practical skills
            by building real-world projects.
          </p>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl border border-white/10 bg-[#141414] p-8 lg:p-10 shadow-xl">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold">
                    Bachelor of Science (B.Sc.)
                  </h3>

                  <p className="text-xl text-blue-400 mt-1">
                    Computer Science & Engineering
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-5 text-gray-300">
                <div className="flex items-center gap-3">
                  <FaUniversity className="text-blue-500" />
                  <span>Metropolitan University, Sylhet, Bangladesh</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-blue-500" />
                  <span>2019 – 2023</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaAward className="text-blue-500" />
                  <span>CGPA: 3.47 / 4.00</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="lg:w-[350px]">
              <h4 className="mb-5 flex items-center gap-2 text-xl font-semibold">
                <FaBookOpen className="text-blue-500" />
                Relevant Coursework
              </h4>

              <div className="flex flex-wrap gap-3">
                {courses.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-white/10"></div>

          {/* Academic Highlights */}
          <div>
            <h4 className="mb-6 text-2xl font-semibold text-white">
              Academic Highlights
            </h4>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-xl border border-white/10 bg-[#1a1a1a] p-5"
                >
                  <div className="mt-1 h-3 w-3 rounded-full bg-blue-500"></div>

                  <p className="text-gray-300 leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
