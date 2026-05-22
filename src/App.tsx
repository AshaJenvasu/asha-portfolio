import { Navbar } from "./components/00_Navbar";
import { Hero } from "./components/01_Hero";
import { TechStack } from "./components/02_TechStack";
import { Experience } from "./components/03_Experience";
import { Projects } from "./components/04_Project";

function App() {
  return (
    <div className="min-h-screen bg-[var(--off-white)] pt-[60px]">
      {/* 1. แถบควบคุมเมนูด้านบน */}
      <Navbar />

      {/* 2. ส่วนเนื้อหา */}
      <main>
        <Hero />
        <TechStack />
        <Experience />
        <Projects />
        {/* <Education /> */}
        {/* <Contact /> */}
      </main>

      {/* ตัวอย่างเพื่อเช็ก Scroll (ใส่ไว้ชั่วคราวก่อน) */}
      <div className="h-[200vh] pointer-events-none" />
    </div>
  );
}

export default App;
