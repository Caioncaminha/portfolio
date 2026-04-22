"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";
import type { RawContent, Job, Project, EducationItem, Certification, SkillCategory, SkillItem } from "@/types/content";

// ─── helpers ────────────────────────────────────────────────────────────────

function Field({ label, value, onChange, rows = 1 }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  const cls = "w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary";
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{label}</span>
      {rows > 1
        ? <textarea className={cls} rows={rows} value={value} onChange={(e) => onChange(e.target.value)} />
        : <input className={cls} value={value} onChange={(e) => onChange(e.target.value)} />
      }
    </label>
  );
}

function BiField({ label, en, pt, onChangeEn, onChangePt, rows = 1 }: {
  label: string;
  en: string;
  pt: string;
  onChangeEn: (v: string) => void;
  onChangePt: (v: string) => void;
  rows?: number;
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide">{label}</p>
      <div className="grid grid-cols-2 gap-4">
        <Field label="EN" value={en} onChange={onChangeEn} rows={rows} />
        <Field label="PT" value={pt} onChange={onChangePt} rows={rows} />
      </div>
    </div>
  );
}

// ─── section editors ─────────────────────────────────────────────────────────

function HeroEditor({ data, onChange }: { data: RawContent["hero"]; onChange: (d: RawContent["hero"]) => void }) {
  const set = (patch: Partial<RawContent["hero"]>) => onChange({ ...data, ...patch });
  return (
    <div className="space-y-6">
      <BiField label="Role" en={data.role.en} pt={data.role.pt}
        onChangeEn={(v) => set({ role: { ...data.role, en: v } })}
        onChangePt={(v) => set({ role: { ...data.role, pt: v } })} rows={2} />
      <BiField label="CTA Button" en={data.cta.en} pt={data.cta.pt}
        onChangeEn={(v) => set({ cta: { ...data.cta, en: v } })}
        onChangePt={(v) => set({ cta: { ...data.cta, pt: v } })} />
      <BiField label="Download CV Button" en={data.downloadCv.en} pt={data.downloadCv.pt}
        onChangeEn={(v) => set({ downloadCv: { ...data.downloadCv, en: v } })}
        onChangePt={(v) => set({ downloadCv: { ...data.downloadCv, pt: v } })} />
      <div className="grid grid-cols-2 gap-4">
        <Field label="CV Path EN" value={data.cvPath.en} onChange={(v) => set({ cvPath: { ...data.cvPath, en: v } })} />
        <Field label="CV Path PT" value={data.cvPath.pt} onChange={(v) => set({ cvPath: { ...data.cvPath, pt: v } })} />
      </div>
      <Field label="Photo Path" value={data.photo} onChange={(v) => set({ photo: v })} />
    </div>
  );
}

function AboutEditor({ data, onChange }: { data: RawContent["about"]; onChange: (d: RawContent["about"]) => void }) {
  return (
    <div className="space-y-6">
      <BiField label="Title" en={data.title.en} pt={data.title.pt}
        onChangeEn={(v) => onChange({ ...data, title: { ...data.title, en: v } })}
        onChangePt={(v) => onChange({ ...data, title: { ...data.title, pt: v } })} />
      <BiField label="Summary" en={data.summary.en} pt={data.summary.pt}
        onChangeEn={(v) => onChange({ ...data, summary: { ...data.summary, en: v } })}
        onChangePt={(v) => onChange({ ...data, summary: { ...data.summary, pt: v } })}
        rows={6} />
    </div>
  );
}

