import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  descBullets: string[];
  tags: string[];
  customDotStyle?: React.CSSProperties;
  liveLink?: string;
}

const experienceData: ExperienceItem[] = [
  {
    role: "Full-Stack Developer Learner",
    company: "Generation Thailand · Full-Stack Bootcamp",
    period: "Mar 2026 – Jun 2026",
    location: "Bangkok, Thailand",
    descBullets: [
      "Built and deployed full-stack web applications collaboratively in a team-based, Agile/Scrum environment.",
      "Applied MERN Stack in real-world project scenarios under industry-simulated conditions.",
    ],
    tags: ["MERN Stack", "Agile/Scrum", "Full-Stack"],
  },
  {
    role: "Co-Founder & Product Owner",
    company: "Animemaps.com",
    period: "2023 – Present",
    location: "Remote",
    descBullets: [
      "Co-founded and launched a global anime community platform, managing product direction, user requirements, and feature prioritization.",
      "Cultivated an active global user base by strategically managing presence across 5 major social platforms (Facebook, X, Reddit, Instagram, Threads).",
      "Executing the technical roadmap to migrate the platform using Full-Stack bootcamp training.",
    ],
    tags: [
      "Product Management",
      "Digital Marketing",
      "Community Building",
      "Startup",
    ],
    customDotStyle: {
      background: "var(--accent2)",
      boxShadow: "0 0 0 2px var(--accent2)",
    },
    liveLink: "https://animemaps.com",
  },
  {
    role: "Market Research Analyst",
    company: "Edith Grove · Tokyo Government Program",
    period: "Oct 2025 – Dec 2025",
    location: "Tokyo, Japan",
    descBullets: [
      "Conducted market research supporting Thailand business expansion strategies for Japanese clients.",
      "Utilized trilingual skills (Thai, English, Japanese) in a professional Tokyo business environment, strengthening stakeholder coordination.",
    ],
    tags: ["Market Research", "B2B Coordination", "Trilingual", "Tokyo"],
  },
];

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center py-24 overflow-hidden bg-[var(--off-white)] border-b-2 border-[var(--border)]"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* ── 💠 REVEAL: HEADER ZONE ── */}
        <motion.div
          className="mb-20 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-['Share_Tech_Mono'] text-xs md:text-sm text-[var(--sky)] tracking-[3px] uppercase mb-2">
            ▶▶▶ 02 · COMBAT LOG
          </div>
          <h2 className="font-['Exo_2'] text-5xl md:text-6xl font-black text-[var(--navy)] uppercase tracking-[2px] relative inline-block">
            Experience
            <span className="absolute bottom-[-8px] left-0 right-0 h-[5px] bg-[var(--sky)]"></span>
          </h2>
        </motion.div>

        {/* ── 💠 TIMELINE STRUCTURE ── */}
        <div className="relative border-l-2 border-dashed border-[var(--border-strong)] ml-4 md:ml-6 flex flex-col gap-14">
          {experienceData.map((item, idx) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              className="relative pl-8 md:pl-12 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              {/* tl-dot */}
              <div
                className="absolute left-[-7px] top-2.5 w-3 h-3 bg-[var(--sky)] border border-white transition-transform duration-300 group-hover:scale-125"
                style={item.customDotStyle}
              ></div>

              {/* tl-card */}
              <div
                className="bg-white border-2 border-[var(--border-strong)] p-6 md:p-10 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[var(--sky)] relative"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 30px))",
                }}
              >
                {/* tl-header: */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-6 border-b border-dashed border-[var(--border)]">
                  <div>
                    <h3 className="font-['Exo_2'] text-2xl md:text-3xl font-black text-[var(--navy)] tracking-[0.5px] leading-tight">
                      {item.role}
                    </h3>
                    <div className="text-base md:text-lg font-bold text-[var(--sky)] uppercase tracking-[0.5px] mt-2">
                      {item.company}
                    </div>
                  </div>

                  <div className="font-['Share_Tech_Mono'] text-xs md:text-sm text-[var(--text-soft)] text-left md:text-right uppercase tracking-[1px] whitespace-nowrap">
                    <div className="font-bold text-[var(--navy-mid)] text-sm md:text-base mb-1">
                      {item.period}
                    </div>
                    <div>{item.location}</div>
                  </div>
                </div>

                {/* tl-desc */}
                <div className="mb-8">
                  <ul className="flex flex-col gap-3.5 list-disc pl-6 text-base md:text-lg lg:text-xl leading-relaxed text-[var(--text-mid)] font-medium">
                    {item.descBullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="marker:text-[var(--sky)]">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FOOTER ZONE: */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-dashed border-[var(--border)]">
                  {/* กล่องชิปคีย์เวิร์ดด้านซ้ายล่าง */}
                  <div className="flex flex-wrap gap-2.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-['Share_Tech_Mono'] text-xs md:text-sm font-bold text-[var(--navy-mid)] bg-[var(--sky-pale)] border border-[var(--border)] px-3 py-1.5 uppercase tracking-wider transition-colors hover:border-[var(--sky)] select-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* ปุ่ม Launch Site */}
                  {item.liveLink && (
                    <a
                      href={item.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 font-['Share_Tech_Mono'] text-sm md:text-base font-black text-[var(--sky)] border-2 border-[var(--sky)] bg-[var(--sky-pale)] px-6 py-3 transition-all duration-200 hover:bg-[var(--sky)] hover:text-white uppercase tracking-wider self-start sm:self-auto w-full sm:w-auto"
                      title="Launch Live Platform"
                    >
                      Launch Site <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
