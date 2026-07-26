import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Hero" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-10 pt-4"
      style={{ backgroundColor: "transparent" }}
    >
      <div
        className="max-w-7xl mx-auto rounded-2xl backdrop-blur-xl border"
        style={{
          background: "rgba(10,14,39,.75)",
          borderColor: "rgba(255,255,255,.08)",
        }}
      >
        {/* Top row: logo + desktop links + resume / mobile logo + hamburger */}
        <div className="h-20 px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="text-base sm:text-xl font-black tracking-wider cursor-pointer whitespace-nowrap"
            style={{ color: "#00D9FF" }}
            onClick={() => setOpen(false)}
          >
            Maryyam's Portfolio
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex gap-12">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-300 hover:text-blue-500 transition font-mono text-base uppercase tracking-wider"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop resume button */}
          <a
            href="/maryyam_tanveer_resume.pdf"
            download="Maryyam-Tanveer-Resume.pdf"
            className="hidden md:inline-block px-7 py-3 rounded-lg font-bold uppercase text-base tracking-wider transition-all duration-300"
            style={{
              backgroundColor: "#00D9FF",
              color: "#0a0e27",
              boxShadow: "0 0 15px rgba(0, 217, 255, 0.3)",
            }}
          >
            ↓ RESUME
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg border transition-colors"
            style={{
              borderColor: "rgba(0, 217, 255, 0.3)",
              color: "#00D9FF",
              backgroundColor: open ? "rgba(0, 217, 255, 0.08)" : "transparent",
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown panel */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: open ? "400px" : "0px",
            borderTop: open ? "1px solid rgba(255,255,255,.08)" : "none",
          }}
        >
          <div className="flex flex-col px-4 py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-blue-500 transition font-mono text-sm uppercase tracking-wider py-3 border-b"
                style={{ borderColor: "rgba(255,255,255,.06)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/maryyam_tanveer_resume.pdf"
              download="Maryyam-Tanveer-Resume.pdf"
              onClick={() => setOpen(false)}
              className="mt-3 text-center px-7 py-3 rounded-lg font-bold uppercase text-sm tracking-wider transition-all duration-300"
              style={{
                backgroundColor: "#00D9FF",
                color: "#0a0e27",
                boxShadow: "0 0 15px rgba(0, 217, 255, 0.3)",
              }}
            >
              ↓ RESUME
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}