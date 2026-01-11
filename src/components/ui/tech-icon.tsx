import { 
  SiPython, SiTypescript, SiPostgresql, SiFlutter, SiDart, SiFirebase, 
  SiReact, SiNextdotjs, SiTailwindcss, SiDocker, SiGit, SiPandas, SiMongodb, SiSupabase
} from "react-icons/si";
import { FaDatabase, FaCode } from "react-icons/fa";

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const normalized = name.toLowerCase();
  
  const icons: Record<string, React.ElementType> = {
    "python": SiPython,
    "typescript": SiTypescript,
    "postgresql": SiPostgresql,
    "flutter": SiFlutter,
    "dart": SiDart,
    "firebase": SiFirebase,
    "react": SiReact,
    "next.js": SiNextdotjs,
    "tailwind": SiTailwindcss,
    "docker": SiDocker,
    "git": SiGit,
    "pandas": SiPandas,
    "mongodb": SiMongodb,
    "supabase": SiSupabase,
    "sql": FaDatabase,
    "etl": FaDatabase,
    "data engineering": FaDatabase,
  };

  const Icon = icons[normalized] || FaCode;

  return <Icon className={className} />;
}
