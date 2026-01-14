"use client";

import { useLanguage } from "@/context/language-context";
import { motion, Variants } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

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
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-primary/10" />
                  
                  <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
                     {/* Logo */}
                     {item.logo && (
                        <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-sm border border-border shrink-0 flex items-center justify-center overflow-hidden">
                             <Image 
                                src={item.logo} 
                                alt={item.institution} 
                                width={64} 
                                height={64} 
                                className="object-contain"
                             />
                        </div>
                     )}

                     <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                             <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{item.institution}</h3>
                             <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border whitespace-nowrap mt-2 md:mt-0 w-fit">
                                {item.graduation}
                             </span>
                        </div>
                        <p className="text-xl font-medium text-foreground/90 mb-4">{item.degree}</p>
                        
                        <div className="space-y-2">
                            <p className="text-primary font-medium">{item.status}</p>
                            {item.description && (
                                <p className="text-muted-foreground leading-relaxed max-w-3xl">
                                    {item.description}
                                </p>
                            )}
                        </div>
                     </div>
                  </div>
                </motion.div>
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
                            <FaExternalLinkAlt size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
                        </h4>
                        <p className="text-muted-foreground">{cert.issuer} • {cert.date}</p>
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