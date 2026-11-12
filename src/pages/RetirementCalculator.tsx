import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import RetirementChart from "../components/RetirementChart";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { trackEvent } from "../lib/analytics";
import { setPrefill } from "../lib/prefill";
import { fillTemplate, formatNumber } from "../lib/template";
import { whatsappUrl } from "../lib/whatsapp";
import { RETIREMENT_CALCULATOR, type InvestmentProfileKey } from "../retirementCalculatorContent";

const { age, goal, anses, legacy, profile, result: resultContent } = RETIREMENT_CALCULATOR;

const formatUSD = (value: number) => `USD ${Math.round(value).toLocaleString("es-AR")}`;

function futureValueOfAnnuity(monthlyAmount: number, months: number, r: number) {
  if (r === 0) return monthlyAmount * months;
  return (monthlyAmount * (Math.pow(1 + r, months) - 1)) / r;
}

function presentValueOfAnnuity(monthlyAmount: number, months: number, r: number) {
  if (r === 0) return monthlyAmount * months;
  return (monthlyAmount * (1 - Math.pow(1 + r, -months))) / r;
}

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(age.currentAgeDefault);
  const [retirementAge, setRetirementAge] = useState(age.retirementAgeDefault);
  const [lifeExpectancy, setLifeExpectancy] = useState(age.lifeExpectancyDefault);

  const [desiredIncome, setDesiredIncome] = useState(goal.incomeDefault);
  const [currentSavings, setCurrentSavings] = useState(goal.savingsDefault);

  const [ansesIncome, setAnsesIncome] = useState(anses.default);
  const [capitalToPreserve, setCapitalToPreserve] = useState(legacy.default);
  const [profileKey, setProfileKey] = useState<InvestmentProfileKey>(profile.defaultKey);

  const yearsToRetire = Math.max(1, retirementAge - currentAge);
  const yearsInRetirement = Math.max(1, lifeExpectancy - retirementAge);
  const monthlyGap = Math.max(0, desiredIncome - ansesIncome);
  const ansesCoveragePct = desiredIncome > 0 ? Math.min(100, (ansesIncome / desiredIncome) * 100) : 0;

  const selectedProfile = profile.options.find((p) => p.key === profileKey) ?? profile.options[0];

  const calc = useMemo(() => {
    const r = selectedProfile.rate / 12;
    const monthsToRetire = yearsToRetire * 12;
    const monthsInRetirement = yearsInRetirement * 12;

    const capitalNeeded =
      presentValueOfAnnuity(monthlyGap, monthsInRetirement, r) +
      capitalToPreserve * Math.pow(1 + r, -monthsInRetirement);

    const capitalFromToday = currentSavings * Math.pow(1 + r, monthsToRetire);
    const remaining = Math.max(0, capitalNeeded - capitalFromToday);
    const monthlyContribution =
      monthsToRetire > 0 ? (remaining * r) / (Math.pow(1 + r, monthsToRetire) - 1) : 0;

    const capitalAtRetirement =
      capitalFromToday + futureValueOfAnnuity(monthlyContribution, monthsToRetire, r);

    const alreadyCovered = capitalNeeded <= capitalFromToday;

    const numPoints = Math.min(7, yearsToRetire + 1);
    const stride = Math.max(1, Math.round(yearsToRetire / (numPoints - 1 || 1)));
    const years: number[] = [];
    for (let yr = 0; yr < yearsToRetire; yr += stride) years.push(yr);
    if (years[years.length - 1] !== yearsToRetire) years.push(yearsToRetire);

    const chartPoints = years.map((yr) => ({
      year: yr,
      capital:
        currentSavings * Math.pow(1 + r, yr * 12) +
        futureValueOfAnnuity(monthlyContribution, yr * 12, r),
    }));

    return { monthlyContribution, capitalAtRetirement, alreadyCovered, chartPoints };
  }, [
    selectedProfile.rate,
    yearsToRetire,
    yearsInRetirement,
    monthlyGap,
    capitalToPreserve,
    currentSavings,
  ]);

  // Resumen de la simulación: viaja al formulario y al WhatsApp para que no se pierda.
  const message = calc.alreadyCovered
    ? resultContent.messageCovered
    : fillTemplate(resultContent.message, {
        edad: currentAge,
        retiro: retirementAge,
        ingreso: formatNumber(desiredIncome),
        aporte: formatNumber(calc.monthlyContribution),
        perfil: selectedProfile.label.toLowerCase(),
        tasa: Math.round(selectedProfile.rate * 100),
      });

  function handleCurrentAgeChange(value: number) {
    setCurrentAge(value);
    if (retirementAge <= value) setRetirementAge(value + 1);
  }

  function handleRetirementAgeChange(value: number) {
    setRetirementAge(value);
    if (lifeExpectancy <= value) setLifeExpectancy(value + 1);
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <Link to="/" className="text-sm font-semibold text-navy-deep hover:text-gold-deep">
        {RETIREMENT_CALCULATOR.backLabel}
      </Link>

      <div className="mt-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
          {RETIREMENT_CALCULATOR.eyebrow}
        </p>
        <h1 className="text-3xl font-bold text-navy-deep sm:text-4xl">
          {RETIREMENT_CALCULATOR.title}
        </h1>
        <p className="mt-4 text-ink-soft">{RETIREMENT_CALCULATOR.description}</p>
      </div>

      <div className="mt-10 space-y-6">
        <div className="rounded-card border border-line bg-cream p-6 text-left shadow-card sm:p-8">
          <h2 className="text-xl font-bold text-navy-deep">{age.stepTitle}</h2>
          <p className="mt-1 text-sm text-ink-soft">{age.stepDescription}</p>

          <div className="mt-6 space-y-6">
            <SliderField
              label={age.currentAgeLabel}
              value={currentAge}
              min={age.currentAgeMin}
              max={age.currentAgeMax}
              unit=" años"
              onChange={handleCurrentAgeChange}
            />
            <SliderField
              label={age.retirementAgeLabel}
              value={retirementAge}
              min={currentAge + 1}
              max={age.retirementAgeMax}
              unit=" años"
              onChange={handleRetirementAgeChange}
              caption={`Tenés ${yearsToRetire} años para ahorrar.`}
            />
            <SliderField
              label={age.lifeExpectancyLabel}
              value={lifeExpectancy}
              min={retirementAge + 1}
              max={age.lifeExpectancyMax}
              unit=" años"
              onChange={setLifeExpectancy}
              caption={`Tus ahorros tienen que durar ${yearsInRetirement} años de retiro.`}
            />
          </div>
        </div>

        <div className="rounded-card border border-line bg-cream p-6 text-left shadow-card sm:p-8">
          <h2 className="text-xl font-bold text-navy-deep">{goal.stepTitle}</h2>
          <p className="mt-1 text-sm text-ink-soft">{goal.stepDescription}</p>

          <div className="mt-6 space-y-6">
            <SliderField
              label={goal.incomeLabel}
              value={desiredIncome}
              min={goal.incomeMin}
              max={goal.incomeMax}
              step={goal.incomeStep}
              format={formatUSD}
              onChange={setDesiredIncome}
              caption={goal.incomeCaption}
            />
            <SliderField
              label={goal.savingsLabel}
              value={currentSavings}
              min={goal.savingsMin}
              max={goal.savingsMax}
              step={goal.savingsStep}
              format={formatUSD}
              onChange={setCurrentSavings}
              caption={goal.savingsCaption}
            />
          </div>
        </div>

        <div className="rounded-card border border-line bg-cream p-6 text-left shadow-card sm:p-8">
          <h2 className="text-xl font-bold text-navy-deep">{anses.stepTitle}</h2>
          <p className="mt-1 text-sm text-ink-soft">{anses.stepDescription}</p>

          <div className="mt-6 space-y-4">
            <SliderField
              label={anses.label}
              value={ansesIncome}
              min={anses.min}
              max={anses.max}
              step={anses.step}
              format={formatUSD}
              onChange={setAnsesIncome}
            />

            <div className="rounded-card bg-line-soft p-4 text-sm text-ink">
              <p>
                ANSES cubre ~{Math.round(ansesCoveragePct)}% de tu objetivo. Faltante:{" "}
                <strong>{formatUSD(monthlyGap)}/mes</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-card border border-line bg-cream p-6 text-left shadow-card sm:p-8">
          <h2 className="text-xl font-bold text-navy-deep">{legacy.stepTitle}</h2>
          <p className="mt-1 text-sm text-ink-soft">{legacy.stepDescription}</p>

          <div className="mt-6">
            <SliderField
              label={legacy.label}
              value={capitalToPreserve}
              min={legacy.min}
              max={legacy.max}
              step={legacy.step}
              format={formatUSD}
              onChange={setCapitalToPreserve}
            />
          </div>
        </div>

        <div className="rounded-card border border-line bg-cream p-6 text-left shadow-card sm:p-8">
          <h2 className="text-xl font-bold text-navy-deep">{profile.stepTitle}</h2>
          <p className="mt-1 text-sm text-ink-soft">{profile.stepDescription}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {profile.options.map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => setProfileKey(opt.key)}
                className={`rounded-card border p-4 text-left transition-colors ${
                  profileKey === opt.key
                    ? "border-gold bg-navy-deep text-cream"
                    : "border-line bg-paper text-ink"
                }`}
              >
                <p className="font-bold">{opt.label}</p>
                <p className={`text-sm ${profileKey === opt.key ? "text-gold-soft" : "text-ink-soft"}`}>
                  {opt.caption}
                </p>
              </button>
            ))}
          </div>

          <p className="mt-4 text-xs text-ink-soft">{profile.disclaimer}</p>
        </div>

        <div className="rounded-card border border-line bg-cream p-6 text-center shadow-card sm:p-8">
          <h2 className="text-2xl font-bold text-navy-deep">{resultContent.title}</h2>

          <div className="mt-6 rounded-card bg-navy-deep px-6 py-6 text-cream">
            <p className="text-sm text-cream/70">{resultContent.monthlyContributionLabel}</p>
            {calc.alreadyCovered ? (
              <p className="mt-2 text-lg font-semibold text-gold-soft">
                {resultContent.alreadyCoveredMessage}
              </p>
            ) : (
              <p className="mt-1 text-4xl font-bold text-gold-soft">
                {formatUSD(calc.monthlyContribution)}
              </p>
            )}
            <p className="mt-2 text-xs text-cream/60">
              durante {yearsToRetire} años · perfil {selectedProfile.label} (
              {Math.round(selectedProfile.rate * 100)}% anual)
            </p>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-card border border-line bg-paper p-4">
              <p className="text-xs uppercase tracking-wide text-ink-soft">
                {resultContent.capitalLabel}
              </p>
              <p className="mt-1 text-xl font-bold text-navy-deep">
                {formatUSD(calc.capitalAtRetirement)}
              </p>
              <p className="text-xs text-ink-soft">a los {retirementAge} años</p>
              <p className="mt-2 text-xs text-ink-soft">{resultContent.capitalNote}</p>
            </div>
            <div className="rounded-card border border-line bg-paper p-4">
              <p className="text-xs uppercase tracking-wide text-ink-soft">
                {resultContent.incomeBreakdownLabel}
              </p>
              <p className="mt-1 text-xl font-bold text-navy-deep">{formatUSD(desiredIncome)}</p>
              <p className="text-xs text-ink-soft">
                ANSES {formatUSD(ansesIncome)} + privado {formatUSD(monthlyGap)}
              </p>
            </div>
          </div>

          <div className="mt-8 text-left">
            <p className="mb-3 text-center text-sm font-semibold text-navy-deep">
              {resultContent.chartTitle}
            </p>
            <RetirementChart points={calc.chartPoints} />
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/#contacto"
              onClick={() => {
                setPrefill({ interest: "Ahorro", message });
                trackEvent("cta_click", { location: "retirement_result" });
              }}
              className="rounded-card bg-gold px-7 py-3 text-sm font-semibold text-navy-deep shadow-stamp transition-transform hover:-translate-y-0.5"
            >
              {resultContent.ctaLabel}
            </a>
            <a
              href={whatsappUrl(message)}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "retirement_result" })}
              className="inline-flex items-center gap-2 rounded-card border border-line px-6 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-line-soft"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {resultContent.ctaWhatsappLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step = 1,
  unit = "",
  format,
  onChange,
  caption,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  format?: (value: number) => string;
  onChange: (value: number) => void;
  caption?: string;
}) {
  const display = format ? format(value) : `${value}${unit}`;
  return (
    <div>
      <label className="flex items-center justify-between text-sm font-semibold text-navy-deep">
        <span>{label}</span>
        <span>{display}</span>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3"
      />
      {caption && <p className="mt-2 text-xs text-ink-soft">{caption}</p>}
    </div>
  );
}
