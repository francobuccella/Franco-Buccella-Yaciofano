import { HOW_IT_WORKS } from "../content";

export default function HowItWorks() {
  return (
    <section id="como-trabajo" className="bg-paper py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-deep">
          {HOW_IT_WORKS.eyebrow}
        </p>
        <h2 className="text-3xl font-bold text-navy-deep sm:text-4xl">{HOW_IT_WORKS.title}</h2>

        <ol className="mt-12 grid gap-6 text-left md:grid-cols-3">
          {HOW_IT_WORKS.steps.map((step, i) => (
            <li
              key={step.title}
              className="rounded-card border border-line bg-cream p-6 shadow-card"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-deep text-lg font-bold text-gold-soft">
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold text-navy-deep">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
