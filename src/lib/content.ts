import type { RawContent } from "@/types/content";

type Lang = "en" | "pt";

function l(field: { en: string; pt: string }, lang: Lang): string {
  return field[lang];
}

export function getDict(raw: RawContent, lang: Lang) {
  return {
    nav: {
      about:      l(raw.nav.about, lang),
      experience: l(raw.nav.experience, lang),
      projects:   l(raw.nav.projects, lang),
      education:  l(raw.nav.education, lang),
      contact:    l(raw.nav.contact, lang),
    },
    hero: {
      role:       l(raw.hero.role, lang),
      cta:        l(raw.hero.cta, lang),
      downloadCv: l(raw.hero.downloadCv, lang),
      photo:      raw.hero.photo,
      cvPath:     raw.hero.cvPath[lang],
    },
    about: {
      title:   l(raw.about.title, lang),
      summary: l(raw.about.summary, lang),
    },
    skills: {
      title: l(raw.skills.title, lang),
      categories: raw.skills.categories.map((cat) => ({
        name:  l(cat.name, lang),
        items: cat.items,
      })),
    },
    experience: {
      title: l(raw.experience.title, lang),
      jobs: raw.experience.jobs.map((job) => ({
        company:     job.company,
        period:      job.period,
        url:         job.url,
        logo:        job.logo,
        location:    l(job.location, lang),
        role:        l(job.role, lang),
        description: l(job.description, lang),
        skills:      job.skills,
      })),
    },
    projects: {
      title:          l(raw.projects.title, lang),
      viewMore:       l(raw.projects.viewMore, lang),
      viewLess:       l(raw.projects.viewLess, lang),
      backToProjects: l(raw.projects.backToProjects, lang),
      overview:       l(raw.projects.overview, lang),
      keyFeatures:    l(raw.projects.keyFeatures, lang),
      gallery:        l(raw.projects.gallery, lang),
      techStack:      l(raw.projects.techStack, lang),
      liveDemo:       l(raw.projects.liveDemo, lang),
      items: raw.projects.items.map((p) => ({
        slug:            p.slug,
        title:           l(p.title, lang),
        description:     l(p.description, lang),
        fullDescription: p.fullDescription[lang],
        features:        p.features[lang],
        coverImage:      p.coverImage,
        gallery:         p.gallery,
        tech:            p.tech,
        github:          p.github ?? undefined,
        link:            p.link ?? undefined,
      })),
    },
    education: {
      title: l(raw.education.title, lang),
      items: raw.education.items.map((item) => ({
        institution: item.institution,
        url:         item.url,
        logo:        item.logo,
        degree:      l(item.degree, lang),
        status:      l(item.status, lang),
        graduation:  l(item.graduation, lang),
        description: l(item.description, lang),
      })),
      certifications: raw.education.certifications,
    },
    contact: {
      title:        l(raw.contact.title, lang),
      send:         l(raw.contact.send, lang),
      availability: l(raw.contact.availability, lang),
      email:        raw.contact.email,
      linkedin:     raw.contact.linkedin,
      github:       raw.contact.github,
    },
  };
}

export type Dictionary = ReturnType<typeof getDict>;
