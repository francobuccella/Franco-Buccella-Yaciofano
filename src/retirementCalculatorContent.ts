/**
 * Contenido editable de la calculadora de jubilación (/calculadora-jubilacion).
 * Los valores de perfiles de inversión y ANSES son estimaciones de referencia:
 * revisalos y ajustalos según tu criterio antes de confiar en ellos frente a un cliente.
 */

export const RETIREMENT_CALCULATOR = {
  eyebrow: "Planificación previsional",
  title: "Planificá tu jubilación con números claros",
  description:
    "Respondé unas preguntas sobre tu situación y tu objetivo. Te mostramos cuánto tendrías que ahorrar por mes para llegar a la jubilación que querés, complementando lo que te daría ANSES.",
  backLabel: "← Volver al inicio",

  age: {
    stepTitle: "Tus datos",
    stepDescription: "Tu edad y cuándo querés dejar de trabajar.",
    currentAgeLabel: "Tu edad actual",
    currentAgeMin: 18,
    currentAgeMax: 70,
    currentAgeDefault: 35,
    retirementAgeLabel: "¿A qué edad querés retirarte?",
    retirementAgeMax: 80,
    retirementAgeDefault: 60,
    lifeExpectancyLabel: "Expectativa de vida",
    lifeExpectancyMax: 100,
    lifeExpectancyDefault: 85,
  },

  goal: {
    stepTitle: "Tu objetivo",
    stepDescription: "Cuánto querés cobrar por mes y cuánto tenés ahorrado hoy.",
    incomeLabel: "¿Cuánto querés cobrar por mes al retirarte?",
    incomeMin: 300,
    incomeMax: 5000,
    incomeStep: 100,
    incomeDefault: 2000,
    incomeCaption: "Ingreso mensual total deseado (ANSES + ahorro privado), en USD.",
    savingsLabel: "¿Cuánto tenés ahorrado hoy?",
    savingsMin: 0,
    savingsMax: 100000,
    savingsStep: 1000,
    savingsDefault: 0,
    savingsCaption: "Ahorros en dólares, inversiones, plazos fijos dolarizados, etc.",
  },

  anses: {
    stepTitle: "¿Cuánto te va a dar ANSES?",
    stepDescription:
      "Son montos orientativos: usá tu liquidación o una estimación realista. Ponelo en 0 si no contás con ANSES.",
    label: "Tu jubilación ANSES estimada",
    min: 0,
    max: 2000,
    step: 50,
    default: 400,
  },

  legacy: {
    stepTitle: "¿Querés conservar capital al final?",
    stepDescription:
      "Podés elegir no gastar todo: dejar un monto al final del retiro como herencia, o como colchón de seguridad. Si querés usar todo tu ahorro durante el retiro, dejalo en 0.",
    label: "Capital que querés dejar al final del retiro",
    min: 0,
    max: 200000,
    step: 5000,
    default: 0,
  },

  profile: {
    stepTitle: "¿Cómo invertirías tu ahorro?",
    stepDescription:
      "A mayor rendimiento estimado, menos ahorro mensual necesitás. Estos son escenarios ilustrativos, no una cartera específica.",
    options: [
      { key: "conservador", label: "Conservador", rate: 0.05, caption: "5% anual estimado" },
      { key: "moderado", label: "Moderado", rate: 0.07, caption: "7% anual estimado" },
      { key: "agresivo", label: "Agresivo", rate: 0.09, caption: "9% anual estimado" },
    ] as const,
    defaultKey: "moderado" as const,
    disclaimer:
      "Estos son escenarios de rendimiento para que veas el impacto en tu plan. En la charla con Franco vemos qué productos Zurich se ajustan a tu objetivo real.",
  },

  result: {
    title: "Tu resultado",
    monthlyContributionLabel: "Tenés que ahorrar por mes",
    alreadyCoveredMessage: "Con lo que ya tenés ahorrado, alcanzarías tu objetivo con este perfil.",
    capitalLabel: "Capital al retiro",
    capitalNote:
      "Cuanto más agresivo el perfil, menos capital hace falta: seguís rindiendo mientras retirás, así que te alcanza con menos.",
    incomeBreakdownLabel: "Ingreso mensual total",
    chartTitle: "Evolución del capital mientras ahorrás",
    ctaLabel: "Quiero armar mi plan",
  },
};

export type InvestmentProfileKey = (typeof RETIREMENT_CALCULATOR.profile.options)[number]["key"];
