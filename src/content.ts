/**
 * Contenido editable del sitio.
 * Cambiá acá los textos, números, teléfono, links, etc. sin tocar los componentes.
 */

export const SITE = {
  name: "Franco Buccella Yaciofano",
  role: "Asesor en Planificación Financiera Personal",
  whatsappNumber: "5492616905231", // solo dígitos, con código de país
  whatsappDisplay: "+54 9 261 690-5231",
  // Mensaje que aparece escrito de antemano cuando alguien toca un botón de WhatsApp del sitio
  whatsappMessage: "Hola Franco, vi tu página web y me gustaría charlar sobre mi plan financiero.",
  location: "Atiendo en toda Argentina · Con base en Mendoza",
};

/**
 * Medición del sitio. Mientras los dos campos estén vacíos no se carga nada.
 * - ga4Id: ID de medición de Google Analytics 4 (ej: "G-XXXXXXXXXX")
 * - plausibleDomain: dominio registrado en Plausible (ej: "francobuccellayaciofano.netlify.app")
 */
export const ANALYTICS = {
  ga4Id: "",
  plausibleDomain: "",
};

export const NAV_LINKS = [
  { label: "Sobre mí", href: "/#sobre-mi" },
  { label: "Para quién", href: "/#para-quien" },
  { label: "Soluciones", href: "/#soluciones" },
  { label: "Respaldo", href: "/#respaldo" },
  { label: "Calculadoras", href: "/#calculadoras" },
  { label: "Jubilación", href: "/calculadora-jubilacion" },
  { label: "Empresas", href: "https://francobuccella-empresas.netlify.app" },
];

export const NAV_CTA_LABEL = "Hablemos";

export const HERO = {
  eyebrow: "Planificación financiera personal",
  title: "Ahorrá en dólares y protegé a tu familia, con un plan a tu medida.",
  subtitle:
    "Soy Franco Buccella Yaciofano, asesor en Financial Benefit. Armamos juntos un plan para tus proyectos — sin presión y sin letra chica.",
  photoAlt: "Franco Buccella Yaciofano, asesor en planificación financiera",
  ctaPrimary: { label: "Charlemos por WhatsApp" },
  ctaSecondary: { label: "Prefiero dejar mis datos", href: "#contacto" },
  // Franja de respaldo: números de la consultora y de la aseguradora (no personales)
  proof: [
    { value: "Desde 1996", label: "Financial Benefit, la consultora donde trabajo" },
    { value: "+2.500", label: "clientes acompañados en Financial Benefit" },
    { value: "Desde 1872", label: "Zurich Life, en más de 170 países" },
    { value: "AAA", label: "calificación local (FixScr)" },
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
    {
      title: "Sos independiente o monotributista",
      text: "Nadie aporta por vos: armamos un ahorro y una protección a tu medida.",
    },
    {
      title: "Ahorrás “como se puede”",
      text: "Definimos una meta, un plazo y un aporte que puedas sostener.",
    },
    {
      title: "Tenés hijos y pensás en sus estudios",
      text: "Un plan de ahorro para su facultad o sus primeros proyectos.",
    },
    {
      title: "Sos el sostén de tu familia",
      text: "Si algo te pasa, que tu familia no cargue además con un problema económico.",
    },
    {
      title: "Tenés un negocio o una empresa",
      text: "Ahorro para vos y protección para tu negocio y tus socios.",
      link: { label: "Ver la propuesta para empresas →", href: "https://francobuccella-empresas.netlify.app" },
    },
    {
      title: "Estás empezando a trabajar",
      text: "Cuanto antes empezás, más tiempo tiene tu capital para desarrollarse.",
    },
  ],
};

