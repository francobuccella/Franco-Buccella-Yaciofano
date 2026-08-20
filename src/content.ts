/**
 * Contenido editable del sitio.
 * Cambiá acá los textos, números, teléfono, links, etc. sin tocar los componentes.
 */

export const SITE = {
  name: "Franco Buccella Yaciofano",
  role: "Asesor en Planificación Financiera Personal",
  whatsappNumber: "5492616905231", // solo dígitos, con código de país
  whatsappDisplay: "+54 9 261 690-5231",
  location: "Atiendo en toda Argentina · Con base en Mendoza",
};

export const NAV_LINKS = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Para quién", href: "#para-quien" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Respaldo", href: "#respaldo" },
  { label: "Calculadoras", href: "#calculadoras" },
  { label: "Hablemos", href: "#contacto" },
];

export const HERO = {
  eyebrow: "Asesoramiento en Planificación Financiera",
  title: SITE.name,
  subtitle: "Un plan para tus proyectos, pensado con vos — sin presión y sin letra chica.",
  ctaPrimary: { label: "Quiero charlar sin compromiso", href: "#contacto" },
  ctaSecondary: { label: "Ver soluciones ↓", href: "#soluciones" },
  stamps: [
    { title: "Financial Benefit", value: "1996", caption: "Inicio de actividades" },
    { title: "+2.500", value: "", caption: "Clientes acompañados" },
    { title: "+20", value: "", caption: "Asesores independientes" },
    { title: "Zurich Life", value: "1872", caption: "Fundación del grupo" },
    { title: "170+", value: "", caption: "Países con presencia" },
    { title: "AAA", value: "", caption: "Calificación FixScr" },
  ],
};

export const ABOUT = {
  eyebrow: "Sobre mí",
  title: "Antes que asesor, alguien que te escucha de verdad.",
  paragraphs: [
    "Empecé en planificación financiera hace poco — y lo digo sin vueltas, porque prefiero la transparencia a la pose. Lo que sí tengo claro desde el primer día es cómo quiero trabajar: sin presión, sin venderte algo que no necesitás, buscando lo que de verdad te sirve a vos.",
    "Trabajo en Financial Benefit, consultora con sede en Mendoza, y represento los productos de Zurich Life — una de las aseguradoras más sólidas del mundo. Esa combinación me permite asesorarte con el respaldo de una estructura grande, pero con la cercanía de alguien que conoce tu nombre, tu familia y tus proyectos.",
    "Cuando termina una reunión conmigo, quiero que sientas que alguien buscó lo mejor para vos — no que te vendieron algo.",
  ],
  cards: [
    { title: "Financial Benefit", caption: "Consultora en Planificación Financiera" },
    { title: "Zurich Life", caption: "Compañía de seguros — productos representados" },
  ],
};

export const FOR_WHO = {
  eyebrow: "¿Es para vos?",
  title: "Esto te puede servir si…",
  items: [
    "Sos independiente o profesional",
    "Sos empresario o comerciante",
    "Tenés familia",
    "Tenés preocupaciones o proyectos a futuro",
    'Querés un plan, no solo "ahorrar como se puede"',
  ],
};

export const SOLUTIONS = {
  eyebrow: "Soluciones",
  title: "Tres caminos, una misma lógica: lo que sirve para vos.",
  items: [
    {
      tag: "AHORRO",
      title: "Capitalización con objetivo",
      description:
        "Pensado a tu plazo y tu meta: los estudios de tus hijos, un retiro tranquilo, o simplemente ver crecer tu capital en dólares con reglas claras.",
      products: ["Future", "Future Joven", "University", "Impact", "Advanced"],
    },
    {
      tag: "PROTECCIÓN",
      title: "Cobertura cuando hace falta",
      description:
        "Para que un imprevisto de salud o de vida no se convierta, además, en un problema económico para tu familia.",
      products: ["Vida", "Enfermedades graves", "Invalidez", "Hospitalización"],
    },
    {
      tag: "COMBINADOS",
      title: "Ahorro y protección juntos",
      description:
        "Para quienes prefieren resolver las dos cosas con una sola decisión, en un plan armado a medida de tu situación.",
      products: ["A medida"],
    },
  ],
  cta: "Lo vemos juntos en una charla sin compromiso →",
};

