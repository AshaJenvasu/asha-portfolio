import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiVite,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { DiScrum } from "react-icons/di";

interface LanguageItem {
  name: string;
  level: string;
  percentage: string;
}

const techCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61dafb]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-[#38bdf8]" />,
      },
      { name: "HTML5", icon: <FaHtml5 className="text-[#e34c26]" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#264de4]" /> },
      {
        name: "Vanilla JavaScript",
        icon: <SiJavascript className="text-[#f7df1e] bg-black p-0.5" />,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
      {
        name: "Express.js",
        icon: <SiExpress className="text-[var(--navy)]" />,
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47a248]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      {
        name: "Git / GitHub",
        icon: (
          <div className="flex gap-1 text-[var(--navy)]">
            <FaGitAlt className="text-[#f05032]" />
            <FaGithub />
          </div>
        ),
      },
      { name: "Figma", icon: <FaFigma className="text-[#f24e1e]" /> },
      {
        name: "Agile / Scrum",
        icon: <DiScrum className="text-[#0052cc] text-xl" />,
      },
      { name: "Vercel", icon: <SiVercel className="text-black" /> },
      { name: "Render", icon: <SiRender className="text-[#46e3b7]" /> },
    ],
  },
];

const languageData = [
  { code: "TH", name: "Thai Language", level: "Native", percentage: "100%" },
  {
    code: "EN",
    name: "English Communication",
    level: "Professional · TOEIC 875",
    percentage: "88%",
  },
  {
    code: "JA",
    name: "Japanese Language",
    level: "Conversational · JLPT N3 → N2",
    percentage: "68%",
  },
];

export const TechStack: React.FC = () => {
  return (
    <section
      id="stack"
      className="relative min-h-screen flex items-center py-24 overflow-hidden bg-[var(--off-white)] border-b-2 border-[var(--border)]"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="container mx-auto relative z-10 w-full px-6">
        {/* ── HEADER ZONE ── */}
        <motion.div
          className="mb-16 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-['Share_Tech_Mono'] text-xs md:text-sm text-[var(--sky)] tracking-[3px] uppercase mb-2">
            ▶▶▶ 01 · SKILL INVENTORY
          </div>
          <h2 className="font-['Exo_2'] text-5xl md:text-6xl font-black text-[var(--navy)] uppercase tracking-[2px] relative inline-block">
            Tech Stack
            <span className="absolute bottom-[-8px] left-0 right-0 h-[5px] bg-[var(--sky)]"></span>
          </h2>
        </motion.div>

        {/* ── STACK CATEGORY BLOCKS (อัปเกรดเป็น Grid 2 คอลัมน์ แก้ปัญหาหน้าโล่ง) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 mb-24">
          {techCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              // เปลี่ยนมาใช้กรอบ Card เน้นสัดส่วนให้เต็มพื้นที่แทนเส้นประด้านล่างค่ะ
              className="bg-white border-2 border-[var(--border-strong)] p-6 md:p-8 shadow-sm hover:border-[var(--sky)] transition-all duration-300 relative"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="font-['Exo_2'] text-2xl md:text-3xl font-black text-[var(--navy)] uppercase tracking-[1px] mb-6">
                {cat.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="font-['Exo_2'] text-sm md:text-base font-bold text-[var(--navy)] bg-[var(--off-white)] border-2 border-[var(--border-strong)] px-5 py-3 transition-all duration-200 hover:border-[var(--sky)] hover:bg-[var(--sky-pale)] select-none flex items-center gap-2.5 group"
                    style={{
                      clipPath:
                        "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                    }}
                  >
                    <span className="text-xl transition-transform duration-200 group-hover:scale-110">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── LINGUISTIC SKILLS BLOCK ── */}
        <motion.div
          className="mt-4 pt-4 border-t-2 border-[var(--border)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-['Exo_2'] text-2xl md:text-3xl font-black text-[var(--navy)] uppercase tracking-[1px] mb-10">
            Linguistic Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {languageData.map((lang) => (
              <div
                key={lang.code}
                // ขยาย Padding ของการ์ดให้ใหญ่ขึ้นรับกับตัวอักษร
                className="bg-white border-2 border-[var(--border-strong)] p-8 shadow-md transition-all duration-300 hover:border-[var(--sky)] relative overflow-hidden"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                }}
              >
                {/* แถบรหัสนีออนสากล (ขยายขนาดตัวอักษร) */}
                <div className="absolute top-4 right-5 font-['Share_Tech_Mono'] text-sm md:text-base font-bold text-[var(--sky)] bg-[var(--sky-pale)] px-3 py-1 border border-[var(--border)]">
                  {lang.code}
                </div>

                {/* lang-name (ขยายตัวอักษรให้ใหญ่เบิ้ม) */}
                <div className="font-['Exo_2'] text-xl md:text-2xl font-black text-[var(--navy)] mb-2 pr-12">
                  {lang.name}
                </div>

                {/* lang-level (ขยายตัวอักษรให้อ่านง่ายขึ้น) */}
                <div className="font-['Share_Tech_Mono'] text-sm md:text-base text-[var(--text-soft)] uppercase tracking-wider mb-6">
                  {lang.level}
                </div>

                {/* หลอดเกจพลังงาน */}
                <div className="w-full h-2.5 bg-[var(--sky-pale)] border border-[var(--border)] relative overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[var(--sky)] to-[var(--accent2)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: lang.percentage }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
