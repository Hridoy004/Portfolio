import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0b0b0b]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <a href="#home">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white">
            SHAHJAHAN HRIDOY
          </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-wider text-gray-300 transition hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white">
          {open ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-[#111] border-t border-white/10 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-6 py-4 text-white border-b border-white/10 hover:bg-[#1b1b1b]"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
