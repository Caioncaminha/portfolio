"use client";

import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { TechIcon } from "@/components/ui/tech-icon";

export function Skills() {
  const { dict } = useLanguage();

  return (
    <section id="skills" className="py-32 bg-muted/30 min-h-[40vh] flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          {dict.skills.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dict.skills.categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors h-full"
            >
              <h3 className="text-xl font-bold mb-8 text-center text-primary">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill) => (
                  <motion.a 
                    key={skill.name} 
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all group p-3 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/20"
                  >
                    <TechIcon 
                      name={skill.name} 
                      className="w-6 h-6 text-primary/70 group-hover:text-primary transition-colors" 
                    />
                    <span className="text-sm font-semibold tracking-wide">{skill.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