function SkillsEditor({ data, onChange }: { data: RawContent["skills"]; onChange: (d: RawContent["skills"]) => void }) {
  const updateCat = (i: number, cat: SkillCategory) => {
    const cats = [...data.categories];
    cats[i] = cat;
    onChange({ ...data, categories: cats });
  };
  const addItem = (i: number) => {
    const cats = [...data.categories];
    cats[i] = { ...cats[i], items: [...cats[i].items, { name: "", url: "" }] };
    onChange({ ...data, categories: cats });
  };
  const removeItem = (ci: number, ii: number) => {
    const cats = [...data.categories];
    cats[ci] = { ...cats[ci], items: cats[ci].items.filter((_, idx) => idx !== ii) };
    onChange({ ...data, categories: cats });
  };
  const updateItem = (ci: number, ii: number, item: SkillItem) => {
    const cats = [...data.categories];
    const items = [...cats[ci].items];
    items[ii] = item;
    cats[ci] = { ...cats[ci], items };
    onChange({ ...data, categories: cats });
  };

  return (
    <div className="space-y-8">
      {data.categories.map((cat, ci) => (
        <div key={ci} className="border border-border rounded-lg p-4 space-y-4">
          <BiField label={`Category ${ci + 1} Name`} en={cat.name.en} pt={cat.name.pt}
            onChangeEn={(v) => updateCat(ci, { ...cat, name: { ...cat.name, en: v } })}
            onChangePt={(v) => updateCat(ci, { ...cat, name: { ...cat.name, pt: v } })} />
          <p className="text-xs font-bold text-muted-foreground uppercase">Skills</p>
          {cat.items.map((item, ii) => (
            <div key={ii} className="grid grid-cols-[1fr_1fr_auto] gap-2 items-end">
              <Field label="Name" value={item.name} onChange={(v) => updateItem(ci, ii, { ...item, name: v })} />
              <Field label="URL (optional)" value={item.url ?? ""} onChange={(v) => updateItem(ci, ii, { ...item, url: v || undefined })} />
              <button onClick={() => removeItem(ci, ii)} className="px-3 py-2 text-sm bg-red-500/10 text-red-500 rounded-md hover:bg-red-500/20 mb-0.5">✕</button>
            </div>
          ))}
          <button onClick={() => addItem(ci)} className="text-sm text-primary hover:underline">+ Add Skill</button>
        </div>
      ))}
    </div>
  );
}

function ExperienceEditor({ data, onChange }: { data: RawContent["experience"]; onChange: (d: RawContent["experience"]) => void }) {
  const updateJob = (i: number, job: Job) => {
    const jobs = [...data.jobs];
    jobs[i] = job;
    onChange({ ...data, jobs });
  };
  const addJob = () => onChange({ ...data, jobs: [...data.jobs, {
    company: "", period: "", url: "", logo: "",
    location: { en: "", pt: "" }, role: { en: "", pt: "" },
    description: { en: "", pt: "" }, skills: []
  }] });
  const removeJob = (i: number) => onChange({ ...data, jobs: data.jobs.filter((_, idx) => idx !== i) });

  return (
    <div className="space-y-8">
      {data.jobs.map((job, i) => (
        <div key={i} className="border border-border rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">{job.company || `Job ${i + 1}`}</h3>
            <button onClick={() => removeJob(i)} className="text-sm text-red-500 hover:underline">Remove</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Company" value={job.company} onChange={(v) => updateJob(i, { ...job, company: v })} />
            <Field label="Period" value={job.period} onChange={(v) => updateJob(i, { ...job, period: v })} />
            <Field label="URL" value={job.url ?? ""} onChange={(v) => updateJob(i, { ...job, url: v })} />
            <Field label="Logo Path" value={job.logo ?? ""} onChange={(v) => updateJob(i, { ...job, logo: v })} />
          </div>
          <BiField label="Location" en={job.location.en} pt={job.location.pt}
            onChangeEn={(v) => updateJob(i, { ...job, location: { ...job.location, en: v } })}
            onChangePt={(v) => updateJob(i, { ...job, location: { ...job.location, pt: v } })} />
          <BiField label="Role" en={job.role.en} pt={job.role.pt}
            onChangeEn={(v) => updateJob(i, { ...job, role: { ...job.role, en: v } })}
            onChangePt={(v) => updateJob(i, { ...job, role: { ...job.role, pt: v } })} />
          <BiField label="Description (supports **bold**, __underline__, [[number]], [link](url))"
            en={job.description.en} pt={job.description.pt}
            onChangeEn={(v) => updateJob(i, { ...job, description: { ...job.description, en: v } })}
            onChangePt={(v) => updateJob(i, { ...job, description: { ...job.description, pt: v } })}
            rows={10} />
          <Field label="Skills (comma-separated)" value={job.skills.join(", ")}
            onChange={(v) => updateJob(i, { ...job, skills: v.split(",").map((s) => s.trim()).filter(Boolean) })} />
        </div>
      ))}
      <button onClick={addJob} className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm">+ Add Job</button>
    </div>
  );
}

