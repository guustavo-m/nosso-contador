import useElapsed from "../hooks/useElapsed.js";

const pad = (n, w) => String(n).padStart(w, "0");

export default function Counter({ start }) {
  const t = useElapsed(start);
  const units = [
    ["anos", t.y, 1], ["meses", t.mo, 1], ["dias", t.d, 1],
    ["horas", t.h, 2], ["minutos", t.mi, 2], ["segundos", t.s, 2],
  ];
  return (
    <section aria-label="Tempo juntos" className="mt-6">
      <div className="mx-auto grid max-w-2xl grid-cols-3 gap-3 md:max-w-4xl md:grid-cols-6">
        {units.map(([label, value, w]) => (
          <div key={label} className="rounded-2xl border border-line bg-card px-1 py-3.5 shadow-glow backdrop-blur">
            <span className="block text-[clamp(1.8rem,7vw,2.6rem)] font-semibold tabular-nums [text-shadow:0_0_12px_var(--glow)]">
              {pad(value, w)}
            </span>
            <span className="text-xs uppercase tracking-[.12em] text-muted">{label}</span>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm text-muted">juntos desde 14/03/2026 às 22h00 ♥</p>
    </section>
  );
}
