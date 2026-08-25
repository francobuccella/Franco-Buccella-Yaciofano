type Point = { year: number; capital: number };

const formatCompactUSD = (value: number) => {
  if (value >= 1000) return `$${Math.round(value / 1000)}K`;
  return `$${Math.round(value)}`;
};

export default function RetirementChart({ points }: { points: Point[] }) {
  const width = 600;
  const height = 220;
  const padding = { top: 16, right: 16, bottom: 28, left: 44 };
  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;

  const maxYear = points.length > 0 ? points[points.length - 1].year : 1;
  const maxCapital = Math.max(...points.map((p) => p.capital), 1);

  const x = (year: number) => padding.left + (year / maxYear) * innerWidth;
  const y = (capital: number) => padding.top + innerHeight - (capital / maxCapital) * innerHeight;

  const linePath = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${x(p.year).toFixed(1)} ${y(p.capital).toFixed(1)}`)
    .join(" ");

  const areaPath =
    points.length > 0
      ? `${linePath} L ${x(points[points.length - 1].year).toFixed(1)} ${(padding.top + innerHeight).toFixed(1)} L ${x(0).toFixed(1)} ${(padding.top + innerHeight).toFixed(1)} Z`
      : "";

  const yTicks = [0, 0.25, 0.5, 0.75, 1].map((f) => f * maxCapital);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      role="img"
      aria-label="Evolución del capital acumulado a lo largo del tiempo"
    >
      {yTicks.map((tick, i) => (
        <g key={i}>
          <line
            x1={padding.left}
            x2={width - padding.right}
            y1={y(tick)}
            y2={y(tick)}
            stroke="var(--color-line)"
            strokeWidth={1}
          />
          <text x={padding.left - 8} y={y(tick) + 3} textAnchor="end" fontSize={10} fill="var(--color-ink-soft)">
            {formatCompactUSD(tick)}
          </text>
        </g>
      ))}

      {areaPath && <path d={areaPath} fill="var(--color-gold)" opacity={0.15} />}
      {linePath && <path d={linePath} fill="none" stroke="var(--color-gold)" strokeWidth={2.5} />}

      {points.map((p, i) => (
        <text
          key={i}
          x={x(p.year)}
          y={height - 6}
          textAnchor="middle"
          fontSize={10}
          fill="var(--color-ink-soft)"
        >
          Año {p.year}
        </text>
      ))}
    </svg>
  );
}