function ProjectsEditor({ data, onChange }: { data: RawContent["projects"]; onChange: (d: RawContent["projects"]) => void }) {
  const updateItem = (i: number, p: Project) => {
    const items = [...data.items];
    items[i] = p;
    onChange({ ...data, items });
  };
  const addProject = () => onChange({ ...data, items: [...data.items, {
    slug: "", title: { en: "", pt: "" }, description: { en: "", pt: "" },
    fullDescription: { en: [""], pt: [""] }, features: { en: [""], pt: [""] },
    coverImage: "", gallery: [], tech: [], github: null, link: null
  }] });
  const removeProject = (i: number) => onChange({ ...data, items: data.items.filter((_, idx) => idx !== i) });

  return (
    <div className="space-y-8">
      {data.items.map((p, i) => (
        <div key={i} className="border border-border rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">{p.title.en || `Project ${i + 1}`}</h3>
            <button onClick={() => removeProject(i)} className="text-sm text-red-500 hover:underline">Remove</button>
          </div>
          <Field label="Slug (URL identifier)" value={p.slug} onChange={(v) => updateItem(i, { ...p, slug: v })} />
          <BiField label="Title" en={p.title.en} pt={p.title.pt}
            onChangeEn={(v) => updateItem(i, { ...p, title: { ...p.title, en: v } })}
            onChangePt={(v) => updateItem(i, { ...p, title: { ...p.title, pt: v } })} />
          <BiField label="Short Description" en={p.description.en} pt={p.description.pt}
            onChangeEn={(v) => updateItem(i, { ...p, description: { ...p.description, en: v } })}
            onChangePt={(v) => updateItem(i, { ...p, description: { ...p.description, pt: v } })}
            rows={3} />
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Full Description (one paragraph per line)</p>
            <div className="grid grid-cols-2 gap-4">
              <Field label="EN" value={p.fullDescription.en.join("\n")} rows={8}
                onChange={(v) => updateItem(i, { ...p, fullDescription: { ...p.fullDescription, en: v.split("\n").filter(Boolean) } })} />
              <Field label="PT" value={p.fullDescription.pt.join("\n")} rows={8}
                onChange={(v) => updateItem(i, { ...p, fullDescription: { ...p.fullDescription, pt: v.split("\n").filter(Boolean) } })} />
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-muted-foreground uppercase mb-2">Features (one per line)</p>
            <div className="grid grid-cols-2 gap-4">
              <Field label="EN" value={p.features.en.join("\n")} rows={5}
                onChange={(v) => updateItem(i, { ...p, features: { ...p.features, en: v.split("\n").filter(Boolean) } })} />
              <Field label="PT" value={p.features.pt.join("\n")} rows={5}
                onChange={(v) => updateItem(i, { ...p, features: { ...p.features, pt: v.split("\n").filter(Boolean) } })} />
            </div>
          </div>
          <Field label="Cover Image Path" value={p.coverImage ?? ""} onChange={(v) => updateItem(i, { ...p, coverImage: v })} />
          <Field label="Gallery (comma-separated paths)" value={(p.gallery ?? []).join(", ")}
            onChange={(v) => updateItem(i, { ...p, gallery: v.split(",").map((s) => s.trim()).filter(Boolean) })} />
          <Field label="Tech Stack (comma-separated)" value={p.tech.join(", ")}
            onChange={(v) => updateItem(i, { ...p, tech: v.split(",").map((s) => s.trim()).filter(Boolean) })} />
          <div className="grid grid-cols-2 gap-4">
            <Field label="GitHub URL (optional)" value={p.github ?? ""} onChange={(v) => updateItem(i, { ...p, github: v || null })} />
            <Field label="Live Link (optional)" value={p.link ?? ""} onChange={(v) => updateItem(i, { ...p, link: v || null })} />
          </div>
        </div>
      ))}
      <button onClick={addProject} className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm">+ Add Project</button>
    </div>
  );
}

