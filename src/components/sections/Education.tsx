"use client";

import { useLanguage } from "@/context/language-context";
import { motion, Variants } from "framer-motion";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

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
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col gap-16 items-center"
        >
          {/* Academic Section */}
          <motion.div className="w-full text-center" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3">
              <FaGraduationCap className="text-primary w-8 h-8" />
              {dict.education.title}
            </h2>
            <div className="space-y-6">
              {dict.education.items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Subtle decorative gradient */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary group-hover:w-2 transition-all duration-300" />
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{item.degree}</h3>
                  <p className="text-xl text-foreground font-medium mb-1">{item.institution}</p>
                  <p className="text-muted-foreground text-sm mb-4 inline-block px-3 py-1 rounded-full bg-secondary/50">{item.graduation}</p>
                  <p className="text-muted-foreground leading-relaxed">{item.status}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div className="w-full text-center" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3">
              <FaCertificate className="text-primary w-6 h-6" />
              Certifications
            </h2>
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 max-w-2xl mx-auto">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {dict.education.certifications.map((cert, index) => (
                  <motion.li 
                    key={index} 
                    variants={itemVariants}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/30 transition-colors"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                    <span className="text-lg font-medium">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}