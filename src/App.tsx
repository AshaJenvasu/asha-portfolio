import { Navbar } from "./components/00_Navbar";

function App() {
  return (
    <div className="min-h-screen bg-[var(--off-white)] pt-[60px]">
      {/* 1. แถบควบคุมเมนูด้านบน */}
      <Navbar />

      {/* 2. บล็อกสำหรับ Section อื่นๆ (เดี๋ยวเราจะเอามาใส่ต่อตรงนี้ทีละชิ้นค่ะ) */}
      <main>
        {/* <Hero /> */}
        {/* <TechStack /> */}
        {/* <Experience /> */}
        {/* <Projects /> */}
        {/* <Education /> */}
        {/* <Contact /> */}
      </main>

      {/* ตัวอย่างเพื่อเช็ก Scroll (ใส่ไว้ชั่วคราวก่อน) */}
      <div className="h-[200vh] pointer-events-none" />
    </div>
  );
}

export default App;
