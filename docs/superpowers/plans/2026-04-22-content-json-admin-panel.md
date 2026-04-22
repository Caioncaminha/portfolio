# Content JSON + Admin Panel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate all portfolio content from hardcoded `dictionaries.ts` to a bilingual `content.json`, then build a localhost-only admin UI to edit it without touching code.

**Architecture:** Content lives in `content.json` at the project root with EN/PT side-by-side per field. A `getDict(lang)` transformer converts it to the existing `Dictionary` shape so zero component code changes. The admin panel lives at `/admin`, is guarded by a hostname check (localhost only), and POSTs to `/api/admin/save` which writes back to `content.json`.

**Tech Stack:** Next.js 16, React 19, TypeScript, `fs` (Node.js API routes), existing Tailwind + globals.css tokens.

---

## File Map

**Create:**
- `content.json` — bilingual content, EN/PT fields side by side. Single source of truth.
- `src/types/content.ts` — TypeScript types for `content.json` shape (`RawContent`, `LocalizedField`, etc.)
- `src/lib/content.ts` — `getDict(lang, raw)` transformer → existing `Dictionary` shape
- `src/app/api/admin/save/route.ts` — POST endpoint that writes `content.json`. Dev-only (returns 403 in production).
- `src/app/admin/page.tsx` — Admin UI. Hostname-guarded. Tabs per section. EN|PT side-by-side.

**Modify:**
- `src/context/language-context.tsx` — import from `src/lib/content.ts` instead of `dictionaries.ts`
- `src/app/projects/[slug]/page.tsx` — fix hardcoded "Back to Projects" (i18n + add to content.json)
- `src/components/sections/Contact.tsx` — remove inline bilingual ternary, use `dict.contact.availability`

**Delete:**
- `src/data/dictionaries.ts` — replaced by `content.json` + `src/lib/content.ts`

---

## Task 1: Create `content.json`

**Files:**
- Create: `content.json` (project root)

- [ ] **Step 1: Create the file with the full bilingual content**

