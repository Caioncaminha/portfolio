"use client";

import { useLanguage } from "@/context/language-context";
import { motion, Variants } from "framer-motion";
import { RichText } from "@/components/ui/rich-text";
import { TechIcon } from "@/components/ui/tech-icon";
import Image from "next/image";

export function Experience() {
  const { dict } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="text-3xl font-bold mb-16 text-center md:text-left"
        >
          {dict.experience.title}
        </motion.h2>

        <motion.div 
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {dict.experience.jobs.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="grid grid-cols-[auto_1fr] gap-8 mb-12 relative group"
            >
               {/* Timeline Line */}
              {index !== dict.experience.jobs.length - 1 && (
                 <div className="absolute left-[28px] top-16 bottom-[-48px] w-0.5 bg-border -z-10 group-hover:bg-primary/30 transition-colors duration-300" />
              )}

              {/* Logo Column */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-card border-2 border-border p-1 shadow-sm flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:border-primary group-hover:shadow-primary/20 transition-all duration-300 ease-out overflow-hidden">
                   {job.logo ? (
                     <Image 
                        src={job.logo} 
                        alt={job.company}
                        width={56}
                        height={56}
                        className="rounded-full object-cover"
                     />
                   ) : (
                     <div className="w-full h-full rounded-full bg-secondary/50 flex items-center justify-center text-[10px] text-muted-foreground font-bold">
                       {job.company.substring(0, 2).toUpperCase()}
                     </div>
                   )}
                </div>
              </div>

              {/* Content Card */}
              <div className="p-6 rounded-xl border border-border bg-card shadow-sm transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:-translate-y-1 relative overflow-hidden -mt-2">
                 {/* Decorative background for hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 relative z-10">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{job.role}</h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mt-1 md:mt-0 whitespace-nowrap border border-primary/20">
                    {job.period}
                  </span>
                </div>
                
                <div className="mb-4 relative z-10">
                  {job.url ? (
                    <a 
                      href={job.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors block w-fit"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span className="text-lg font-semibold text-muted-foreground block">
                      {job.company}
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground block italic">
                    {job.location}
                  </span>
                </div>

                <RichText 
                  text={job.description} 
                  className="text-muted-foreground mb-4 group-hover:text-foreground/90 transition-colors relative z-10" 
                />

                <div className="flex flex-wrap gap-2 relative z-10">
                  {job.skills.map((skill, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary/50 text-xs font-medium text-secondary-foreground hover:bg-secondary transition-colors border border-secondary-foreground/10"
                    >
                      <TechIcon name={skill} className="w-3.5 h-3.5" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
