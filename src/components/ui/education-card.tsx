"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface EducationItem {
  institution: string;
  url?: string;
  graduation: string;
  degree: string;
  status: string;
  description?: string;
  logo?: string;
}

interface EducationCardProps {
  item: EducationItem;
  itemVariants: Variants;
}

export function EducationCard({ item, itemVariants }: EducationCardProps) {
  return (
    <motion.div
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
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold hover:text-primary transition-colors block w-fit"
              >
                {item.institution}
              </a>
            ) : (
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                {item.institution}
              </h3>
            )}
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border whitespace-nowrap mt-2 md:mt-0 w-fit">
              {item.graduation}
            </span>
          </div>
          <p className="text-xl font-medium text-foreground/90 mb-4">
            {item.degree}
          </p>

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
  );
}
