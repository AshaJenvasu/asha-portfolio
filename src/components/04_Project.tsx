import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

// ── แปะรูปตรงนี้ ──
import creativeMarketImg from "../assets/screenshot-creative-market.png";
import animemapsImg from "../assets/screenshot-animemapsTH.png";
import escanorImg from "../assets/screenshot-escanor.png";

interface ProjectItem {
  screenshotUrl: string;
  bigText: string;
  badge: string;
  badgeClass: string;
  bannerTitle: string;
  role: string;
  name: string;
  desc: string;
  impacts: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
}

const projectsData: ProjectItem[] = [
  {
    screenshotUrl: creativeMarketImg,
    bigText: "MARKET",
    badge: "Featured · 2026",
    badgeClass: "bg-amber-500 text-white",
    bannerTitle: "Creative Market",
    role: "Scrum Master & Fullstack Dev",
    name: "Creative Market",
    desc: "E-commerce platform dedicated to human-created (non-AI) artworks, empowering artists to monetize their creations.",
    impacts: [
      "Led agile operations as Scrum Master — daily stand-ups, sprint planning & retrospectives.",
      "Architected initial system design and API blueprints ensuring scalable database relationships.",
      "Developed Dynamic Product Market page with comprehensive search filters and optimized Landing Page.",
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Vercel",
    ],
    liveUrl: "https://creative-market-front-end-sprint-2-mu.vercel.app/",
    githubUrl: "https://github.com/AshaJenvasu/creative-market-front-end",
  },
  {
    screenshotUrl: animemapsImg,
    bigText: "ANIME",
    badge: "Live",
    badgeClass: "bg-[var(--accent2)] text-white",
    bannerTitle: "Animemaps TH",
    role: "Solo Developer",
    name: "Animemaps Thailand",
    desc: "Frontend web aggregator for anime events in Thailand — cosplay, pop-ups, concerts, exhibitions. Real-time search & calendar.",
    impacts: [
      "Implemented real-time search popup with live filtering, hero slideshow, and mobile-responsive calendar.",
      "Organized codebase into modular CSS and JS files per feature for long-term maintainability.",
      "Currently migrating to Full-Stack ecosystem (React + Node.js + Express + SQL) for dynamic event data.",
    ],
    tech: ["HTML", "CSS", "Vanilla JS", "Tailwind CSS", "Vercel"],
    liveUrl: "https://animemaps-thailand.vercel.app/",
    githubUrl: "https://github.com/AshaJenvasu/animemaps-thailand",
  },
  {
    screenshotUrl: escanorImg,
    bigText: "ESCANOR",
    badge: "Full-Stack · 2026",
    badgeClass: "bg-yellow-500 text-black",
    bannerTitle: "Escanor",
    role: "Solo Developer",
    name: "Escanor — MERN App",
    desc: "Production-grade full-stack app featuring JWT authentication, role-based access control, and persistent session management.",
    impacts: [
      "Built Auto-Login on Register — users land directly in the app post sign-up without re-entering credentials.",
      "Implemented session recovery via HTTP-Only cookies; auth state survives page refresh without Redux.",
      "Debugged a silent 404 on session restore traced to a mismatched API route across two independent repos.",
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Vercel",
    ],
    liveUrl: "https://week-12-react-assessment-rebuild.vercel.app/",
    githubUrl: "https://github.com/AshaJenvasu/week_10_react-assessment",
  },
];