function EducationEditor({ data, onChange }: { data: RawContent["education"]; onChange: (d: RawContent["education"]) => void }) {
  const updateItem = (i: number, item: EducationItem) => {
    const items = [...data.items];
    items[i] = item;
    onChange({ ...data, items });
  };
  const updateCert = (i: number, cert: Certification) => {
    const certifications = [...data.certifications];
    certifications[i] = cert;
    onChange({ ...data, certifications });
  };
  const addCert = () => onChange({ ...data, certifications: [...data.certifications, { name: "", issuer: "", date: "", url: "" }] });
  const removeCert = (i: number) => onChange({ ...data, certifications: data.certifications.filter((_, idx) => idx !== i) });

  return (
    <div className="space-y-8">
      <h3 className="font-bold text-lg">Institutions</h3>
      {data.items.map((item, i) => (
        <div key={i} className="border border-border rounded-lg p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Field label="Institution" value={item.institution} onChange={(v) => updateItem(i, { ...item, institution: v })} />
            <Field label="URL" value={item.url} onChange={(v) => updateItem(i, { ...item, url: v })} />
            <Field label="Logo Path" value={item.logo} onChange={(v) => updateItem(i, { ...item, logo: v })} />
          </div>
          <BiField label="Degree" en={item.degree.en} pt={item.degree.pt}
            onChangeEn={(v) => updateItem(i, { ...item, degree: { ...item.degree, en: v } })}
            onChangePt={(v) => updateItem(i, { ...item, degree: { ...item.degree, pt: v } })} />
          <BiField label="Status" en={item.status.en} pt={item.status.pt}
            onChangeEn={(v) => updateItem(i, { ...item, status: { ...item.status, en: v } })}
            onChangePt={(v) => updateItem(i, { ...item, status: { ...item.status, pt: v } })} />
          <BiField label="Graduation" en={item.graduation.en} pt={item.graduation.pt}
            onChangeEn={(v) => updateItem(i, { ...item, graduation: { ...item.graduation, en: v } })}
            onChangePt={(v) => updateItem(i, { ...item, graduation: { ...item.graduation, pt: v } })} />
          <BiField label="Description" en={item.description.en} pt={item.description.pt}
            onChangeEn={(v) => updateItem(i, { ...item, description: { ...item.description, en: v } })}
            onChangePt={(v) => updateItem(i, { ...item, description: { ...item.description, pt: v } })}
            rows={3} />
        </div>
      ))}

      <h3 className="font-bold text-lg">Certifications</h3>
      {data.certifications.map((cert, i) => (
        <div key={i} className="border border-border rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">{cert.name || `Cert ${i + 1}`}</span>
            <button onClick={() => removeCert(i)} className="text-sm text-red-500 hover:underline">Remove</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Name" value={cert.name} onChange={(v) => updateCert(i, { ...cert, name: v })} />
            <Field label="Issuer" value={cert.issuer} onChange={(v) => updateCert(i, { ...cert, issuer: v })} />
            <Field label="Date" value={cert.date} onChange={(v) => updateCert(i, { ...cert, date: v })} />
            <Field label="URL" value={cert.url} onChange={(v) => updateCert(i, { ...cert, url: v })} />
          </div>
        </div>
      ))}
      <button onClick={addCert} className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm">+ Add Certification</button>
    </div>
  );
}

