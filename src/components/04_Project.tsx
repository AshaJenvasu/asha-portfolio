import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectItem {
  bannerStyle: React.CSSProperties;
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

// 📦 ดึงข้อมูล FIELD OPERATIONS ดั้งเดิมของคุณน้องกลับมาใช้งาน 100%
const projectsData: ProjectItem[] = [
  {
    bannerStyle: { background: "linear-gradient(135deg, #0d2137, #1a3a5c)" },
    bigText: "MARKET",
    badge: "Featured · 2026",
    badgeClass: "bg-amber-500 text-white", // สีป้ายโดดเด่นสไตล์ Featured
    bannerTitle: "Creative Market",
    role: "Scrum Master & Fullstack Dev",
    name: "Creative Market — Anti-AI Art Platform",
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
      "Render",
    ],
    liveUrl: "https://creative-market-front-end-sprint-2-mu.vercel.app/",
    githubUrl: "https://github.com/AshaJenvasu/creative-market-front-end",
  },
  {
    bannerStyle: { background: "linear-gradient(135deg, #0d2a1c, #1a5c3a)" },
    bigText: "ANIME",
    badge: "Live",
    badgeClass: "bg-[var(--accent2)] text-white", // สีป้ายไฟเขียวนีออนสไตล์ Live
    bannerTitle: "Animemaps TH",
    role: "Solo Developer",
    name: "Animemaps Thailand — Event Aggregator",
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
];

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center py-24 overflow-hidden bg-[var(--off-white)] border-b-2 border-[var(--border)]"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* ── 💠 REVEAL: HEADER ZONE ── */}
        <motion.div
          className="mb-20 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // 🔒 ล็อกอนิเมชันครั้งเดียวตามสัญญาค่ะ
          transition={{ duration: 0.6 }}
        >
          <div className="font-['Share_Tech_Mono'] text-xs md:text-sm text-[var(--sky)] tracking-[3px] uppercase mb-2">
            ▶▶▶ 03 · FIELD OPERATIONS
          </div>
          <h2 className="font-['Exo_2'] text-5xl md:text-6xl font-black text-[var(--navy)] uppercase tracking-[2px] relative inline-block">
            Projects
            <span className="absolute bottom-[-8px] left-0 right-0 h-[5px] bg-[var(--sky)]"></span>
          </h2>
        </motion.div>

        {/* ── 💠 PROJECTS GRID (2 คอลัมน์บนจอใหญ่ แบบเดิม) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.title}
              className="bg-white border-2 border-[var(--border-strong)] shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col relative"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // 🔒 การ์ดก็เด้งครั้งเดียวพอจ้า
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* 🎨 PROJECT BANNER (ถอดแบบมาจาก HTML เดิม 100%) */}
              <div
                className="relative h-32 md:h-40 p-6 flex flex-col justify-between overflow-hidden"
                style={project.bannerStyle}
              >
                {/* ลายน้ำขนาดใหญ่ project-big-text */}
                <div className="absolute -bottom-6 -right-2 font-['Exo_2'] font-black text-[80px] md:text-[100px] leading-none text-white opacity-5 select-none pointer-events-none">
                  {project.bigText}
                </div>

                {/* ป้าย Badge (Featured / Live) */}
                <div className="flex justify-end relative z-10">
                  <span
                    className={`font-['Share_Tech_Mono'] text-[10px] md:text-xs font-bold px-3 py-1 uppercase tracking-wider ${project.badgeClass}`}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* ชื่อแบนเนอร์โปรเจกต์ */}
                <div className="font-['Exo_2'] text-3xl md:text-4xl font-black text-white relative z-10 tracking-wide">
                  {project.bannerTitle}
                </div>
              </div>

              {/* 📄 PROJECT BODY */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* project-role-chip */}
                <div className="mb-4">
                  <span className="font-['Share_Tech_Mono'] text-xs font-bold text-[var(--navy-mid)] border border-[var(--border-strong)] bg-[var(--off-white)] px-3 py-1.5 uppercase tracking-wider">
                    {project.role}
                  </span>
                </div>

                {/* project-name & desc */}
                <h3 className="font-['Exo_2'] text-xl md:text-2xl font-black text-[var(--navy)] mb-3 leading-tight">
                  {project.name}
                </h3>
                <p className="text-base text-[var(--text-mid)] mb-6 leading-relaxed">
                  {project.desc}
                </p>

                {/* project-impacts (Bullet points สีฟ้า) */}
                <ul className="flex flex-col gap-2.5 list-none pl-1 text-sm md:text-base text-[var(--text-mid)] mb-8 flex-1">
                  {project.impacts.map((impact, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5">
                      <span className="text-[var(--sky)] text-lg leading-none mt-0.5">
                        ▪
                      </span>
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>

                {/* project-tech (Tech Pills แบบฉบับดั้งเดิม) */}
                <div className="flex flex-wrap gap-2 mb-8 pt-6 border-t border-dashed border-[var(--border)]">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-['Share_Tech_Mono'] text-[10px] md:text-xs font-bold text-[var(--navy)] bg-[var(--sky-pale)] px-2.5 py-1 border border-[var(--border)] uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* project-links (ปุ่ม Live & GitHub) */}
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
          ))}
        </div>
      </div>
    </section>
  );
};
