import React from "react";
import { Terminal } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--navy)] pb-12 pt-6 border-t border-dashed border-slate-700/60 relative overflow-hidden">
      {/* ── FOOTER INNER CONTAINER ── */}
      <div className="container mx-auto relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6">
        {/* ฝั่งซ้าย: ข้อมูลลิขสิทธิ์และคำสั่งเช็กระบบคลาสสิกไซไฟ */}
        <div className="flex items-center gap-3 text-left">
          <div className="w-8 h-8 bg-[#1a3a5c] border border-[var(--sky)] flex items-center justify-center text-[var(--sky)] animate-pulse">
            <Terminal size={14} />
          </div>
          <div>
            <div className="font-['Share_Tech_Mono'] text-sm md:text-base text-white font-bold uppercase tracking-wider">
              © {new Date().getFullYear()} ASHA.DEV // ALL SYSTEMS NOMINAL.
            </div>
            <div className="font-['Share_Tech_Mono'] text-xs text-slate-400 uppercase tracking-widest mt-0.5">
              Chaiyawat Jenvasu
            </div>
          </div>
        </div>

        {/* ฝั่งขวา: พิกัดการปล่อยตัวแบบสากลไร้พรมแดน */}
        <div className="text-center md:text-right font-['Share_Tech_Mono'] text-xs md:text-sm uppercase tracking-[2px] text-[var(--sky)] bg-[#1a3a5c]/60 px-4 py-2 border border-slate-700/80">
          <span className="inline-block w-2 h-2 rounded-full bg-[#4caf50] animate-ping mr-2"></span>
          DEPLOYED_FROM: BANGKOK, TH 🇹🇭
        </div>
      </div>
    </footer>
  );
};
