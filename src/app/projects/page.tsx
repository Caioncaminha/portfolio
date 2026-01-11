"use client";

import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { TechIcon } from "@/components/ui/tech-icon";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  const { dict } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-20 container mx-auto px-4">
      <Link 
        href="/#projects" 
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <FaArrowLeft />
        {dict.projects.viewLess.replace("Show Less", "Back to Home").replace("Mostrar Menos", "Voltar")} 
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-12"
      >
        {dict.projects.title}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dict.projects.items.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col h-full bg-card text-card-foreground rounded-xl border border-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden"
          >
             {/* Card Image */}
             <Link href={`/projects/${project.slug}`} className="relative h-48 w-full overflow-hidden block">
                {project.coverImage ? (
                  <Image 
                    src={project.coverImage} 
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground">
                    No Image
                  </div>
                )}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
