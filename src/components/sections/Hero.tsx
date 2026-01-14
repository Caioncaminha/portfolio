"use client";

import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";

export function Hero() {
  const { dict, language } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 md:pt-0 relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
              Caio Nascimento Caminha
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {dict.hero.role}
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
            >
              {dict.hero.cta}
            </a>
            <a
              href={
                language === "pt"
                  ? "/cv/pt_curriculo_caio_nascimento_caminha.pdf"
                  : "/cv/en_curriculo_caio_nascimento_caminha.pdf"
              }
              download
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-all flex items-center gap-2"
            >
              <HiDownload />
              {dict.hero.downloadCv}
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6">
            <a
              href="https://github.com/Caioncaminha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://linkedin.com/in/caionascimentocaminha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
        </motion.div>

        {/* Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-20 blur-2xl animate-pulse" />
            <div className="relative w-full h-full bg-muted border-4 border-background rounded-full overflow-hidden shadow-2xl group">
              <Image
                src="/images/hero/fotoldin.png"
                alt="Caio Nascimento"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
