import { hero, socials } from "@/data/board";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 pt-20 pb-14 sm:pt-28 sm:pb-20">

      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-8 bg-primary" />
        <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          {hero.role.toUpperCase()}
        </span>
      </div>

      <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-foreground">
        {hero.name}
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
            className="inline-flex items-center border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:text-primary"
          >
            {s.label}
          </a>
        ))}
      </div>

    </section>
  );
}
