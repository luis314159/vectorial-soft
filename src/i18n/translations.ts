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
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string; points: string[] }[];
  };
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
    website: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    emailLabel: string;
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
      "We design and ship production-grade AI systems, web platforms and data infrastructure for companies that need software to work in the real world — from the cloud to the factory floor.",
    ctaPrimary: "Start a project",
    ctaSecondary: "See our work",
    stats: [
      { value: "10+", label: "Years of combined experience" },
      { value: "20+", label: "Systems in production" },
      { value: "5", label: "Industries served" },
      { value: "4", label: "Languages we speak" },
    ],
  },
  services: {
    kicker: "What we do",
    title: "Full-cycle engineering, four disciplines.",
    subtitle:
      "From the first architectural sketch to monitored systems in production — we own the whole lifecycle.",
    items: [
      {
        title: "AI & Machine Learning",
        description:
          "LLM applications, computer vision and forecasting — built as products, not experiments.",
        points: [
          "RAG pipelines, agents & MCP integrations",
          "Computer vision on the edge (YOLO, ONNX)",
          "Demand forecasting & predictive models",
        ],
      },
      {
        title: "Full-Stack Development",
        description:
          "Web platforms, dashboards, APIs and mobile apps with clean architecture that scales.",
        points: [
          "React & React Native frontends",
          "FastAPI, Django and Rust (Axum) backends",
          "Identity, SSO & enterprise integrations",
        ],
      },
      {
        title: "Data & Cloud Infrastructure",
        description:
          "Streaming pipelines and MLOps platforms that keep models and data flowing reliably.",
        points: [
          "CDC & streaming: Kafka, ClickHouse, Redis",
          "MLOps on AWS & Azure: MLflow, auto-labeling",
          "Docker, Kubernetes & observability",
        ],
      },
      {
        title: "Industrial & Manufacturing Software",
        description:
          "Software that talks to the plant floor — born from years inside real factories.",
        points: [
          "MES: production, quality & traceability",
          "SPC analytics & real-time monitoring",
          "Edge vision systems on production lines",
        ],
      },
    ],
  },
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
    title: "Two engineers, one standard: excellence.",
    subtitle:
      "We build every system as if we had to operate it ourselves — because we usually do.",
    luisRole: "Co-Founder · AI & Software Engineer",
    luisBio:
      "7+ years building production systems across LLMs, computer vision, full-stack web, identity and industrial automation. M.Sc. in Computer Engineering, AI developer in the automotive industry and lecturer at La Salle Chihuahua.",
    marcoRole: "Co-Founder · Machine Learning Engineer",
    marcoBio:
      "ML engineer focused on MLOps and cloud infrastructure on AWS — taking models from experimentation to production at scale. Computer Science and Physics engineer (UACH), builder of autonomous-retail vision systems and end-to-end MLOps platforms.",
    website: "Website",
  },
  contact: {
    kicker: "Contact",
    title: "Let's build something that lasts.",
    subtitle:
      "Tell us about your project or the problem you need solved. We usually reply within 24 hours.",
    emailLabel: "Write to us",
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
      "Diseñamos y entregamos sistemas de AI, plataformas web e infraestructura de datos de nivel productivo, para empresas que necesitan que el software funcione en el mundo real — de la nube al piso de planta.",
    ctaPrimary: "Iniciar un proyecto",
    ctaSecondary: "Ver proyectos",
    stats: [
      { value: "10+", label: "Años de experiencia combinada" },
      { value: "20+", label: "Sistemas en producción" },
      { value: "5", label: "Industrias atendidas" },
      { value: "4", label: "Idiomas que hablamos" },
    ],
  },
  services: {
    kicker: "Qué hacemos",
    title: "Ingeniería de ciclo completo, cuatro disciplinas.",
    subtitle:
      "Desde el primer diseño de arquitectura hasta sistemas monitoreados en producción — nos hacemos cargo de todo el ciclo de vida.",
    items: [
      {
        title: "AI & Machine Learning",
        description:
          "Aplicaciones con LLMs, visión por computadora y pronósticos — construidos como productos, no como experimentos.",
        points: [
          "Pipelines RAG, agentes e integraciones MCP",
          "Visión por computadora en el edge (YOLO, ONNX)",
          "Pronóstico de demanda y modelos predictivos",
        ],
      },
      {
        title: "Desarrollo Full-Stack",
        description:
          "Plataformas web, dashboards, APIs y apps móviles con arquitectura limpia que escala.",
        points: [
          "Frontends en React y React Native",
          "Backends en FastAPI, Django y Rust (Axum)",
          "Identidad, SSO e integraciones empresariales",
        ],
      },
      {
        title: "Datos e Infraestructura Cloud",
        description:
          "Pipelines de streaming y plataformas MLOps que mantienen modelos y datos fluyendo con confiabilidad.",
        points: [
          "CDC y streaming: Kafka, ClickHouse, Redis",
          "MLOps en AWS y Azure: MLflow, auto-etiquetado",
          "Docker, Kubernetes y observabilidad",
        ],
      },
      {
        title: "Software Industrial y de Manufactura",
        description:
          "Software que habla con el piso de planta — nacido de años dentro de fábricas reales.",
        points: [
          "MES: producción, calidad y trazabilidad",
          "Analítica SPC y monitoreo en tiempo real",
          "Sistemas de visión en líneas de producción",
        ],
      },
    ],
  },
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
    title: "Dos ingenieros, un estándar: excelencia.",
    subtitle:
      "Construimos cada sistema como si tuviéramos que operarlo nosotros mismos — porque usualmente así es.",
    luisRole: "Co-Fundador · Ingeniero de AI & Software",
    luisBio:
      "Más de 7 años construyendo sistemas en producción: LLMs, visión por computadora, web full-stack, identidad y automatización industrial. Maestro en Ingeniería en Computación, desarrollador de AI en la industria automotriz y catedrático en La Salle Chihuahua.",
    marcoRole: "Co-Fundador · Ingeniero de Machine Learning",
    marcoBio:
      "Ingeniero de ML enfocado en MLOps e infraestructura cloud en AWS — llevando modelos de la experimentación a producción a escala. Ingeniero en Ciencias de la Computación y en Física (UACH), creador de sistemas de visión para retail autónomo y plataformas MLOps de extremo a extremo.",
    website: "Sitio web",
  },
  contact: {
    kicker: "Contacto",
    title: "Construyamos algo que perdure.",
    subtitle:
      "Cuéntanos de tu proyecto o del problema que necesitas resolver. Normalmente respondemos en menos de 24 horas.",
    emailLabel: "Escríbenos",
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
      "Projetamos e entregamos sistemas de AI, plataformas web e infraestrutura de dados de nível produtivo, para empresas que precisam que o software funcione no mundo real — da nuvem ao chão de fábrica.",
    ctaPrimary: "Iniciar um projeto",
    ctaSecondary: "Ver projetos",
    stats: [
      { value: "10+", label: "Anos de experiência combinada" },
      { value: "20+", label: "Sistemas em produção" },
      { value: "5", label: "Indústrias atendidas" },
      { value: "4", label: "Idiomas que falamos" },
    ],
  },
  services: {
    kicker: "O que fazemos",
    title: "Engenharia de ciclo completo, quatro disciplinas.",
    subtitle:
      "Do primeiro desenho de arquitetura a sistemas monitorados em produção — cuidamos de todo o ciclo de vida.",
    items: [
      {
        title: "AI & Machine Learning",
        description:
          "Aplicações com LLMs, visão computacional e previsão — construídas como produtos, não como experimentos.",
        points: [
          "Pipelines RAG, agentes e integrações MCP",
          "Visão computacional no edge (YOLO, ONNX)",
          "Previsão de demanda e modelos preditivos",
        ],
      },
      {
        title: "Desenvolvimento Full-Stack",
        description:
          "Plataformas web, dashboards, APIs e apps mobile com arquitetura limpa que escala.",
        points: [
          "Frontends em React e React Native",
          "Backends em FastAPI, Django e Rust (Axum)",
          "Identidade, SSO e integrações corporativas",
        ],
      },
      {
        title: "Dados e Infraestrutura Cloud",
        description:
          "Pipelines de streaming e plataformas MLOps que mantêm modelos e dados fluindo com confiabilidade.",
        points: [
          "CDC e streaming: Kafka, ClickHouse, Redis",
          "MLOps na AWS e Azure: MLflow, auto-rotulagem",
          "Docker, Kubernetes e observabilidade",
        ],
      },
      {
        title: "Software Industrial e de Manufatura",
        description:
          "Software que conversa com o chão de fábrica — nascido de anos dentro de fábricas reais.",
        points: [
          "MES: produção, qualidade e rastreabilidade",
          "Análise SPC e monitoramento em tempo real",
          "Sistemas de visão em linhas de produção",
        ],
      },
    ],
  },
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
    title: "Dois engenheiros, um padrão: excelência.",
    subtitle:
      "Construímos cada sistema como se tivéssemos que operá-lo nós mesmos — porque geralmente é assim.",
    luisRole: "Co-Fundador · Engenheiro de AI & Software",
    luisBio:
      "Mais de 7 anos construindo sistemas em produção: LLMs, visão computacional, web full-stack, identidade e automação industrial. Mestre em Engenharia de Computação, desenvolvedor de AI na indústria automotiva e professor na La Salle Chihuahua.",
    marcoRole: "Co-Fundador · Engenheiro de Machine Learning",
    marcoBio:
      "Engenheiro de ML focado em MLOps e infraestrutura cloud na AWS — levando modelos da experimentação à produção em escala. Engenheiro em Ciência da Computação e em Física (UACH), criador de sistemas de visão para varejo autônomo e plataformas MLOps de ponta a ponta.",
    website: "Site",
  },
  contact: {
    kicker: "Contato",
    title: "Vamos construir algo que dure.",
    subtitle:
      "Conte-nos sobre o seu projeto ou o problema que você precisa resolver. Normalmente respondemos em menos de 24 horas.",
    emailLabel: "Escreva para nós",
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
      "Wir entwerfen und liefern produktionsreife AI-Systeme, Web-Plattformen und Dateninfrastruktur für Unternehmen, deren Software in der realen Welt funktionieren muss — von der Cloud bis zum Fabrikboden.",
    ctaPrimary: "Projekt starten",
    ctaSecondary: "Unsere Projekte",
    stats: [
      { value: "10+", label: "Jahre kombinierte Erfahrung" },
      { value: "20+", label: "Systeme in Produktion" },
      { value: "5", label: "Bediente Branchen" },
      { value: "4", label: "Sprachen, die wir sprechen" },
    ],
  },
  services: {
    kicker: "Was wir tun",
    title: "Full-Cycle-Engineering, vier Disziplinen.",
    subtitle:
      "Vom ersten Architekturentwurf bis zu überwachten Systemen in Produktion — wir verantworten den gesamten Lebenszyklus.",
    items: [
      {
        title: "AI & Machine Learning",
        description:
          "LLM-Anwendungen, Computer Vision und Prognosen — gebaut als Produkte, nicht als Experimente.",
        points: [
          "RAG-Pipelines, Agenten & MCP-Integrationen",
          "Computer Vision am Edge (YOLO, ONNX)",
          "Bedarfsprognosen & prädiktive Modelle",
        ],
      },
      {
        title: "Full-Stack-Entwicklung",
        description:
          "Web-Plattformen, Dashboards, APIs und Mobile-Apps mit sauberer, skalierbarer Architektur.",
        points: [
          "Frontends mit React & React Native",
          "Backends mit FastAPI, Django und Rust (Axum)",
          "Identity, SSO & Enterprise-Integrationen",
        ],
      },
      {
        title: "Daten & Cloud-Infrastruktur",
        description:
          "Streaming-Pipelines und MLOps-Plattformen, die Modelle und Daten zuverlässig am Laufen halten.",
        points: [
          "CDC & Streaming: Kafka, ClickHouse, Redis",
          "MLOps auf AWS & Azure: MLflow, Auto-Labeling",
          "Docker, Kubernetes & Observability",
        ],
      },
      {
        title: "Industrie- & Fertigungssoftware",
        description:
          "Software, die mit dem Shopfloor spricht — entstanden aus Jahren in echten Fabriken.",
        points: [
          "MES: Produktion, Qualität & Rückverfolgbarkeit",
          "SPC-Analytik & Echtzeit-Monitoring",
          "Edge-Vision-Systeme an Produktionslinien",
        ],
      },
    ],
  },
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
    title: "Zwei Ingenieure, ein Standard: Exzellenz.",
    subtitle:
      "Wir bauen jedes System so, als müssten wir es selbst betreiben — denn meistens tun wir das auch.",
    luisRole: "Mitgründer · AI- & Software-Ingenieur",
    luisBio:
      "Über 7 Jahre Erfahrung mit Produktionssystemen: LLMs, Computer Vision, Full-Stack-Web, Identity und industrielle Automatisierung. M.Sc. in Computer Engineering, AI-Entwickler in der Automobilindustrie und Dozent an der La Salle Chihuahua.",
    marcoRole: "Mitgründer · Machine-Learning-Ingenieur",
    marcoBio:
      "ML-Ingenieur mit Fokus auf MLOps und Cloud-Infrastruktur auf AWS — von der Experimentierphase bis zur Produktion im großen Maßstab. Ingenieur für Informatik und Physik (UACH), Entwickler von Vision-Systemen für autonomen Einzelhandel und End-to-End-MLOps-Plattformen.",
    website: "Website",
  },
  contact: {
    kicker: "Kontakt",
    title: "Lassen Sie uns etwas Bleibendes bauen.",
    subtitle:
      "Erzählen Sie uns von Ihrem Projekt oder dem Problem, das Sie lösen möchten. Wir antworten in der Regel innerhalb von 24 Stunden.",
    emailLabel: "Schreiben Sie uns",
    location: "Chihuahua, Mexiko",
    remote: "Wir arbeiten mit Kunden weltweit",
  },
  footer: {
    tagline: "AI- & Full-Stack-Engineering, vom Konzept bis zur Produktion.",
    rights: "Alle Rechte vorbehalten.",
  },
};

export const translations: Record<Lang, Translation> = { en, es, pt, de };