```json
{
  "nav": {
    "about":      { "en": "About",      "pt": "Sobre" },
    "experience": { "en": "Experience", "pt": "Experiência" },
    "projects":   { "en": "Projects",   "pt": "Projetos" },
    "education":  { "en": "Education",  "pt": "Educação" },
    "contact":    { "en": "Contact Me", "pt": "Contato" }
  },
  "hero": {
    "role":       { "en": "Software Engineering Student | Specializing in Data Engineering", "pt": "Estudante de Engenharia de Software | Especializando em Engenharia de Dados" },
    "cta":        { "en": "Contact Me", "pt": "Contato" },
    "downloadCv": { "en": "Download CV", "pt": "Currículo" },
    "photo": "/images/hero/fotoldin.png",
    "cvPath": {
      "en": "/cv/en_curriculo_caio_nascimento_caminha.pdf",
      "pt": "/cv/pt_curriculo_caio_nascimento_caminha.pdf"
    }
  },
  "about": {
    "title":   { "en": "About Me", "pt": "Sobre Mim" },
    "summary": {
      "en": "Experienced leader and developer focused on Python, algorithms, and data structures. Proven track record in leading academic and corporate projects, notably the [Passa a Bola](/projects/passa-a-bola) and [Catálogo Unentel](/projects/unentel-catalog) initiatives. Currently serving as a Pre-Sales Intern and Lead Developer at Unentel Distribuição.\n        \n      Areas of interest (Internship and Junior): Data Engineering or related fields.",
      "pt": "Líder e desenvolvedor focado em Python, TypeScript, algoritmos e estruturas de dados. Histórico comprovado na liderança de projetos acadêmicos e corporativos, notadamente as iniciativas [Passa a Bola](/projects/passa-a-bola) e [Catálogo Unentel](/projects/unentel-catalog). Atuando como Estagiário em Pré-Vendas e Desenvolvedor na Unentel Distribuição.\n      \n        Áreas de interesse (Estágio e Júnior): Engenharia de Dados ou áreas correlatas."
    }
  },
  "skills": {
    "title": { "en": "Technical Skills", "pt": "Habilidades Técnicas" },
    "categories": [
      {
        "name": { "en": "Development", "pt": "Desenvolvimento" },
        "items": [
          { "name": "Python",   "url": "https://www.python.org/" },
          { "name": "Pandas",   "url": "https://pandas.pydata.org/" },
          { "name": "PySpark",  "url": "https://spark.apache.org/docs/latest/api/python/index.html" },
          { "name": "API Rest" }
        ]
      },
      {
        "name": { "en": "Databases", "pt": "Banco de Dados" },
        "items": [
          { "name": "PostgreSQL", "url": "https://www.postgresql.org/" },
          { "name": "Firebase",   "url": "https://firebase.google.com/" },
          { "name": "MongoDB",    "url": "https://www.mongodb.com/" },
          { "name": "Supabase",   "url": "https://supabase.com/" }
        ]
      },
      {
        "name": { "en": "Tools", "pt": "Ferramentas" },
        "items": [
          { "name": "Git",      "url": "https://git-scm.com/" },
          { "name": "Docker",   "url": "https://www.docker.com/" },
          { "name": "DBeaver",  "url": "https://dbeaver.io/" },
          { "name": "dbt",      "url": "https://www.getdbt.com/" },
          { "name": "Excel",    "url": "https://www.microsoft.com/en/microsoft-365" },
          { "name": "Power BI", "url": "https://www.microsoft.com/en/microsoft-365" }
        ]
      }
    ]
  },
  "experience": {
    "title": { "en": "Experience", "pt": "Experiência" },
    "jobs": [
      {
        "company":  "Unentel Distribuição",
        "period":   "Oct/2025 – Present",
        "url":      "https://unentel.com.br/",
        "logo":     "/images/experience/unentel_logo.png",
        "location": { "en": "São Paulo, SP (Hybrid)", "pt": "São Paulo, SP (Híbrido)" },
        "role":     { "en": "Pre-Sales & Lead Developer", "pt": "Pré-Vendas e Lead Developer" },
        "description": {
          "en": "Designed and deployed a [centralized data platform](/projects/unentel-catalog) consolidating [[20,000]]+ **SKUs** into a single source of truth, eliminating data fragmentation across sales operations.\n\n**- Data Engineering & ETL:** Architected robust **ETL** pipelines using **TypeScript** and **SQL** to ingest raw vendor data. Implemented **fuzzy entity resolution** and normalization logic in **PostgreSQL** to automatically deduplicate manufacturers and SKUs, ensuring **high data integrity**. Implemented **CI/CD (GitHub Actions, Vercel)**.\n\n**- Search Engine Optimization:** __Engineered a Hybrid Search system__ combining **Full-Text Search (FTS)** with **Trigram (pg_trgm)** similarity. __Implemented Synonym logic__. **Achieved sub-**[[200]]**ms response times on complex search queries**.\n\n**- Analytics & Telemetry:** Implemented a **telemetry pipeline** within the database, converting to a dashboard, to capture high-volume search logs and \"zero-result\" queries, __enabling data-driven decisions__ on catalog expansion and future trainings.\n\n**- Business Impact:** **Reduced BoMs preparation time by ~**[[90]]**%** when compared to manual spreadsheet processes and __increased quote accuracy by centralizing technical specifications__.\n\n**- AI and Agents:** **Zoom's AI and Virtual Agent training**, using **Prompt Engineering**, FAQ correlation, and documentation. Daily use of code assistants and agents (**Gemini CLI**, **Claude Code**, **MCP**) for **productivity increase**, achieving **feature delivery ~4x faster**, and facilitating/preventing manual work.",
          "pt": "Projetei e implementei uma [plataforma de dados centralizada](/projects/unentel-catalog) consolidando mais de [[20,000]] **SKUs** em uma única fonte de verdade, eliminando a fragmentação de dados nas operações de vendas.\n\n**- Engenharia de Dados e ETL:** Desenvolvi pipelines de **ETL** robustos usando **TypeScript** e **SQL** para ingerir dados brutos de fornecedores. Implementei **fuzzy entity resolution** e normalização em **PostgreSQL** para desduplicar automaticamente fabricantes e SKUs, garantindo **alta integridade de dados**. Implementei **CI/CD (GitHub Actions, Vercel)**.\n\n**- Otimização de Buscas:** __Desenvolvi um sistema de busca híbrido__ que combina **Full-Text Search (FTS)** com correspondência aproximada **(pg_trgm)**. __Implementei lógica de sinônimos__. Obtive **tempos de resposta abaixo de** [[200]]** ms** em consultas de busca complexas.\n\n**- Análise e Telemetria:** Implementei um **pipeline de telemetria** dentro do banco de dados, convertendo-o a um dashboard, para capturar logs de pesquisa de alto volume e consultas \"sem resultado\", __permitindo decisões baseadas em dados__ sobre expansão de catálogo e treinamentos futuros.\n\n**- Impacto nos Negócios:** **Reduzi o tempo de preparação de BoMs em cerca de ~**[[90]]**%** quando comparado a processos manuais de planilhas e __aumentei a precisão das cotações centralizando especificações técnicas__.\n\n**- IA e Agentes:** **Treinamento de IA e Agente Virtual da Zoom**, usando **Engenharia de Prompt**, correlação de FAQ e documentação. Uso diário de assistentes de código e agentes (**Gemini CLI**, **Claude Code**, **MCP**) para **aumento de produtividade**, alcançando **entrega de funcionalidades ~4x mais rápida**, e facilitando/prevenindo trabalho manual."
        },
        "skills": ["PostgreSQL", "TypeScript", "Supabase", "Pipelines", "Data Analytics", "AI Agents", "Data Engineering", "Prompt Engineering", "AI Integration", "SQL", "ETL"]
      },
      {
        "company":  "FIAP",
        "period":   "Mar/2025 – Oct/2025",
        "url":      "https://www.fiap.com.br/",
        "logo":     "/images/experience/fiap_logo.png",
        "location": { "en": "São Paulo, SP (Hybrid)", "pt": "São Paulo, SP (Híbrido)" },
        "role":     { "en": "Technical Leader (Academic Project)", "pt": "Líder Técnico (Projeto Acadêmico)" },
        "description": {
          "en": "**Technical lead** in the development of the MVP for [Passa a Bola](/projects/passa-a-bola), a cross-platform application built with **Flutter(Dart)** and integrated with **Firebase/Cloud Firestore**. The project aims to professionalize and bring visibility to the women's football ecosystem by connecting athletes, clubs, and fans on a single platform — featuring __secure authentication, real-time database management, and integration with match APIs__.\n\n**Main responsibilities:**\n- Data modeling in **Cloud Firestore** and application architecture.\n- Integration with a public API for automatic updates of matches and players.\n- Implementation of authentication using **Firebase Auth** and database security rules.\n- Leadership and organization of the team and project workflow.\n\n**Key indicators and results:**\n- **MVP delivered** with __full integration__ (Login/Sign-up, Homepage, Profile, Championships, Admin Panel, Geolocation, Cloud integration, and Multi-factor Authentication).\n- **Reduced up to **[[70]]**% of manual work** for clubs in data collection and consolidation (compared to spreadsheet-based processes) by automating ingestion and centralizing records.",
          "pt": "**Liderança técnica** do desenvolvimento do MVP do [Passa a Bola](/projects/passa-a-bola), um aplicativo multiplataforma construído com **Flutter (Dart)** e integrado com **Firebase/Cloud Firestore**. O projeto visa profissionalizar e trazer visibilidade ao ecossistema do futebol feminino conectando atletas, clubes e fãs em uma única plataforma — com __autenticação segura, gerenciamento de banco de dados em tempo real e integração com APIs de partidas__.\n\n            **Principais responsabilidades:**\n            - Modelagem de dados no **Cloud Firestore** e arquitetura da aplicação.\n            - Integração com API pública para atualizações automáticas de partidas e jogadores.\n            - Implementação de autenticação usando **Firebase Auth** e regras de segurança de banco de dados.\n            - Liderança e organização da equipe e fluxo de trabalho do projeto.\n\n            **Indicadores e resultados:**\n            - **MVP entregue** com __integração total__ (Login/Cadastro, Página Inicial, Perfil, Campeonatos, Painel Administrativo, Geolocalização, Integração em Nuvem e Autenticação Multifator).\n            - **Redução de até **[[70]]**% do trabalho manual** para clubes na coleta e consolidação de dados (comparado a processos baseados em planilhas) automatizando a ingestão e centralizando registros."
        },
        "skills": ["Flutter", "Dart", "Firebase", "Git", "Team Leadership"]
      }
    ]
  },
  "projects": {
    "title":    { "en": "Featured Projects",  "pt": "Projetos em Destaque" },
    "viewMore": { "en": "View More Projects", "pt": "Ver Mais Projetos" },
    "viewLess": { "en": "Show Less",          "pt": "Mostrar Menos" },
    "backToProjects": { "en": "Back to Projects", "pt": "Voltar aos Projetos" },
    "overview":       { "en": "Overview",         "pt": "Visão Geral" },
    "keyFeatures":    { "en": "Key Features",     "pt": "Funcionalidades" },
    "gallery":        { "en": "Gallery",          "pt": "Galeria" },
    "techStack":      { "en": "Tech Stack",       "pt": "Tecnologias" },
    "liveDemo":       { "en": "Live Demo",        "pt": "Demo ao Vivo" },
    "items": [
      {
        "slug": "unentel-catalog",
        "title":       { "en": "Centralized B2B Catalog Platform",  "pt": "Plataforma de Catálogo B2B Centralizada" },
        "description": { "en": "Data platform consolidating 20,000+ SKUs, eliminating data fragmentation for the sales and pre-sales teams.", "pt": "Plataforma de dados consolidando mais de 20,000 SKUs, eliminando a fragmentação de dados para as equipes de vendas e pré-vendas." },
        "fullDescription": {
          "en": [
            "At __Unentel Distribuição__, data fragmentation across various vendor spreadsheets was a major bottleneck for the sales and pre-sales teams. This project aimed to centralize over **20,000 SKUs** into a single, reliable source of truth.",
            "I designed and implemented a __robust data pipeline__ using **TypeScript** and **SQL** to extract, normalize, and deduplicate data. The backend relies on a highly optimized **PostgreSQL** database, utilizing __GIN indexes and fuzzy matching extensions__ to ensure search queries return results in **under 200ms**.",
            "Beyond performance, **data governance and analysis** was a key focus. I implemented __Row Level Security (RLS)__ to ensure sensitive information was only accessible to authorized personnel, in conjunction, used __pg_cron__ to automate scheduled tasks __(Vaccum/Clean)__.",
            "Additionally, I built a **telemetry pipeline** to capture high-volume search logs and zero-result queries, **enabling data-driven decisions** on catalog expansion and future trainings."
          ],
          "pt": [
            "Na __Unentel Distribuição__, a fragmentação de dados entre várias planilhas de fornecedores era um grande gargalo para as equipes de vendas e pré-vendas. Este projeto visava centralizar mais de **20,000 SKUs** em uma única fonte de verdade confiável.",
            "Projetei e implementei um __pipeline de dados robusto__ usando **TypeScript** e **SQL** para extrair, normalizar e desduplicar dados. O backend baseia-se em um banco de dados **PostgreSQL** altamente otimizado, utilizando __índices GIN e extensões de correspondência difusa__ para garantir que as consultas de pesquisa retornem resultados em **menos de 200ms**.",
            "Além do desempenho, **governança e análise de dados** foi um foco principal. Implementei __Row Level Security (RLS)__ para garantir que informações confidenciais de preços fossem acessíveis apenas a pessoal autorizado, em conjunto, utilizei __pg_cron__ para automatizar tarefas agendadas __(Vaccum/Clean)__.",
            "Adicionalmente, construí um **pipeline de telemetria** para capturar logs de pesquisa de alto volume e consultas sem resultados, **permitindo decisões baseadas em dados** sobre expansão de catálogo e treinamentos futuros."
          ]
        },
        "features": {
          "en": [
            "Consolidated 20,000+ SKUs.",
            "Sub-200ms search latency using GIN indexes and pg_trgm.",
            "Automated ETL pipelines for daily data updates.",
            "Role-based access control with RLS and Auth",
            "Telemetry pipeline capturing search logs for analytics.",
            "Reduced BoMs prep time by ~90% compared to manual processes."
          ],
          "pt": [
            "Consolidei mais de 20,000 SKUs.",
            "Latência de pesquisa inferior a 200ms usando índices GIN e pg_trgm.",
            "Pipelines ETL automatizados para atualizações diárias de dados.",
            "Controle de acesso baseado em função com RLS e Auth.",
            "Pipeline de telemetria capturando logs de pesquisa para análise.",
            "Redução do tempo de preparação de BoMs em ~90% comparado a processos manuais."
          ]
        },
        "coverImage": "/images/projects/unentel-catalog/covercatalog.png",
        "gallery": [
          "/images/projects/unentel-catalog/gallery1catalog.png",
          "/images/projects/unentel-catalog/gallery2catalog.png",
          "/images/projects/unentel-catalog/gallery3catalog.png",
          "/images/projects/unentel-catalog/gallery4catalog.png",
          "/images/projects/unentel-catalog/gallery5catalog.png",
          "/images/projects/unentel-catalog/gallery6catalog.png",
          "/images/projects/unentel-catalog/gallery7catalog.png"
        ],
        "tech": ["PostgreSQL", "TypeScript", "Supabase", "Pipelines", "Data Analytics", "Data Engineering", "SQL", "ETL"],
        "github": null,
        "link": null
      },
      {
        "slug": "passa-a-bola",
        "title":       { "en": "Passa a Bola", "pt": "Passa a Bola" },
        "description": { "en": "Cross-platform app to strengthen the women's soccer ecosystem. Reduced manual data collection for client and clubs by ~70%.", "pt": "Aplicativo multiplataforma para fortalecer o ecossistema do futebol feminino. Redução de ~70% na coleta manual de dados para clientes e clubes." },
        "fullDescription": {
          "en": [
            "Passa a Bola is a **mobile application** designed to bridge the gap in professionalism for women's soccer as a whole. It serves as a centralized hub for matches, player statistics, team management, among other things.",
            "Leading a team of students, I architected the solution using **Flutter** for a seamless cross-platform experience. The backend is built on **Firebase**, leveraging **Cloud Firestore** for **real-time data synchronization**.",
            "Some key achievements include: **Automating match updates** with a public sports **API**, **automating data ingestion** and **reducing by around ~70%** the manual workload for club managers and our primary client."
          ],
          "pt": [
            "Passa a Bola é um **aplicativo mobile** projetado para preencher a lacuna de profissionalismo no futebol feminino como um todo. Ele serve como um hub centralizado para jogos, estatísticas de jogadores, gerenciamento de equipes, entre outras coisas.",
            "Liderando uma equipe de estudantes, arquitetei a solução usando **Flutter** para uma experiência multiplataforma. O backend é construído no **Firebase**, aproveitando o **Cloud Firestore** para **sincronização de dados em tempo real**.",
            "Algumas conquistas foram: **Automatizar atualizações de partidas** com uma **API** pública de esportes, **automatizar ingestão de dados** e **reduzir em cerca de ~70%** a carga de trabalho manual para gerentes de clubes e nosso cliente principal."
          ]
        },
        "features": {
          "en": [
            "Full control of matches, teams, clubs and players through the admin panel.",
            "Cross-platform support (iOS & Android) with Flutter.",
            "Secure authentication via Firebase Auth.",
            "Scalable NoSQL data structure on Cloud Firestore."
          ],
          "pt": [
            "Controle total de partidas, times, clubes e jogadores através do painel administrativo.",
            "Suporte multiplataforma (iOS e Android) com Flutter.",
            "Autenticação segura via Firebase Auth.",
            "Estrutura de dados NoSQL escalável no Cloud Firestore."
          ]
        },
        "coverImage": "/images/projects/passa-bola/coverpab.png",
        "gallery": [
          "/images/projects/passa-bola/gallery1pab.jpg",
          "/images/projects/passa-bola/gallery2pab.jpg",
          "/images/projects/passa-bola/gallery3pab.jpg",
          "/images/projects/passa-bola/gallery4pab.jpg"
        ],
        "tech": ["Flutter", "Dart", "Firebase", "Git", "Team Leadership"],
        "github": "https://github.com/Caioncaminha/passabola",
        "link": null
      },
      {
        "slug": "portfolio-website",
        "title":       { "en": "Portfolio Website", "pt": "Portfolio Website" },
        "description": { "en": "Modern SPA portfolio built with Next.js, Tailwind CSS and Framer Motion. Features i18n (Language Switching) and Dark/Light Mode.", "pt": "Portfólio SPA moderno construído com Next.js, Tailwind CSS e Framer Motion. Possui i18n (Troca de Idioma) e Modo Escuro/Claro." },
        "fullDescription": {
          "en": [
            "This portfolio website was built to showcase my skills and projects in a clean, modern, and accessible way.",
            "The site is built with **Next.js 14** (App Router) for server-side rendering and performance. Styling is handled by **Tailwind CSS** with a custom 'Purple Aesthetic' theme that supports both **dark and light modes**.",
            "I implemented a **custom internationalization (i18n) system** using **React Context**, allowing for instant language switching without page reloads."
          ],
          "pt": [
            "Este portfólio foi construído para mostrar minhas habilidades e projetos de forma limpa, moderna e acessível.",
            "O site é construído com **Next.js 14** (App Router) para renderização do lado do servidor e desempenho. O estilo é gerenciado pelo **Tailwind CSS** com um tema personalizado mais para o roxo que suporta os **modos escuro e claro**.",
            "Implementei um **sistema de internacionalização (i18n) personalizado** usando **React Context**, permitindo a troca instantânea de idioma sem recarregar a página."
          ]
        },
        "features": {
          "en": [
            "Responsive Single Page Application (SPA) architecture.",
            "Custom Dark/Light mode toggle with persistent state.",
            "Internationalization (i18n) for English and Portuguese.",
            "Smooth animations using Framer Motion."
          ],
          "pt": [
            "Arquitetura de Single Page Application (SPA) responsiva.",
            "Alternância entre modo Escuro/Claro com estado persistente.",
            "Internacionalização (i18n) para Inglês e Português.",
            "Animações usando Framer Motion."
          ]
        },
        "coverImage": "/images/projects/portfolio-website/coverport.png",
        "gallery": [
          "/images/projects/portfolio-website/gallery1port.webp",
          "/images/projects/portfolio-website/gallery2port.webp",
          "/images/projects/portfolio-website/gallery3port.png"
        ],
        "tech": ["TypeScript", "Next.js", "React", "Tailwind", "Framer Motion"],
        "github": "https://github.com/Caioncaminha/portfolio",
        "link": "https://caiocaminha.vercel.app"
      }
    ]
  },
  "education": {
    "title": { "en": "Education", "pt": "Educação" },
    "items": [
      {
        "institution": "FIAP",
        "url":    "https://www.fiap.com.br/",
        "logo":   "/images/experience/fiap_logo.png",
        "degree":     { "en": "Bachelor's Degree in Software Engineering", "pt": "Bacharelado em Engenharia de Software" },
        "status":     { "en": "2nd Year",          "pt": "2º Ano" },
        "graduation": { "en": "Expected Dec/2028", "pt": "Previsão Dez/2028" },
        "description": {
          "en": "Full-Stack Development, DevSecOps, and Cloud Computing",
          "pt": "Desenvolvimento Full-Stack, DevSecOps e Arquitetura de Computação em Nuvem."
        }
      }
    ],
    "certifications": [
      {
        "name":   "Design Thinking - Process",
        "issuer": "FIAP",
        "date":   "2025",
        "url":    "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=9b05a54f6b406d9acc63f10719d84694&action=view"
      },
      {
        "name":   "Big Data",
        "issuer": "FIAP",
        "date":   "2025",
        "url":    "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=7a6df5b93c882404590d19188cc8bf56&action=view"
      }
    ]
  },
  "contact": {
    "title":        { "en": "Contact Me",     "pt": "Vamos Conversar" },
    "send":         { "en": "Send Message",   "pt": "Enviar Mensagem" },
    "availability": {
      "en": "I'm currently available for internship and junior roles, more specifically in Data Engineering or related fields. Feel free to reach out if you'd like to collaborate or just say hi!",
      "pt": "Estou atualmente disponível para estágio e júnior, mais especificamente Engenharia de Dados ou áreas correlatas. Sinta-se à vontade para entrar em contato se quiser colaborar ou apenas dar um alô!"
    },
    "email":    "caioncaminha@gmail.com",
    "linkedin": "https://linkedin.com/in/caionascimentocaminha",
    "github":   "https://github.com/Caioncaminha"
  }
}
```

