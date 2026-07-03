import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0b0b0b]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <a href="#home" className="flex items-center gap-3">
          <div className="flex gap-1">
            {/* <span className="h-4 w-2 rounded bg-white"></span>
            <span className="h-6 w-2 rounded bg-white"></span>
            <span className="h-4 w-2 rounded bg-white"></span> */}
          </div>

          <h2 className="text-3xl font-extrabold tracking-wide text-white">
            SHAHJAHAN HRIDOY
          </h2>
        </a>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-semibold uppercase tracking-widest
              text-gray-300 transition duration-300 hover:text-white after:absolute 
                after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-white
                after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Resume Button */}

        {/* <a
          href="/resume/Shahjahan_Hridoy_CV.pdf"
          download
          className="hidden rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-black transition duration-300 hover:scale-105 hover:bg-gray-200 lg:block"
        >
          Download CV
        </a> */}

        {/* Mobile Button */}

        {/* <button onClick={() => setOpen(!open)} className="text-white lg:hidden">
          {open ? <HiX size={32} /> : <HiOutlineMenuAlt3 size={32} />}
        </button> */}
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden bg-[#111] transition-all duration-500 lg:hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 pb-3 text-lg font-medium text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume/Shahjahan_Hridoy_CV.pdf"
            download
            className="mt-4 rounded-full bg-white py-4 text-center font-semibold text-black"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
