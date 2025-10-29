import React from "react";
import { FaGitAlt, FaDatabase, FaFileExcel, FaChartBar } from "react-icons/fa";
import {
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiMongodb,
  SiPython,
  SiSqlite,
} from "react-icons/si";
import { IoBusiness, IoStatsChart } from "react-icons/io5";
import { DiFirebase } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";

interface SkillIconProps {
  name: string;
}

const iconMap: Record<string, React.JSX.Element> = {
  Python: <SiPython />,
  SQLite: <SiSqlite />,
  SQL: <BsFiletypeSql />,
  NoSQL: <FaDatabase />,
  "Cloud Firestore": <DiFirebase />,
  MongoDB: <SiMongodb />,
  Pandas: <SiPandas />,
  NumPy: <SiNumpy />,
  Matplotlib: <IoStatsChart />,
  Seaborn: <FaChartBar />,
  Jupyter: <SiJupyter />,
  "Power BI": <IoBusiness />,
  Excel: <FaFileExcel />,
  Git: <FaGitAlt />,
};

export const SkillIcon: React.FC<SkillIconProps> = ({ name }) => {
  const icon = iconMap[name] || <GrTechnology />;

  return (
    <span className="skill-item">
      {icon}
      {name}
    </span>
  );
};