- [ ] **Step 2: Verify JSON is valid**

```bash
cd /home/caio-caminha/portfolio && node -e "JSON.parse(require('fs').readFileSync('content.json','utf8')); console.log('JSON valid')"
```

Expected: `JSON valid`

- [ ] **Step 3: Commit**

```bash
git add content.json
git commit -m "feat: add bilingual content.json as single source of truth"
```

---

## Task 2: Define TypeScript types for content.json

**Files:**
- Create: `src/types/content.ts`

- [ ] **Step 1: Create the types file**

```typescript
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
```

- [ ] **Step 2: Commit**

```bash
git add src/types/content.ts
git commit -m "feat: add RawContent TypeScript types for content.json"
```

---

## Task 3: Create content transformer (`src/lib/content.ts`)

**Files:**
- Create: `src/lib/content.ts`

This file transforms `RawContent` → the `Dictionary` shape that all existing components already consume. Components change zero lines.

- [ ] **Step 1: Create the transformer**

```typescript
// src/lib/content.ts
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
```

- [ ] **Step 2: Commit**

```bash
git add src/lib/content.ts
git commit -m "feat: add getDict transformer from RawContent to Dictionary shape"
```

---

## Task 4: Wire language context to content.json

**Files:**
- Modify: `src/context/language-context.tsx`

