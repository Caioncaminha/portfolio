export const dictionaries = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact Me",
    },
    hero: {
      role: "Software Engineering Student | Specializing in Data Engineering",
      cta: "Contact Me",
      downloadCv: "Download CV",
    },
    about: {
      title: "About Me",
      summary: `Experienced leader and developer focused on Python, TypeScript, algorithms, and data structures. Proven track record in leading academic and corporate projects, notably the __"Passa a Bola"__ and __"Catálogo Unentel"__ initiatives. Currently serving as a Pre-Sales Intern and Lead Developer at Unentel Distribuição.
        
      Areas of interest (internship and junior): Data Engineering or related fields.`,
    },
    skills: {
      title: "Technical Skills",
      categories: [
        {
          name: "Development",
          items: ["Python", "TypeScript", "Pandas", "NumPy"],
        },
        {
          name: "Databases",
          items: ["PostgreSQL", "Firebase", "MongoDB", "Supabase", "SQL"],
        },
        {
          name: "Tools",
          items: ["Git", "Docker", "Postman", "dbt", "Excel", "Power BI"],
        },
      ],
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          company: "Unentel Distribuição",
          role: "Pre-Sales & Lead Developer",
          period: "Oct/2025 – Present",
          location: "São Paulo, SP (Hybrid)",
          description: `Designed and deployed a centralized data platform consolidating [[20,000]]+ SKUs, eliminating data fragmentation across sales operations.

**- ETL & Data Pipelines:** Architected ingestion workflows using TypeScript and SQL to extract, normalize, and deduplicate raw vendor data, ensuring a "Single Source of Truth".

**- Database Performance:** Optimized PostgreSQL query plans using GIN indexes, fuzzy matching (pg_trgm), and unaccent extensions, achieving sub-[[200]]ms response times on complex search queries.

**- Analytics Engineering:** Implemented a __telemetry pipeline__ within the database to __capture high-volume search logs and "zero-result" queries__, enabling data-driven decisions on catalog expansion and future trainings.

**- Business Impact:** Reduced proposal preparation time by ~[[90]]% when compared to manual spreadsheet processes and increased quote accuracy by centralizing technical specifications.`,
          skills: [
            "PostgreSQL",
            "TypeScript",
            "Supabase",
            "Pipelines",
            "Data Analytics",
            "Data Engineering",
            "SQL",
            "ETL",
          ],
          logo: "/images/experience/unentel.svg",
        },
        {
          company: "FIAP",
          role: "Technical Leader (Academic Project)",
          period: "Mar/2025 – Oct/2025",
          location: "São Paulo, SP (Hybrid)",
          description: `Technical lead in the development of the MVP for Passa a Bola, a cross-platform application built with Flutter (Dart) and integrated with Firebase/Cloud Firestore. The project aims to professionalize and bring visibility to the women’s football ecosystem by connecting athletes, clubs, and fans on a single platform — featuring secure authentication, real-time database management, and integration with match APIs.

**Main responsibilities:**
- Data modeling in Cloud Firestore and application architecture.
- Integration with a public API for automatic updates of matches and players.
- Implementation of authentication using Firebase Auth and database security rules.
- Leadership and organization of the team and project workflow.

**Key indicators and results:**
- MVP delivered with full integration (Login/Sign-up, Homepage, Profile, Championships, Admin Panel, Geolocation, Cloud integration, and Multi-factor Authentication).
- Reduced up to [[70]]% of manual work for clubs in data collection and consolidation (compared to spreadsheet-based processes) by automating ingestion and centralizing records.`,
          skills: [
            "Flutter",
            "Dart",
            "Cloud Firestore",
            "Firebase",
            "Git",
            "Team Leadership",
          ],
          logo: "/images/experience/fiap.svg",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      viewMore: "View More Projects",
      viewLess: "Show Less",
      items: [
        {
          slug: "unentel-catalog",
          title: "Centralized B2B Catalog Platform",
          description:
            "Data platform consolidating 20,000+ SKUs, eliminating data fragmentation. Reduced proposal preparation time by ~90%.",
          fullDescription: [
            "At Unentel Distribuição, data fragmentation across various vendor spreadsheets was a major bottleneck for the sales team. This project aimed to centralize over 20,000 SKUs into a single, reliable source of truth.",
            "I designed and implemented a robust data pipeline using TypeScript and SQL to extract, normalize, and deduplicate data. The backend relies on a highly optimized PostgreSQL database, utilizing GIN indexes and fuzzy matching extensions to ensure search queries return results in under 200ms.",
            "Beyond performance, data governance was a key focus. I implemented Row Level Security (RLS) to ensure sensitive pricing information was only accessible to authorized personnel.",
          ],
          features: [
            "Consolidated 20,000+ SKUs from disparate sources.",
            "Sub-200ms search latency using GIN indexes and pg_trgm.",
            "Automated ETL pipelines for daily data updates.",
            "Role-based access control with RLS.",
          ],
          coverImage: "/images/projects/unentel-catalog/cover.svg",
          gallery: [
            "/images/projects/unentel-catalog/gallery-1.svg",
            "/images/projects/unentel-catalog/gallery-2.svg",
          ],
          tech: ["TypeScript", "PostgreSQL", "ETL", "SQL", "Node.js"],
          github: "#",
        },
        {
          slug: "passa-bola",
          title: "Passa a Bola",
          description:
            "Cross-platform app to professionalize women's football. Reduced manual data collection for clubs by 70%.",
          fullDescription: [
            "Passa a Bola is a mobile application designed to bridge the gap in professionalism for women's football leagues. It serves as a centralized hub for match schedules, player statistics, and team management.",
            "Leading a team of students, I architected the solution using Flutter for a seamless cross-platform experience. The backend is built on Firebase, leveraging Cloud Firestore for real-time data synchronization.",
            "A key technical achievement was automating match updates by integrating with a public sports API, significantly reducing the manual workload for club managers.",
          ],
          features: [
            "Real-time match updates and statistics.",
            "Cross-platform support (iOS & Android) with Flutter.",
            "Secure authentication via Firebase Auth.",
            "Scalable NoSQL data structure on Cloud Firestore.",
          ],
          coverImage: "/images/projects/passa-bola/cover.svg",
          gallery: [
            "/images/projects/passa-bola/gallery-1.svg",
            "/images/projects/passa-bola/gallery-2.svg",
          ],
          tech: ["Flutter", "Firebase", "Dart", "Cloud Firestore"],
          link: "#",
          github: "https://github.com/Caioncaminha/passabola",
        },
        {
          slug: "portfolio-website",
          title: "Portfolio Website",
          description:
            "Modern SPA portfolio built with Next.js, Tailwind CSS and Framer Motion. Features i18n and Dark Mode.",
          fullDescription: [
            "This portfolio website was built to showcase my skills and projects in a clean, modern, and accessible way. It serves as a practical demonstration of my frontend capabilities using the React ecosystem.",
            "The site is built with Next.js 14 (App Router) for server-side rendering and performance. Styling is handled by Tailwind CSS with a custom 'Purple Aesthetic' theme that supports both dark and light modes.",
            "I implemented a custom internationalization (i18n) system using React Context, allowing for instant language switching without page reloads.",
          ],
          features: [
            "Responsive Single Page Application (SPA) architecture.",
            "Custom Dark/Light mode toggle with persistent state.",
            "Internationalization (i18n) for English and Portuguese.",
            "Smooth animations using Framer Motion.",
          ],
          coverImage: "/images/projects/portfolio-website/cover.svg",
          gallery: ["/images/projects/portfolio-website/gallery-1.svg"],
          tech: ["Next.js", "React", "Tailwind", "Framer Motion", "TypeScript"],
          link: "#",
          github: "#",
        },
      ],
    },
    education: {
      title: "Education",
      items: [
        {
          institution: "FIAP",
          degree: "Bachelor’s Degree in Software Engineering",
          status: "2nd Year",
          graduation: "Expected Graduation - Dec/2028",
        },
      ],
      certifications: ["Design Thinking Process", "Big Data"],
    },
    contact: {
      title: "Let's Talk",
      email: "caioncaminha@gmail.com",
      linkedin: "LinkedIn",
      github: "GitHub",
      send: "Send Message",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      education: "Educação",
      contact: "Contato",
    },
    hero: {
      role: "Estudante de Engenharia de Software | Especialista em Engenharia de Dados",
      cta: "Vamos Conversar",
      downloadCv: "Baixar CV",
    },
    about: {
      title: "Sobre Mim",
      summary:
        "Líder e desenvolvedor experiente focado em Python, TypeScript, algoritmos e estruturas de dados. Histórico comprovado na liderança de projetos acadêmicos e corporativos, notadamente as iniciativas 'Passa a Bola' e 'Catálogo Unentel'. Atualmente atuando como Estagiário de Pré-Vendas e Desenvolvedor Líder na Unentel Distribuição.",
    },
    skills: {
      title: "Habilidades Técnicas",
      categories: [
        { name: "Programação", items: ["Python", "TypeScript", "SQL", "Dart"] },
        {
          name: "Banco de Dados",
          items: ["PostgreSQL", "Firebase", "MongoDB", "Supabase"],
        },
        { name: "Ferramentas", items: ["Git", "Docker", "Pandas", "Next.js"] },
      ],
    },
    experience: {
      title: "Experiência",
      jobs: [
        {
          company: "Unentel Distribuição",
          role: "Estagiário de Pré-Vendas & Desenvolvedor Líder",
          period: "Out/2025 – Presente",
          location: "São Paulo, SP (Híbrido)",
          description: `Projetei e implementei uma plataforma de dados centralizada consolidando mais de 20.000 SKUs, eliminando a fragmentação de dados nas operações de vendas.
- ETL e Pipelines de Dados: Estruturei fluxos de trabalho de ingestão usando TypeScript e SQL para extrair, normalizar e desduplicar dados brutos de fornecedores, garantindo uma "Fonte Única de Verdade".
- Desempenho do Banco de Dados: Otimizei planos de consulta PostgreSQL usando índices GIN, correspondência aproximada (pg_trgm) e unnacent, alcançando tempos de resposta inferiores a 200 ms em consultas de pesquisa complexas.
- Governança de Dados: Impus integridade de dados rigorosa por meio de Modelagem Relacional e Row Level Security (RLS); automatizei tarefas de manutenção do banco de dados (limpeza/vacuum) usando pg_cron.
- Impacto nos Negócios: Reduzi o tempo de preparação de propostas em cerca de 90% e aumentei a precisão das cotações padronizando as especificações técnicas.`,
          skills: ["PostgreSQL", "TypeScript", "SQL", "Engenharia de Dados"],
          logo: "/images/experience/unentel.svg",
        },
        {
          company: "FIAP",
          role: "Líder Técnico (Projeto Acadêmico)",
          period: "Mar/2025 – Out/2025",
          location: "São Paulo, SP (Híbrido)",
          description:
            "Liderei o desenvolvimento do 'Passa a Bola' (MVP) usando Flutter e Firebase. Projetei estruturas no Cloud Firestore. Automatizei atualizações de partidas via API pública. Gerenciei fluxos de trabalho Git e apliquei práticas de Clean Code.",
          skills: ["Flutter", "Dart", "Firebase", "Liderança de Equipe"],
          logo: "/images/experience/fiap.svg",
        },
      ],
    },
    projects: {
      title: "Projetos em Destaque",
      viewMore: "Ver Mais Projetos",
      viewLess: "Mostrar Menos",
      items: [
        {
          slug: "unentel-catalog",
          title: "Plataforma de Catálogo B2B Centralizada",
          description:
            "Plataforma de dados consolidando mais de 20.000 SKUs, eliminando a fragmentação de dados. Reduziu o tempo de preparação de propostas em ~90%.",
          fullDescription: [
            "Na Unentel Distribuição, a fragmentação de dados entre várias planilhas de fornecedores era um grande gargalo para a equipe de vendas. Este projeto visava centralizar mais de 20.000 SKUs em uma única fonte de verdade confiável.",
            "Projetei e implementei um pipeline de dados robusto usando TypeScript e SQL para extrair, normalizar e deduplicar dados. O backend baseia-se em um banco de dados PostgreSQL altamente otimizado, utilizando índices GIN e extensões de correspondência difusa para garantir que as consultas de pesquisa retornem resultados em menos de 200ms.",
            "Além do desempenho, a governança de dados foi um foco principal. Implementei Row Level Security (RLS) para garantir que informações confidenciais de preços fossem acessíveis apenas a pessoal autorizado.",
          ],
          features: [
            "Consolidou mais de 20.000 SKUs de fontes díspares.",
            "Latência de pesquisa inferior a 200ms usando índices GIN e pg_trgm.",
            "Pipelines ETL automatizados para atualizações diárias de dados.",
            "Controle de acesso baseado em função com RLS.",
          ],
          coverImage: "/images/projects/unentel-catalog/cover.svg",
          gallery: [
            "/images/projects/unentel-catalog/gallery-1.svg",
            "/images/projects/unentel-catalog/gallery-2.svg",
          ],
          tech: ["TypeScript", "PostgreSQL", "ETL", "SQL", "Node.js"],
          github: "#",
        },
        {
          slug: "passa-bola",
          title: "Passa a Bola",
          description:
            "Aplicativo multiplataforma para profissionalizar o futebol feminino. Reduziu a coleta manual de dados para clubes em 70%.",
          fullDescription: [
            "Passa a Bola é um aplicativo móvel projetado para preencher a lacuna de profissionalismo nas ligas de futebol feminino. Ele serve como um hub centralizado para horários de jogos, estatísticas de jogadores e gerenciamento de equipes.",
            "Liderando uma equipe de estudantes, arquitetei a solução usando Flutter para uma experiência multiplataforma perfeita. O backend é construído no Firebase, aproveitando o Cloud Firestore para sincronização de dados em tempo real.",
            "Uma conquista técnica fundamental foi automatizar as atualizações de partidas integrando-se a uma API de esportes pública, reduzindo significativamente a carga de trabalho manual para os gerentes de clube.",
          ],
          features: [
            "Atualizações de partidas e estatísticas em tempo real.",
            "Suporte multiplataforma (iOS e Android) com Flutter.",
            "Autenticação segura via Firebase Auth.",
            "Estrutura de dados NoSQL escalável no Cloud Firestore.",
          ],
          coverImage: "/images/projects/passa-bola/cover.svg",
          gallery: [
            "/images/projects/passa-bola/gallery-1.svg",
            "/images/projects/passa-bola/gallery-2.svg",
          ],
          tech: ["Flutter", "Firebase", "Dart", "Cloud Firestore"],
          link: "#",
          github: "https://github.com/Caioncaminha/passabola",
        },
        {
          slug: "portfolio-website",
          title: "Portfolio Website",
          description:
            "Modern SPA portfolio built with Next.js, Tailwind CSS and Framer Motion. Features i18n and Dark Mode.",
          fullDescription: [
            "Este site de portfólio foi construído para mostrar minhas habilidades e projetos de forma limpa, moderna e acessível. Ele serve como uma demonstração prática de minhas capacidades de frontend usando o ecossistema React.",
            "O site é construído com Next.js 14 (App Router) para renderização do lado do servidor e desempenho. O estilo é gerenciado pelo Tailwind CSS com um tema personalizado 'Purple Aesthetic' que suporta os modos escuro e claro.",
            "Implementei um sistema de internacionalização (i18n) personalizado usando React Context, permitindo a troca instantânea de idioma sem recarregar a página.",
          ],
          features: [
            "Arquitetura de Single Page Application (SPA) responsiva.",
            "Alternância personalizada de modo Escuro/Claro com estado persistente.",
            "Internacionalização (i18n) para Inglês e Português.",
            "Animações suaves usando Framer Motion.",
          ],
          coverImage: "/images/projects/portfolio-website/cover.svg",
          gallery: ["/images/projects/portfolio-website/gallery-1.svg"],
          tech: ["Next.js", "React", "Tailwind", "Framer Motion", "TypeScript"],
          link: "#",
          github: "#",
        },
      ],
    },
    education: {
      title: "Educação",
      items: [
        {
          institution: "FIAP",
          degree: "Bacharelado em Engenharia de Software",
          status: "2º Ano (Foco em Full-Stack e DevSecOps)",
          graduation: "Previsão Dez/2028",
        },
      ],
      certifications: ["Design Thinking Process", "Big Data"],
    },
    contact: {
      title: "Vamos Conversar",
      email: "caioncaminha@gmail.com",
      linkedin: "LinkedIn",
      github: "GitHub",
      send: "Enviar Mensagem",
    },
  },
};

export type Language = keyof typeof dictionaries;
export type Dictionary = (typeof dictionaries)[Language];
