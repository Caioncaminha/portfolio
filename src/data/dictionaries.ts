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
      summary: `Experienced leader and developer focused on Python, algorithms, and data structures. Proven track record in leading academic and corporate projects, notably the [Passa a Bola](/projects/passa-a-bola) and [Catálogo Unentel](/projects/unentel-catalog) initiatives. Currently serving as a Pre-Sales Intern and Lead Developer at Unentel Distribuição.
        
      Areas of interest (Internship and Junior): Data Engineering or related fields.`,
    },
    skills: {
      title: "Technical Skills",
      categories: [
        {
          name: "Development",
          items: [
            { name: "Python", url: "https://www.python.org/" },
            { name: "Pandas", url: "https://pandas.pydata.org/" },
            {
              name: "PySpark",
              url: "https://spark.apache.org/docs/latest/api/python/index.html",
            },
            { name: "API Rest" },
          ],
        },
        {
          name: "Databases",
          items: [
            { name: "PostgreSQL", url: "https://www.postgresql.org/" },
            { name: "Firebase", url: "https://firebase.google.com/" },
            { name: "MongoDB", url: "https://www.mongodb.com/" },
            { name: "Supabase", url: "https://supabase.com/" },
          ],
        },
        {
          name: "Tools",
          items: [
            { name: "Git", url: "https://git-scm.com/" },
            { name: "Docker", url: "https://www.docker.com/" },
            { name: "DBeaver", url: "https://dbeaver.io/" },
            { name: "dbt", url: "https://www.getdbt.com/" },
            {
              name: "Excel",
              url: "https://www.microsoft.com/en/microsoft-365",
            },
            {
              name: "Power BI",
              url: "https://www.microsoft.com/en/microsoft-365",
            },
          ],
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
          url: "https://unentel.com.br/",
          description: `Designed and deployed a [centralized data platform](/projects/unentel-catalog) consolidating [[20,000]]+ **SKUs** into a single source of truth, eliminating data fragmentation across sales operations.

**- Data Engineering & ETL:** Architected robust **ETL** pipelines using **TypeScript** and **SQL** to ingest raw vendor data. Implemented **fuzzy entity resolution** and normalization logic in **PostgreSQL** to automatically deduplicate manufacturers and SKUs, ensuring **high data integrity**. Implemented **CI/CD (GitHub Actions, Vercel)**.

**- Search Engine Optimization:** __Engineered a Hybrid Search system__ combining **Full-Text Search (FTS)** with **Trigram (pg_trgm)** similarity. __Implemented Synonym logic__. **Achieved sub-**[[200]]**ms response times on complex search queries**.

**- Analytics & Telemetry:** Implemented a **telemetry pipeline** within the database, converting to a dashboard, to capture high-volume search logs and "zero-result" queries, __enabling data-driven decisions__ on catalog expansion and future trainings.

**- Business Impact:** **Reduced BoMs preparation time by ~**[[90]]**%** when compared to manual spreadsheet processes and __increased quote accuracy by centralizing technical specifications__.

**- AI and Agents:** **Zoom's AI and Virtual Agent training**, using **Prompt Engineering**, FAQ correlation, and documentation. Daily use of code assistants and agents (**Gemini CLI**, **Claude Code**, **MCP**) for **productivity increase**, achieving **feature delivery ~4x faster**, and facilitating/preventing manual work.`,

          skills: [
            "PostgreSQL",
            "TypeScript",
            "Supabase",
            "Pipelines",
            "Data Analytics",
            "AI Agents",
            "Data Engineering",
            "Prompt Engineering",
            "AI Integration",
            "SQL",
            "ETL",
          ],
          logo: "/images/experience/unentel_logo.png",
        },
        {
          company: "FIAP",
          role: "Technical Leader (Academic Project)",
          period: "Mar/2025 – Oct/2025",
          location: "São Paulo, SP (Hybrid)",
          url: "https://www.fiap.com.br/",
          description: `**Technical lead** in the development of the MVP for [Passa a Bola](/projects/passa-a-bola), a cross-platform application built with **Flutter(Dart)** and integrated with **Firebase/Cloud Firestore**. The project aims to professionalize and bring visibility to the women’s football ecosystem by connecting athletes, clubs, and fans on a single platform — featuring __secure authentication, real-time database management, and integration with match APIs__.

**Main responsibilities:**
- Data modeling in **Cloud Firestore** and application architecture.
- Integration with a public API for automatic updates of matches and players.
- Implementation of authentication using **Firebase Auth** and database security rules.
- Leadership and organization of the team and project workflow.

**Key indicators and results:**
- **MVP delivered** with __full integration__ (Login/Sign-up, Homepage, Profile, Championships, Admin Panel, Geolocation, Cloud integration, and Multi-factor Authentication).
- **Reduced up to **[[70]]**% of manual work** for clubs in data collection and consolidation (compared to spreadsheet-based processes) by automating ingestion and centralizing records.`,
          skills: ["Flutter", "Dart", "Firebase", "Git", "Team Leadership"],
          logo: "/images/experience/fiap_logo.png",
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
            "Data platform consolidating 20,000+ SKUs, eliminating data fragmentation for the sales and pre-sales teams.",
          fullDescription: [
            "At __Unentel Distribuição__, data fragmentation across various vendor spreadsheets was a major bottleneck for the sales and pre-sales teams. This project aimed to centralize over **20,000 SKUs** into a single, reliable source of truth.",
            "I designed and implemented a __robust data pipeline__ using **TypeScript** and **SQL** to extract, normalize, and deduplicate data. The backend relies on a highly optimized **PostgreSQL** database, utilizing __GIN indexes and fuzzy matching extensions__ to ensure search queries return results in **under 200ms**.",
            "Beyond performance, **data governance and analysis** was a key focus. I implemented __Row Level Security (RLS)__ to ensure sensitive information was only accessible to authorized personnel, in conjunction, used __pg_cron__ to automate scheduled tasks __(Vaccum/Clean)__.",
            "Additionally, I built a **telemetry pipeline** to capture high-volume search logs and zero-result queries, **enabling data-driven decisions** on catalog expansion and future trainings.",
          ],
          features: [
            "Consolidated 20,000+ SKUs.",
            "Sub-200ms search latency using GIN indexes and pg_trgm.",
            "Automated ETL pipelines for daily data updates.",
            "Role-based access control with RLS and Auth",
            "Telemetry pipeline capturing search logs for analytics.",
            "Reduced BoMs prep time by ~90% compared to manual processes.",
          ],
          coverImage: "/images/projects/unentel-catalog/covercatalog.png",
          gallery: [
            "/images/projects/unentel-catalog/gallery1catalog.png",
            "/images/projects/unentel-catalog/gallery2catalog.png",
            "/images/projects/unentel-catalog/gallery3catalog.png",
            "/images/projects/unentel-catalog/gallery4catalog.png",
            "/images/projects/unentel-catalog/gallery5catalog.png",
            "/images/projects/unentel-catalog/gallery6catalog.png",
            "/images/projects/unentel-catalog/gallery7catalog.png",
          ],
          tech: [
            "PostgreSQL",
            "TypeScript",
            "Supabase",
            "Pipelines",
            "Data Analytics",
            "Data Engineering",
            "SQL",
            "ETL",
          ],
        },
        {
          slug: "passa-a-bola",
          title: "Passa a Bola",
          description:
            "Cross-platform app to strengthen the women's soccer ecosystem. Reduced manual data collection for client and clubs by ~70%.",
          fullDescription: [
            "Passa a Bola is a **mobile application** designed to bridge the gap in professionalism for women's soccer as a whole. It serves as a centralized hub for matches, player statistics, team management, among other things.",
            "Leading a team of students, I architected the solution using **Flutter** for a seamless cross-platform experience. The backend is built on **Firebase**, leveraging **Cloud Firestore** for **real-time data synchronization**.",
            "Some key achievements include: **Automating match updates** with a public sports **API**, **automating data ingestion** and **reducing by around ~70%** the manual workload for club managers and our primary client.",
          ],
          features: [
            "Full control of matches, teams, clubs and players through the admin panel.",
            "Cross-platform support (iOS & Android) with Flutter.",
            "Secure authentication via Firebase Auth.",
            "Scalable NoSQL data structure on Cloud Firestore.",
          ],
          coverImage: "/images/projects/passa-bola/coverpab.png",
          gallery: [
            "/images/projects/passa-bola/gallery1pab.jpg",
            "/images/projects/passa-bola/gallery2pab.jpg",
            "/images/projects/passa-bola/gallery3pab.jpg",
            "/images/projects/passa-bola/gallery4pab.jpg",
          ],
          tech: ["Flutter", "Dart", "Firebase", "Git", "Team Leadership"],
          github: "https://github.com/Caioncaminha/passabola",
        },
        {
          slug: "portfolio-website",
          title: "Portfolio Website",
          description:
            "Modern SPA portfolio built with Next.js, Tailwind CSS and Framer Motion. Features i18n (Language Switching) and Dark/Light Mode.",
          fullDescription: [
            "This portfolio website was built to showcase my skills and projects in a clean, modern, and accessible way.",
            "The site is built with **Next.js 14** (App Router) for server-side rendering and performance. Styling is handled by **Tailwind CSS** with a custom 'Purple Aesthetic' theme that supports both **dark and light modes**.",
            "I implemented a **custom internationalization (i18n) system** using **React Context**, allowing for instant language switching without page reloads.",
          ],
          features: [
            "Responsive Single Page Application (SPA) architecture.",
            "Custom Dark/Light mode toggle with persistent state.",
            "Internationalization (i18n) for English and Portuguese.",
            "Smooth animations using Framer Motion.",
          ],
          coverImage: "/images/projects/portfolio-website/coverport.png",
          gallery: [
            "/images/projects/portfolio-website/gallery1port.webp",
            "/images/projects/portfolio-website/gallery2port.webp",
            "/images/projects/portfolio-website/gallery3port.png",
          ],
          tech: ["TypeScript", "Next.js", "React", "Tailwind", "Framer Motion"],
          github: "https://github.com/Caioncaminha/portfolio",
          link: "https://caiocaminha.vercel.app",
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
          graduation: "Expected Dec/2028",
          url: "https://www.fiap.com.br/",
          logo: "/images/experience/fiap_logo.png",
          description: "Full-Stack Development, DevSecOps, and Cloud Computing",
        },
      ],
      certifications: [
        {
          name: "Design Thinking - Process",
          issuer: "FIAP",
          date: "2025",
          url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=9b05a54f6b406d9acc63f10719d84694&action=view",
        },
        {
          name: "Big Data",
          issuer: "FIAP",
          date: "2025",
          url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=7a6df5b93c882404590d19188cc8bf56&action=view",
        },
      ],
    },
    contact: {
      title: "Contact Me",
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
      role: "Estudante de Engenharia de Software | Especializando em Engenharia de Dados",
      cta: "Contato",
      downloadCv: "Currículo",
    },
    about: {
      title: "Sobre Mim",
      summary: `Líder e desenvolvedor focado em Python, TypeScript, algoritmos e estruturas de dados. Histórico comprovado na liderança de projetos acadêmicos e corporativos, notadamente as iniciativas [Passa a Bola](/projects/passa-a-bola) e [Catálogo Unentel](/projects/unentel-catalog). Atuando como Estagiário em Pré-Vendas e Desenvolvedor na Unentel Distribuição.
      
        Áreas de interesse (Estágio e Júnior): Engenharia de Dados ou áreas correlatas.`,
    },
    skills: {
      title: "Habilidades Técnicas",
      categories: [
        {
          name: "Desenvolvimento",
          items: [
            { name: "Python", url: "https://www.python.org/" },
            { name: "TypeScript", url: "https://www.typescriptlang.org/" },
            { name: "Pandas", url: "https://pandas.pydata.org/" },
            { name: "API Rest" },
          ],
        },
        {
          name: "Banco de Dados",
          items: [
            { name: "PostgreSQL", url: "https://www.postgresql.org/" },
            { name: "Firebase", url: "https://firebase.google.com/" },
            { name: "MongoDB", url: "https://www.mongodb.com/" },
            { name: "Supabase", url: "https://supabase.com/" },
          ],
        },
        {
          name: "Ferramentas",
          items: [
            { name: "Git", url: "https://git-scm.com/" },
            { name: "Docker", url: "https://www.docker.com/" },
            { name: "Postman", url: "https://www.postman.com/" },
            { name: "dbt", url: "https://www.getdbt.com/" },
            {
              name: "Excel",
              url: "https://www.microsoft.com/en/microsoft-365",
            },
            {
              name: "Power BI",
              url: "https://www.microsoft.com/en/microsoft-365",
            },
          ],
        },
      ],
    },
    experience: {
      title: "Experiência",
      jobs: [
        {
          company: "Unentel Distribuição",
          role: "Pré-Vendas e Lead Developer",
          period: "Out/2025 – Presente",
          location: "São Paulo, SP (Híbrido)",
          url: "https://unentel.com.br/",
          description: `Projetei e implementei uma [plataforma de dados centralizada](/projects/unentel-catalog) consolidando mais de [[20,000]] **SKUs** em uma única fonte de verdade, eliminando a fragmentação de dados nas operações de vendas.

**- Engenharia de Dados e ETL:** Desenvolvi pipelines de **ETL** robustos usando **TypeScript** e **SQL** para ingerir dados brutos de fornecedores. Implementei **fuzzy entity resolution** e normalização em **PostgreSQL** para desduplicar automaticamente fabricantes e SKUs, garantindo **alta integridade de dados**. Implementei **CI/CD (GitHub Actions, Vercel)**.

**- Otimização de Buscas:** __Desenvolvi um sistema de busca híbrido__ que combina **Full-Text Search (FTS)** com correspondência aproximada **(pg_trgm)**. __Implementei lógica de sinônimos__. Obtive **tempos de resposta abaixo de** [[200]]** ms** em consultas de busca complexas.

**- Análise e Telemetria:** Implementei um **pipeline de telemetria** dentro do banco de dados, convertendo-o a um dashboard, para capturar logs de pesquisa de alto volume e consultas "sem resultado", __permitindo decisões baseadas em dados__ sobre expansão de catálogo e treinamentos futuros.

**- Impacto nos Negócios:** **Reduzi o tempo de preparação de BoMs em cerca de ~**[[90]]**%** quando comparado a processos manuais de planilhas e __aumentei a precisão das cotações centralizando especificações técnicas__.

**- IA e Agentes:** **Treinamento de IA e Agente Virtual da Zoom**, usando **Engenharia de Prompt**, correlação de FAQ e documentação. Uso diário de assistentes de código e agentes (**Gemini CLI**, **Claude Code**, **MCP**) para **aumento de produtividade**, alcançando **entrega de funcionalidades ~4x mais rápida**, e facilitando/prevenindo trabalho manual.`,
          skills: [
            "PostgreSQL",
            "TypeScript",
            "Supabase",
            "Pipelines",
            "Análise de Dados",
            "Agentes de IA",
            "Engenharia de Dados",
            "Engenharia de Prompt",
            "Integração de IA",
            "SQL",
            "ETL",
          ],
          logo: "/images/experience/unentel_logo.png",
        },
        {
          company: "FIAP",
          role: "Líder Técnico (Projeto Acadêmico)",
          period: "Mar/2025 – Out/2025",
          location: "São Paulo, SP (Híbrido)",
          url: "https://www.fiap.com.br/",
          description: `**Liderança técnica** do desenvolvimento do MVP do [Passa a Bola](/projects/passa-a-bola), um aplicativo multiplataforma construído com **Flutter (Dart)** e integrado com **Firebase/Cloud Firestore**. O projeto visa profissionalizar e trazer visibilidade ao ecossistema do futebol feminino conectando atletas, clubes e fãs em uma única plataforma — com __autenticação segura, gerenciamento de banco de dados em tempo real e integração com APIs de partidas__.

            **Principais responsabilidades:**
            - Modelagem de dados no **Cloud Firestore** e arquitetura da aplicação.
            - Integração com API pública para atualizações automáticas de partidas e jogadores.
            - Implementação de autenticação usando **Firebase Auth** e regras de segurança de banco de dados.
            - Liderança e organização da equipe e fluxo de trabalho do projeto.

            **Indicadores e resultados:**
            - **MVP entregue** com __integração total__ (Login/Cadastro, Página Inicial, Perfil, Campeonatos, Painel Administrativo, Geolocalização, Integração em Nuvem e Autenticação Multifator).
            - **Redução de até **[[70]]**% do trabalho manual** para clubes na coleta e consolidação de dados (comparado a processos baseados em planilhas) automatizando a ingestão e centralizando registros.`,
          skills: ["Flutter", "Dart", "Firebase", "Git", "Liderança de Equipe"],
          logo: "/images/experience/fiap_logo.png",
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
            "Plataforma de dados consolidando mais de 20,000 SKUs, eliminando a fragmentação de dados para as equipes de vendas e pré-vendas.",
          fullDescription: [
            "Na __Unentel Distribuição__, a fragmentação de dados entre várias planilhas de fornecedores era um grande gargalo para as equipes de vendas e pré-vendas. Este projeto visava centralizar mais de **20,000 SKUs** em uma única fonte de verdade confiável.",
            "Projetei e implementei um __pipeline de dados robusto__ usando **TypeScript** e **SQL** para extrair, normalizar e desduplicar dados. O backend baseia-se em um banco de dados **PostgreSQL** altamente otimizado, utilizando __índices GIN e extensões de correspondência difusa__ para garantir que as consultas de pesquisa retornem resultados em **menos de 200ms**.",
            "Além do desempenho, **governança e análise de dados** foi um foco principal. Implementei __Row Level Security (RLS)__ para garantir que informações confidenciais de preços fossem acessíveis apenas a pessoal autorizado, em conjunto, utilizei __pg_cron__ para automatizar tarefas agendadas __(Vaccum/Clean)__.",
            "Adicionalmente, construí um **pipeline de telemetria** para capturar logs de pesquisa de alto volume e consultas sem resultados, **permitindo decisões baseadas em dados** sobre expansão de catálogo e treinamentos futuros.",
          ],
          features: [
            "Consolidei mais de 20,000 SKUs.",
            "Latência de pesquisa inferior a 200ms usando índices GIN e pg_trgm.",
            "Pipelines ETL automatizados para atualizações diárias de dados.",
            "Controle de acesso baseado em função com RLS e Auth.",
            "Pipeline de telemetria capturando logs de pesquisa para análise.",
            "Redução do tempo de preparação de BoMs em ~90% comparado a processos manuais.",
          ],
          coverImage: "/images/projects/unentel-catalog/covercatalog.png",
          gallery: [
            "/images/projects/unentel-catalog/gallery1catalog.png",
            "/images/projects/unentel-catalog/gallery2catalog.png",
            "/images/projects/unentel-catalog/gallery3catalog.png",
            "/images/projects/unentel-catalog/gallery4catalog.png",
            "/images/projects/unentel-catalog/gallery5catalog.png",
            "/images/projects/unentel-catalog/gallery6catalog.png",
            "/images/projects/unentel-catalog/gallery7catalog.png",
          ],
          tech: [
            "PostgreSQL",
            "TypeScript",
            "Supabase",
            "Pipelines",
            "Data Analytics",
            "Engenharia de Dados",
            "SQL",
            "ETL",
          ],
        },
        {
          slug: "passa-a-bola",
          title: "Passa a Bola",
          description:
            "Aplicativo multiplataforma para fortalecer o ecossistema do futebol feminino. Redução de ~70% na coleta manual de dados para clientes e clubes.",
          fullDescription: [
            "Passa a Bola é um **aplicativo mobile** projetado para preencher a lacuna de profissionalismo no futebol feminino como um todo. Ele serve como um hub centralizado para jogos, estatísticas de jogadores, gerenciamento de equipes, entre outras coisas.",
            "Liderando uma equipe de estudantes, arquitetei a solução usando **Flutter** para uma experiência multiplataforma. O backend é construído no **Firebase**, aproveitando o **Cloud Firestore** para **sincronização de dados em tempo real**.",
            "Algumas conquistas foram: **Automatizar atualizações de partidas** com uma **API** pública de esportes, **automatizar ingestão de dados** e **reduzir em cerca de ~70%** a carga de trabalho manual para gerentes de clubes e nosso cliente principal.",
          ],
          features: [
            "Controle total de partidas, times, clubes e jogadores através do painel administrativo.",
            "Suporte multiplataforma (iOS e Android) com Flutter.",
            "Autenticação segura via Firebase Auth.",
            "Estrutura de dados NoSQL escalável no Cloud Firestore.",
          ],
          coverImage: "/images/projects/passa-bola/coverpab.png",
          gallery: [
            "/images/projects/passa-bola/gallery1pab.jpg",
            "/images/projects/passa-bola/gallery2pab.jpg",
            "/images/projects/passa-bola/gallery3pab.jpg",
            "/images/projects/passa-bola/gallery4pab.jpg",
          ],
          tech: ["Flutter", "Dart", "Firebase", "Git", "Liderança de Equipe"],
          github: "https://github.com/Caioncaminha/passabola",
        },
        {
          slug: "portfolio-website",
          title: "Portfolio Website",
          description:
            "Portfólio SPA moderno construído com Next.js, Tailwind CSS e Framer Motion. Possui i18n (Troca de Idioma) e Modo Escuro/Claro.",
          fullDescription: [
            "Este portfólio foi construído para mostrar minhas habilidades e projetos de forma limpa, moderna e acessível.",
            "O site é construído com **Next.js 14** (App Router) para renderização do lado do servidor e desempenho. O estilo é gerenciado pelo **Tailwind CSS** com um tema personalizado mais para o roxo que suporta os **modos escuro e claro**.",
            "Implementei um **sistema de internacionalização (i18n) personalizado** usando **React Context**, permitindo a troca instantânea de idioma sem recarregar a página.",
          ],
          features: [
            "Arquitetura de Single Page Application (SPA) responsiva.",
            "Alternância entre modo Escuro/Claro com estado persistente.",
            "Internacionalização (i18n) para Inglês e Português.",
            "Animações usando Framer Motion.",
          ],
          coverImage: "/images/projects/portfolio-website/coverport.png",
          gallery: [
            "/images/projects/portfolio-website/gallery1port.webp",
            "/images/projects/portfolio-website/gallery2port.webp",
            "/images/projects/portfolio-website/gallery3port.png",
          ],
          tech: ["TypeScript", "Next.js", "React", "Tailwind", "Framer Motion"],
          github: "https://github.com/Caioncaminha/portfolio",
          link: "https://caiocaminha.vercel.app",
        },
      ],
    },
    education: {
      title: "Educação",
      items: [
        {
          institution: "FIAP",
          degree: "Bacharelado em Engenharia de Software",
          status: "2º Ano",
          graduation: "Previsão Dez/2028",
          url: "https://www.fiap.com.br/",
          logo: "/images/experience/fiap_logo.png",
          description:
            "Desenvolvimento Full-Stack, DevSecOps e Arquitetura de Computação em Nuvem.",
        },
      ],
      certifications: [
        {
          name: "Design Thinking - Process",
          issuer: "FIAP",
          date: "2025",
          url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=9b05a54f6b406d9acc63f10719d84694&action=view",
        },
        {
          name: "Big Data",
          issuer: "FIAP",
          date: "2025",
          url: "https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=7a6df5b93c882404590d19188cc8bf56&action=view",
        },
      ],
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