- [ ] **Step 1: Update language context**

Replace the entire file content:

```typescript
// src/context/language-context.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import rawContent from "../../content.json";
import { getDict, type Dictionary } from "@/lib/content";
import type { RawContent } from "@/types/content";

export type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  dict: Dictionary;
  raw: RawContent;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const content = rawContent as RawContent;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved === "en" || saved === "pt") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        dict: getDict(content, language),
        raw: content,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
```

Note: `raw` is exposed so the admin page can read the full bilingual content for editing.

- [ ] **Step 2: Run dev server and verify site still loads**

```bash
cd /home/caio-caminha/portfolio && npm run dev
```

Open http://localhost:3000. Verify content renders in English. Switch to PT. Verify PT content appears. Check Experience, Projects, Education sections.

- [ ] **Step 3: Commit**

```bash
git add src/context/language-context.tsx
git commit -m "feat: wire language context to content.json via getDict transformer"
```

---

## Task 5: Fix existing bugs

**Files:**
- Modify: `src/app/projects/[slug]/page.tsx`
- Modify: `src/components/sections/Contact.tsx`
- Modify: `src/components/sections/Hero.tsx`

Three bugs to fix in this task:

**Bug A:** "Back to Projects" hardcoded EN in `[slug]/page.tsx` lines 54 and 28.
**Bug B:** Contact section has hardcoded bilingual availability text (inline ternary).
**Bug C:** Hero uses `language` to choose CV path manually — now `dict.hero.cvPath` handles it.

