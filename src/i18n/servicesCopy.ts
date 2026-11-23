export type AudienceId = "local" | "industry" | "enterprise" | "startup";

export const AUDIENCE_IDS: AudienceId[] = ["local", "industry", "enterprise", "startup"];

export interface ServiceItem {
  /** Business goal this service serves — shown as a small label. */
  goal: string;
  title: string;
  points: string[];
}

export interface Plan {
  name: string;
  summary: string;
  includes: string[];
}

export interface Audience {
  label: string;
  hint: string;
  headline: string;
  intro: string;
  proof: string;
  forWho: string[];
  services: ServiceItem[];
  /** Three entry points; the middle one is highlighted as recommended. */
  plans: [Plan, Plan, Plan];
}

export interface ServicesCopy {
  kicker: string;
  title: string;
  subtitle: string;
  selectorLabel: string;
  forWhoLabel: string;
  servicesLabel: string;
  plansLabel: string;
  recommended: string;
  quoteNote: string;
  cta: string;
  processLink: string;
  emailCta: string;
  /** Pre-filled WhatsApp text; {profile} is replaced by the audience label. */
  whatsappMessage: string;
  audiences: Record<AudienceId, Audience>;
}

export interface ProcessCopy {
  kicker: string;
  title: string;
  subtitle: string;
  steps: { title: string; text: string }[];
  principles: string[];
}

/* ───────────────────────────── English ───────────────────────────── */

export const servicesEn: ServicesCopy = {
  kicker: "Services",
  title: "Solutions for every kind of business.",
  subtitle:
    "From the corner café to the manufacturing plant: choose your profile and see what we can do for you.",
  selectorLabel: "What kind of business are you?",
  forWhoLabel: "Ideal for",
  servicesLabel: "What we can do for you",
  plansLabel: "How to get started",
  recommended: "Recommended",
  quoteNote:
    "Every project is quoted to fit, at no cost. You get a clear written proposal: what's included, what isn't, and when it's delivered.",
  cta: "Tell us about your case",
  processLink: "See how we work",
  emailCta: "Email us instead",
  whatsappMessage: "Hi Vectorial Soft! I would like information about your services for {profile}.",
  audiences: {
    local: {
      label: "Local businesses",
      hint: "Clinics, cafés, salons, repair shops",
      headline: "More customers, fewer unanswered messages.",
      intro:
        "We put your business online and on autopilot: found on Google, booked through WhatsApp, and coming back again. You focus on serving your customers.",
      proof: "The same engineering we build for factories and corporations, within reach of your business.",
      forWho: [
        "Medical & dental clinics",
        "Veterinary clinics",
        "Salons & barbershops",
        "Spas & wellness",
        "Cafés & restaurants",
        "Retail stores",
        "Auto repair shops",
        "Gyms & studios",
      ],
      services: [
        {
          goal: "Get found",
          title: "Google Maps & Business Profile",
          points: [
            "Photos, hours, services and a WhatsApp button",
            "A strategy to earn more reviews",
            "Show up when people search “near me”",
          ],
        },
        {
          goal: "Get found",
          title: "Professional website",
          points: [
            "Services, location, hours and reviews on one page",
            "One-tap WhatsApp and call buttons",
            "Your own domain (.com or .mx) in your name",
          ],
        },
        {
          goal: "Serve better",
          title: "WhatsApp Business, set up right",
          points: [
            "Business profile and product catalog",
            "Quick replies, greeting and away messages",
            "Labels to organize customers, plus training",
          ],
        },
        {
          goal: "Serve better",
          title: "Booking bot & reminders",
          points: [
            "24/7 booking with simple buttons",
            "Automatic confirmations and reminders",
            "Reschedule or cancel without phone calls",
          ],
        },
        {
          goal: "Bring them back",
          title: "Follow-ups & reactivation",
          points: [
            "Reminders for vaccines, cleanings, haircuts or services",
            "Messages to customers who haven't returned",
            "Email notices branded with your business name",
          ],
        },
        {
          goal: "Sell more",
          title: "Digital menu & QR catalog",
          points: [
            "Always up to date, no reprinting",
            "Perfect for cafés, restaurants and spas",
            "Orders and questions straight to WhatsApp",
          ],
        },
        {
          goal: "Look professional",
          title: "Email with your own domain",
          points: [
            "Addresses like hello@yourbusiness.com",
            "Google Workspace, Microsoft 365 or Zoho, fully set up",
            "Authenticated email that stays out of spam",
          ],
        },
        {
          goal: "Grow",
          title: "Facebook, Instagram & Google ads",
          points: [
            "Ads that open a WhatsApp conversation",
            "Local Google Ads for nearby searches",
            "A clear monthly report: messages, bookings, reviews",
          ],
        },
      ],
      plans: [
        {
          name: "Essential",
          summary: "Start getting customers from the internet.",
          includes: ["WhatsApp Business set up", "Google Business Profile", "Automatic messages"],
        },
        {
          name: "Growth",
          summary: "Stop losing appointments and customers.",
          includes: ["Everything in Essential", "Booking bot & reminders", "Professional website"],
        },
        {
          name: "Complete",
          summary: "Grow steadily with advertising.",
          includes: [
            "Everything in Growth",
            "Domain & professional email",
            "Meta & Google ads",
            "Monthly results report",
          ],
        },
      ],
    },
    industry: {
      label: "Industry & manufacturing",
      hint: "Factories, plants, machine shops",
      headline: "Software that understands the shop floor.",
      intro:
        "We come from years inside real factories. We connect machines, people and data so you can see production in real time and decide with numbers, not guesses.",
      proof: "Years of building software inside automotive and manufacturing plants.",
      forWho: [
        "Manufacturing plants",
        "Automotive suppliers",
        "Maquiladoras",
        "Machine shops",
        "Service workshops",
        "Warehouses & distribution",
        "Quality labs",
      ],
      services: [
        {
          goal: "Visibility",
          title: "Real-time production monitoring",
          points: [
            "Dashboards by line, shift and station",
            "Downtime and andon alerts as they happen",
            "Automatic OEE and cycle times",
          ],
        },
        {
          goal: "Control",
          title: "MES & traceability",
          points: [
            "Production, quality and serial-number traceability",
            "Component and lot genealogy",
            "Integration with PLCs, scanners and ERP",
          ],
        },
        {
          goal: "Quality",
          title: "Machine-vision inspection",
          points: [
            "AI-powered defect detection with cameras",
            "Runs on the edge, no internet dependency",
            "Photo evidence for every part",
          ],
        },
        {
          goal: "Quality",
          title: "Statistical process control (SPC)",
          points: [
            "Control charts and capability (Cp, Cpk)",
            "Alerts when a process drifts out of control",
            "Reports ready for audits and customers",
          ],
        },
        {
          goal: "Digitize",
          title: "Goodbye paper and spreadsheets",
          points: [
            "Digital checklists and inspection forms",
            "Work orders and maintenance",
            "Inventory with barcodes and QR",
          ],
        },
        {
          goal: "Intelligence",
          title: "AI assistants for your operation",
          points: [
            "Ask manuals, procedures and failure history in plain language",
            "Automatic shift reports",
            "Demand forecasting and predictive maintenance",
          ],
        },
      ],
      plans: [
        {
          name: "Plant assessment",
          summary: "We walk your operation and find where time and money are lost.",
          includes: ["On-site visit and interviews", "Prioritized opportunity map", "Written proposal"],
        },
        {
          name: "Single-line pilot",
          summary: "Measurable results at small scale before rolling out.",
          includes: ["One line or process", "Before-and-after metrics", "A data-backed decision"],
        },
        {
          name: "Plant-wide rollout",
          summary: "The solution across your operation, with ongoing support.",
          includes: ["Phased implementation", "Staff training", "Support and continuous improvement"],
        },
      ],
    },
    enterprise: {
      label: "Companies",
      hint: "Mid-size & large organizations",
      headline: "Automate processes and put your data to work.",
      intro:
        "We build custom systems that plug into what you already use — ERP, CRM, databases and the cloud. Secure, documented and ready to grow.",
      proof: "Enterprise AI assistants and platforms we built are running in production today.",
      forWho: [
        "Corporations",
        "Professional services",
        "Distribution & logistics",
        "Consulting & law firms",
        "Education",
        "Healthcare",
      ],
      services: [
        {
          goal: "AI",
          title: "AI assistants on your documents",
          points: [
            "Chat that answers with your company's knowledge (RAG)",
            "Cited answers and team-based access control",
            "Connected to your systems via MCP",
          ],
        },
        {
          goal: "Automation",
          title: "Process automation",
          points: [
            "Approval flows, reports and notifications",
            "Data extraction from PDFs, invoices and email",
            "Less manual data entry, fewer errors",
          ],
        },
        {
          goal: "Software",
          title: "Custom platforms & portals",
          points: [
            "Back-office systems, customer and supplier portals",
            "Web and mobile with user-centered design",
            "Clean architecture that scales",
          ],
        },
        {
          goal: "Data",
          title: "Data, reporting & dashboards",
          points: [
            "All your sources unified in one place",
            "Real-time executive dashboards",
            "Reliable data pipelines",
          ],
        },
        {
          goal: "Security",
          title: "Identity, access & integrations",
          points: [
            "Single sign-on (SSO) and roles",
            "Secure APIs and gateways",
            "Integration with ERP, CRM and third-party services",
          ],
        },
        {
          goal: "Cloud",
          title: "Cloud & infrastructure",
          points: [
            "Migration and deployment on AWS and Azure",
            "Docker, Kubernetes and observability",
            "Costs and performance under control",
          ],
        },
        {
          goal: "Immersive",
          title: "Virtual reality & immersive experiences",
          points: [
            "VR training and onboarding simulators",
            "Virtual environments for healthcare and education",
            "Built in Unity with user-centered design",
          ],
        },
      ],
      plans: [
        {
          name: "Discovery workshop",
          summary: "Together we define the problem, scope and expected return.",
          includes: ["Sessions with your team", "Proposed architecture", "Roadmap and estimate"],
        },
        {
          name: "Turnkey project",
          summary: "We design, build and ship to production.",
          includes: ["Deliveries every two weeks", "Documentation and handover", "Warranty and support"],
        },
        {
          name: "Dedicated team",
          summary: "Senior engineers embedded in your team, ongoing.",
          includes: ["AI, full-stack and data", "Your tools and processes", "Scales with your needs"],
        },
      ],
    },
    startup: {
      label: "Startups & tech",
      hint: "Startups, SaaS, software companies",
      headline: "From idea to product — without technical debt.",
      intro:
        "We're the senior technical team you need to launch fast without cutting corners: product, AI and infrastructure ready for your first customers — and the next thousand.",
      proof: "Engineers who have taken AI and MLOps products from zero to production.",
      forWho: [
        "Early-stage startups",
        "SaaS companies",
        "Non-technical founders",
        "Product teams",
        "Agencies needing tech backup",
      ],
      services: [
        {
          goal: "Launch",
          title: "MVP in weeks",
          points: [
            "From prototype to working product",
            "UX design and user testing",
            "Web and mobile (React, React Native)",
          ],
        },
        {
          goal: "Differentiate",
          title: "AI features in your product",
          points: [
            "Agents, RAG and LLMs in production",
            "Computer vision and predictive models",
            "Cost and answer-quality control",
          ],
        },
        {
          goal: "Scale",
          title: "MLOps & data platform",
          points: [
            "Model training, versioning and deployment",
            "Streaming and data pipelines",
            "Model monitoring in production",
          ],
        },
        {
          goal: "Scale",
          title: "Architecture & performance",
          points: [
            "Architecture and code reviews",
            "High-performance backends (Python, Rust)",
            "Security, auth and multi-tenancy",
          ],
        },
        {
          goal: "Lead",
          title: "Fractional CTO & advisory",
          points: [
            "Stack decisions and technical roadmap",
            "Technical due diligence for investors",
            "Hiring and mentoring your team",
          ],
        },
        {
          goal: "Reinforce",
          title: "Team extension",
          points: [
            "Senior engineers who ramp up fast",
            "Code reviews and best practices",
            "Knowledge transfer",
          ],
        },
      ],
      plans: [
        {
          name: "Validation sprint",
          summary: "A working prototype to test the idea with real users.",
          includes: ["Focused scope", "Clickable or functional prototype", "Learnings and next step"],
        },
        {
          name: "MVP to production",
          summary: "A product ready for your first customers.",
          includes: ["Complete, deployed product", "Analytics and monitoring", "Code you own, documented"],
        },
        {
          name: "Ongoing tech partner",
          summary: "We evolve the product with you, month by month.",
          includes: ["Shared roadmap", "Flexible team", "Scales with your growth"],
        },
      ],
    },
  },
};

