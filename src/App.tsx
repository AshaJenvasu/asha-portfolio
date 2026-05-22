import { Navbar } from "./components/00_Navbar";
import { Hero } from "./components/01_Hero";
import { TechStack } from "./components/02_TechStack";
import { Experience } from "./components/03_Experience";
import { Projects } from "./components/04_Project";
import { Education } from "./components/05_Education";
import { Contact } from "./components/06_Contact";
import { Footer } from "./components/07_Footer";

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
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
