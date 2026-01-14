"use client";

import * as React from "react";
import { useLanguage } from "@/context/language-context";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ProjectCard } from "@/components/ui/project-card";

export function Projects() {
  const { dict } = useLanguage();

  const displayedProjects = dict.projects.items.slice(0, 2);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-3xl font-bold mb-12 text-center"
        >
          {dict.projects.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <ProjectCard 
                key={project.slug} 
                project={project} 
                index={index} 
              />
            ))}
          </AnimatePresence>
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-medium inline-block"
          >
            {dict.projects.viewMore}
          </Link>
        </div>
      </div>
    </section>
  );
}
