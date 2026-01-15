"use client";

import { useLanguage } from "@/context/language-context";
import { motion, Variants } from "framer-motion";
import { JobCard } from "@/components/ui/job-card";

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
            <JobCard 
              key={index} 
              job={job} 
              isLast={index === dict.experience.jobs.length - 1}
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
