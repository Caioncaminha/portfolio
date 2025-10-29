import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Main,
  Timeline,
  About,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import Education from "./components/Education";
import "./index.scss";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark"); // ✅ Tipagem literal

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    AOS.init({ duration: 700, once: false, easing: "ease-out-cubic" });
  }, []);

  return (
    <LanguageProvider>
      <div
        className={`main-container  ${
          mode === "dark" ? "dark-mode" : "light-mode"
        }`}
      >
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <Main />
        <About />
        <Timeline />
        <Project />
        <Education />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