// ── Carousel Card ──
const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({
  project,
  index,
}) => (
  <motion.div
    className="flex-shrink-0 w-[85vw] max-w-[480px] bg-white border-2 border-[var(--border-strong)] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col relative select-none"
    style={{
      clipPath:
        "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
    }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    {/* 🖼️ SCREENSHOT BANNER */}
    <div className="relative h-44 md:h-52 overflow-hidden">
      <img
        src={project.screenshotUrl}
        alt={`${project.name} screenshot`}
        className="w-full h-full object-cover object-top"
        draggable={false}
      />
      {/* gradient overlay ให้อ่านชื่อได้ */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* watermark */}
      <div className="absolute -bottom-4 -right-2 font-['Exo_2'] font-black text-[80px] md:text-[100px] leading-none text-white opacity-5 select-none pointer-events-none">
        {project.bigText}
      </div>

      {/* badge */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`font-['Share_Tech_Mono'] text-xs font-bold px-3 py-1.5 uppercase tracking-wider ${project.badgeClass}`}
        >
          {project.badge}
        </span>
      </div>

      {/* title บน overlay */}
      <div className="absolute bottom-4 left-6 z-10 font-['Exo_2'] text-3xl md:text-4xl font-black text-white tracking-wide drop-shadow-lg">
        {project.bannerTitle}
      </div>
    </div>

    {/* 📄 BODY */}
    <div className="p-7 md:p-9 flex flex-col flex-1">
      <div className="mb-5">
        <span className="font-['Share_Tech_Mono'] text-sm font-bold text-[var(--navy-mid)] border border-[var(--border-strong)] bg-[var(--off-white)] px-3 py-1.5 uppercase tracking-wider">
          {project.role}
        </span>
      </div>

      <h3 className="font-['Exo_2'] text-2xl font-black text-[var(--navy)] mb-3 leading-tight">
        {project.name}
      </h3>
      <p className="text-base text-[var(--text-mid)] mb-6 leading-relaxed font-medium">
        {project.desc}
      </p>

      <ul className="flex flex-col gap-3 list-none pl-1 text-sm md:text-base text-[var(--text-mid)] mb-8 flex-1 font-medium">
        {project.impacts.map((impact, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="text-[var(--sky)] text-lg leading-none mt-0.5">
              ▪
            </span>
            <span>{impact}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-7 pt-6 border-t border-dashed border-[var(--border)]">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="font-['Share_Tech_Mono'] text-xs font-bold text-[var(--navy)] bg-[var(--sky-pale)] px-2.5 py-1 border border-[var(--border)] uppercase tracking-wider"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mt-auto">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-['Share_Tech_Mono'] text-sm font-bold text-white bg-[var(--navy)] px-5 py-2.5 hover:bg-[var(--sky)] transition-colors uppercase tracking-widest border border-[var(--navy)]"
        >
          ▶ Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-['Share_Tech_Mono'] text-sm font-bold text-[var(--navy)] bg-transparent px-5 py-2.5 hover:bg-[var(--sky-pale)] hover:border-[var(--sky)] transition-colors uppercase tracking-widest border border-[var(--border-strong)]"
        >
          ⌥ GitHub
        </a>
      </div>
    </div>
  </motion.div>
);

// ── Main Section ──
export const Projects: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // drag scroll state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const cardWidth = () => {
    const card = trackRef.current?.children[0] as HTMLElement | undefined;
    return card ? card.offsetWidth + 40 : 520; // 40 = gap
  };

  const scrollTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(projectsData.length - 1, idx));
    setActiveIndex(clamped);
    trackRef.current?.scrollTo({
      left: clamped * cardWidth(),
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    const idx = Math.round(trackRef.current.scrollLeft / cardWidth());
    setActiveIndex(Math.max(0, Math.min(projectsData.length - 1, idx)));
  };

  // mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft =
      scrollLeft.current - (x - startX.current) * 1.2;
  };
  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
    handleScroll();
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center py-24 overflow-hidden bg-[var(--off-white)] border-b-2 border-[var(--border)]"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="container mx-auto relative z-10 w-full">
        {/* HEADER */}
        <motion.div
          className="mb-16 text-center lg:text-left px-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-['Share_Tech_Mono'] text-xs md:text-sm text-[var(--sky)] tracking-[3px] uppercase mb-2">
            ▶▶▶ 03 · FIELD OPERATIONS
          </div>
          <h2 className="font-['Exo_2'] text-5xl md:text-6xl font-black text-[var(--navy)] uppercase tracking-[2px] relative inline-block">
            Projects
            <span className="absolute bottom-[-8px] left-0 right-0 h-[5px] bg-[var(--sky)]" />
          </h2>

          {/* card count hint */}
          <p className="font-['Share_Tech_Mono'] text-xs text-[var(--sky)] tracking-widest mt-6 opacity-70">
            {activeIndex + 1} / {projectsData.length} — DRAG OR USE ARROWS
          </p>
        </motion.div>

        {/* CAROUSEL TRACK */}
        <div
          ref={trackRef}
          className="flex gap-10 overflow-x-auto scroll-smooth pb-6 px-6 cursor-grab"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={handleScroll}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {projectsData.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} />
          ))}
          {/* trailing spacer */}
          <div className="flex-shrink-0 w-6" />
        </div>

        {/* CONTROLS */}
        <div className="flex items-center justify-between px-6 mt-8">
          {/* dot indicators */}
          <div className="flex gap-2.5 items-center">
            {projectsData.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`transition-all duration-300 border border-[var(--border-strong)] ${
                  i === activeIndex
                    ? "w-8 h-3 bg-[var(--sky)]"
                    : "w-3 h-3 bg-transparent hover:bg-[var(--sky)] opacity-50"
                }`}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          {/* arrow buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => scrollTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="font-['Share_Tech_Mono'] text-sm font-bold text-[var(--navy)] border-2 border-[var(--border-strong)] px-4 py-2 hover:bg-[var(--sky)] hover:text-white hover:border-[var(--sky)] transition-colors disabled:opacity-20 disabled:cursor-not-allowed uppercase tracking-widest"
            >
              ◀ Prev
            </button>
            <button
              onClick={() => scrollTo(activeIndex + 1)}
              disabled={activeIndex === projectsData.length - 1}
              className="font-['Share_Tech_Mono'] text-sm font-bold text-white bg-[var(--navy)] border-2 border-[var(--navy)] px-4 py-2 hover:bg-[var(--sky)] hover:border-[var(--sky)] transition-colors disabled:opacity-20 disabled:cursor-not-allowed uppercase tracking-widest"
            >
              Next ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