export const SOLUTIONS = {
  eyebrow: "Soluciones",
  title: "Tres caminos, una misma lógica: lo que sirve para vos.",
  items: [
    {
      tag: "AHORRO",
      interest: "Ahorro",
      title: "Capitalización con objetivo",
      description:
        "Pensado a tu plazo y tu meta: los estudios de tus hijos, un retiro tranquilo o un proyecto. Tus aportes se invierten en fondos (en dólares o en pesos, a tu elección) según tu perfil, y el plan incluye un seguro de vida.",
      products: [
        {
          name: "Future",
          text: "Construir un respaldo que complemente tu jubilación.",
          meta: "Aportes periódicos · largo plazo · podés pausar aportes",
        },
        {
          name: "Future Joven",
          text: "Empezar a armar capital desde joven para tus proyectos.",
          meta: "Cuota mensual · largo plazo · flexible",
        },
        {
          name: "University",
          text: "Ahorrar para los estudios o los primeros proyectos de tus hijos o nietos.",
          meta: "Aportes periódicos · plazos de 5 a 35 años",
        },
        {
          name: "Impact",
          text: "Un plan de ahorro con fondos internacionales, que podés ajustar en cada etapa.",
          meta: "Plazo de 5 a 35 años o sin límite · aportes flexibles",
        },
        {
          name: "Advanced",
          text: "Hacer crecer ahorros que ya tenés guardados.",
          meta: "Aporte único inicial · plazo de 3 o 5 años",
        },
      ],
      note: "Los retiros parciales y las condiciones dependen de cada plan.",
      cta: "Quiero ahorrar con un plan →",
    },
    {
      tag: "PROTECCIÓN",
      interest: "Protección",
      title: "Cobertura cuando hace falta",
      description:
        "Para que un imprevisto de salud o de vida no se convierta, además, en un problema económico para tu familia.",
      products: [
        {
          name: "Options",
          text: "Dejar un respaldo económico a tu familia (o a tu empresa) a largo plazo.",
          meta: "Cuota flexible · largo plazo",
        },
        {
          name: "Options Easy Life",
          text: "Respaldar una deuda o un préstamo con vencimiento, como una hipoteca.",
          meta: "Plazos fijos de 5, 10 o 15 años",
        },
        {
          name: "Vida Individual",
          text: "Un seguro de vida accesible para el día a día.",
          meta: "Contrato anual renovable · cuota baja",
        },
      ],
      note: "Según el plan, podés sumar coberturas de invalidez, enfermedades graves u hospitalización.",
      cta: "Quiero proteger a mi familia →",
    },
    {
      tag: "COMBINADOS",
      interest: "Combinado",
      title: "Ahorro y protección juntos",
      description:
        "Los planes de ahorro ya incluyen un seguro de vida. Si querés ir más allá, los combinamos con coberturas adicionales en un plan armado a medida de tu situación.",
      products: [
        {
          name: "Seguro de vida adicional",
          text: "Una suma asegurada mayor para proteger el logro de tu meta.",
          meta: "Según el plan",
        },
        {
          name: "Invalidez y hospitalización",
          text: "Respaldo si un problema de salud te frena los ingresos.",
          meta: "Según el plan",
        },
      ],
      note: "Te muestro las coberturas disponibles de cada plan antes de que decidas.",
      cta: "Quiero resolver las dos cosas →",
    },
  ],
  disclaimer:
    "Los planes de ahorro invierten en fondos: la rentabilidad no está garantizada y depende del fondo elegido, el plazo y el mercado. Coberturas, plazos y condiciones varían según cada plan; consultá las condiciones contractuales. Los pagos se realizan en pesos, al tipo de cambio del Banco de la Nación Argentina.",
};

export const HOW_IT_WORKS = {
  eyebrow: "Cómo trabajo",
  title: "Tres pasos, sin sorpresas.",
  steps: [
    {
      title: "Charlamos",
      text: "Me contás tu situación, tus proyectos y qué te preocupa. Es sin costo y sin compromiso.",
    },
    {
      title: "Armamos el plan",
      text: "Definimos objetivo, plazo y aporte. Te muestro las opciones con sus condiciones por escrito, para que compares tranquilo.",
    },
    {
      title: "Decidís vos",
      text: "Si el plan te sirve, lo contratamos. Si no, no pasa nada. Y lo revisamos cuando cambien tus proyectos.",
    },
  ],
};

