import React, { useState } from "react";
// ดึงไอคอนแบรนด์จาก Font Awesome (Fa) และไอคอนเมนูจาก Heroicons (Hi)
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

interface NavLinkItem {
  label: string;
  href: string;
}

const navLinks: NavLinkItem[] = [
  { label: "Profile", href: "#hero" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[70px] bg-white/95 backdrop-blur-md border-b-2 border-[var(--sky)] flex items-center justify-between px-6 md:px-12 shadow-[0_4px_24px_rgba(91,184,245,0.15)]">
      {/* ── LOGO ZONE ── */}
      <div className="font-['Exo_2'] text-xl md:text-2xl font-black tracking-[3px] text-[var(--navy)] uppercase relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-[var(--sky)] after:to-transparent select-none">
        ASHA.DEV
      </div>

      {/* ── DESKTOP MENU ── */}
      <div className="hidden lg:flex items-center gap-2">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-bold tracking-[2px] uppercase no-underline text-[var(--text-mid)] px-4 py-2 border border-transparent transition-all duration-200 hover:bg-[var(--sky-pale)] hover:border-[var(--border)] hover:text-[var(--navy)]"
            style={{
              clipPath:
                "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* ── RIGHT SOCIAL LINKS (Desktop) ── */}
      <div className="hidden sm:flex items-center gap-4">
        <a
          href="https://github.com/AshaJenvasu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--navy)] hover:text-[var(--sky)] transition-colors duration-200 p-1.5 hover:bg-[var(--sky-pale)] rounded-md"
          title="GitHub Profile"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://linkedin.com/in/chaiyawat-jenvasu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--navy)] hover:text-[var(--sky)] transition-colors duration-200 p-1.5 hover:bg-[var(--sky-pale)] rounded-md"
          title="LinkedIn Profile"
        >
          <FaLinkedin size={22} />
        </a>
      </div>

      {/* ── MOBILE HAMBURGER BUTTON ── */}
      <button
        onClick={toggleMenu}
        className="flex lg:hidden justify-center items-center w-10 h-10 border border-[var(--border)] bg-[var(--sky-pale)] cursor-pointer text-[var(--navy)] transition-all duration-200 hover:border-[var(--sky)]"
        aria-label="Toggle Navigation Menu"
        style={{
          clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
        }}
      >
        {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>

      {/* ── MOBILE MENU PANEL ── */}
      <div
        className={`absolute top-[68px] left-0 right-0 bg-white border-b-2 border-[var(--sky)] transition-all duration-300 ease-in-out lg:hidden flex flex-col shadow-xl z-40 ${
          isMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-bold tracking-[1px] uppercase no-underline text-[var(--text-mid)] p-3 text-center rounded transition-all duration-200 hover:bg-[var(--sky-pale)] hover:text-[var(--navy)]"
            >
              {link.label}
            </a>
          ))}

          {/* แถบลิงก์โซเชียลเวอร์ชันมือถือ — ใช้คลังสากลชุดใหม่แกะกล่อง */}
          <div className="flex items-center justify-center gap-6 pt-4 mt-2 border-t border-dashed border-[var(--border)]">
            <a
              href="https://github.com/AshaJenvasu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--navy)] flex items-center gap-2 text-sm font-semibold hover:text-[var(--sky)]"
            >
              <FaGithub size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/chaiyawat-jenvasu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--navy)] flex items-center gap-2 text-sm font-semibold hover:text-[var(--sky)]"
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>
          </div>

          <div className="font-['Share_Tech_Mono'] text-xs text-[var(--sky)] tracking-[1px] flex items-center justify-center gap-1.5 mt-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4caf50] animate-pulse"></span>
            AVAILABLE FOR OPPORTUNITIES
          </div>
        </div>
      </div>
    </nav>
  );
};
