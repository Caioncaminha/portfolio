"use client";

import * as React from "react";
import { useLanguage } from "@/context/language-context";
import { motion, AnimatePresence } from "framer-motion";
import { TechIcon } from "@/components/ui/tech-icon";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { TiltCard } from "@/components/ui/tilt-card";

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
              <TiltCard
                key={project.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group flex flex-col h-full bg-card text-card-foreground rounded-xl border border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col h-full">
                    {/* Card Image */}
                    <Link href={`/projects/${project.slug}`} className="block h-80 w-full overflow-hidden bg-secondary/20">
                        <motion.div 
                            layoutId={`project-image-${project.slug}`}
                            className="relative h-full w-full"
                        >
                            {project.coverImage ? (
                            <Image 
                                src={project.coverImage} 
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                loading="lazy"
                                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                            />
                            ) : (
                            <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground">
                                No Image
                            </div>
                            )}
                        </motion.div>
                    </Link>

                    <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-4">
                            <Link href={`/projects/${project.slug}`} className="block">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                            </Link>
                            <div className="flex gap-3">
                                {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                                    <FaGithub size={20} />
                                </a>
                                )}
                                {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Live Demo">
                                    <FaExternalLinkAlt size={18} />
                                </a>
                                )}
                            </div>
                        </div>

                        <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.slice(0, 5).map((t) => (
                                <div key={t} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/50 text-xs font-medium text-secondary-foreground hover:bg-secondary transition-colors">
                                    <TechIcon name={t} className="w-3.5 h-3.5" />
                                    <span>{t}</span>
                                </div>
                            ))}
                            {project.tech.length > 5 && (
                                <span className="flex items-center px-2 py-1 text-xs text-muted-foreground">
                                    +{project.tech.length - 5}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
              </TiltCard>
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