- [ ] **Step 1: Fix projects/[slug]/page.tsx**

In `src/app/projects/[slug]/page.tsx`, change the "Back to Projects" link (line ~54) and the "Back to Projects" in the not-found state (line ~28):

```typescript
// At top of component, already have: const { dict } = useLanguage();
// Change line ~28:
<Link href="/projects" className="text-primary hover:underline">
  {dict.projects.backToProjects}
</Link>

// Change line ~54:
<Link 
  href="/projects" 
  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
>
  <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
  {dict.projects.backToProjects}
</Link>
```

Also update "Overview", "Key Features", "Gallery", "Tech Stack", "Live Demo" labels on the page to use `dict.projects.overview`, `dict.projects.keyFeatures`, `dict.projects.gallery`, `dict.projects.techStack`, `dict.projects.liveDemo`.

- [ ] **Step 2: Fix Contact.tsx**

Replace the hardcoded bilingual paragraph in `src/components/sections/Contact.tsx`:

```typescript
// Remove:
<p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
  {language === "en"
    ? "I'm currently available for internship..."
    : "Estou atualmente disponível..."}
</p>

// Replace with:
<p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
  {dict.contact.availability}
</p>
```

Also remove the unused `language` destructure from `useLanguage()` if no longer needed.

- [ ] **Step 3: Fix Hero.tsx CV path**

