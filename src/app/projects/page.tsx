"use client";

import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { ProjectCard } from "@/components/ui/project-card";

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
          <ProjectCard 
            key={project.slug} 
            project={project} 
            index={index}
            useTilt={false}
          />
        ))}
      </div>
    </div>
  );
}