export const processEn: ProcessCopy = {
  kicker: "How we work",
  title: "Clear from day one.",
  subtitle: "No fine print: you know what you'll get, when, and how we'll measure the result.",
  steps: [
    { title: "We listen", text: "A no-cost conversation to understand your business and what you need." },
    { title: "We propose", text: "A written proposal: what's included, what isn't, timelines and deliverables." },
    { title: "We build", text: "Frequent deliveries so you see real progress from the first weeks." },
    { title: "We stay with you", text: "Training, clear reports and support to keep everything running." },
  ],
  principles: [
    "Your accounts, domain and data always in your name.",
    "A clear written agreement before we start.",
    "Method and measurable reports — no empty promises.",
    "We protect your customers' privacy.",
  ],
};

/* ───────────────────────────── Español ───────────────────────────── */

export const servicesEs: ServicesCopy = {
  kicker: "Servicios",
  title: "Soluciones para cada tipo de negocio.",
  subtitle:
    "Desde la cafetería de la esquina hasta la planta de manufactura: elige tu perfil y descubre lo que podemos hacer por ti.",
  selectorLabel: "¿Qué tipo de negocio eres?",
  forWhoLabel: "Ideal para",
  servicesLabel: "Lo que podemos hacer por ti",
  plansLabel: "Cómo empezar",
  recommended: "Recomendado",
  quoteNote:
    "Cada proyecto se cotiza a la medida y sin costo. Recibes una propuesta clara por escrito: qué incluye, qué no y cuándo se entrega.",
  cta: "Cuéntanos tu caso",
  processLink: "Ver cómo trabajamos",
  emailCta: "Prefiero escribir por correo",
  whatsappMessage: "¡Hola, Vectorial Soft! Me interesa información sobre sus servicios para {profile}.",
  audiences: {
    local: {
      label: "Negocios locales",
      hint: "Consultorios, cafés, estéticas, talleres",
      headline: "Más clientes, menos mensajes sin contestar.",
      intro:
        "Ponemos tu negocio en línea y en piloto automático: que te encuentren en Google, que agenden por WhatsApp y que regresen. Tú te enfocas en atender.",
      proof: "La misma ingeniería que hacemos para fábricas y corporativos, al alcance de tu negocio.",
      forWho: [
        "Consultorios médicos y dentales",
        "Veterinarias",
        "Estéticas y barberías",
        "Spas y bienestar",
        "Cafeterías y restaurantes",
        "Tiendas y comercios",
        "Talleres mecánicos",
        "Gimnasios y estudios",
      ],
      services: [
        {
          goal: "Que te encuentren",
          title: "Google Maps y perfil de negocio",
          points: [
            "Fotos, horarios, servicios y botón de WhatsApp",
            "Estrategia para conseguir más reseñas",
            "Aparece cuando buscan “cerca de mí”",
          ],
        },
        {
          goal: "Que te encuentren",
          title: "Página web profesional",
          points: [
            "Servicios, ubicación, horarios y reseñas en una sola página",
            "Botones directos a WhatsApp y llamada",
            "Dominio propio (.com o .mx) a tu nombre",
          ],
        },
        {
          goal: "Atiende mejor",
          title: "WhatsApp Business bien configurado",
          points: [
            "Perfil de empresa y catálogo de productos",
            "Respuestas rápidas, bienvenida y mensajes de ausencia",
            "Etiquetas para organizar clientes y capacitación",
          ],
        },
        {
          goal: "Atiende mejor",
          title: "Bot de citas y recordatorios",
          points: [
            "Agenda 24/7 con botones sencillos",
            "Confirmación y recordatorio automáticos",
            "Reagendar o cancelar sin llamadas",
          ],
        },
        {
          goal: "Que regresen",
          title: "Seguimiento y reactivación",
          points: [
            "Recordatorios de vacunas, limpiezas, cortes o servicios",
            "Mensajes a clientes que no han regresado",
            "Avisos por correo con el nombre de tu negocio",
          ],
        },
        {
          goal: "Vende más",
          title: "Menú y catálogo digital con QR",
          points: [
            "Siempre actualizado, sin reimprimir",
            "Ideal para cafeterías, restaurantes y spas",
            "Pedidos y dudas directo a WhatsApp",
          ],
        },
        {
          goal: "Imagen profesional",
          title: "Correo con tu propio dominio",
          points: [
            "Direcciones como citas@tunegocio.com",
            "Google Workspace, Microsoft 365 o Zoho, todo configurado",
            "Correos autenticados que no caen en spam",
          ],
        },
        {
          goal: "Crece",
          title: "Publicidad en Facebook, Instagram y Google",
          points: [
            "Anuncios que abren una conversación de WhatsApp",
            "Google Ads local para búsquedas cercanas",
            "Reporte mensual claro: mensajes, citas y reseñas",
          ],
        },
      ],
      plans: [
        {
          name: "Esencial",
          summary: "Empieza a recibir clientes desde internet.",
          includes: ["WhatsApp Business configurado", "Perfil de Google", "Mensajes automáticos"],
        },
        {
          name: "Crecimiento",
          summary: "Deja de perder citas y clientes.",
          includes: ["Todo lo de Esencial", "Bot de citas y recordatorios", "Página web profesional"],
        },
        {
          name: "Completo",
          summary: "Crece de forma constante con publicidad.",
          includes: [
            "Todo lo de Crecimiento",
            "Dominio y correo profesional",
            "Publicidad en Meta y Google",
            "Reporte mensual de resultados",
          ],
        },
      ],
    },
    industry: {
      label: "Industria y manufactura",
      hint: "Fábricas, plantas, talleres",
      headline: "Software que entiende el piso de planta.",
      intro:
        "Venimos de años dentro de fábricas reales. Conectamos máquinas, personas y datos para que veas tu producción en tiempo real y decidas con números, no con suposiciones.",
      proof: "Años desarrollando software dentro de plantas automotrices y de manufactura.",
      forWho: [
        "Plantas de manufactura",
        "Proveedores automotrices",
        "Maquiladoras",
        "Talleres de maquinado",
        "Talleres de servicio",
        "Almacenes y distribución",
        "Laboratorios de calidad",
      ],
      services: [
        {
          goal: "Visibilidad",
          title: "Monitoreo de producción en tiempo real",
          points: [
            "Tableros por línea, turno y estación",
            "Paros y alertas andon al momento",
            "OEE y tiempos de ciclo automáticos",
          ],
        },
        {
          goal: "Control",
          title: "MES y trazabilidad",
          points: [
            "Producción, calidad y trazabilidad por número de serie",
            "Genealogía de componentes y lotes",
            "Integración con PLCs, escáneres y ERP",
          ],
        },
        {
          goal: "Calidad",
          title: "Inspección con visión artificial",
          points: [
            "Detección de defectos con cámaras e IA",
            "Corre en el edge, sin depender de internet",
            "Evidencia fotográfica de cada pieza",
          ],
        },
        {
          goal: "Calidad",
          title: "Control estadístico de procesos (SPC)",
          points: [
            "Gráficas de control y capacidad (Cp, Cpk)",
            "Alertas cuando un proceso se sale de control",
            "Reportes listos para auditorías y clientes",
          ],
        },
        {
          goal: "Digitaliza",
          title: "Adiós al papel y al Excel",
          points: [
            "Checklists e inspecciones digitales",
            "Órdenes de trabajo y mantenimiento",
            "Inventario con códigos de barras y QR",
          ],
        },
        {
          goal: "Inteligencia",
          title: "Asistentes de IA para tu operación",
          points: [
            "Consulta manuales, procedimientos y fallas en lenguaje natural",
            "Reportes de turno automáticos",
            "Pronóstico de demanda y mantenimiento predictivo",
          ],
        },
      ],
      plans: [
        {
          name: "Diagnóstico de planta",
          summary: "Recorremos tu operación y detectamos dónde se pierde tiempo y dinero.",
          includes: ["Visita y entrevistas en sitio", "Mapa de oportunidades priorizado", "Propuesta por escrito"],
        },
        {
          name: "Piloto en una línea",
          summary: "Resultados medibles en pequeño antes de escalar.",
          includes: ["Una línea o proceso", "Métricas de antes y después", "Decisión respaldada con datos"],
        },
        {
          name: "Despliegue en planta",
          summary: "La solución en toda tu operación, con soporte continuo.",
          includes: ["Implementación por fases", "Capacitación al personal", "Soporte y mejora continua"],
        },
      ],
    },
    enterprise: {
      label: "Empresas",
      hint: "Medianas y grandes organizaciones",
      headline: "Automatiza procesos y pon a trabajar tus datos.",
      intro:
        "Construimos sistemas a la medida que se integran con lo que ya usas — ERP, CRM, bases de datos y la nube. Seguros, documentados y listos para crecer.",
      proof: "Asistentes de IA empresariales y plataformas que construimos operan hoy en producción.",
      forWho: [
        "Corporativos",
        "Empresas de servicios",
        "Distribución y logística",
        "Despachos y consultoras",
        "Educación",
        "Salud",
      ],
      services: [
        {
          goal: "IA",
          title: "Asistentes de IA con tus documentos",
          points: [
            "Chat que responde con el conocimiento de tu empresa (RAG)",
            "Respuestas con fuentes y acceso por equipo",
            "Conectado a tus sistemas vía MCP",
          ],
        },
        {
          goal: "Automatización",
          title: "Automatización de procesos",
          points: [
            "Flujos de aprobación, reportes y notificaciones",
            "Extracción de datos de PDFs, facturas y correos",
            "Menos captura manual, menos errores",
          ],
        },
        {
          goal: "Software",
          title: "Plataformas y portales a la medida",
          points: [
            "Sistemas administrativos, portales de clientes y proveedores",
            "Web y móvil con diseño centrado en el usuario",
            "Arquitectura limpia que escala",
          ],
        },
        {
          goal: "Datos",
          title: "Datos, reportes y dashboards",
          points: [
            "Todas tus fuentes unificadas en un solo lugar",
            "Dashboards ejecutivos en tiempo real",
            "Pipelines de datos confiables",
          ],
        },
        {
          goal: "Seguridad",
          title: "Identidad, accesos e integraciones",
          points: [
            "Inicio de sesión único (SSO) y roles",
            "APIs y gateways seguros",
            "Integración con ERP, CRM y servicios de terceros",
          ],
        },
        {
          goal: "Nube",
          title: "Nube e infraestructura",
          points: [
            "Migración y despliegue en AWS y Azure",
            "Docker, Kubernetes y observabilidad",
            "Costos y rendimiento bajo control",
          ],
        },
        {
          goal: "Inmersivo",
          title: "Realidad virtual y experiencias inmersivas",
          points: [
            "Simuladores de capacitación y entrenamiento en VR",
            "Entornos virtuales para salud y educación",
            "Desarrollo en Unity con diseño centrado en el usuario",
          ],
        },
      ],
      plans: [
        {
          name: "Taller de descubrimiento",
          summary: "Definimos juntos el problema, el alcance y el retorno esperado.",
          includes: ["Sesiones con tu equipo", "Arquitectura propuesta", "Hoja de ruta y estimación"],
        },
        {
          name: "Proyecto llave en mano",
          summary: "Diseñamos, construimos y entregamos en producción.",
          includes: ["Entregas cada dos semanas", "Documentación y transferencia", "Garantía y soporte"],
        },
        {
          name: "Equipo dedicado",
          summary: "Ingenieros senior integrados a tu equipo de forma continua.",
          includes: ["AI, full-stack y datos", "Tus herramientas y procesos", "Escala según la necesidad"],
        },
      ],
    },
    startup: {
      label: "Startups y tech",
      hint: "Startups, SaaS, empresas de software",
      headline: "De la idea al producto, sin deuda técnica.",
      intro:
        "Somos el equipo técnico senior que necesitas para lanzar rápido sin sacrificar calidad: producto, IA e infraestructura listos para tus primeros clientes — y para los siguientes mil.",
      proof: "Ingenieros que han llevado productos de AI y MLOps de cero a producción.",
      forWho: [
        "Startups en etapa temprana",
        "Empresas SaaS",
        "Fundadores no técnicos",
        "Equipos de producto",
        "Agencias que necesitan respaldo técnico",
      ],
      services: [
        {
          goal: "Lanza",
          title: "MVP en semanas",
          points: [
            "Del prototipo a un producto funcional",
            "Diseño UX y pruebas con usuarios",
            "Web y móvil (React, React Native)",
          ],
        },
        {
          goal: "Diferénciate",
          title: "Funciones de IA en tu producto",
          points: [
            "Agentes, RAG y LLMs en producción",
            "Visión por computadora y modelos predictivos",
            "Control de costos y calidad de respuestas",
          ],
        },
        {
          goal: "Escala",
          title: "MLOps y plataforma de datos",
          points: [
            "Entrenamiento, versionado y despliegue de modelos",
            "Streaming y pipelines de datos",
            "Monitoreo de modelos en producción",
          ],
        },
        {
          goal: "Escala",
          title: "Arquitectura y rendimiento",
          points: [
            "Revisión de arquitectura y código",
            "Backends de alto rendimiento (Python, Rust)",
            "Seguridad, autenticación y multi-tenant",
          ],
        },
        {
          goal: "Lidera",
          title: "CTO fraccional y asesoría",
          points: [
            "Decisiones de stack y hoja de ruta técnica",
            "Due diligence técnico para inversionistas",
            "Contratación y mentoría de tu equipo",
          ],
        },
        {
          goal: "Refuerza",
          title: "Extensión de equipo",
          points: [
            "Ingenieros senior que se integran rápido",
            "Code reviews y buenas prácticas",
            "Transferencia de conocimiento",
          ],
        },
      ],
      plans: [
        {
          name: "Sprint de validación",
          summary: "Un prototipo funcional para probar la idea con usuarios reales.",
          includes: ["Alcance enfocado", "Prototipo navegable o funcional", "Aprendizajes y siguiente paso"],
        },
        {
          name: "MVP a producción",
          summary: "Un producto listo para tus primeros clientes.",
          includes: ["Producto completo y desplegado", "Analítica y monitoreo", "Código tuyo y documentado"],
        },
        {
          name: "Socio técnico continuo",
          summary: "Evolucionamos el producto contigo, mes a mes.",
          includes: ["Hoja de ruta compartida", "Equipo flexible", "Escala con tu crecimiento"],
        },
      ],
    },
  },
};