In `src/components/sections/Hero.tsx`, the CV link currently uses `language` to pick the path manually. Replace:

```typescript
// Remove language destructure if only used for cvPath
const { dict } = useLanguage();

// Change the href:
href={dict.hero.cvPath}
```

- [ ] **Step 4: Verify fixes in browser**

Start dev server, switch language to PT:
- Project detail page shows "Voltar aos Projetos"
- Contact section shows PT availability text
- CV download uses PT path

- [ ] **Step 5: Commit**

```bash
git add src/app/projects/[slug]/page.tsx src/components/sections/Contact.tsx src/components/sections/Hero.tsx
git commit -m "fix: i18n Back to Projects, contact availability text, hero CV path"
```

---

## Task 6: Admin API route

**Files:**
- Create: `src/app/api/admin/save/route.ts`

This endpoint receives the full `RawContent` as JSON body and writes it to `content.json` at the project root. Returns 403 in production.

- [ ] **Step 1: Create the route**

```typescript
// src/app/api/admin/save/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const CONTENT_PATH = path.join(process.cwd(), "content.json");

export async function POST(req: NextRequest) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json({ error: "Not available in production" }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  fs.writeFileSync(CONTENT_PATH, JSON.stringify(body, null, 2), "utf8");
  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 2: Verify the route exists**

```bash
curl -s -X POST http://localhost:3000/api/admin/save \
  -H "Content-Type: application/json" \
  -d '{"test": true}' | node -e "process.stdin.resume(); let d=''; process.stdin.on('data',c=>d+=c); process.stdin.on('end',()=>console.log(d))"
