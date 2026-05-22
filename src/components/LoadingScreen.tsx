import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("INITIALIZING_SYSTEM");

  // 🔄 ระบบจำลองการดาวน์โหลดและโหลดฐานข้อมูลคลังแสง
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }

        // สลับข้อความระหว่างโหลดเพิ่มความสมจริงสไตล์ห้องบังคับการ
        if (prev === 30) setStatusText("LOADING_CORE_MODULES");
        if (prev === 65) setStatusText("CONNECTING_GLOBAL_NETWORK");
        if (prev === 85) setStatusText("COMPILING_PORTFOLIO_DATA");

        // สุ่มความเร็วในการโหลดให้ดูสมจริงขึ้นค่ะ
        return prev + Math.floor(Math.random() * 8) + 2;
      });
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-[var(--navy)] z-[9999] flex flex-col items-center justify-center text-white select-none"
      exit={{
        y: "-100vh", // สไลด์ม่านขึ้นฟ้าไปด้านบนเมื่อโหลดเสร็จ
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
      }}
    >
      {/* เส้นตาราง Grid ฉากหลังประจำยานแม่ */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#5bb8f5 1px, transparent 1px), linear-gradient(90deg, #5bb8f5 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative flex flex-col items-center max-w-md w-full px-8">
        {/* 💠 โลโก้ศูนย์กลางตอนโหลด กะพริบนีออนเบาๆ */}
        <motion.div
          className="font-['Exo_2'] text-4xl md:text-5xl font-black tracking-[6px] text-white uppercase mb-8 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          ASHA.DEV
          <span className="absolute bottom-[-6px] left-0 right-0 h-[3px] bg-[var(--sky)] animate-pulse"></span>
        </motion.div>

        {/* 📋 รหัส Logs การรันระบบขยับสไลด์จากด้านล่าง */}
        <motion.div
          className="font-['Share_Tech_Mono'] text-sm md:text-base text-[var(--sky)] tracking-[2px] mb-3 flex items-center gap-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#4caf50]"></span>
          {statusText}...
        </motion.div>

        {/* 📊 ตัวเลขนับเปอร์เซ็นต์ตัวเบิ้มอ่านง่าย */}
        <div className="font-['Share_Tech_Mono'] text-5xl md:text-6xl font-black text-white mb-6 tracking-wider">
          {Math.min(progress, 100)}%
        </div>

        {/* 🎞️ แถบหลอดเกจพลังชาร์จข้อมูลเหลี่ยมเฉียง */}
        <div className="w-full h-3 bg-[#1a3a5c] border-2 border-slate-700 relative overflow-hidden p-[1px]">
          <motion.div
            className="h-full bg-gradient-to-r from-[var(--sky)] to-[var(--accent2)]"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "easeOut" }}
            onAnimationComplete={() => {
              if (progress >= 100) {
                onComplete(); // ส่งสัญญาณบอกไฟล์ App.tsx ว่าชาร์จเต็มร้อยแล้วจ้า!
              }
            }}
          ></motion.div>
        </div>

        {/* ดีไซน์ HUD ประดับมุมล่างของการโหลด */}
        <div className="absolute -bottom-24 font-['Share_Tech_Mono'] text-[10px] text-slate-500 tracking-[1px] uppercase text-center w-full">
          SECURE_PROTOCOL_CONNECTED // VER_2.0.26
        </div>
      </div>
    </motion.div>
  );
};