export const processEs: ProcessCopy = {
  kicker: "Cómo trabajamos",
  title: "Claro desde el primer día.",
  subtitle: "Sin letras chiquitas: sabes qué vas a recibir, cuándo y cómo medimos el resultado.",
  steps: [
    { title: "Escuchamos", text: "Una conversación sin costo para entender tu negocio y lo que necesitas." },
    { title: "Proponemos", text: "Propuesta por escrito: qué incluye, qué no, tiempos y entregables." },
    { title: "Construimos", text: "Entregas frecuentes para que veas avance real desde las primeras semanas." },
    { title: "Acompañamos", text: "Capacitación, reportes claros y soporte para que todo siga funcionando." },
  ],
  principles: [
    "Tus cuentas, dominio y datos siempre a tu nombre.",
    "Acuerdo claro por escrito antes de empezar.",
    "Método y reportes medibles — no promesas vacías.",
    "Cuidamos la privacidad de tus clientes.",
  ],
};

/* ───────────────────────────── Português ───────────────────────────── */

export const servicesPt: ServicesCopy = {
  kicker: "Serviços",
  title: "Soluções para cada tipo de negócio.",
  subtitle:
    "Da cafeteria da esquina à fábrica: escolha o seu perfil e descubra o que podemos fazer por você.",
  selectorLabel: "Qual é o seu tipo de negócio?",
  forWhoLabel: "Ideal para",
  servicesLabel: "O que podemos fazer por você",
  plansLabel: "Como começar",
  recommended: "Recomendado",
  quoteNote:
    "Cada projeto é orçado sob medida e sem custo. Você recebe uma proposta clara por escrito: o que inclui, o que não inclui e quando é entregue.",
  cta: "Conte-nos o seu caso",
  processLink: "Ver como trabalhamos",
  emailCta: "Prefiro escrever por e-mail",
  whatsappMessage: "Olá, Vectorial Soft! Gostaria de informações sobre os serviços para {profile}.",
  audiences: {
    local: {
      label: "Negócios locais",
      hint: "Clínicas, cafés, salões, oficinas",
      headline: "Mais clientes, menos mensagens sem resposta.",
      intro:
        "Colocamos o seu negócio online e no piloto automático: encontrado no Google, agendado pelo WhatsApp e com clientes que voltam. Você foca em atender.",
      proof: "A mesma engenharia que fazemos para fábricas e corporações, ao alcance do seu negócio.",
      forWho: [
        "Clínicas médicas e odontológicas",
        "Veterinárias",
        "Salões e barbearias",
        "Spas e bem-estar",
        "Cafés e restaurantes",
        "Lojas e comércio",
        "Oficinas mecânicas",
        "Academias e estúdios",
      ],
      services: [
        {
          goal: "Seja encontrado",
          title: "Google Maps e Perfil da Empresa",
          points: [
            "Fotos, horários, serviços e botão de WhatsApp",
            "Estratégia para conseguir mais avaliações",
            "Apareça quando buscarem “perto de mim”",
          ],
        },
        {
          goal: "Seja encontrado",
          title: "Site profissional",
          points: [
            "Serviços, localização, horários e avaliações em uma página",
            "Botões diretos para WhatsApp e ligação",
            "Domínio próprio em seu nome",
          ],
        },
        {
          goal: "Atenda melhor",
          title: "WhatsApp Business bem configurado",
          points: [
            "Perfil comercial e catálogo de produtos",
            "Respostas rápidas, boas-vindas e mensagens de ausência",
            "Etiquetas para organizar clientes e treinamento",
          ],
        },
        {
          goal: "Atenda melhor",
          title: "Bot de agendamento e lembretes",
          points: [
            "Agendamento 24/7 com botões simples",
            "Confirmação e lembrete automáticos",
            "Reagendar ou cancelar sem ligações",
          ],
        },
        {
          goal: "Faça voltar",
          title: "Acompanhamento e reativação",
          points: [
            "Lembretes de vacinas, limpezas, cortes ou serviços",
            "Mensagens para clientes que não voltaram",
            "Avisos por e-mail com o nome do seu negócio",
          ],
        },
        {
          goal: "Venda mais",
          title: "Cardápio e catálogo digital com QR",
          points: [
            "Sempre atualizado, sem reimprimir",
            "Ideal para cafés, restaurantes e spas",
            "Pedidos e dúvidas direto no WhatsApp",
          ],
        },
        {
          goal: "Imagem profissional",
          title: "E-mail com seu próprio domínio",
          points: [
            "Endereços como contato@seunegocio.com",
            "Google Workspace, Microsoft 365 ou Zoho, tudo configurado",
            "E-mails autenticados que não caem no spam",
          ],
        },
        {
          goal: "Cresça",
          title: "Anúncios no Facebook, Instagram e Google",
          points: [
            "Anúncios que abrem uma conversa no WhatsApp",
            "Google Ads local para buscas próximas",
            "Relatório mensal claro: mensagens, agendamentos e avaliações",
          ],
        },
      ],
      plans: [
        {
          name: "Essencial",
          summary: "Comece a receber clientes pela internet.",
          includes: ["WhatsApp Business configurado", "Perfil no Google", "Mensagens automáticas"],
        },
        {
          name: "Crescimento",
          summary: "Pare de perder agendamentos e clientes.",
          includes: ["Tudo do Essencial", "Bot de agendamento e lembretes", "Site profissional"],
        },
        {
          name: "Completo",
          summary: "Cresça de forma constante com anúncios.",
          includes: [
            "Tudo do Crescimento",
            "Domínio e e-mail profissional",
            "Anúncios no Meta e Google",
            "Relatório mensal de resultados",
          ],
        },
      ],
    },
    industry: {
      label: "Indústria e manufatura",
      hint: "Fábricas, plantas, oficinas",
      headline: "Software que entende o chão de fábrica.",
      intro:
        "Viemos de anos dentro de fábricas reais. Conectamos máquinas, pessoas e dados para que você veja a produção em tempo real e decida com números, não com suposições.",
      proof: "Anos desenvolvendo software dentro de fábricas automotivas e de manufatura.",
      forWho: [
        "Fábricas",
        "Fornecedores automotivos",
        "Maquiladoras",
        "Usinagem",
        "Oficinas de serviço",
        "Armazéns e distribuição",
        "Laboratórios de qualidade",
      ],
      services: [
        {
          goal: "Visibilidade",
          title: "Monitoramento da produção em tempo real",
          points: [
            "Painéis por linha, turno e estação",
            "Paradas e alertas andon na hora",
            "OEE e tempos de ciclo automáticos",
          ],
        },
        {
          goal: "Controle",
          title: "MES e rastreabilidade",
          points: [
            "Produção, qualidade e rastreabilidade por número de série",
            "Genealogia de componentes e lotes",
            "Integração com CLPs, scanners e ERP",
          ],
        },
        {
          goal: "Qualidade",
          title: "Inspeção com visão computacional",
          points: [
            "Detecção de defeitos com câmeras e IA",
            "Roda no edge, sem depender de internet",
            "Evidência fotográfica de cada peça",
          ],
        },
        {
          goal: "Qualidade",
          title: "Controle estatístico de processo (CEP)",
          points: [
            "Cartas de controle e capacidade (Cp, Cpk)",
            "Alertas quando um processo sai de controle",
            "Relatórios prontos para auditorias e clientes",
          ],
        },
        {
          goal: "Digitalize",
          title: "Adeus ao papel e às planilhas",
          points: [
            "Checklists e inspeções digitais",
            "Ordens de serviço e manutenção",
            "Estoque com código de barras e QR",
          ],
        },
        {
          goal: "Inteligência",
          title: "Assistentes de IA para a operação",
          points: [
            "Consulte manuais, procedimentos e falhas em linguagem natural",
            "Relatórios de turno automáticos",
            "Previsão de demanda e manutenção preditiva",
          ],
        },
      ],
      plans: [
        {
          name: "Diagnóstico da fábrica",
          summary: "Percorremos a operação e encontramos onde se perde tempo e dinheiro.",
          includes: ["Visita e entrevistas no local", "Mapa de oportunidades priorizado", "Proposta por escrito"],
        },
        {
          name: "Piloto em uma linha",
          summary: "Resultados mensuráveis em pequena escala antes de expandir.",
          includes: ["Uma linha ou processo", "Métricas de antes e depois", "Decisão baseada em dados"],
        },
        {
          name: "Implantação na fábrica",
          summary: "A solução em toda a operação, com suporte contínuo.",
          includes: ["Implantação por fases", "Treinamento da equipe", "Suporte e melhoria contínua"],
        },
      ],
    },
    enterprise: {
      label: "Empresas",
      hint: "Médias e grandes organizações",
      headline: "Automatize processos e coloque seus dados para trabalhar.",
      intro:
        "Construímos sistemas sob medida que se integram ao que você já usa — ERP, CRM, bancos de dados e a nuvem. Seguros, documentados e prontos para crescer.",
      proof: "Assistentes de IA corporativos e plataformas que construímos operam hoje em produção.",
      forWho: [
        "Corporações",
        "Empresas de serviços",
        "Distribuição e logística",
        "Consultorias e escritórios",
        "Educação",
        "Saúde",
      ],
      services: [
        {
          goal: "IA",
          title: "Assistentes de IA com seus documentos",
          points: [
            "Chat que responde com o conhecimento da empresa (RAG)",
            "Respostas com fontes e acesso por equipe",
            "Conectado aos seus sistemas via MCP",
          ],
        },
        {
          goal: "Automação",
          title: "Automação de processos",
          points: [
            "Fluxos de aprovação, relatórios e notificações",
            "Extração de dados de PDFs, notas fiscais e e-mails",
            "Menos digitação manual, menos erros",
          ],
        },
        {
          goal: "Software",
          title: "Plataformas e portais sob medida",
          points: [
            "Sistemas administrativos, portais de clientes e fornecedores",
            "Web e mobile com design centrado no usuário",
            "Arquitetura limpa que escala",
          ],
        },
        {
          goal: "Dados",
          title: "Dados, relatórios e dashboards",
          points: [
            "Todas as fontes unificadas em um só lugar",
            "Dashboards executivos em tempo real",
            "Pipelines de dados confiáveis",
          ],
        },
        {
          goal: "Segurança",
          title: "Identidade, acessos e integrações",
          points: [
            "Login único (SSO) e perfis de acesso",
            "APIs e gateways seguros",
            "Integração com ERP, CRM e serviços de terceiros",
          ],
        },
        {
          goal: "Nuvem",
          title: "Nuvem e infraestrutura",
          points: [
            "Migração e implantação na AWS e Azure",
            "Docker, Kubernetes e observabilidade",
            "Custos e desempenho sob controle",
          ],
        },
        {
          goal: "Imersivo",
          title: "Realidade virtual e experiências imersivas",
          points: [
            "Simuladores de treinamento em VR",
            "Ambientes virtuais para saúde e educação",
            "Desenvolvimento em Unity com design centrado no usuário",
          ],
        },
      ],
      plans: [
        {
          name: "Workshop de descoberta",
          summary: "Definimos juntos o problema, o escopo e o retorno esperado.",
          includes: ["Sessões com sua equipe", "Arquitetura proposta", "Roadmap e estimativa"],
        },
        {
          name: "Projeto turnkey",
          summary: "Projetamos, construímos e entregamos em produção.",
          includes: ["Entregas a cada duas semanas", "Documentação e transferência", "Garantia e suporte"],
        },
        {
          name: "Equipe dedicada",
          summary: "Engenheiros sênior integrados à sua equipe de forma contínua.",
          includes: ["AI, full-stack e dados", "Suas ferramentas e processos", "Escala conforme a necessidade"],
        },
      ],
    },
    startup: {
      label: "Startups e tech",
      hint: "Startups, SaaS, empresas de software",
      headline: "Da ideia ao produto, sem dívida técnica.",
      intro:
        "Somos o time técnico sênior que você precisa para lançar rápido sem abrir mão da qualidade: produto, IA e infraestrutura prontos para os primeiros clientes — e para os próximos mil.",
      proof: "Engenheiros que levaram produtos de AI e MLOps do zero à produção.",
      forWho: [
        "Startups em estágio inicial",
        "Empresas SaaS",
        "Fundadores não técnicos",
        "Times de produto",
        "Agências que precisam de apoio técnico",
      ],
      services: [
        {
          goal: "Lance",
          title: "MVP em semanas",
          points: [
            "Do protótipo a um produto funcional",
            "Design UX e testes com usuários",
            "Web e mobile (React, React Native)",
          ],
        },
        {
          goal: "Diferencie-se",
          title: "Funcionalidades de IA no seu produto",
          points: [
            "Agentes, RAG e LLMs em produção",
            "Visão computacional e modelos preditivos",
            "Controle de custos e da qualidade das respostas",
          ],
        },
        {
          goal: "Escale",
          title: "MLOps e plataforma de dados",
          points: [
            "Treinamento, versionamento e deploy de modelos",
            "Streaming e pipelines de dados",
            "Monitoramento de modelos em produção",
          ],
        },
        {
          goal: "Escale",
          title: "Arquitetura e desempenho",
          points: [
            "Revisão de arquitetura e código",
            "Backends de alta performance (Python, Rust)",
            "Segurança, autenticação e multi-tenant",
          ],
        },
        {
          goal: "Lidere",
          title: "CTO fracionado e consultoria",
          points: [
            "Decisões de stack e roadmap técnico",
            "Due diligence técnica para investidores",
            "Contratação e mentoria do seu time",
          ],
        },
        {
          goal: "Reforce",
          title: "Extensão de equipe",
          points: [
            "Engenheiros sênior que se integram rápido",
            "Code reviews e boas práticas",
            "Transferência de conhecimento",
          ],
        },
      ],
      plans: [
        {
          name: "Sprint de validação",
          summary: "Um protótipo funcional para testar a ideia com usuários reais.",
          includes: ["Escopo focado", "Protótipo navegável ou funcional", "Aprendizados e próximo passo"],
        },
        {
          name: "MVP em produção",
          summary: "Um produto pronto para os primeiros clientes.",
          includes: ["Produto completo e publicado", "Analytics e monitoramento", "Código seu e documentado"],
        },
        {
          name: "Parceiro técnico contínuo",
          summary: "Evoluímos o produto com você, mês a mês.",
          includes: ["Roadmap compartilhado", "Equipe flexível", "Escala com o seu crescimento"],
        },
      ],
    },
  },
};

