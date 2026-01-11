"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/language-context";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiHome } from "react-icons/hi";
import { useActiveSection } from "@/hooks/use-active-section";

export function Navbar() {
  const { dict } = useLanguage();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  // Define section IDs for Scroll Spy
  const sectionIds = ["home", "about", "experience", "projects", "education", "contact"];
  const activeSection = useActiveSection(sectionIds);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: dict.nav.about, href: "#about", id: "about" },
    { name: dict.nav.experience, href: "#experience", id: "experience" },
    { name: dict.nav.projects, href: "#projects", id: "projects" },
    { name: dict.nav.education, href: "#education", id: "education" },
    { name: dict.nav.contact, href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-3"
          : "bg-transparent border-transparent py-5"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Home Icon Button */}
        <Link 
          href="/#home" 
          className={cn(
            "p-2 rounded-full border transition-all duration-300 shadow-sm relative z-50 group",
            activeSection === "home" && pathname === "/"
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-background border-border text-foreground hover:border-primary/50"
          )}
          onClick={(e) => handleNavClick(e, "#home")}
          aria-label="Home"
        >
          <HiHome size={24} />
        </Link>

        {/* Desktop Nav - Centralized */}
        <nav className="hidden md:flex items-center gap-2 p-1.5 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm">
          {links.map((link, index) => {
             const isActive = activeSection === link.id && pathname === "/";
             return (
              <React.Fragment key={link.href}>
                {index > 0 && (
                  <span className="text-muted-foreground/20 text-xs select-none">|</span>
                )}
                <Link
                  href={link.href.startsWith("#") && pathname !== "/" ? `/${link.href}` : link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200",
                    isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              </React.Fragment>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4 z-50">
            <LanguageToggle />
            <ThemeToggle />
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-foreground focus:outline-none"
                aria-label="Toggle Menu"
            >
                {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg md:hidden p-4 flex flex-col gap-4 items-center"
            >
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href.startsWith("#") && pathname !== "/" ? `/${link.href}` : link.href}
                        className={cn(
                            "text-lg font-medium py-2 w-full text-center rounded-lg border transition-all active:scale-95",
                             link.href === "#contact" 
                                ? "bg-primary text-primary-foreground border-primary" 
                                : "bg-card border-border hover:bg-secondary/20"
                        )}
                        onClick={(e) => handleNavClick(e, link.href)}
                    >
                        {link.name}
                    </Link>
                ))}
            </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
