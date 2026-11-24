export interface ExampleItem {
  tag: string;
  title: string;
  text: string;
  points: string[];
}

export interface ExamplesCopy {
  kicker: string;
  title: string;
  subtitle: string;
  illustrative: string;
  cta: string;
  imageAlt: [string, string];
  labels: {
    alerts: string;
    sales: string;
    operations: string;
    finance: string;
  };
  items: [ExampleItem, ExampleItem, ExampleItem, ExampleItem];
}

export const examplesEn: ExamplesCopy = {
  kicker: "Examples",
  title: "What we can build for your operation.",
  subtitle:
    "Typical challenges we solve in plants and companies. If yours looks like one of these, we already know where to start.",
  illustrative: "Illustrative view",
  cta: "I have a similar case",
  imageAlt: [
    "Defect-inspection screen marking a bottle's cap, label and surface as OK or NG on a conveyor",
    "Real-time production dashboard with OEE by line, top downtime causes and unit traceability",
  ],
  labels: { alerts: "Alerts", sales: "Sales", operations: "Operations", finance: "Finance" },
  items: [
    {
      tag: "Industrial machine vision",
      title: "Defect inspection and part counting",
      text: "Cameras and AI that check every part on the line, without slowing it down.",
      points: [
        "Detect scratches, dents or incomplete parts",
        "Automatic counting per batch, box or conveyor",
        "Verify labels, codes and correct assembly",
      ],
    },
    {
      tag: "MES / monitoring",
      title: "Production, traceability and metrics",
      text: "Know what is happening on every line right now, and what happened to every part.",
      points: [
        "Real-time OEE and downtime by line",
        "Serial-number traceability for every part",
        "Target vs. actual per shift on plant-floor screens",
      ],
    },
    {
      tag: "Industrial integration",
      title: "APIs, devices and system-to-system communication",
      text: "Machines, sensors and business systems sharing data without manual entry.",
      points: [
        "PLCs and sensors connected via OPC UA, MQTT or Modbus",
        "Work orders synced with your ERP",
        "Automatic alerts by email, WhatsApp or Teams",
      ],
    },
    {
      tag: "Business software",
      title: "BI dashboards and custom systems",
      text: "All of your company information in one place, ready for decisions.",
      points: [
        "Executive dashboards for sales, operations and finance",
        "Automatic reports in PDF and Excel",
        "Custom back-office systems and portals",
      ],
    },
  ],
};

export const examplesEs: ExamplesCopy = {
  kicker: "Ejemplos",
  title: "Lo que podemos construir para tu operación.",
  subtitle:
    "Retos típicos que resolvemos en plantas y empresas. Si el tuyo se parece a alguno, ya sabemos por dónde empezar.",
  illustrative: "Vista ilustrativa",
  cta: "Tengo un caso parecido",
  imageAlt: [
    "Pantalla de inspección de defectos que marca tapa, etiqueta y superficie de una botella como OK o NG sobre una banda",
    "Tablero de producción en tiempo real con OEE por línea, principales paros y trazabilidad de unidades",
  ],
  labels: { alerts: "Alertas", sales: "Ventas", operations: "Operación", finance: "Finanzas" },
  items: [
    {
      tag: "Visión artificial industrial",
      title: "Inspección de defectos y conteo de piezas",
      text: "Cámaras e IA que revisan cada pieza en la línea, sin detenerla.",
      points: [
        "Detección de rayones, golpes o piezas incompletas",
        "Conteo automático por lote, caja o banda",
        "Verificación de etiquetas, códigos y ensamble correcto",
      ],
    },
    {
      tag: "MES / monitoreo",
      title: "Producción, trazabilidad y métricas",
      text: "Saber qué pasa en cada línea en este momento, y qué pasó con cada pieza.",
      points: [
        "OEE y paros por línea en tiempo real",
        "Trazabilidad de cada pieza por número de serie",
        "Meta vs. real por turno en pantallas de planta",
      ],
    },
    {
      tag: "Integración industrial",
      title: "APIs, dispositivos y comunicación entre sistemas",
      text: "Máquinas, sensores y sistemas de negocio compartiendo datos sin captura manual.",
      points: [
        "PLCs y sensores conectados vía OPC UA, MQTT o Modbus",
        "Órdenes de trabajo sincronizadas con tu ERP",
        "Alertas automáticas por correo, WhatsApp o Teams",
      ],
    },
    {
      tag: "Software empresarial",
      title: "Dashboards de BI y sistemas a la medida",
      text: "Toda la información de tu empresa en un solo lugar, lista para decidir.",
      points: [
        "Tableros ejecutivos de ventas, operación y finanzas",
        "Reportes automáticos en PDF y Excel",
        "Sistemas administrativos y portales a la medida",
      ],
    },
  ],
};