export const processPt: ProcessCopy = {
  kicker: "Como trabalhamos",
  title: "Claro desde o primeiro dia.",
  subtitle: "Sem letras miúdas: você sabe o que vai receber, quando e como medimos o resultado.",
  steps: [
    { title: "Ouvimos", text: "Uma conversa sem custo para entender o seu negócio e o que você precisa." },
    { title: "Propomos", text: "Proposta por escrito: o que inclui, o que não inclui, prazos e entregas." },
    { title: "Construímos", text: "Entregas frequentes para você ver progresso real desde as primeiras semanas." },
    { title: "Acompanhamos", text: "Treinamento, relatórios claros e suporte para que tudo continue funcionando." },
  ],
  principles: [
    "Suas contas, domínio e dados sempre em seu nome.",
    "Acordo claro por escrito antes de começar.",
    "Método e relatórios mensuráveis — sem promessas vazias.",
    "Protegemos a privacidade dos seus clientes.",
  ],
};

/* ───────────────────────────── Deutsch ───────────────────────────── */

export const servicesDe: ServicesCopy = {
  kicker: "Leistungen",
  title: "Lösungen für jede Art von Unternehmen.",
  subtitle:
    "Vom Café um die Ecke bis zum Produktionswerk: Wählen Sie Ihr Profil und sehen Sie, was wir für Sie tun können.",
  selectorLabel: "Welche Art von Unternehmen sind Sie?",
  forWhoLabel: "Ideal für",
  servicesLabel: "Was wir für Sie tun können",
  plansLabel: "So starten wir",
  recommended: "Empfohlen",
  quoteNote:
    "Jedes Projekt wird individuell und kostenlos kalkuliert. Sie erhalten ein klares schriftliches Angebot: was enthalten ist, was nicht und wann geliefert wird.",
  cta: "Erzählen Sie uns von Ihrem Fall",
  processLink: "So arbeiten wir",
  emailCta: "Lieber per E-Mail",
  whatsappMessage: "Hallo Vectorial Soft! Ich interessiere mich für Ihre Leistungen für {profile}.",
  audiences: {
    local: {
      label: "Lokale Unternehmen",
      hint: "Praxen, Cafés, Salons, Werkstätten",
      headline: "Mehr Kunden, weniger unbeantwortete Nachrichten.",
      intro:
        "Wir bringen Ihr Geschäft online und auf Autopilot: auf Google gefunden, per WhatsApp gebucht und mit Kunden, die wiederkommen. Sie konzentrieren sich auf Ihre Kunden.",
      proof: "Dieselbe Ingenieursqualität, die wir für Fabriken und Konzerne liefern — für Ihr Geschäft.",
      forWho: [
        "Arzt- & Zahnarztpraxen",
        "Tierarztpraxen",
        "Friseure & Barbershops",
        "Spas & Wellness",
        "Cafés & Restaurants",
        "Einzelhandel",
        "Kfz-Werkstätten",
        "Fitnessstudios",
      ],
      services: [
        {
          goal: "Gefunden werden",
          title: "Google Maps & Unternehmensprofil",
          points: [
            "Fotos, Öffnungszeiten, Leistungen und WhatsApp-Button",
            "Strategie für mehr Bewertungen",
            "Sichtbar bei Suchen „in meiner Nähe“",
          ],
        },
        {
          goal: "Gefunden werden",
          title: "Professionelle Website",
          points: [
            "Leistungen, Standort, Zeiten und Bewertungen auf einer Seite",
            "Direkte WhatsApp- und Anruf-Buttons",
            "Eigene Domain auf Ihren Namen",
          ],
        },
        {
          goal: "Besser betreuen",
          title: "WhatsApp Business, richtig eingerichtet",
          points: [
            "Unternehmensprofil und Produktkatalog",
            "Schnellantworten, Begrüßungs- und Abwesenheitsnachrichten",
            "Labels zur Kundenorganisation plus Schulung",
          ],
        },
        {
          goal: "Besser betreuen",
          title: "Termin-Bot & Erinnerungen",
          points: [
            "Buchung rund um die Uhr per Button",
            "Automatische Bestätigungen und Erinnerungen",
            "Verschieben oder absagen ohne Anruf",
          ],
        },
        {
          goal: "Kunden zurückholen",
          title: "Nachfassen & Reaktivierung",
          points: [
            "Erinnerungen an Impfungen, Reinigungen, Haarschnitte oder Services",
            "Nachrichten an Kunden, die nicht wiederkamen",
            "E-Mail-Hinweise mit Ihrem Firmennamen",
          ],
        },
        {
          goal: "Mehr verkaufen",
          title: "Digitale Speisekarte & QR-Katalog",
          points: [
            "Immer aktuell, ohne Neudruck",
            "Ideal für Cafés, Restaurants und Spas",
            "Bestellungen und Fragen direkt per WhatsApp",
          ],
        },
        {
          goal: "Professionell auftreten",
          title: "E-Mail mit eigener Domain",
          points: [
            "Adressen wie termine@ihrgeschaeft.de",
            "Google Workspace, Microsoft 365 oder Zoho, fertig eingerichtet",
            "Authentifizierte E-Mails, die nicht im Spam landen",
          ],
        },
        {
          goal: "Wachsen",
          title: "Werbung auf Facebook, Instagram & Google",
          points: [
            "Anzeigen, die einen WhatsApp-Chat öffnen",
            "Lokale Google Ads für Suchen in der Nähe",
            "Klarer Monatsbericht: Nachrichten, Termine, Bewertungen",
          ],
        },
      ],
      plans: [
        {
          name: "Essenziell",
          summary: "Erste Kunden über das Internet gewinnen.",
          includes: ["WhatsApp Business eingerichtet", "Google-Unternehmensprofil", "Automatische Nachrichten"],
        },
        {
          name: "Wachstum",
          summary: "Keine Termine und Kunden mehr verlieren.",
          includes: ["Alles aus Essenziell", "Termin-Bot & Erinnerungen", "Professionelle Website"],
        },
        {
          name: "Komplett",
          summary: "Mit Werbung stetig wachsen.",
          includes: [
            "Alles aus Wachstum",
            "Domain & professionelle E-Mail",
            "Werbung auf Meta & Google",
            "Monatlicher Ergebnisbericht",
          ],
        },
      ],
    },
    industry: {
      label: "Industrie & Fertigung",
      hint: "Fabriken, Werke, Werkstätten",
      headline: "Software, die den Shopfloor versteht.",
      intro:
        "Wir kommen aus Jahren in echten Fabriken. Wir verbinden Maschinen, Menschen und Daten, damit Sie Ihre Produktion in Echtzeit sehen und mit Zahlen statt Vermutungen entscheiden.",
      proof: "Jahrelange Softwareentwicklung in Automobil- und Fertigungswerken.",
      forWho: [
        "Produktionswerke",
        "Automobilzulieferer",
        "Lohnfertiger",
        "Zerspanungsbetriebe",
        "Servicewerkstätten",
        "Lager & Distribution",
        "Qualitätslabore",
      ],
      services: [
        {
          goal: "Transparenz",
          title: "Produktionsmonitoring in Echtzeit",
          points: [
            "Dashboards nach Linie, Schicht und Station",
            "Stillstände und Andon-Alarme sofort",
            "Automatische OEE und Taktzeiten",
          ],
        },
        {
          goal: "Steuerung",
          title: "MES & Rückverfolgbarkeit",
          points: [
            "Produktion, Qualität und Seriennummern-Tracking",
            "Komponenten- und Chargen-Genealogie",
            "Integration mit SPS, Scannern und ERP",
          ],
        },
        {
          goal: "Qualität",
          title: "Inspektion mit Machine Vision",
          points: [
            "KI-gestützte Fehlererkennung mit Kameras",
            "Läuft am Edge, ohne Internetabhängigkeit",
            "Fotonachweis für jedes Teil",
          ],
        },
        {
          goal: "Qualität",
          title: "Statistische Prozesslenkung (SPC)",
          points: [
            "Regelkarten und Prozessfähigkeit (Cp, Cpk)",
            "Alarme, wenn ein Prozess außer Kontrolle gerät",
            "Berichte für Audits und Kunden",
          ],
        },
        {
          goal: "Digitalisieren",
          title: "Schluss mit Papier und Excel",
          points: [
            "Digitale Checklisten und Prüfformulare",
            "Arbeitsaufträge und Instandhaltung",
            "Lagerverwaltung mit Barcode und QR",
          ],
        },
        {
          goal: "Intelligenz",
          title: "KI-Assistenten für Ihren Betrieb",
          points: [
            "Handbücher, Verfahren und Störungen in natürlicher Sprache abfragen",
            "Automatische Schichtberichte",
            "Bedarfsprognosen und vorausschauende Wartung",
          ],
        },
      ],
      plans: [
        {
          name: "Werksanalyse",
          summary: "Wir analysieren Ihren Betrieb und finden, wo Zeit und Geld verloren gehen.",
          includes: ["Vor-Ort-Besuch und Interviews", "Priorisierte Chancenkarte", "Schriftliches Angebot"],
        },
        {
          name: "Pilot an einer Linie",
          summary: "Messbare Ergebnisse im Kleinen, bevor skaliert wird.",
          includes: ["Eine Linie oder ein Prozess", "Vorher-Nachher-Kennzahlen", "Datenbasierte Entscheidung"],
        },
        {
          name: "Werksweiter Rollout",
          summary: "Die Lösung im gesamten Betrieb, mit laufendem Support.",
          includes: ["Einführung in Phasen", "Schulung des Personals", "Support und kontinuierliche Verbesserung"],
        },
      ],
    },
    enterprise: {
      label: "Unternehmen",
      hint: "Mittlere & große Organisationen",
      headline: "Prozesse automatisieren, Daten nutzbar machen.",
      intro:
        "Wir bauen maßgeschneiderte Systeme, die sich in Ihre bestehende Landschaft einfügen — ERP, CRM, Datenbanken und Cloud. Sicher, dokumentiert und bereit zu wachsen.",
      proof: "Von uns gebaute Enterprise-KI-Assistenten und Plattformen laufen heute in Produktion.",
      forWho: [
        "Konzerne",
        "Dienstleister",
        "Distribution & Logistik",
        "Beratungen & Kanzleien",
        "Bildung",
        "Gesundheitswesen",
      ],
      services: [
        {
          goal: "KI",
          title: "KI-Assistenten für Ihre Dokumente",
          points: [
            "Chat, der mit Ihrem Unternehmenswissen antwortet (RAG)",
            "Antworten mit Quellen und teambasiertem Zugriff",
            "Per MCP mit Ihren Systemen verbunden",
          ],
        },
        {
          goal: "Automatisierung",
          title: "Prozessautomatisierung",
          points: [
            "Freigabe-Workflows, Berichte und Benachrichtigungen",
            "Datenextraktion aus PDFs, Rechnungen und E-Mails",
            "Weniger manuelle Erfassung, weniger Fehler",
          ],
        },
        {
          goal: "Software",
          title: "Individuelle Plattformen & Portale",
          points: [
            "Backoffice-Systeme, Kunden- und Lieferantenportale",
            "Web und Mobile mit nutzerzentriertem Design",
            "Saubere, skalierbare Architektur",
          ],
        },
        {
          goal: "Daten",
          title: "Daten, Reporting & Dashboards",
          points: [
            "Alle Quellen an einem Ort vereint",
            "Management-Dashboards in Echtzeit",
            "Zuverlässige Datenpipelines",
          ],
        },
        {
          goal: "Sicherheit",
          title: "Identity, Zugriff & Integrationen",
          points: [
            "Single Sign-on (SSO) und Rollen",
            "Sichere APIs und Gateways",
            "Integration mit ERP, CRM und Drittanbietern",
          ],
        },
        {
          goal: "Cloud",
          title: "Cloud & Infrastruktur",
          points: [
            "Migration und Deployment auf AWS und Azure",
            "Docker, Kubernetes und Observability",
            "Kosten und Performance im Griff",
          ],
        },
        {
          goal: "Immersiv",
          title: "Virtual Reality & immersive Erlebnisse",
          points: [
            "VR-Trainings- und Schulungssimulatoren",
            "Virtuelle Umgebungen für Gesundheit und Bildung",
            "Entwickelt in Unity mit nutzerzentriertem Design",
          ],
        },
      ],
      plans: [
        {
          name: "Discovery-Workshop",
          summary: "Gemeinsam definieren wir Problem, Umfang und erwarteten Nutzen.",
          includes: ["Sessions mit Ihrem Team", "Vorgeschlagene Architektur", "Roadmap und Schätzung"],
        },
        {
          name: "Schlüsselfertiges Projekt",
          summary: "Wir entwerfen, bauen und liefern bis in die Produktion.",
          includes: ["Lieferungen alle zwei Wochen", "Dokumentation und Übergabe", "Gewährleistung und Support"],
        },
        {
          name: "Dediziertes Team",
          summary: "Senior-Ingenieure, dauerhaft in Ihr Team integriert.",
          includes: ["AI, Full-Stack und Daten", "Ihre Tools und Prozesse", "Skaliert nach Bedarf"],
        },
      ],
    },
    startup: {
      label: "Startups & Tech",
      hint: "Startups, SaaS, Softwarefirmen",
      headline: "Von der Idee zum Produkt — ohne technische Schulden.",
      intro:
        "Wir sind das erfahrene Tech-Team, das Sie brauchen, um schnell zu starten, ohne an Qualität zu sparen: Produkt, KI und Infrastruktur bereit für die ersten Kunden — und die nächsten tausend.",
      proof: "Ingenieure, die AI- und MLOps-Produkte von null in die Produktion gebracht haben.",
      forWho: [
        "Early-Stage-Startups",
        "SaaS-Unternehmen",
        "Nicht-technische Gründer",
        "Produktteams",
        "Agenturen mit Tech-Bedarf",
      ],
      services: [
        {
          goal: "Starten",
          title: "MVP in Wochen",
          points: [
            "Vom Prototyp zum funktionierenden Produkt",
            "UX-Design und Nutzertests",
            "Web und Mobile (React, React Native)",
          ],
        },
        {
          goal: "Abheben",
          title: "KI-Funktionen für Ihr Produkt",
          points: [
            "Agenten, RAG und LLMs in Produktion",
            "Computer Vision und prädiktive Modelle",
            "Kontrolle über Kosten und Antwortqualität",
          ],
        },
        {
          goal: "Skalieren",
          title: "MLOps & Datenplattform",
          points: [
            "Training, Versionierung und Deployment von Modellen",
            "Streaming und Datenpipelines",
            "Modell-Monitoring in Produktion",
          ],
        },
        {
          goal: "Skalieren",
          title: "Architektur & Performance",
          points: [
            "Architektur- und Code-Reviews",
            "Hochperformante Backends (Python, Rust)",
            "Sicherheit, Auth und Multi-Tenancy",
          ],
        },
        {
          goal: "Führen",
          title: "Fractional CTO & Beratung",
          points: [
            "Stack-Entscheidungen und technische Roadmap",
            "Technische Due Diligence für Investoren",
            "Recruiting und Mentoring Ihres Teams",
          ],
        },
        {
          goal: "Verstärken",
          title: "Team-Erweiterung",
          points: [
            "Senior-Ingenieure, die schnell produktiv sind",
            "Code-Reviews und Best Practices",
            "Wissenstransfer",
          ],
        },
      ],
      plans: [
        {
          name: "Validierungs-Sprint",
          summary: "Ein funktionsfähiger Prototyp, um die Idee mit echten Nutzern zu testen.",
          includes: ["Fokussierter Umfang", "Klickbarer oder funktionaler Prototyp", "Erkenntnisse und nächster Schritt"],
        },
        {
          name: "MVP in Produktion",
          summary: "Ein Produkt, bereit für Ihre ersten Kunden.",
          includes: ["Vollständiges, deploytes Produkt", "Analytics und Monitoring", "Ihr Code, dokumentiert"],
        },
        {
          name: "Laufender Tech-Partner",
          summary: "Wir entwickeln das Produkt Monat für Monat mit Ihnen weiter.",
          includes: ["Gemeinsame Roadmap", "Flexibles Team", "Wächst mit Ihnen"],
        },
      ],
    },
  },
};

export const processDe: ProcessCopy = {
  kicker: "So arbeiten wir",
  title: "Klar vom ersten Tag an.",
  subtitle: "Kein Kleingedrucktes: Sie wissen, was Sie bekommen, wann, und wie wir das Ergebnis messen.",
  steps: [
    { title: "Zuhören", text: "Ein kostenloses Gespräch, um Ihr Geschäft und Ihren Bedarf zu verstehen." },
    { title: "Vorschlagen", text: "Ein schriftliches Angebot: was enthalten ist, was nicht, Zeitplan und Ergebnisse." },
    { title: "Bauen", text: "Regelmäßige Lieferungen, damit Sie ab den ersten Wochen echten Fortschritt sehen." },
    { title: "Begleiten", text: "Schulung, klare Berichte und Support, damit alles weiterläuft." },
  ],
  principles: [
    "Ihre Konten, Domain und Daten immer auf Ihren Namen.",
    "Eine klare schriftliche Vereinbarung vor dem Start.",
    "Methode und messbare Berichte — keine leeren Versprechen.",
    "Wir schützen die Privatsphäre Ihrer Kunden.",
  ],
};
