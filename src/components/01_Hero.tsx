import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail, FileText, MapPin, Zap } from "lucide-react";
import { motion } from "framer-motion";

import profileImg from "../assets/my-profile.jpg";
import cv from "../assets/chaiyawat_jenvasu_cv.pdf";

export const Hero: React.FC = () => {
  const glowOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowOverlayRef.current) {
        const { clientX, clientY } = e;
        glowOverlayRef.current.style.background = `radial-gradient(500px circle at ${clientX}px ${clientY}px, rgba(91, 184, 245, 0.08) 0%, transparent 80%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-12 lg:pt-6 pb-12 overflow-hidden bg-gradient-to-br from-[#e8f5ff] via-[#d0eafc] to-[var(--off-white)]"
    >
      {/* ── BACKGROUND ELEMENTS ── */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>

      <div
        ref={glowOverlayRef}
        className="absolute inset-0 pointer-events-none opacity-90 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(500px circle at 50% 50%, rgba(91, 184, 245, 0.05) 0%, transparent 80%)",
        }}
      ></div>

      <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-black text-[15rem] md:text-[24rem] text-[var(--sky)] opacity-[0.06] select-none pointer-events-none tracking-tighter leading-none hidden lg:block">
        DEV
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ── LEFT SIDE: MAIN INFO (คงเดิมไว้ทุกตัวอักษร) ── */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              className="flex-1 order-2 lg:order-1 text-center lg:text-left"
              initial={{ opacity: 0, x: -100 }} // เริ่มต้นที่โปร่งใสและหลบไปทางซ้าย 100px
              animate={{ opacity: 1, x: 0 }} // ไหลเข้ามาตำแหน่งปกติพร้อมชัดขึ้น
              transition={{ duration: 0.8, ease: "easeOut" }} // ระยะเวลาไหล 0.8 วินาทีแบบนุ่มนวล
            >
              {/* Status Badge */}
              <div
                className="inline-flex items-center gap-2 px-5 py-2 bg-[var(--sky-pale)] border border-[var(--border-strong)] text-[var(--navy-mid)] text-xs md:text-sm font-bold tracking-[2px] uppercase mb-8 shadow-sm"
                style={{
                  clipPath:
                    "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
                }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#4caf50] animate-pulse"></span>
                Available for Opportunities
              </div>

              <h1 className="font-['Exo_2'] text-5xl md:text-7xl lg:text-8xl font-black text-[var(--navy)] leading-none mb-4">
                <span className="block text-2xl md:text-3xl font-light tracking-[10px] text-[var(--sky)] uppercase mb-3">
                  Chaiyawat Jenvasu
                </span>
                ASHA
              </h1>

              <h2 className="text-base md:text-lg lg:text-xl font-bold tracking-[4px] text-[var(--accent)] uppercase mb-8 flex items-center justify-center lg:justify-start gap-2">
                <Zap size={22} className="text-[var(--accent2)]" />
                Software Engineer · MERN Stack
              </h2>

              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[var(--text-mid)] max-w-2xl mb-12 mx-auto lg:mx-0">
                A trilingual MERN Stack Developer with 4 years of cross-cultural
                experience in Japan. Combining strong JavaScript, React, and
                Node.js skills with an entrepreneurial mindset as a platform
                co-founder. Passionate about engineering high-impact,
                community-driven web solutions to solve real-world problems.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="https://github.com/AshaJenvasu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-[var(--navy)] text-white px-8 py-4 font-['Exo_2'] text-sm font-bold tracking-[2px] uppercase transition-all hover:bg-[var(--sky)]"
                  style={{
                    clipPath:
                      "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                  }}
                >
                  <FaGithub size={18} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/chaiyawat-jenvasu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-[var(--sky)] text-white px-8 py-4 font-['Exo_2'] text-sm font-bold tracking-[2px] uppercase transition-all hover:bg-[var(--navy)]"
                  style={{
                    clipPath:
                      "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                  }}
                >
                  <FaLinkedin size={18} /> LinkedIn
                </a>
                <a
                  href="mailto:chaiyawatjenvasu@gmail.com"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-[var(--sky)] text-[var(--navy)] px-8 py-4 font-['Exo_2'] text-sm font-bold tracking-[2px] uppercase transition-all hover:bg-[var(--sky-pale)] cursor-pointer"
                  title="Email Me Directly"
                >
                  <Mail size={18} /> Contact
                </a>
                <a
                  href={cv}
                  download="CHAIYAWAT_JENVASU_RESUME"
                  className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm border-2 border-[var(--navy)] text-[var(--navy)] px-8 py-4 font-['Exo_2'] text-sm font-bold tracking-[2px] uppercase transition-all hover:bg-[var(--navy)] hover:text-white cursor-pointer"
                  title="Download Resume PDF"
                >
                  <FileText size={18} /> Resume
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT SIDE: PHOTO PANEL (ปรับใหม่ใส่รูปภาพแนวตั้งยาวแทนสเตตัสเดิม) ── */}
          <motion.div
            className="w-full max-w-[420px] order-1 lg:order-2 relative mt-4 lg:mt-0"
            initial={{ opacity: 0, x: 100 }} // เริ่มต้นที่โปร่งใสและหลบไปทางขวา 100px
            animate={{ opacity: 1, x: 0 }} // ไหลเข้ามาเจอกันตรงกลางพร้อมชัดขึ้น
            transition={{ duration: 0.8, ease: "easeOut" }} // สปีดสอดประสานพร้อมฝั่งซ้ายค่ะ
          >
            <div className="w-full max-w-[420px] order-1 lg:order-2 relative mt-4 lg:mt-0">
              {/* Floating Deco 1 */}
              <div className="absolute -top-4 -left-4 z-20 bg-white/90 border border-[var(--border-strong)] px-5 py-2.5 text-xs font-bold text-[var(--navy)] tracking-wider shadow-md hidden sm:block">
                <span className="text-[var(--sky)] mr-2">▶</span> ENGINEERING
                UNIT
              </div>

              {/* Main Profile Image Box */}
              <div
                className="relative bg-white/80 backdrop-blur-md border-2 border-[var(--border-strong)] p-6 pt-10 shadow-xl flex flex-col items-center"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))",
                }}
              >
                {/* แถบสีคาด */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--sky)] via-[var(--accent2)] to-[var(--sky)]"></div>

                <div className="w-full aspect-[4/5] bg-[var(--sky-pale)] border-2 border-[var(--border)] overflow-hidden shadow-inner relative group mb-6">
                  <img
                    src={profileImg}
                    alt="Chaiyawat Jenvasu"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // หากรูปยังไม่ถูกโหลด ให้แสดงกล่องสไตล์ Sci-Fi placeholder แก้ขัดไว้ก่อนค่ะ
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        const msg = document.createElement("div");
                        msg.className =
                          "absolute inset-0 flex flex-col items-center justify-center text-[var(--text-soft)] font-mono text-xs p-4 text-center";
                        msg.innerHTML =
                          "<span className='text-xl mb-2'>[ PROFILE_IMAGE ]</span> PLACE YOUR IMAGE AT:<br/>/src/assets/my-profile.jpg";
                        parent.appendChild(msg);
                      }
                    }}
                  />
                </div>

                {/* ข้อมูลสรุปด้านล่างรูปภาพตามหัวข้อที่คุณน้องเลือกไว้ */}
                <div className="text-center w-full border-t border-[var(--border)] pt-5">
                  <h3 className="font-['Exo_2'] text-2xl font-black text-[var(--navy)] tracking-[2px] uppercase">
                    FULLSTACK CORE
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-[4px] text-[var(--sky)] mt-1">
                    GLOBAL DESK
                  </p>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-[var(--text-soft)] uppercase tracking-widest">
                    <MapPin size={14} className="text-[var(--sky)]" />
                    Bangkok, Thailand
                  </div>
                </div>
              </div>

              {/* Floating Deco 2 */}
              <div className="absolute -bottom-4 -right-4 z-20 bg-white/90 border border-[var(--border-strong)] px-5 py-2.5 text-xs font-bold text-[var(--navy)] tracking-wider shadow-md hidden sm:block">
                <span className="text-[var(--sky)] mr-2">▶</span> STATUS //
                ACTIVE
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