export const BACKING = {
  eyebrow: "El respaldo",
  title: "El respaldo no se promete: tiene historia.",
  description:
    "En Argentina, la confianza en lo financiero no se da por sentada — y está bien que así sea. Por eso elegí trabajar con instituciones que tienen algo más que un buen discurso: tienen historial.",
  columns: [
    {
      title: "Financial Benefit",
      stats: [
        { value: "1996", label: "Consultora en planificación financiera" },
        { value: "+2.500", label: "Clientes acompañados" },
        { value: "+20", label: "Asesores independientes" },
        { value: "Mendoza", label: "Sede y operación local" },
      ],
    },
    {
      title: "Zurich Life",
      stats: [
        { value: "1872", label: "Fundación del grupo Zurich" },
        { value: "170+", label: "Países con presencia" },
        { value: "+55.000", label: "Empleados en el mundo" },
        { value: "42%", label: "Participación de mercado en vida (Zurich+ZS, SSN dic. 2024)" },
      ],
    },
  ],
  highlight:
    "Durante la crisis de 2001, Zurich International Life respetó la moneda originalmente pactada con sus clientes en Argentina — en un momento en el que muy pocas instituciones lo hicieron.",
  footnote: "Más de 50 años de trayectoria en el país · Calificación AAA (FixScr, afiliada local de Fitch)",
};

export const CALCULATOR = {
  eyebrow: "Simulá tu plan",
  title: "¿Cuánto podés lograr?",
  description:
    "Dos calculadoras para que veas en números lo que es posible. Rendimiento del 7% anual fijo en dólares.",
  annualRate: 0.07,
  goalMode: {
    tabLabel: "Tengo una meta",
    goalMin: 10000,
    goalMax: 1000000,
    goalDefault: 300000,
    goalStep: 10000,
    yearsMin: 10,
    yearsMax: 30,
    yearsDefault: 20,
    resultLabel: "Necesitás aportar mensualmente",
  },
  contributionMode: {
    tabLabel: "Sé cuánto puedo aportar",
    contributionMin: 300,
    contributionMax: 1500,
    contributionDefault: 500,
    contributionStep: 50,
    yearsMin: 10,
    yearsMax: 30,
    yearsDefault: 20,
    resultLabel: "Vas a acumular",
  },
  cta: { label: "Quiero armar mi plan", href: "#contacto" },
  backing: "Respaldado por Financial Benefit (desde 1996) y Zurich Life (desde 1872, en más de 170 países)",
};

export const CONTACT = {
  title: "Hablemos, sin compromiso.",
  description:
    "Contame un poco de tu situación y te escribo para coordinar una primera charla — sin costo y sin obligación de nada.",
  interestOptions: ["Ahorro", "Protección", "Combinado", "Todavía no sé"],
  responseNote: "Te respondo en el día, solo para coordinar una charla. Sin venderte nada, sin compromisos.",
  submitLabel: "Enviar consulta",
  whatsappLabel: "O escribime directo por WhatsApp",
  privacyNote:
    "Tus datos se usan solo para contactarte. No los comparto con terceros ni los vendo. Ley 25.326 de Protección de Datos Personales.",
  directLabel: "¿Preferís escribirme directo?",
  // Reemplazá TU_FORM_ID por el ID que te da Formspree (https://formspree.io) al crear tu formulario.
  // Ver README.md para el paso a paso.
  formspreeEndpoint: "https://formspree.io/f/xoeaypoz",
};

export const FOOTER = {
  tagline: "Asesor acreditado en Financial Benefit · Productos Zurich Life",
  legal:
    "Los seguros de vida son emitidos por Zurich International Life Ltd. Sucursal Argentina, inscripta en la Superintendencia de Seguros de la Nación.",
  copyright: `© ${new Date().getFullYear()} ${SITE.name} — Asesor en Planificación Financiera Personal.`,
};