export const examplesPt: ExamplesCopy = {
  kicker: "Exemplos",
  title: "O que podemos construir para a sua operação.",
  subtitle:
    "Desafios típicos que resolvemos em fábricas e empresas. Se o seu se parece com algum, já sabemos por onde começar.",
  illustrative: "Visão ilustrativa",
  cta: "Tenho um caso parecido",
  imageAlt: [
    "Tela de inspeção de defeitos que marca tampa, rótulo e superfície de um frasco como OK ou NG numa esteira",
    "Painel de produção em tempo real com OEE por linha, principais paradas e rastreabilidade de unidades",
  ],
  labels: { alerts: "Alertas", sales: "Vendas", operations: "Operação", finance: "Finanças" },
  items: [
    {
      tag: "Visão computacional industrial",
      title: "Inspeção de defeitos e contagem de peças",
      text: "Câmeras e IA que verificam cada peça na linha, sem pará-la.",
      points: [
        "Detecção de riscos, amassados ou peças incompletas",
        "Contagem automática por lote, caixa ou esteira",
        "Verificação de etiquetas, códigos e montagem correta",
      ],
    },
    {
      tag: "MES / monitoramento",
      title: "Produção, rastreabilidade e métricas",
      text: "Saber o que acontece em cada linha agora, e o que aconteceu com cada peça.",
      points: [
        "OEE e paradas por linha em tempo real",
        "Rastreabilidade de cada peça por número de série",
        "Meta vs. real por turno em telas no chão de fábrica",
      ],
    },
    {
      tag: "Integração industrial",
      title: "APIs, dispositivos e comunicação entre sistemas",
      text: "Máquinas, sensores e sistemas de negócio compartilhando dados sem digitação manual.",
      points: [
        "CLPs e sensores conectados via OPC UA, MQTT ou Modbus",
        "Ordens de produção sincronizadas com o seu ERP",
        "Alertas automáticos por e-mail, WhatsApp ou Teams",
      ],
    },
    {
      tag: "Software empresarial",
      title: "Dashboards de BI e sistemas sob medida",
      text: "Todas as informações da empresa em um só lugar, prontas para decidir.",
      points: [
        "Painéis executivos de vendas, operação e finanças",
        "Relatórios automáticos em PDF e Excel",
        "Sistemas administrativos e portais sob medida",
      ],
    },
  ],
};

export const examplesDe: ExamplesCopy = {
  kicker: "Beispiele",
  title: "Was wir für Ihren Betrieb bauen können.",
  subtitle:
    "Typische Herausforderungen, die wir in Werken und Unternehmen lösen. Ähnelt Ihre einer davon, wissen wir bereits, wo wir anfangen.",
  illustrative: "Beispielansicht",
  cta: "Ich habe einen ähnlichen Fall",
  imageAlt: [
    "Prüfbildschirm, der Deckel, Etikett und Oberfläche einer Flasche auf dem Band als OK oder NG markiert",
    "Echtzeit-Produktionsdashboard mit OEE pro Linie, häufigsten Stillständen und Rückverfolgung der Einheiten",
  ],
  labels: { alerts: "Alarme", sales: "Vertrieb", operations: "Betrieb", finance: "Finanzen" },
  items: [
    {
      tag: "Industrielle Bildverarbeitung",
      title: "Fehlerprüfung und Teilezählung",
      text: "Kameras und KI, die jedes Teil an der Linie prüfen, ohne sie zu bremsen.",
      points: [
        "Erkennung von Kratzern, Dellen oder unvollständigen Teilen",
        "Automatische Zählung pro Charge, Karton oder Band",
        "Prüfung von Etiketten, Codes und korrekter Montage",
      ],
    },
    {
      tag: "MES / Monitoring",
      title: "Produktion, Rückverfolgbarkeit und Kennzahlen",
      text: "Wissen, was jetzt an jeder Linie passiert, und was mit jedem Teil geschah.",
      points: [
        "OEE und Stillstände pro Linie in Echtzeit",
        "Rückverfolgbarkeit jedes Teils per Seriennummer",
        "Soll vs. Ist pro Schicht auf Hallenbildschirmen",
      ],
    },
    {
      tag: "Industrielle Integration",
      title: "APIs, Geräte und Kommunikation zwischen Systemen",
      text: "Maschinen, Sensoren und Geschäftssysteme teilen Daten ohne manuelle Erfassung.",
      points: [
        "SPS und Sensoren über OPC UA, MQTT oder Modbus angebunden",
        "Fertigungsaufträge mit Ihrem ERP synchronisiert",
        "Automatische Alarme per E-Mail, WhatsApp oder Teams",
      ],
    },
    {
      tag: "Unternehmenssoftware",
      title: "BI-Dashboards und individuelle Systeme",
      text: "Alle Informationen Ihres Unternehmens an einem Ort, bereit für Entscheidungen.",
      points: [
        "Management-Dashboards für Vertrieb, Betrieb und Finanzen",
        "Automatische Berichte als PDF und Excel",
        "Individuelle Backoffice-Systeme und Portale",
      ],
    },
  ],
};
