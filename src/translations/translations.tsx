type Translation = {
  en: { [key: string]: string };
  pt: { [key: string]: string };
};

export const translations: Translation = {
  en: {
    // Education
    educationTitle: "Education",
    degree: "Bachelor's Degree in Software Engineering",
    university: "FIAP – 2nd Semester | Full-Stack and DevSecOps Developer",
    graduation: "Expected Graduation: Dez/2028",

    // Main
    role: "Software Engineer",
    location: "São Paulo, SP, Brazil",

    downloadCV: "Download CV",

    // About
    aboutTitle: "About Me",
    softwareStudent: "Software Engineering Student",
    studentDescription:
      "With a focus on Python, algorithms, and data structures. I emphasize practices such as SOLID, version control, and clean code.",
    aboutExperience:
      'Experience as a leader and co-leader in semi-professional teams both inside and outside the academic environment, contributing to small-scale projects, notably the "Passa a Bola" project currently.',
    areasOfInterest: "Areas of interest (Internship):",
    interestAreas:
      "Data Science, Data Analyst, Data Engineer, BI Analyst, or related fields.",
    languages: "Languages",
    portuguese: "Portuguese - Native (C2)",
    english: "English - Upper-Intermediate (B2+)",
    spanish: "Spanish - Beginner (A2)",

    // Timeline section
    careerHistory: "Experience",
    presalesIntern: "Pre-Sales Intern",
    descUnentelIntern:
      "• Solution Design\n" +
      "• Client Engagement\n" +
      "• Technical Presentations\n" +
      "• Front-End Development and Design",
    techLeader: "Technical Leader",
    academicProject: "(Academic Project)",
    fiapRespTitle: "Main responsibilities:",
    fiapRespList:
      " • Data modeling in Cloud Firestore and app architecture.\n" +
      " • Integration with public API for automatic updates of matches and players.\n" +
      " • Implementation of authentication via Firebase Auth and security rules in the database.\n" +
      " • Team and project leadership and organization.",
    fiapResultsTitle: " Indicators and results:",
    fiapResultsList:
      " • MVP delivered with complete integration (Login/Registration, Home page, Profile, Championships, Admin Panel, Geolocation, Cloud integration, and Multi-factor authentication)\n" +
      " • Reduction of up to 70% in manual work for clubs in data collection and consolidation (compared to spreadsheet-based processes), by automating ingestion and centralizing records.",

    dateTimeUnentel: "Nov/2025 - Present",
    dateTimeFiap: "Mar/2025 - Oct/2025",

    // Skills
    skillsTitle: "Skills",
    skillsList:
      "Python, PostgreSQL, MongoDB, Cloud Firestore, Pandas, NumPy, Matplotlib, Seaborn, Jupyter, Power BI, Excel, Git",

    // Navigation
    about: "About",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    contact: "Contact",

    // Contact
    contactMeTitle: "Contact Me",
    messagePlaceholder: "Send Message",
    namePlaceholder: "Your Name",
    emailphonePlaceholder: "Email / Phone",
    sendEmail: "Send",

    projectsTitle: "Projects",

    // Projeto 1
    project1Title: "Passa a Bola",
    project1ShortDesc:
      "A cross-platform app built with Flutter (Dart) and Firebase aimed at strengthening the female football ecosystem, connecting athletes, clubs, and fans in a single digital platform.",
    project1LongDesc:
      "Passa a Bola is an app designed to provide visibility and support to female football. Through athlete and club profiles, news feeds, real-time match data, and analysis tools, the project seeks to connect the entire value chain of the sport: athletes, clubs, fans, and scouts." +
      "\n\nDeveloped during an interdisciplinary academic challenge, the project applies agile methodologies, UML modeling, Git versioning, and best security practices in Firestore." +
      "\n\nProblem: The coverage and organization of female football data is fragmented, hindering talent discovery, competition monitoring, and audience engagement." +
      "\n\nSolution: A unified platform that:" +
      "\n • Centralizes athlete and club profiles and history," +
      "\n • Displays real-time match data through integrations with public APIs;" +
      "\n • Uses Firebase (Auth + Firestore) for secure authentication and scalable persistence;" +
      "\n • Simple and functional for ease of use.",

    project1RepoUrl: "https://github.com/Caioncaminha/passabola",
    project1ImgUrls:
      "https://media.licdn.com/dms/image/v2/D4D2DAQHZo5hCfNhADw/profile-treasury-image-shrink_1280_1280/B4DZonF_p7KQAQ-/0/1761592474640?e=1762286400&v=beta&t=yNYjgng-2LJlrSZVGqza-UNyp3_fZ9QP85YGL1oy7_E, " +
      "https://media.licdn.com/dms/image/v2/D4D2DAQEvn2ItohY42g/profile-treasury-image-shrink_1280_1280/B4DZonF8QpG8AQ-/0/1761592460809?e=1762286400&v=beta&t=xQIc37VEmVKo2FmGATpF6pJ8THqwCCDweB4JQQjWo1E, " +
      "https://media.licdn.com/dms/image/v2/D4D2DAQGTaI-GID5ThA/profile-treasury-image-shrink_8192_8192/B4DZonF164H4Ag-/0/1761592434864?e=1762286400&v=beta&t=sImwT0RBCyNf7bW6agGL83T6hYxzqv-KJcz3y0h8eKI, " +
      "https://media.licdn.com/dms/image/v2/D4D2DAQHO7kiEtWckxQ/profile-treasury-image-shrink_1920_1920/B4DZonFvI_GgAg-/0/1761592407040?e=1762286400&v=beta&t=WKyzg1rj7vAAxhJtkUabsYCbYU-f_JEABsgPHbr-3po, " +
      "https://media.licdn.com/dms/image/v2/D4D2DAQHFqY-IMqf9Tw/profile-treasury-image-shrink_8192_8192/B4DZonGC9HJEAg-/0/1761592488195?e=1762286400&v=beta&t=3USiu4RErxSXIxdKETOdqRzQhaeJVpuFGXVxHCPDXk8",
    project1Stack: "Flutter (Dart), NoSQL, Firebase (Auth) , Cloud Firestore, Git, Figma",

    // Projeto 2
    project2Title: "Python CLI Simulator",
    project2ShortDesc:
      "CLI (command-line interface) simulator in Python that manages a simple registration of athletes, clubs and matches for the Python discipline in the context of the Passa a Bola project.",
    project2LongDesc:
      "Implemented functionalities:" +
      "\n\nInput reading and validation" +
      "\n • read_non_empty(prompt) - " +
      "\n • read_positive_int(prompt) — requests a non-negative integer." +
      "\n • select_option(options, prompt, allow_blank=False) — presents a numbered list and validates the user's choice." +
      "\n\n Main operations (in-memory CRUD)" +
      "\n • cadastrar_atleta() — registers an athlete (name, age, position and affiliation to an existing club)." +
      "\n • cadastrar_clube() — creates a new club with a name, city, and an empty list of athletes." +
      "\n • registrar_partida() — records a match between two clubs (prevents the club from playing against itself) and stores the score." +
      "\n • listar_atletas(), listar_clubes(), listar_partidas() — display the records currently loaded into memory.",

    project2RepoUrl: "https://github.com/Caioncaminha/fourthsprintpython",
    project2ImgUrls:
      "https://i.imgur.com/poWubGH.png, https://i.imgur.com/NQjFIdE.png, https://i.imgur.com/tlTp0rx.png",
    project2Stack: "Python, JSON",

    // Projeto 3
    project3Title: "CRUD Web System",
    project3ShortDesc:
      "CRUD web system developed for information management of women's soccer players.",
    project3LongDesc:
      "CRUD (Create, Read, Update, Delete) web system developed for information management of women's soccer players." +
      "\nThe application allows you to register, view, edit and delete players, as well as advanced search, filtering and favorites features." +
      "\n\n Key Features:" +
      "\n • Player Registration - Add new players with complete information" +
      "\n • Listing in Cards - Organized view with photo, statistics and information" +
      "\n • Data Editing - Update existing player information" +
      "\n • Exclusion with Confirmation - Remove players" +
      "\n • Favorites System - Tag your favorite players" +
      "\n • Data Persistence - Data automatically saved to LocalStorage",

    project3RepoUrl: "https://github.com/Caioncaminha/cp1-webdev-crud",
    project3ImgUrls:
      "https://i.imgur.com/PQdcRjs.png, https://i.imgur.com/6OMY9Ul.png, https://i.imgur.com/OVo3gv6.png",
    project3Stack: "HTML5, CSS3, JavaScript, LocalStorage",

    // Botões do Modal
    seeDetails: "See Details",
    viewCode: "View Code",
  },
  pt: {
    // Education
    educationTitle: "Formação Acadêmica",
    degree: "Bacharelado em Engenharia de Software",
    university: "FIAP – 2º Semestre | Desenvolvedor Full-Stack e DevSecOps",
    graduation: "Conclusão prevista: Dez/2028",

    // Main
    role: "Engenheiro de Software",
    location: "São Paulo, SP, Brasil",

    downloadCV: "Baixar CV",

    // About
    aboutTitle: "Sobre Mim",
    softwareStudent: "Estudante de Engenharia de Software",
    studentDescription:
      "Com foco em Python, algoritmos e estruturas de dados. Enfatizo práticas como SOLID, controle de versão e código limpo.",
    aboutExperience:
      'Experiência como líder e co-líder em equipes semi-profissionais dentro e fora do ambiente acadêmico, contribuindo para projetos de pequena escala, notadamente o projeto "Passa a Bola" atualmente.',
    areasOfInterest: "Áreas de interesse (Estágio):",
    interestAreas:
      "Ciência de Dados, Analista de Dados, Engenheiro de Dados, Analista de BI ou áreas relacionadas.",
    languages: "Idiomas",
    portuguese: "Português - Nativo (C2)",
    english: "Inglês - Intermediário Avançado (B2+)",
    spanish: "Espanhol - Iniciante (A2)",

    // Timeline section
    careerHistory: "Experiência",
    presalesIntern: "Estagiário de Pré-Vendas",
    descUnentelIntern:
      "• Desenho de Soluções\n" +
      "• Engajamento com Clientes\n" +
      "• Apresentações Técnicas\n" +
      "• Desenvolvimento e Design Front-End",
    techLeader: "Líder Técnico",
    academicProject: "(Projeto Acadêmico)",
    fiapRespTitle: "Principais responsabilidades:",
    fiapRespList:
      "• Modelagem de dados no Cloud Firestore e arquitetura do aplicativo.\n" +
      "• Integração com API pública para atualização automática de partidas e jogadoras.\n" +
      "• Implementação de autenticação via Firebase Auth e regras de segurança no banco.\n" +
      "• Liderança e organização da equipe e do projeto.",
    fiapResultsTitle: "Indicadores e resultados:",
    fiapResultsList:
      "• MVP entregue com integração completa (Login/Cadastro, Home page, Perfil, Campenatos, Painel Admin, Geolocalização, integração com Cloud e Autenticação multi-fatores)\n" +
      "• Redução de até 70% no trabalho manual de clubes na coleta e consolidação de dados (comparado a processos baseados em planilhas), por automatizar ingestão e centralizar registros.",

    dateTimeUnentel: "Nov/2025 - Presente",
    dateTimeFiap: "Mar/2025 - Out/2025",

    // Skills
    skillsTitle: "Habilidades",
    skillsList:
      "Python, PostgreSQL, MongoDB, Cloud Firestore, Pandas, NumPy, Matplotlib, Seaborn, Jupyter, Power BI, Excel, Git",

    // Navigation
    about: "Sobre",
    experience: "Experiência",
    projects: "Projetos",
    education: "Formação",
    contact: "Contato",

    // Contact
    contactMeTitle: "Contato",
    messagePlaceholder: "Enviar Mensagem",
    namePlaceholder: "Seu Nome",
    emailphonePlaceholder: "Email / Celular",
    sendEmail: "Enviar",

    projectsTitle: "Projetos",

    // Projeto 1
    project1Title: "Passa a Bola",
    project1ShortDesc:
      "Um aplicativo multiplataforma construído com Flutter (Dart) e Firebase com o objetivo de fortalecer o ecossistema do futebol feminino, conectando atletas, clubes e torcedores em uma única plataforma digital.",
    project1LongDesc:
      "O Passa a Bola é um aplicativo pensado para dar visibilidade e suporte ao futebol feminino. Através de perfis de atletas e clubes, feed de notícias, dados de partidas em tempo real e ferramentas para análise o projeto busca conectar toda a cadeia de valor do esporte: atletas, clubes, torcedores e olheiros." +
      "\n\nDesenvolvido durante um desafio acadêmico interdisciplinar, o projeto aplica metodologias ágeis, modelagem UML, versionamento Git e boas práticas de segurança no Firestore." +
      "\n\nProblema: a cobertura e organização de dados do futebol feminino é fragmentada, prejudicando descoberta de talento, monitoramento de competições e engajamento de público." +
      "\n\nSolução: plataforma unificada que:" +
      "\n • Centraliza perfis e histórico de atletas e clubes," +
      "\n • Exibe dados de partidas em tempo real através de integrações com APIs públicas;" +
      "\n • Usa Firebase (Auth + Firestore) para autenticação segura e persistência escalável;" +
      "\n • Simples e funcional para facilidade de uso.",
    project1RepoUrl: "https://github.com/Caioncaminha/passabola",
    project1ImgUrls:
      "https://media.licdn.com/dms/image/v2/D4D2DAQHZo5hCfNhADw/profile-treasury-image-shrink_1280_1280/B4DZonF_p7KQAQ-/0/1761592474640?e=1762286400&v=beta&t=yNYjgng-2LJlrSZVGqza-UNyp3_fZ9QP85YGL1oy7_E, " +
      "https://media.licdn.com/dms/image/v2/D4D2DAQEvn2ItohY42g/profile-treasury-image-shrink_1280_1280/B4DZonF8QpG8AQ-/0/1761592460809?e=1762286400&v=beta&t=xQIc37VEmVKo2FmGATpF6pJ8THqwCCDweB4JQQjWo1E, " +
      "https://media.licdn.com/dms/image/v2/D4D2DAQGTaI-GID5ThA/profile-treasury-image-shrink_8192_8192/B4DZonF164H4Ag-/0/1761592434864?e=1762286400&v=beta&t=sImwT0RBCyNf7bW6agGL83T6hYxzqv-KJcz3y0h8eKI, " +
      "https://media.licdn.com/dms/image/v2/D4D2DAQHO7kiEtWckxQ/profile-treasury-image-shrink_1920_1920/B4DZonFvI_GgAg-/0/1761592407040?e=1762286400&v=beta&t=WKyzg1rj7vAAxhJtkUabsYCbYU-f_JEABsgPHbr-3po, " +
      "https://media.licdn.com/dms/image/v2/D4D2DAQHFqY-IMqf9Tw/profile-treasury-image-shrink_8192_8192/B4DZonGC9HJEAg-/0/1761592488195?e=1762286400&v=beta&t=3USiu4RErxSXIxdKETOdqRzQhaeJVpuFGXVxHCPDXk8",
    project1Stack:
      "Flutter (Dart), NoSQL, Firebase (Auth) , Cloud Firestore, Git, Figma",

    // Projeto 2
    project2Title: "Simulador CLI em Python",
    project2ShortDesc:
      "Simulador CLI (command-line interface) em Python que gerencia um cadastro simples de atletas, clubes e partidas para a disciplina de Python no contexto do projeto Passa a Bola.",
    project2LongDesc:
      "Funcionalidades implementadas:" +
      "\n\n Leitura e validação de entrada" +
      "\n • read_non_empty(prompt) — solicita texto não-vazio e rejeita entradas numéricas." +
      "\n • read_positive_int(prompt) — solicita um inteiro não-negativo." +
      "\n • select_option(options, prompt, allow_blank=False) — apresenta uma lista numerada e valida a escolha do usuário." +
      "\n\n Operações principais (CRUD em memória)" +
      "\n • cadastrar_atleta() — cadastra uma atleta (nome, idade, posição e vínculo a um clube existente)." +
      "\n • cadastrar_clube() — cria um novo clube com nome, cidade e uma lista vazia de atletas." +
      "\n • registrar_partida() — registra uma partida entre dois clubes (impede que o clube jogue contra si mesmo) e armazena o placar." +
      "\n • listar_atletas(), listar_clubes(), listar_partidas() — exibem os registros atualmente carregados em memória.",

    project2RepoUrl: "https://github.com/Caioncaminha/fourthsprintpython",
    project2ImgUrls:
      "https://i.imgur.com/poWubGH.png, https://i.imgur.com/NQjFIdE.png, https://i.imgur.com/tlTp0rx.png",
    project2Stack: "Python, JSON",

    // Projeto 3
    project3Title: "Sistema Web CRUD",
    project3ShortDesc:
      "Sistema web CRUD desenvolvido para gerenciamento de informações de jogadoras de futebol feminino.",
    project3LongDesc:
      "Sistema web CRUD (Create, Read, Update, Delete) desenvolvido para gerenciamento de informações de jogadoras de futebol feminino." +
      "\nA aplicação permite cadastrar, visualizar, editar e excluir jogadoras, além de recursos avançados de busca, filtragem e favoritos." +
      "\n\n Funcionalidades Principais:" +
      "\n • Cadastro de Jogadoras - Adicione novas jogadoras com informações completas" +
      "\n • Listagem em Cards - Visualização organizada com foto, estatísticas e informações" +
      "\n • Edição de Dados - Atualize informações de jogadoras existentes" +
      "\n • Exclusão com Confirmação - Remova jogadoras" +
      "\n • Sistema de Favoritos - Marque suas jogadoras preferidas" +
      "\n • Persistência de Dados - Dados salvos automaticamente no LocalStorage",

    project3RepoUrl: "https://github.com/Caioncaminha/cp1-webdev-crud",
    project3ImgUrls:
      "https://i.imgur.com/PQdcRjs.png, https://i.imgur.com/6OMY9Ul.png, https://i.imgur.com/OVo3gv6.png",
    project3Stack: "HTML5, CSS3, JavaScript, LocalStorage",

    // Botões do Modal
    seeDetails: "Ver Detalhes",
    viewCode: "Ver Código",
  },
};
