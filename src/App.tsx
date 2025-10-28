import React, { useState, useEffect } from "react";
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
import FadeIn from "./components/FadeIn";
import "./index.scss";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    // init AOS for subtle scroll animations; once:false so animations re-run when elements
    // re-enter the viewport (user asked for animations to reoccur).
    AOS.init({ duration: 650, once: false, easing: "ease-out-cubic" });
  }, []);

  return (
    <LanguageProvider>
      <div
        className={`main-container ${
          mode === "dark" ? "dark-mode" : "light-mode"
        }`}
      >
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <FadeIn transitionDuration={700}>
          <Main />
          <About />
          <Timeline />
          <Project />
          <Education />
          <Contact />
        </FadeIn>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
