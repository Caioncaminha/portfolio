import React from "react";
import { cn } from "@/lib/utils";
import { Counter } from "@/components/ui/counter";

interface RichTextProps {
  text: string;
  className?: string;
}

export function RichText({ text, className }: RichTextProps) {
  // Updated regex to allow commas and dots inside brackets: [[20,000]] or [[90.5]]
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`|__.*?__|\[\[[\d,.]+\]\])/g);

  return (
    <p className={cn("whitespace-pre-line leading-relaxed", className)}>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-bold text-foreground">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <em key={index} className="italic text-foreground/90">
              {part.slice(1, -1)}
            </em>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code
              key={index}
              className="bg-muted px-1 py-0.5 rounded text-sm font-mono text-primary"
            >
              {part.slice(1, -1)}
            </code>
          );
        }
        if (part.startsWith("__") && part.endsWith("__")) {
          return (
            <span key={index} className="underline underline-offset-4 decoration-primary/50">
              {part.slice(2, -2)}
            </span>
          );
        }
        if (part.startsWith("[[") && part.endsWith("]]")) {
            // Strip commas and dots before parsing the number
            const cleanNumber = part.slice(2, -2).replace(/,/g, '');
            const value = parseFloat(cleanNumber);
            
            if (isNaN(value)) return part;

            return (
                <Counter key={index} value={value} className="font-bold text-primary" />
            );
        }
        return part;
      })}
    </p>
  );
}
