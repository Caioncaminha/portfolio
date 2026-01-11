"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border py-8 mt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/Caioncaminha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/caionascimentocaminha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {year} Caio Nascimento Caminha.
        </p>
      </div>
    </footer>
  );
}
