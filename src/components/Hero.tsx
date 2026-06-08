import { hero, socials } from "@/data/board";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-14 sm:pt-28 sm:pb-20">
      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-6">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary status-pulse" />
        <span>{hero.role.toUpperCase()}</span>
      </div>

      <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-foreground">
        {hero.name}
        <span className="inline-block w-[0.08em]" />
        <span className="cursor-blink text-primary">.</span>
      </h1>

      <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted-foreground">
        {hero.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary/50 hover:text-primary hover:-translate-y-px"
          >
            <span className="h-1 w-1 rounded-full bg-muted-foreground transition-colors group-hover:bg-primary" />
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