```

Expected: `{"error":"Invalid JSON body"}` or similar (the shape doesn't match but the route exists and responds). Restore `content.json` if the test mutated it.

- [ ] **Step 3: Commit**

```bash
git add src/app/api/admin/save/route.ts
git commit -m "feat: add /api/admin/save route (dev-only) to write content.json"
```

---

## Task 7: Admin page

**Files:**
- Create: `src/app/admin/page.tsx`

This is a single-page admin UI. It:
1. Guards against non-localhost access (client-side hostname check)
2. Loads the raw bilingual content via `useLanguage().raw`
3. Shows tabs: Hero | About | Skills | Experience | Projects | Education | Contact
4. Each tab shows EN and PT fields side-by-side
5. Save button POSTs to `/api/admin/save`
6. After save, calls `window.location.reload()` to pick up new content

The page uses only Tailwind utility classes (no new dependencies).

- [ ] **Step 1: Create the admin page**

```typescript
// src/app/admin/page.tsx
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
              <button onClick={() => removeItem(ci, ii)} className="px-3 py-2 text-sm bg-destructive/10 text-red-500 rounded-md hover:bg-destructive/20 mb-0.5">✕</button>
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
        {/* Header */}
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

        {/* Tabs */}
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

        {/* Section editors */}
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
```

- [ ] **Step 2: Test the admin page**

With dev server running, open http://localhost:3000/admin.
- Verify all 7 tabs render without errors
- Edit a field (e.g., Hero role EN)
- Click Save
- Verify page reloads and the change is reflected on the main page (http://localhost:3000)
- Verify `content.json` on disk has the updated value

- [ ] **Step 3: Commit**

```bash
git add src/app/admin/page.tsx
git commit -m "feat: add localhost-only admin panel for editing content.json"
```

---

## Task 8: Cleanup and final verification

**Files:**
- Delete: `src/data/dictionaries.ts`
- Modify: `tsconfig.json` (verify `resolveJsonModule` is enabled)

- [ ] **Step 1: Verify tsconfig has resolveJsonModule**

```bash
cat /home/caio-caminha/portfolio/tsconfig.json | grep -i json
```

Next.js enables `resolveJsonModule: true` by default. If it's missing, add it to `compilerOptions`.

- [ ] **Step 2: Delete dictionaries.ts**

```bash
rm /home/caio-caminha/portfolio/src/data/dictionaries.ts
```

- [ ] **Step 3: Run TypeScript check**

```bash
cd /home/caio-caminha/portfolio && npx tsc --noEmit 2>&1 | head -40
```

Fix any type errors that arise (likely Dictionary type references in components that used to import from `dictionaries.ts`).

- [ ] **Step 4: Build check**

```bash
cd /home/caio-caminha/portfolio && npm run build 2>&1 | tail -20
```

Expected: successful build with no errors.

- [ ] **Step 5: Final smoke test**

With `npm run dev`, verify:
1. Main page loads in EN — all sections render correctly
2. Switch to PT — all sections switch language
3. Navigate to a project detail page — "Back to Projects" is translated
4. Open http://localhost:3000/admin — admin panel loads
5. Edit a field, save, verify change on main page

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "chore: remove dictionaries.ts, verify build passes after content.json migration"
```

