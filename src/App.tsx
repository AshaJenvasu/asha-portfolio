import { useState } from "react";
// ⬇️ ⚡ เติมตัวนี้เข้าไปด้านบนสุดเพื่อกวาดล้าง Error 'Cannot find name motion' ค่ะ!
import { motion, AnimatePresence } from "framer-motion";

import { Navbar } from "./components/00_Navbar";
import { Hero } from "./components/01_Hero";
import { TechStack } from "./components/02_TechStack";
import { Experience } from "./components/03_Experience";
import { Projects } from "./components/04_Project";
import { Education } from "./components/05_Education";
import { Contact } from "./components/06_Contact";
import { Footer } from "./components/07_Footer";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-[var(--off-white)] pt-[60px]">
      {/* ── 💠 จัดการม่าน Loading ให้สลายตัวได้อย่างถูกต้อง ── */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* ── 🚀 หน้าพอร์ตโฟลิโอตัวจริงจะค่อยๆ เฟดสว่างขึ้นมาหลังม่านสไลด์เสร็จ ── */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Navbar />

          <main>
            <Hero />
            <TechStack />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
