import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    link: "https://x.com/yourusername",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    link: "https://facebook.com/yourusername",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com/yourusername",
  },
];

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-4 md:grid-cols-2">
          {/* Logo */}

          <div>
            <h2 className="text-5xl font-black tracking-widest text-white">
              H<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Passionate Full Stack Web Developer focused on building modern,
              responsive and scalable web applications with React, Node.js and
              PostgreSQL.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="mb-8 text-lg font-bold text-white">Navigation</h3>

            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 transition duration-300 hover:pl-2 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="mb-8 text-lg font-bold text-white">Contact</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>

                  <p className="text-gray-300">hridoy@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>

                  <p className="text-gray-300">+880 1712-345678</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>

                  <p className="text-gray-300">Sylhet, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}

          <div>
            <h3 className="mb-8 text-lg font-bold text-white">Follow Me</h3>

            <div className="space-y-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-700 bg-[#161616] text-gray-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white">
                      <Icon size={18} />
                    </div>

                    <span className="text-gray-400 transition duration-300 group-hover:text-white">
                      {item.name}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shahjahan Hridoy. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-500">
            Building modern, scalable & user-focused web applications.
          </p>
        </div>
      </div>
    </footer>
  );
}
