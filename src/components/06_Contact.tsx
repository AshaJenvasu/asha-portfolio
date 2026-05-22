import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact: React.FC = () => {
  return (
    // ⚡ เปลี่ยน bg ให้เป็นสีน้ำเงินเข้ม [var(--navy)] และ text ให้เป็นสีขาว/สว่าง
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-[var(--navy)] text-white border-b-8 border-[var(--sky)]"
    >
      {/* เส้นตาราง Grid สีจางๆ บนพื้นน้ำเงินเข้ม */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#5bb8f5 1px, transparent 1px), linear-gradient(90deg, #5bb8f5 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto relative z-10 w-full px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-['Share_Tech_Mono'] text-sm md:text-base text-[var(--sky)] tracking-[3px] uppercase mb-2">
            ▶▶▶ 05 · TRANSMISSION
          </div>
          <h2 className="font-['Exo_2'] text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-[2px] relative inline-block">
            Let's Work Together!
            <span className="absolute bottom-[-8px] left-0 right-0 h-[6px] bg-[var(--sky)]"></span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center max-w-4xl mx-auto text-center"
        >
          {/* ขยาย Headline */}
          <div className="font-['Exo_2'] text-2xl md:text-3xl font-black text-white leading-snug mb-8 border-b-4 border-[var(--sky)] pb-5 inline-block px-8">
            Open to Software Developer <br className="hidden md:block" />
            <span className="text-[var(--sky)]">opportunities globally.</span>
          </div>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-14 font-medium max-w-3xl">
            Ready to deploy as a Full-Stack Engineer for forward-thinking teams
            worldwide. Armed with modern web capabilities, an entrepreneurial
            mindset, and cross-cultural adaptability. From local infrastructures
            to international architectures, let's push the next big idea to
            production.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 w-full">
            {/* Email Card (ปรับสีให้เข้ากับพื้นหลังน้ำเงิน) */}
            <a
              href="mailto:chaiyawatjenvasu@gmail.com"
              className="flex items-center gap-4 bg-[#1a3a5c] border-2 border-[var(--sky)] p-4 pr-8 hover:bg-[var(--sky)] hover:text-[var(--navy)] transition-all duration-300 group"
            >
              <Mail
                size={22}
                className="text-[var(--sky)] group-hover:text-[var(--navy)]"
              />
              <span className="font-['Share_Tech_Mono'] text-lg md:text-xl font-bold text-white group-hover:text-[var(--navy)]">
                chaiyawatjenvasu@gmail.com
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/AshaJenvasu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#1a3a5c] border-2 border-[var(--sky)] p-4 pr-8 hover:bg-[var(--sky)] hover:text-[var(--navy)] transition-all duration-300 group"
            >
              <FaGithub
                size={22}
                className="text-[var(--sky)] group-hover:text-[var(--navy)]"
              />
              <span className="font-['Share_Tech_Mono'] text-lg md:text-xl font-bold text-white group-hover:text-[var(--navy)]">
                github.com/AshaJenvasu
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/chaiyawat-jenvasu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-[#1a3a5c] border-2 border-[var(--sky)] p-4 pr-8 hover:bg-[var(--sky)] hover:text-[var(--navy)] transition-all duration-300 group"
            >
              <FaLinkedin
                size={22}
                className="text-[var(--sky)] group-hover:text-[var(--navy)]"
              />
              <span className="font-['Share_Tech_Mono'] text-lg md:text-xl font-bold text-white group-hover:text-[var(--navy)]">
                linkedin.com/in/chaiyawat-jenvasu
              </span>
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-4 bg-[#0d2137] border-2 border-slate-600 p-4 pr-8">
              <MapPin size={22} className="text-slate-400" />
              <span className="font-['Share_Tech_Mono'] text-lg md:text-xl font-bold text-slate-300">
                Based in Bangkok — Open to Relocation
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
