// src/types/content.ts

export interface LocalizedField {
  en: string;
  pt: string;
}

export interface SkillItem {
  name: string;
  url?: string;
}

export interface SkillCategory {
  name: LocalizedField;
  items: SkillItem[];
}

export interface Job {
  company: string;
  period: string;
  url?: string;
  logo?: string;
  location: LocalizedField;
  role: LocalizedField;
  description: LocalizedField;
  skills: string[];
}

export interface Project {
  slug: string;
  title: LocalizedField;
  description: LocalizedField;
  fullDescription: { en: string[]; pt: string[] };
  features: { en: string[]; pt: string[] };
  coverImage?: string;
  gallery?: string[];
  tech: string[];
  github?: string | null;
  link?: string | null;
}

export interface EducationItem {
  institution: string;
  url: string;
  logo: string;
  degree: LocalizedField;
  status: LocalizedField;
  graduation: LocalizedField;
  description: LocalizedField;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export interface RawContent {
  nav: {
    about: LocalizedField;
    experience: LocalizedField;
    projects: LocalizedField;
    education: LocalizedField;
    contact: LocalizedField;
  };
  hero: {
    role: LocalizedField;
    cta: LocalizedField;
    downloadCv: LocalizedField;
    photo: string;
    cvPath: { en: string; pt: string };
  };
  about: {
    title: LocalizedField;
    summary: LocalizedField;
  };
  skills: {
    title: LocalizedField;
    categories: SkillCategory[];
  };
  experience: {
    title: LocalizedField;
    jobs: Job[];
  };
  projects: {
    title: LocalizedField;
    viewMore: LocalizedField;
    viewLess: LocalizedField;
    backToProjects: LocalizedField;
    overview: LocalizedField;
    keyFeatures: LocalizedField;
    gallery: LocalizedField;
    techStack: LocalizedField;
    liveDemo: LocalizedField;
    items: Project[];
  };
  education: {
    title: LocalizedField;
    items: EducationItem[];
    certifications: Certification[];
  };
  contact: {
    title: LocalizedField;
    send: LocalizedField;
    availability: LocalizedField;
    email: string;
    linkedin: string;
    github: string;
  };
}
