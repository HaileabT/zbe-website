import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s, i) => (
        <article
          key={s.title}
          className="reveal relative flex flex-col rounded-card bg-white p-7 shadow-[0_0_0_1px_var(--color-tint-line)] overflow-hidden"
        >
          <span className="mb-2 absolute -top-10 -left-10 font-mono text-[200px]! font-bold text-muted/5">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mb-2.5 font-display text-2xl leading-[1.1] font-bold">{s.title}</h3>
          <p className="text-soft">{s.text}</p>
        </article>
      ))}
    </div>
  );
}
