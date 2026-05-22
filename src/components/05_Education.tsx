import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  TerminalSquare,
  Award,
  CheckCircle2,
} from "lucide-react";

interface EducationItem {
  icon: React.ReactNode;
  degree: string;
  school: string;
  period: string;
  note: React.ReactNode;
}

interface CertificateItem {
  icon: React.ReactNode | string;
  name: string;
  issuer: string;
}

const educationData: EducationItem[] = [
  {
    icon: <GraduationCap size={32} className="text-[var(--sky)]" />, // ขยายไอคอนหมวก
    degree: "B.B.A. Strategic Management & Leadership",
    school: "Ritsumeikan Asia Pacific University (APU)",
    period: "Beppu, Japan · Sep 2020 – Sep 2024",
    note: (
      <>
        <strong className="text-[var(--navy-mid)]">Capstone:</strong> Proposed a
        Web3/NFT-integrated business strategy, PR, and IP monetization model for
        IMAGICA GROUP to drive new revenue streams. Presented in a competitive,
        multicultural academic setting.
      </>
    ),
  },
  {
    icon: <TerminalSquare size={32} className="text-[var(--accent2)]" />, // ขยายไอคอนเทอร์มินัล
    degree: "Junior Software Developer Certificate",
    school: "Generation Thailand",
    period: "Bangkok, Thailand · Mar 2026 – Jun 2026 (15 weeks)",
    note: "Intensive program covering React, Node.js, Express, MongoDB, Agile/Scrum practices, and modern software development workflows.",
  },
];

const certificateData: CertificateItem[] = [
  {
    icon: <TerminalSquare size={28} className="text-[var(--sky)]" />,
    name: "Junior Software Developer Certificate",
    issuer: "Generation Thailand",
  },
  {
    icon: "EN",
    name: "TOEIC Official Score: 875",
    issuer: "ETS · English Proficiency",
  },
  {
    icon: "JA",
    name: "JLPT N3 Certificate",
    issuer: "The Japan Foundation · Japanese Proficiency",
  },
];

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen flex items-center py-24 overflow-hidden bg-[var(--off-white)] border-b-2 border-[var(--border)]"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="container mx-auto relative z-10 w-full px-6">
        {/* ── 💠 REVEAL: HEADER ZONE ── */}
        <motion.div
          className="mb-20 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-['Share_Tech_Mono'] text-xs md:text-sm text-[var(--sky)] tracking-[3px] uppercase mb-2">
            ▶▶▶ 04 · ORIGIN STORY
          </div>
          <h2 className="font-['Exo_2'] text-5xl md:text-6xl font-black text-[var(--navy)] uppercase tracking-[2px] relative inline-block">
            Education
            <span className="absolute bottom-[-8px] left-0 right-0 h-[5px] bg-[var(--sky)]"></span>
          </h2>
        </motion.div>

        {/* ── 💠 EDUCATION GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              className="bg-white border-2 border-[var(--border-strong)] p-8 md:p-12 shadow-md hover:shadow-lg transition-all duration-300 hover:border-[var(--sky)] relative"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="flex flex-col h-full">
                {/* ขยายกรอบ Icon */}
                <div
                  className="w-16 h-16 bg-[var(--sky-pale)] border-2 border-[var(--border)] flex items-center justify-center mb-8"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)",
                  }}
                >
                  {edu.icon}
                </div>

                {/* ขยายชื่อปริญญา/หลักสูตร */}
                <h3 className="font-['Exo_2'] text-2xl md:text-3xl font-black text-[var(--navy)] leading-tight mb-3">
                  {edu.degree}
                </h3>
                {/* ขยายชื่อสถาบัน */}
                <div className="text-lg md:text-xl font-bold text-[var(--sky)] uppercase tracking-[0.5px] mb-4">
                  {edu.school}
                </div>
                {/* ขยายระยะเวลา */}
                <div className="font-['Share_Tech_Mono'] text-sm md:text-base text-[var(--text-soft)] uppercase tracking-[1px] mb-8">
                  {edu.period}
                </div>

                {/* ขยายเนื้อหาบรรยายโปรเจกต์/หลักสูตร */}
                <div className="text-base md:text-lg lg:text-xl text-[var(--text-mid)] leading-relaxed border-l-2 border-dashed border-[var(--border-strong)] pl-5 mt-auto font-medium">
                  {edu.note}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── 💠 CERTIFICATES STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* ขยายหัวข้อใบเซอร์ */}
          <div className="font-['Exo_2'] text-2xl md:text-3xl font-black text-[var(--navy)] uppercase tracking-[1px] mb-10 flex items-center gap-3">
            <Award className="text-[var(--sky)] w-8 h-8" /> Certificates &
            Achievements
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificateData.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-6 bg-white border-2 border-[var(--border-strong)] p-6 hover:border-[var(--sky)] transition-colors group shadow-sm"
              >
                {/* ขยายกรอบไอคอนด้านซ้ายของใบเซอร์ */}
                <div className="w-14 h-14 flex-shrink-0 bg-[var(--off-white)] border border-[var(--border)] flex items-center justify-center font-['Share_Tech_Mono'] text-[var(--navy-mid)] font-black text-xl group-hover:bg-[var(--sky-pale)] group-hover:text-[var(--sky)] group-hover:border-[var(--sky)] transition-all">
                  {cert.icon}
                </div>
                <div>
                  {/* ขยายชื่อใบประกาศ */}
                  <div className="font-['Exo_2'] text-lg md:text-xl font-bold text-[var(--navy)] leading-tight mb-2">
                    {cert.name}
                  </div>
                  {/* ขยายรายละเอียดหน่วยงาน */}
                  <div className="font-['Share_Tech_Mono'] text-sm md:text-base text-[var(--text-soft)] uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-[#4caf50]" />{" "}
                    {cert.issuer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
