"use client";

import { useLanguage } from "@/context/language-context";
import { motion, Variants } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { EducationCard } from "@/components/ui/education-card";

export function Education() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="education" className="py-24 bg-background/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col gap-20"
        >
          {/* Academic Section */}
          <div className="relative">
             <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <FaGraduationCap size={32} />
                </div>
                <h2 className="text-3xl font-bold">{dict.education.title}</h2>
             </div>

            <div className="grid gap-8">
              {dict.education.items.map((item, index) => (
                <EducationCard 
                  key={index} 
                  item={item} 
                  itemVariants={itemVariants} 
                />
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-4 mb-12">
                <div className="p-3 bg-secondary/20 rounded-xl text-secondary-foreground">
                    <FaCertificate size={28} />
                </div>
                <h2 className="text-3xl font-bold">Certifications</h2>
             </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dict.education.certifications.map((cert, index) => (
                  <motion.a 
                    key={index} 
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-md transition-all group"
                  >
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                    <div>
                        <h4 className="text-lg font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                            {cert.name}
                        </h4>
                        <p className="text-muted-foreground mb-4">{cert.issuer} • {cert.date}</p>
                        <div className="flex items-center gap-2 text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                           View Certificate
                           <FaExternalLinkAlt size={12} />
                        </div>
                    </div>
                  </motion.a>
                ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}