---

## Self-Review

**Spec coverage:**
- ✅ Content migrated to `content.json` (Task 1)
- ✅ EN/PT side-by-side per field (content.json structure)
- ✅ `getDict` transformer keeps components unchanged (Task 3)
- ✅ Language context updated (Task 4)
- ✅ Bug fixes: "Back to Projects" i18n, Contact availability text, Hero CV path (Task 5)
- ✅ Admin API route, dev-only guard (Task 6)
- ✅ Admin page with all 7 sections, EN|PT side-by-side (Task 7)
- ✅ Add/remove for jobs, projects, skills, certifications
- ✅ Save → reload flow
- ✅ Cleanup (Task 8)

**Gaps identified:**
- PT skills were out of sync (PySpark missing, TypeScript wrongly present). Fixed in content.json (Task 1) — EN structure is canonical.
- `dict.hero.photo` and `dict.hero.cvPath` are new fields — `Hero.tsx` must read them from `dict` (Task 5, Bug C).
- `dict.contact.linkedin` and `dict.contact.github` are now in dict as full URLs, not labels. The Contact component currently hardcodes the URLs. After this migration, they come from `dict.contact.linkedin` and `dict.contact.github`. Contact.tsx must be updated to use these (add to Bug fixes in Task 5).

**Type consistency:** `Dictionary` type is derived from `ReturnType<typeof getDict>` — guaranteed consistent. `RawContent` is defined once in `src/types/content.ts` and used by both the context and the admin page.
