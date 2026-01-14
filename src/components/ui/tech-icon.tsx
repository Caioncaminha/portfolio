import {
  SiPython,
  SiTypescript,
  SiPostgresql,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiPandas,
  SiMongodb,
  SiSupabase,
  SiNumpy,
  SiPostman,
  SiDbt,
} from "react-icons/si";
import {
  FaDatabase,
  FaCode,
  FaChartLine,
  FaUsers,
  FaProjectDiagram,
  FaRegFileExcel,
  FaChartBar,
} from "react-icons/fa";

export function TechIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const normalized = name.toLowerCase();

  const icons: Record<string, React.ElementType> = {
    python: SiPython,
    typescript: SiTypescript,
    postgresql: SiPostgresql,
    flutter: SiFlutter,
    dart: SiDart,
    firebase: SiFirebase,
    react: SiReact,
    "next.js": SiNextdotjs,
    tailwind: SiTailwindcss,
    docker: SiDocker,
    git: SiGit,
    pandas: SiPandas,
    mongodb: SiMongodb,
    supabase: SiSupabase,
    sql: FaDatabase,
    etl: FaDatabase,
    "data engineering": FaDatabase,
    "data analytics": FaChartLine,
    "team leadership": FaUsers,
    pipelines: FaProjectDiagram,
    "liderança de equipe": FaUsers, // PT support
    "engenharia de dados": FaDatabase, // PT support
    numpy: SiNumpy,
    postman: SiPostman,
    dbt: SiDbt,
    excel: FaRegFileExcel,
    "power bi": FaChartBar,
  };

  const Icon = icons[normalized] || FaCode;

  return <Icon className={className} />;
}
