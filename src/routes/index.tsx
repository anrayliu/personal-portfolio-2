import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Board } from "@/components/Board";
import { hero } from "@/data/board";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${hero.name} — ${hero.role}` },
      { name: "description", content: hero.description },
      { property: "og:title", content: `${hero.name} — ${hero.role}` },
      { property: "og:description", content: hero.description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Board />
      <footer className="relative border-t border-border">
        <div aria-hidden className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
          <span>© {new Date().getFullYear()} {hero.name}</span>
          <div aria-hidden className="stripes-blue h-4 w-16" />
        </div>
      </footer>
    </main>
  );
}
