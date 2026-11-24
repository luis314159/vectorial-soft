import {
  servicesEn,
  servicesEs,
  servicesPt,
  servicesDe,
  processEn,
  processEs,
  processPt,
  processDe,
} from "./servicesCopy";
import type { ServicesCopy, ProcessCopy } from "./servicesCopy";
import { examplesEn, examplesEs, examplesPt, examplesDe } from "./examplesCopy";
import type { ExamplesCopy } from "./examplesCopy";

export type Lang = "en" | "es" | "pt" | "de";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "de", label: "Deutsch" },
];

export interface ProjectCopy {
  title: string;
  description: string;
}

export interface Translation {
  nav: {
    services: string;
    process: string;
    work: string;
    founders: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    titleA: string;
    titleAccent: string;
    titleB: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
    audiencePrompt: string;
    stackLabel: string;
  };
  services: ServicesCopy;
  process: ProcessCopy;
  examples: ExamplesCopy;
  work: {
    kicker: string;
    title: string;
    subtitle: string;
    projects: ProjectCopy[];
  };
  founders: {
    kicker: string;
    title: string;
    subtitle: string;
    luisRole: string;
    luisBio: string;
    marcoRole: string;
    marcoBio: string;
    adelaRole: string;
    adelaBio: string;
    website: string;
    email: string;
    adelaAward: string;
    adelaAwardDetail: string;
    awardLink: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    whatsappLabel: string;
    whatsappMessage: string;
    whatsappFloat: string;
    location: string;
    remote: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
}

const en: Translation = {
  nav: {
    services: "Services",
    process: "How we work",
    work: "Work",
    founders: "Founders",
    contact: "Contact",
    cta: "Start a project",
  },
  hero: {
    badge: "AI & Full-Stack Engineering Studio",
    titleA: "Intelligent software,",
    titleAccent: "engineered",
    titleB: "to production.",
    subtitle:
      "From local businesses to manufacturing plants: we design and ship software, AI systems and digital solutions that work in the real world — built with the same engineering standard we use in production.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See our work",
    stats: [
      { value: "15+", label: "Years of combined experience" },
      { value: "20+", label: "Systems in production" },
      { value: "5", label: "Industries served" },
      { value: "4", label: "Languages we speak" },
    ],
    audiencePrompt: "What kind of business do you have?",
    stackLabel: "Technologies & platforms we work with",
  },
  services: servicesEn,
  process: processEn,
  examples: examplesEn,
  work: {
    kicker: "Selected work",
    title: "Systems running in the real world.",
    subtitle:
      "A selection of platforms we have designed, built and operate in production.",
    projects: [
      {
        title: "Multi-Tenant Enterprise AI Assistant",
        description:
          "Chat platform with multi-provider LLM routing and a modular MCP server architecture for extensible business-system integrations.",
      },
      {
        title: "Enterprise RAG & Document Vault",
        description:
          "Document management and semantic search with multi-format parsing and team-based access control.",
      },
      {
        title: "Real-Time Vision for Production Lines",
        description:
          "YOLO inference on Raspberry Pi edge nodes with a streaming backend and a live dashboard for plant-wide monitoring.",
      },
      {
        title: "Autonomous Retail Vision & MLOps",
        description:
          "Multi-camera product detection with full MLOps on AWS: ephemeral training, auto-labeling and zero-downtime model hot-swap.",
      },
      {
        title: "MES for an Electric-Transformer Plant",
        description:
          "End-to-end manufacturing execution system covering production, quality and traceability, deployed on Kubernetes.",
      },
      {
        title: "Rust API Gateway & Identity Server",
        description:
          "High-performance gateway with JWT/JWKS, rate limiting and circuit breaking, plus a self-hosted OIDC identity foundation.",
      },
    ],
  },
  founders: {
    kicker: "The founders",
    title: "Three engineers, one standard: excellence.",
    subtitle:
      "We build every system as if we had to operate it ourselves — because we usually do.",
    luisRole: "Co-Founder · AI & Software Engineer",
    luisBio:
      "7+ years building production systems across LLMs, computer vision, full-stack web, identity and industrial automation. M.Sc. in Computer Engineering, AI developer in the automotive industry and lecturer at La Salle Chihuahua.",
    marcoRole: "Co-Founder · Machine Learning Engineer",
    marcoBio:
      "ML engineer focused on MLOps and cloud infrastructure on AWS — taking models from experimentation to production at scale. Computer Science and Physics engineer (UACH), builder of autonomous-retail vision systems and end-to-end MLOps platforms.",
    adelaRole: "Co-Founder · Full-Stack & UX Engineer",
    adelaBio:
      "Full-stack developer specialized in Human-Computer Interaction (M.Sc., UACH). Has built administrative and financial platforms with React, Angular and PHP/Laravel over PostgreSQL and SQL Server, and brings UX research, usability testing and interface design (Figma) to every product. Published author and conference speaker on virtual assistants and virtual environments for the emotional support of children with autism, and a mentor in virtual reality development with Unity.",
    website: "Website",
    email: "Email",
    adelaAward: "1st place · National Thesis Contest ANIEI 2026",
    adelaAwardDetail: "For a virtual-reality assistance pet that helps children with autism recognize emotions.",
    awardLink: "Read the news",
  },
  contact: {
    kicker: "Contact",
    title: "Let's build something that lasts.",
    subtitle:
      "Tell us about your project or the problem you need solved. We usually reply within 24 hours.",
    emailLabel: "Write to us",
    whatsappLabel: "Message us on WhatsApp",
    whatsappMessage: "Hi Vectorial Soft! I would like to talk about a project.",
    whatsappFloat: "Chat on WhatsApp",
    location: "Chihuahua, México",
    remote: "Working with clients worldwide",
  },
  footer: {
    tagline: "AI & full-stack engineering, from concept to production.",
    rights: "All rights reserved.",
  },
};

const es: Translation = {
  nav: {
    services: "Servicios",
    process: "Cómo trabajamos",
    work: "Proyectos",
    founders: "Fundadores",
    contact: "Contacto",
    cta: "Iniciar un proyecto",
  },
  hero: {
    badge: "Estudio de Ingeniería en AI & Full-Stack",
    titleA: "Software inteligente,",
    titleAccent: "diseñado",
    titleB: "para producción.",
    subtitle:
      "De negocios locales a plantas de manufactura: diseñamos y entregamos software, sistemas de AI y soluciones digitales que funcionan en el mundo real — con el mismo estándar de ingeniería que usamos en producción.",
    ctaPrimary: "Iniciar un proyecto",
    ctaSecondary: "Ver proyectos",
    stats: [
      { value: "15+", label: "Años de experiencia combinada" },
      { value: "20+", label: "Sistemas en producción" },
      { value: "5", label: "Industrias atendidas" },
      { value: "4", label: "Idiomas que hablamos" },
    ],
    audiencePrompt: "¿Qué tipo de negocio tienes?",
    stackLabel: "Tecnologías y plataformas con las que trabajamos",
  },
  services: servicesEs,
  process: processEs,
  examples: examplesEs,
  work: {
    kicker: "Proyectos seleccionados",
    title: "Sistemas funcionando en el mundo real.",
    subtitle:
      "Una selección de plataformas que hemos diseñado, construido y operamos en producción.",
    projects: [
      {
        title: "Asistente de AI Empresarial Multi-Tenant",
        description:
          "Plataforma de chat con enrutamiento multi-proveedor de LLMs y arquitectura modular de servidores MCP para integraciones extensibles con sistemas de negocio.",
      },
      {
        title: "RAG Empresarial y Bóveda de Documentos",
        description:
          "Gestión documental y búsqueda semántica con parsing multi-formato y control de acceso por equipos.",
      },
      {
        title: "Visión en Tiempo Real para Líneas de Producción",
        description:
          "Inferencia YOLO en nodos edge Raspberry Pi con backend de streaming y dashboard en vivo para monitoreo de toda la planta.",
      },
      {
        title: "Visión para Retail Autónomo y MLOps",
        description:
          "Detección de productos multi-cámara con MLOps completo en AWS: entrenamiento efímero, auto-etiquetado y hot-swap de modelos sin downtime.",
      },
      {
        title: "MES para Planta de Transformadores Eléctricos",
        description:
          "Sistema de ejecución de manufactura de extremo a extremo: producción, calidad y trazabilidad, desplegado en Kubernetes.",
      },
      {
        title: "API Gateway en Rust y Servidor de Identidad",
        description:
          "Gateway de alto rendimiento con JWT/JWKS, rate limiting y circuit breaking, más una base de identidad OIDC self-hosted.",
      },
    ],
  },
  founders: {
    kicker: "Los fundadores",
    title: "Tres ingenieros, un estándar: excelencia.",
    subtitle:
      "Construimos cada sistema como si tuviéramos que operarlo nosotros mismos — porque usualmente así es.",
    luisRole: "Co-Fundador · Ingeniero de AI & Software",
    luisBio:
      "Más de 7 años construyendo sistemas en producción: LLMs, visión por computadora, web full-stack, identidad y automatización industrial. Maestro en Ingeniería en Computación, desarrollador de AI en la industria automotriz y catedrático en La Salle Chihuahua.",
    marcoRole: "Co-Fundador · Ingeniero de Machine Learning",
    marcoBio:
      "Ingeniero de ML enfocado en MLOps e infraestructura cloud en AWS — llevando modelos de la experimentación a producción a escala. Ingeniero en Ciencias de la Computación y en Física (UACH), creador de sistemas de visión para retail autónomo y plataformas MLOps de extremo a extremo.",
    adelaRole: "Co-Fundadora · Ingeniera Full-Stack & UX",
    adelaBio:
      "Desarrolladora full-stack especializada en Interacción Humano-Computadora (Maestría, UACH). Ha construido plataformas administrativas y financieras con React, Angular y PHP/Laravel sobre PostgreSQL y SQL Server, y aporta investigación UX, pruebas de usabilidad y diseño de interfaces (Figma) a cada producto. Autora de publicaciones y ponente en congresos sobre asistentes y entornos virtuales para el apoyo emocional de niños con autismo, y mentora en desarrollo de realidad virtual con Unity.",
    website: "Sitio web",
    email: "Correo",
    adelaAward: "1er lugar · Certamen Nacional de Tesis ANIEI 2026",
    adelaAwardDetail: "Por una mascota de asistencia en realidad virtual que ayuda a niñas y niños con autismo a reconocer emociones.",
    awardLink: "Ver la noticia",
  },
  contact: {
    kicker: "Contacto",
    title: "Construyamos algo que perdure.",
    subtitle:
      "Cuéntanos de tu proyecto o del problema que necesitas resolver. Normalmente respondemos en menos de 24 horas.",
    emailLabel: "Escríbenos",
    whatsappLabel: "Escríbenos por WhatsApp",
    whatsappMessage: "¡Hola, Vectorial Soft! Me gustaría platicar sobre un proyecto.",
    whatsappFloat: "Escríbenos por WhatsApp",
    location: "Chihuahua, México",
    remote: "Trabajamos con clientes en todo el mundo",
  },
  footer: {
    tagline: "Ingeniería en AI y full-stack, del concepto a producción.",
    rights: "Todos los derechos reservados.",
  },
};

const pt: Translation = {
  nav: {
    services: "Serviços",
    process: "Como trabalhamos",
    work: "Projetos",
    founders: "Fundadores",
    contact: "Contato",
    cta: "Iniciar um projeto",
  },
  hero: {
    badge: "Estúdio de Engenharia em AI & Full-Stack",
    titleA: "Software inteligente,",
    titleAccent: "projetado",
    titleB: "para produção.",
    subtitle:
      "De negócios locais a fábricas: projetamos e entregamos software, sistemas de AI e soluções digitais que funcionam no mundo real — com o mesmo padrão de engenharia que usamos em produção.",
    ctaPrimary: "Iniciar um projeto",
    ctaSecondary: "Ver projetos",
    stats: [
      { value: "15+", label: "Anos de experiência combinada" },
      { value: "20+", label: "Sistemas em produção" },
      { value: "5", label: "Indústrias atendidas" },
      { value: "4", label: "Idiomas que falamos" },
    ],
    audiencePrompt: "Qual é o seu tipo de negócio?",
    stackLabel: "Tecnologias e plataformas com que trabalhamos",
  },
  services: servicesPt,
  process: processPt,
  examples: examplesPt,
  work: {
    kicker: "Projetos selecionados",
    title: "Sistemas funcionando no mundo real.",
    subtitle:
      "Uma seleção de plataformas que projetamos, construímos e operamos em produção.",
    projects: [
      {
        title: "Assistente de AI Corporativo Multi-Tenant",
        description:
          "Plataforma de chat com roteamento multi-provedor de LLMs e arquitetura modular de servidores MCP para integrações extensíveis com sistemas de negócio.",
      },
      {
        title: "RAG Corporativo e Cofre de Documentos",
        description:
          "Gestão de documentos e busca semântica com parsing multi-formato e controle de acesso por equipes.",
      },
      {
        title: "Visão em Tempo Real para Linhas de Produção",
        description:
          "Inferência YOLO em nós edge Raspberry Pi com backend de streaming e dashboard ao vivo para monitoramento de toda a fábrica.",
      },
      {
        title: "Visão para Varejo Autônomo e MLOps",
        description:
          "Detecção de produtos multi-câmera com MLOps completo na AWS: treinamento efêmero, auto-rotulagem e hot-swap de modelos sem downtime.",
      },
      {
        title: "MES para Fábrica de Transformadores Elétricos",
        description:
          "Sistema de execução de manufatura de ponta a ponta: produção, qualidade e rastreabilidade, implantado em Kubernetes.",
      },
      {
        title: "API Gateway em Rust e Servidor de Identidade",
        description:
          "Gateway de alta performance com JWT/JWKS, rate limiting e circuit breaking, além de uma base de identidade OIDC self-hosted.",
      },
    ],
  },
  founders: {
    kicker: "Os fundadores",
    title: "Três engenheiros, um padrão: excelência.",
    subtitle:
      "Construímos cada sistema como se tivéssemos que operá-lo nós mesmos — porque geralmente é assim.",
    luisRole: "Co-Fundador · Engenheiro de AI & Software",
    luisBio:
      "Mais de 7 anos construindo sistemas em produção: LLMs, visão computacional, web full-stack, identidade e automação industrial. Mestre em Engenharia de Computação, desenvolvedor de AI na indústria automotiva e professor na La Salle Chihuahua.",
    marcoRole: "Co-Fundador · Engenheiro de Machine Learning",
    marcoBio:
      "Engenheiro de ML focado em MLOps e infraestrutura cloud na AWS — levando modelos da experimentação à produção em escala. Engenheiro em Ciência da Computação e em Física (UACH), criador de sistemas de visão para varejo autônomo e plataformas MLOps de ponta a ponta.",
    adelaRole: "Co-Fundadora · Engenheira Full-Stack & UX",
    adelaBio:
      "Desenvolvedora full-stack especializada em Interação Humano-Computador (Mestrado, UACH). Construiu plataformas administrativas e financeiras com React, Angular e PHP/Laravel sobre PostgreSQL e SQL Server, e traz pesquisa de UX, testes de usabilidade e design de interfaces (Figma) para cada produto. Autora de publicações e palestrante em congressos sobre assistentes e ambientes virtuais para o apoio emocional de crianças com autismo, e mentora em desenvolvimento de realidade virtual com Unity.",
    website: "Site",
    email: "E-mail",
    adelaAward: "1º lugar · Concurso Nacional de Teses ANIEI 2026",
    adelaAwardDetail: "Por um pet de assistência em realidade virtual que ajuda crianças com autismo a reconhecer emoções.",
    awardLink: "Ver a notícia",
  },
  contact: {
    kicker: "Contato",
    title: "Vamos construir algo que dure.",
    subtitle:
      "Conte-nos sobre o seu projeto ou o problema que você precisa resolver. Normalmente respondemos em menos de 24 horas.",
    emailLabel: "Escreva para nós",
    whatsappLabel: "Fale conosco no WhatsApp",
    whatsappMessage: "Olá, Vectorial Soft! Gostaria de conversar sobre um projeto.",
    whatsappFloat: "Fale no WhatsApp",
    location: "Chihuahua, México",
    remote: "Trabalhamos com clientes no mundo todo",
  },
  footer: {
    tagline: "Engenharia em AI e full-stack, do conceito à produção.",
    rights: "Todos os direitos reservados.",
  },
};

const de: Translation = {
  nav: {
    services: "Leistungen",
    process: "So arbeiten wir",
    work: "Projekte",
    founders: "Gründer",
    contact: "Kontakt",
    cta: "Projekt starten",
  },
  hero: {
    badge: "AI & Full-Stack Engineering Studio",
    titleA: "Intelligente Software,",
    titleAccent: "entwickelt",
    titleB: "für die Produktion.",
    subtitle:
      "Vom lokalen Geschäft bis zum Produktionswerk: Wir entwerfen und liefern Software, KI-Systeme und digitale Lösungen, die in der realen Welt funktionieren — mit demselben Engineering-Standard, den wir in der Produktion einsetzen.",
    ctaPrimary: "Projekt starten",
    ctaSecondary: "Unsere Projekte",
    stats: [
      { value: "15+", label: "Jahre kombinierte Erfahrung" },
      { value: "20+", label: "Systeme in Produktion" },
      { value: "5", label: "Bediente Branchen" },
      { value: "4", label: "Sprachen, die wir sprechen" },
    ],
    audiencePrompt: "Welche Art von Unternehmen haben Sie?",
    stackLabel: "Technologien & Plattformen, mit denen wir arbeiten",
  },
  services: servicesDe,
  process: processDe,
  examples: examplesDe,
  work: {
    kicker: "Ausgewählte Projekte",
    title: "Systeme, die in der realen Welt laufen.",
    subtitle:
      "Eine Auswahl von Plattformen, die wir entworfen, gebaut und in Produktion betrieben haben.",
    projects: [
      {
        title: "Multi-Tenant Enterprise-AI-Assistent",
        description:
          "Chat-Plattform mit Multi-Provider-LLM-Routing und modularer MCP-Server-Architektur für erweiterbare Integrationen mit Geschäftssystemen.",
      },
      {
        title: "Enterprise RAG & Dokumenten-Vault",
        description:
          "Dokumentenmanagement und semantische Suche mit Multi-Format-Parsing und teambasierter Zugriffskontrolle.",
      },
      {
        title: "Echtzeit-Vision für Produktionslinien",
        description:
          "YOLO-Inferenz auf Raspberry-Pi-Edge-Nodes mit Streaming-Backend und Live-Dashboard für die werksweite Überwachung.",
      },
      {
        title: "Autonomous Retail Vision & MLOps",
        description:
          "Multi-Kamera-Produkterkennung mit vollständigem MLOps auf AWS: ephemeres Training, Auto-Labeling und Modell-Hot-Swap ohne Ausfallzeit.",
      },
      {
        title: "MES für ein Transformatorenwerk",
        description:
          "End-to-End Manufacturing Execution System für Produktion, Qualität und Rückverfolgbarkeit, deployed auf Kubernetes.",
      },
      {
        title: "Rust API-Gateway & Identity-Server",
        description:
          "Hochperformantes Gateway mit JWT/JWKS, Rate Limiting und Circuit Breaking, plus selbstgehostete OIDC-Identity-Basis.",
      },
    ],
  },
  founders: {
    kicker: "Die Gründer",
    title: "Drei Ingenieure, ein Standard: Exzellenz.",
    subtitle:
      "Wir bauen jedes System so, als müssten wir es selbst betreiben — denn meistens tun wir das auch.",
    luisRole: "Mitgründer · AI- & Software-Ingenieur",
    luisBio:
      "Über 7 Jahre Erfahrung mit Produktionssystemen: LLMs, Computer Vision, Full-Stack-Web, Identity und industrielle Automatisierung. M.Sc. in Computer Engineering, AI-Entwickler in der Automobilindustrie und Dozent an der La Salle Chihuahua.",
    marcoRole: "Mitgründer · Machine-Learning-Ingenieur",
    marcoBio:
      "ML-Ingenieur mit Fokus auf MLOps und Cloud-Infrastruktur auf AWS — von der Experimentierphase bis zur Produktion im großen Maßstab. Ingenieur für Informatik und Physik (UACH), Entwickler von Vision-Systemen für autonomen Einzelhandel und End-to-End-MLOps-Plattformen.",
    adelaRole: "Mitgründerin · Full-Stack- & UX-Ingenieurin",
    adelaBio:
      "Full-Stack-Entwicklerin mit Spezialisierung auf Mensch-Computer-Interaktion (M.Sc., UACH). Hat Verwaltungs- und Finanzplattformen mit React, Angular und PHP/Laravel auf PostgreSQL und SQL Server gebaut und bringt UX-Research, Usability-Tests und Interface-Design (Figma) in jedes Produkt ein. Autorin und Konferenz-Speakerin zu virtuellen Assistenten und virtuellen Umgebungen für die emotionale Unterstützung autistischer Kinder sowie Mentorin für Virtual-Reality-Entwicklung mit Unity.",
    website: "Website",
    email: "E-Mail",
    adelaAward: "1. Platz · Nationaler Thesis-Wettbewerb ANIEI 2026",
    adelaAwardDetail: "Für ein Virtual-Reality-Assistenztier, das Kindern mit Autismus hilft, Emotionen zu erkennen.",
    awardLink: "Zum Artikel",
  },
  contact: {
    kicker: "Kontakt",
    title: "Lassen Sie uns etwas Bleibendes bauen.",
    subtitle:
      "Erzählen Sie uns von Ihrem Projekt oder dem Problem, das Sie lösen möchten. Wir antworten in der Regel innerhalb von 24 Stunden.",
    emailLabel: "Schreiben Sie uns",
    whatsappLabel: "Per WhatsApp schreiben",
    whatsappMessage: "Hallo Vectorial Soft! Ich möchte über ein Projekt sprechen.",
    whatsappFloat: "Per WhatsApp schreiben",
    location: "Chihuahua, Mexiko",
    remote: "Wir arbeiten mit Kunden weltweit",
  },
  footer: {
    tagline: "AI- & Full-Stack-Engineering, vom Konzept bis zur Produktion.",
    rights: "Alle Rechte vorbehalten.",
  },
};

export const translations: Record<Lang, Translation> = { en, es, pt, de };
