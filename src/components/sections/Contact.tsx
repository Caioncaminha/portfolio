"use client";

import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  const { dict } = useLanguage();

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 -z-10" />

      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {dict.contact.title}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {dict.contact.availability}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <a
              href={`mailto:${dict.contact.email}`}
              className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 w-full md:w-auto justify-center"
            >
              <FaEnvelope />
              {dict.contact.send}
            </a>
          </div>

          <div className="flex items-center justify-center gap-8">
            <a
              href={dict.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="p-3 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors">
                <FaGithub size={24} />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href={dict.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="p-3 rounded-full bg-secondary/50 group-hover:bg-secondary transition-colors">
                <FaLinkedin size={24} />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
