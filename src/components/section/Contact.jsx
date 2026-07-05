import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0d0d0d] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-20">
          <p className="text-blue-500 font-semibold uppercase tracking-[4px]">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-extrabold mt-3">
            Let's Work Together
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">
            Have a project in mind or looking for a Full Stack Web Developer?
            Feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}

          <div>
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>

            <div className="space-y-6">
              {/* Email */}

              <div className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-[#161616] p-5 transition hover:border-blue-500 hover:-translate-y-1">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-xl">
                  <FaEnvelope />
                </div>

                <div className="min-w-0">
                  <p className="text-gray-400 text-sm">Email</p>

                  <a
                    href="mailto:hridoyahmed2435@gmail.com"
                    className="break-all text-lg font-medium hover:text-blue-400"
                  >
                    hridoyahmed2435@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}

              <div className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-[#161616] p-5 transition hover:border-blue-500 hover:-translate-y-1">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Phone</p>

                  <a
                    href="tel:+8801924143235"
                    className="text-lg font-medium hover:text-blue-400"
                  >
                    +880 1924-143235
                  </a>
                </div>
              </div>

              {/* Location */}

              <div className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-[#161616] p-5 transition hover:border-blue-500 hover:-translate-y-1">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Location</p>

                  <p className="text-lg font-medium">Sylhet, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social */}

            <div className="mt-10">
              <h4 className="font-semibold mb-5">Follow Me</h4>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Hridoy004"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#161616] transition hover:bg-blue-500 hover:border-blue-500"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/shahjahan-hridoy/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#161616] transition hover:bg-blue-500 hover:border-blue-500"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="rounded-3xl border border-white/10 bg-[#161616] p-8 md:p-10">
            <h3 className="text-3xl font-bold mb-8">Send Message</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-[#0d0d0d] px-5 py-4 outline-none transition focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-[#0d0d0d] px-5 py-4 outline-none transition focus:border-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-white/10 bg-[#0d0d0d] px-5 py-4 outline-none transition focus:border-blue-500"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#0d0d0d] px-5 py-4 outline-none transition focus:border-blue-500"
              />

              <button
                type="submit"
                className="flex items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
              >
                Send Message
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