function ContactEditor({ data, onChange }: { data: RawContent["contact"]; onChange: (d: RawContent["contact"]) => void }) {
  return (
    <div className="space-y-6">
      <BiField label="Section Title" en={data.title.en} pt={data.title.pt}
        onChangeEn={(v) => onChange({ ...data, title: { ...data.title, en: v } })}
        onChangePt={(v) => onChange({ ...data, title: { ...data.title, pt: v } })} />
      <BiField label="Availability Text" en={data.availability.en} pt={data.availability.pt}
        onChangeEn={(v) => onChange({ ...data, availability: { ...data.availability, en: v } })}
        onChangePt={(v) => onChange({ ...data, availability: { ...data.availability, pt: v } })}
        rows={4} />
      <BiField label="Send Button" en={data.send.en} pt={data.send.pt}
        onChangeEn={(v) => onChange({ ...data, send: { ...data.send, en: v } })}
        onChangePt={(v) => onChange({ ...data, send: { ...data.send, pt: v } })} />
      <Field label="Email" value={data.email} onChange={(v) => onChange({ ...data, email: v })} />
      <Field label="LinkedIn URL" value={data.linkedin} onChange={(v) => onChange({ ...data, linkedin: v })} />
      <Field label="GitHub URL" value={data.github} onChange={(v) => onChange({ ...data, github: v })} />
    </div>
  );
}

// ─── main page ───────────────────────────────────────────────────────────────

const TABS = ["Hero", "About", "Skills", "Experience", "Projects", "Education", "Contact"] as const;
type Tab = typeof TABS[number];

export default function AdminPage() {
  const { raw } = useLanguage();
  const [allowed, setAllowed] = useState(false);
  const [content, setContent] = useState<RawContent>(raw);
  const [tab, setTab] = useState<Tab>("Hero");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  useEffect(() => {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      setAllowed(true);
    }
  }, []);

  if (!allowed) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4 text-center p-8">
        <h1 className="text-2xl font-bold">Admin panel only available on localhost</h1>
        <p className="text-muted-foreground">Run <code className="bg-muted px-2 py-1 rounded text-sm">npm run dev</code> and open this page at http://localhost:3000/admin</p>
      </div>
    );
  }

  const save = async () => {
    setStatus("saving");
    try {
      const res = await fetch("/api/admin/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      if (!res.ok) throw new Error("Save failed");
      setStatus("saved");
      setTimeout(() => {
        window.location.reload();
      }, 800);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Content Admin</h1>
            <p className="text-muted-foreground text-sm mt-1">Edit portfolio content. EN and PT side by side. Save reloads the page.</p>
          </div>
          <button
            onClick={save}
            disabled={status === "saving"}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all disabled:opacity-50 min-w-[120px]"
          >
            {status === "saving" ? "Saving…" : status === "saved" ? "Saved!" : status === "error" ? "Error!" : "Save"}
          </button>
        </div>

        <div className="flex gap-2 flex-wrap mb-8 border-b border-border pb-4">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-6">
          {tab === "Hero"       && <HeroEditor       data={content.hero}       onChange={(d) => setContent({ ...content, hero: d })} />}
          {tab === "About"      && <AboutEditor      data={content.about}      onChange={(d) => setContent({ ...content, about: d })} />}
          {tab === "Skills"     && <SkillsEditor     data={content.skills}     onChange={(d) => setContent({ ...content, skills: d })} />}
          {tab === "Experience" && <ExperienceEditor data={content.experience} onChange={(d) => setContent({ ...content, experience: d })} />}
          {tab === "Projects"   && <ProjectsEditor   data={content.projects}   onChange={(d) => setContent({ ...content, projects: d })} />}
          {tab === "Education"  && <EducationEditor  data={content.education}  onChange={(d) => setContent({ ...content, education: d })} />}
          {tab === "Contact"    && <ContactEditor    data={content.contact}    onChange={(d) => setContent({ ...content, contact: d })} />}
        </div>
      </div>
    </div>
  );
}