export const FAQ = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que casi todos me preguntan.",
  items: [
    {
      q: "¿La primera charla tiene costo?",
      a: "No. La primera charla es sin costo y sin obligación de nada: sirve para conocernos y ver si tiene sentido avanzar.",
    },
    {
      q: "¿El rendimiento está garantizado?",
      a: "No. Los planes de ahorro invierten en fondos y la rentabilidad depende del fondo elegido, el plazo y el mercado: no está garantizada. Por eso las calculadoras de esta página usan un rendimiento supuesto, solo a modo ilustrativo.",
    },
    {
      q: "¿Puedo retirar la plata antes del plazo?",
      a: "Depende del plan. Algunos permiten retiros parciales o totales, con condiciones y, en los primeros años, penalizaciones. Antes de contratar te explico las del plan que te interese.",
    },
    {
      q: "¿Qué pasa si en algún momento no puedo pagar la cuota?",
      a: "Depende del plan: varios permiten pausar o modificar los aportes y otros requieren mantener la cuota. Lo vemos antes de elegir, para que el plan se adapte a tu realidad.",
    },
    {
      q: "¿En qué moneda invierto y en cuál cobro?",
      a: "Podés elegir invertir en dólares o en pesos. Según la regulación vigente, los pagos de siniestros, rescates y beneficios se realizan en pesos, al tipo de cambio del Banco de la Nación Argentina.",
    },
    {
      q: "¿Puedo designar beneficiarios?",
      a: "Sí. Podés designar a quien quieras como beneficiario, según las condiciones de la póliza.",
    },
    {
      q: "¿Quién respalda el seguro?",
      a: "Zurich International Life Ltd. Sucursal Argentina, del grupo Zurich (fundado en 1872), con calificación AAA de FixScr, afiliada local de Fitch.",
    },
    {
      q: "¿Atendés fuera de Mendoza?",
      a: "Sí, atiendo en toda Argentina, a distancia. Podemos charlar por WhatsApp o por videollamada.",
    },
  ],
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

export const RETIREMENT_TEASER = {
  eyebrow: "Planificación previsional",
  title: "¿Con cuánto te vas a jubilar?",
  description:
    "Esta calculadora rápida te da una idea. Pero la jubilación depende de tu edad, de lo que te dé ANSES y de tu horizonte real de ahorro. Armamos una calculadora completa, paso a paso, para que lo veas en detalle.",
  ctaLabel: "Calcular mi jubilación →",
  ctaHref: "/calculadora-jubilacion",
};

export const CALCULATOR = {
  eyebrow: "Simulá tu plan",
  title: "¿Cuánto podés lograr?",
  description:
    "Dos calculadoras para que veas en números lo que es posible. Usan un rendimiento supuesto del 7% anual en dólares, solo a modo ilustrativo.",
  annualRate: 0.07,
  disclaimer:
    "Simulación ilustrativa: la rentabilidad real depende de los fondos elegidos, el plazo y el mercado, y no está garantizada. Calculado con capitalización mensual compuesta.",
  // Mensajes que se mandan al formulario / WhatsApp al tocar "Quiero armar mi plan".
  // {aporte}, {meta}, {anios}, {tasa} y {resultado} se reemplazan con los valores simulados.
  messages: {
    contribution:
      "Hola Franco, simulé aportar USD {aporte} por mes durante {anios} años (rendimiento supuesto de {tasa}% anual, sin garantía) y me daría unos USD {resultado}. Quiero ver cómo armarlo.",
    goal:
      "Hola Franco, mi meta es juntar USD {meta} en {anios} años. Con un rendimiento supuesto de {tasa}% anual (sin garantía) tendría que aportar unos USD {resultado} por mes. Quiero ver cómo armarlo.",
  },
  ctaWhatsappLabel: "Enviarlo por WhatsApp",
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
