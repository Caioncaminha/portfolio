"use client";

import { useLanguage } from "@/context/language-context";
import { motion } from "framer-motion";
import { TechIcon } from "@/components/ui/tech-icon";

export function Skills() {
  const { dict } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-muted/30">
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
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-center text-primary">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill) => (
                  <div key={skill} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <TechIcon name={skill} className="w-5 h-5 text-primary/70" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
