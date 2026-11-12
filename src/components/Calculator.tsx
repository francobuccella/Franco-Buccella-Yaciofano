import { useMemo, useState } from "react";
import { CALCULATOR } from "../content";
import { trackEvent } from "../lib/analytics";
import { setPrefill } from "../lib/prefill";
import { fillTemplate, formatNumber } from "../lib/template";
import { whatsappUrl } from "../lib/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

type Mode = "goal" | "contribution";

const formatUSD = (value: number) => `USD ${formatNumber(value)}`;
const rateLabel = Math.round(CALCULATOR.annualRate * 1000) / 10;

/** Cuota mensual necesaria para llegar a `goal` en `years`, a tasa anual `annualRate`. */
function monthlyContributionForGoal(goal: number, years: number, annualRate: number) {
  const r = annualRate / 12;
  const n = years * 12;
  return (goal * r) / (Math.pow(1 + r, n) - 1);
}

/** Capital final aportando `contribution` por mes durante `years`, a tasa anual `annualRate`. */
function futureValueForContribution(contribution: number, years: number, annualRate: number) {
  const r = annualRate / 12;
  const n = years * 12;
  return (contribution * (Math.pow(1 + r, n) - 1)) / r;
}

export default function Calculator() {
  const [mode, setMode] = useState<Mode>("contribution");

  const [goal, setGoal] = useState(CALCULATOR.goalMode.goalDefault);
  const [goalYears, setGoalYears] = useState(CALCULATOR.goalMode.yearsDefault);

  const [contribution, setContribution] = useState(
    CALCULATOR.contributionMode.contributionDefault,
  );
  const [contributionYears, setContributionYears] = useState(
    CALCULATOR.contributionMode.yearsDefault,
  );

  const result = useMemo(() => {
    if (mode === "goal") {
      return monthlyContributionForGoal(goal, goalYears, CALCULATOR.annualRate);
    }
    return futureValueForContribution(contribution, contributionYears, CALCULATOR.annualRate);
  }, [mode, goal, goalYears, contribution, contributionYears]);

  // Resumen de lo que el prospecto simuló: viaja al formulario y al WhatsApp para que no se pierda.
  const message =
    mode === "goal"
      ? fillTemplate(CALCULATOR.messages.goal, {
          meta: formatNumber(goal),
          anios: goalYears,
          tasa: rateLabel,
          resultado: formatNumber(result),
        })
      : fillTemplate(CALCULATOR.messages.contribution, {
          aporte: formatNumber(contribution),
          anios: contributionYears,
          tasa: rateLabel,
          resultado: formatNumber(result),
        });

  return (
    <section id="calculadoras" className="bg-paper py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
          {CALCULATOR.eyebrow}
        </p>
        <h2 className="text-3xl font-bold text-navy-deep sm:text-4xl">{CALCULATOR.title}</h2>
        <p className="mt-4 text-ink-soft">{CALCULATOR.description}</p>

        <div className="mt-10 rounded-card border border-line bg-cream p-6 text-left shadow-card sm:p-8">
          <div role="tablist" className="flex gap-2 rounded-full bg-line-soft p-1">
            <button
              role="tab"
              type="button"
              aria-selected={mode === "contribution"}
              onClick={() => setMode("contribution")}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                mode === "contribution" ? "bg-navy-deep text-cream" : "text-ink-soft"
              }`}
            >
              {CALCULATOR.contributionMode.tabLabel}
            </button>
            <button
              role="tab"
              type="button"
              aria-selected={mode === "goal"}
              onClick={() => setMode("goal")}
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                mode === "goal" ? "bg-navy-deep text-cream" : "text-ink-soft"
              }`}
            >
              {CALCULATOR.goalMode.tabLabel}
            </button>
          </div>

          {mode === "goal" ? (
            <div className="mt-8 space-y-6">
              <div>
                <label className="flex items-center justify-between text-sm font-semibold text-navy-deep">
                  <span>Meta de capital</span>
                  <span>{formatUSD(goal)}</span>
                </label>
                <input
                  type="range"
                  min={CALCULATOR.goalMode.goalMin}
                  max={CALCULATOR.goalMode.goalMax}
                  step={CALCULATOR.goalMode.goalStep}
                  value={goal}
                  onChange={(e) => setGoal(Number(e.target.value))}
                  className="mt-3"
                />
              </div>
              <div>
                <label className="flex items-center justify-between text-sm font-semibold text-navy-deep">
                  <span>Plazo</span>
                  <span>{goalYears} años</span>
                </label>
                <input
                  type="range"
                  min={CALCULATOR.goalMode.yearsMin}
                  max={CALCULATOR.goalMode.yearsMax}
                  value={goalYears}
                  onChange={(e) => setGoalYears(Number(e.target.value))}
                  className="mt-3"
                />
              </div>
            </div>
          ) : (
            <div className="mt-8 space-y-6">
              <div>
                <label className="flex items-center justify-between text-sm font-semibold text-navy-deep">
                  <span>Aporte mensual</span>
                  <span>{formatUSD(contribution)}</span>
                </label>
                <input
                  type="range"
                  min={CALCULATOR.contributionMode.contributionMin}
                  max={CALCULATOR.contributionMode.contributionMax}
                  step={CALCULATOR.contributionMode.contributionStep}
                  value={contribution}
                  onChange={(e) => setContribution(Number(e.target.value))}
                  className="mt-3"
                />
              </div>
              <div>
                <label className="flex items-center justify-between text-sm font-semibold text-navy-deep">
                  <span>Plazo</span>
                  <span>{contributionYears} años</span>
                </label>
                <input
                  type="range"
                  min={CALCULATOR.contributionMode.yearsMin}
                  max={CALCULATOR.contributionMode.yearsMax}
                  value={contributionYears}
                  onChange={(e) => setContributionYears(Number(e.target.value))}
                  className="mt-3"
                />
              </div>
            </div>
          )}

          <div className="mt-8 rounded-card bg-navy-deep px-6 py-6 text-center text-cream">
            <p className="text-sm text-cream/70">
              {mode === "goal"
                ? CALCULATOR.goalMode.resultLabel
                : CALCULATOR.contributionMode.resultLabel}
            </p>
            <p className="mt-1 text-4xl font-bold text-gold-soft">{formatUSD(result)}</p>
            <p className="mt-2 text-xs text-cream/70">
              Rendimiento supuesto de {rateLabel}% anual · en USD
            </p>
          </div>

          <p className="mt-4 text-center text-xs text-ink-soft">{CALCULATOR.disclaimer}</p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CALCULATOR.cta.href}
              onClick={() => {
                setPrefill({ interest: "Ahorro", message });
                trackEvent("cta_click", { location: "calculator" });
              }}
              className="inline-block rounded-card bg-gold px-7 py-3 text-sm font-semibold text-navy-deep shadow-stamp transition-transform hover:-translate-y-0.5"
            >
              {CALCULATOR.cta.label}
            </a>
            <a
              href={whatsappUrl(message)}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent("whatsapp_click", { location: "calculator" })}
              className="inline-flex items-center gap-2 rounded-card border border-line px-6 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-line-soft"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {CALCULATOR.ctaWhatsappLabel}
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-ink-soft">{CALCULATOR.backing}</p>
      </div>
    </section>
  );
}
