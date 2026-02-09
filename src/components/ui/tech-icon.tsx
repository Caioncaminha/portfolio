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
  SiDbt,
  SiDbeaver,
} from "react-icons/si";
import {
  FaDatabase,
  FaCode,
  FaChartLine,
  FaUsers,
  FaProjectDiagram,
  FaRegFileExcel,
  FaChartBar,
  FaStar,
} from "react-icons/fa";
import { BsDatabaseFillGear, BsGear } from "react-icons/bs";
import { PiUserCircleGearLight } from "react-icons/pi";
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
    tailwind: SiTailwindcss,
    docker: SiDocker,
    git: SiGit,
    pandas: SiPandas,
    mongodb: SiMongodb,
    supabase: SiSupabase,
    dbeaver: SiDbeaver,
    sql: FaDatabase,
    pyspark: FaStar,
    etl: FaDatabase,
    excel: FaRegFileExcel,
    pipelines: FaProjectDiagram,
    numpy: SiNumpy,
    dbt: SiDbt,
    "team leadership": FaUsers,
    "data analytics": FaChartLine,
    "data engineering": FaDatabase,
    "next.js": SiNextdotjs,
    "power bi": FaChartBar,
    "api rest": BsDatabaseFillGear,
    "ai integration": BsGear,
    "prompt engineering": BsGear,
    "ai agents": PiUserCircleGearLight,
    "análise de dados": FaChartLine, // PT support
    "engenharia de dados": FaDatabase, // PT support
    "liderança de equipe": FaUsers, // PT support
    "agentes de ia": PiUserCircleGearLight, // PT support
    "integração de ia": BsGear, // PT support
    "engenharia de prompt": BsGear, // PT support
  };

  const Icon = icons[normalized] || FaCode;

  return <Icon className={className} />;
}
