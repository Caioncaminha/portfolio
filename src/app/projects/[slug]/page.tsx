"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { TechIcon } from "@/components/ui/tech-icon";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaSearchPlus } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { ImageModal } from "@/components/ui/image-modal";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { dict } = useLanguage();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  // Find the project in the current language dictionary
  const project = dict.projects.items.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <Link href="/projects" className="text-primary hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <article className="min-h-screen pt-24 pb-20 container mx-auto px-4 max-w-5xl">
         {/* Back Button */}
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 mb-8">
              {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors font-medium">
                      <FaGithub /> GitHub
                  </a>
              )}
              {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
                      <FaExternalLinkAlt /> Live Demo
                  </a>
              )}
          </div>

          {/* Hero Image */}
          <motion.div 
              layoutId={`project-image-${project.slug}`}
              className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl mb-12 group cursor-zoom-in"
              onClick={() => setSelectedImage(project.coverImage || null)}
          >
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                <FaSearchPlus className="text-white drop-shadow-md text-3xl" />
             </div>
             <Image 
               src={project.coverImage || ""} 
               alt={project.title}
               fill
               className="object-cover"
               priority
             />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
              <section>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                      Overview
                  </h2>
                  <div className="prose dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed space-y-6">
                      {project.fullDescription?.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                      ))}
                  </div>
              </section>

              <section>
                   <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {project.features?.map((feature, idx) => (
                           <li key={idx} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-border">
                               <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                               <span>{feature}</span>
                           </li>
                       ))}
                   </ul>
              </section>

               {/* Gallery */}
               {project.gallery && project.gallery.length > 0 && (
                  <section>
                      <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {project.gallery.map((img, idx) => (
                              <div 
                                key={idx} 
                                className="relative aspect-video rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all group cursor-zoom-in"
                                onClick={() => setSelectedImage(img)}
                              >
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                                      <FaSearchPlus className="text-white drop-shadow-md text-2xl" />
                                  </div>
                                  <Image 
                                      src={img} 
                                      alt={`${project.title} screenshot ${idx + 1}`}
                                      fill
                                      className="object-cover"
                                  />
                              </div>
                          ))}
                      </div>
                  </section>
               )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
              <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-6">Tech Stack</h3>
                  <div className="flex flex-wrap gap-3">
                      {project.tech.map((t) => (
                          <div key={t} className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/50 text-secondary-foreground text-sm font-medium">
                              <TechIcon name={t} className="w-4 h-4" />
                              {t}
                          </div>
                      ))}
                  </div>
              </div>
          </aside>
        </div>
      </article>

      {/* Zoom Modal */}
      <ImageModal 
        isOpen={!!selectedImage} 
        src={selectedImage} 
        alt={project.title} 
        onClose={() => setSelectedImage(null)} 
      />
    </>
  );
}