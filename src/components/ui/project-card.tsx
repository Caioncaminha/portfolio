"use client";

import { motion } from "framer-motion";
import { TechIcon } from "@/components/ui/tech-icon";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { TiltCard } from "@/components/ui/tilt-card";

interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    description: string;
    coverImage?: string;
    github?: string;
    link?: string;
    tech: string[];
  };
  index: number;
  useTilt?: boolean;
}

export function ProjectCard({ project, index, useTilt = true }: ProjectCardProps) {
  const CardWrapper = useTilt ? TiltCard : motion.div;

  return (
    <CardWrapper
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group flex flex-col h-full bg-card text-card-foreground rounded-xl border border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden"
    >
      <div className="flex flex-col h-full">
        {/* Card Image */}
        <Link 
          href={`/projects/${project.slug}`} 
          className="block w-full aspect-[4/3] overflow-hidden bg-secondary/10"
        >
          <motion.div 
            layoutId={`project-image-${project.slug}`}
            className="relative h-full w-full flex items-center justify-center p-6"
          >
            {project.coverImage ? (
              <Image 
                src={project.coverImage} 
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                className="!relative !h-auto !w-auto max-h-full max-w-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
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
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-foreground transition-colors" 
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
              )}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-muted-foreground hover:text-foreground transition-colors" 
                  aria-label="Live Demo"
                >
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
              <div 
                key={t} 
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/50 text-xs font-medium text-secondary-foreground hover:bg-secondary transition-colors border border-secondary-foreground/10"
              >
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
    </CardWrapper>
  );
}
