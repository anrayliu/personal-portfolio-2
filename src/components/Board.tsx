import { columns, type Column, type Ticket } from "@/data/board";

function Tag({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <span
      className={
        "inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide " +
        (accent
          ? "bg-tag-blue text-tag-blue-foreground"
          : "bg-tag-muted text-tag-muted-foreground")
      }
    >
      {label}
    </span>
  );
}

function TicketCard({ ticket, accent }: { ticket: Ticket; accent?: boolean }) {
  const isLink = Boolean(ticket.href);
  const Element: "a" | "div" = isLink ? "a" : "div";
  const linkProps = isLink
    ? { href: ticket.href, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Element
      {...linkProps}
      className={
        "ticket-lift block rounded-md border border-ticket-border bg-ticket p-3 text-left shadow-[var(--shadow-ticket)] " +
        (isLink ? "cursor-pointer" : "cursor-default")
      }
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-medium text-foreground leading-snug">
          {ticket.title}
        </h3>
        {isLink && (
          <svg
            viewBox="0 0 16 16"
            className="mt-0.5 h-3 w-3 shrink-0 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M6 3h7v7M13 3 4 12" strokeLinecap="round" />
          </svg>
        )}
      </div>

      {ticket.description && (
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
          {ticket.description}
        </p>
      )}

      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1">
          {ticket.tags?.map((t, i) => (
            <Tag key={t} label={t} accent={accent && i === 0} />
          ))}
        </div>
        <span className="font-mono text-[10px] text-muted-foreground/70">
          {ticket.id}
        </span>
      </div>
    </Element>
  );
}

function ColumnView({ column, index }: { column: Column; index: number }) {
  const accent = column.accent === "blue";
  return (
    <div
      className="column-in flex w-72 shrink-0 flex-col rounded-lg bg-column p-3"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <span
            className={
              "h-1.5 w-1.5 rounded-full " +
              (accent ? "bg-primary status-pulse" : "bg-muted-foreground/50")
            }
          />
          <h2 className="text-[11px] font-semibold uppercase tracking-wider text-[color:var(--column-header)]">
            {column.name}
          </h2>
        </div>
        <span className="rounded bg-card px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground border border-border">
          {column.tickets.length}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {column.tickets.map((t) => (
          <TicketCard key={t.id} ticket={t} accent={accent} />
        ))}
      </div>
    </div>
  );
}

export function Board() {
  return (
    <section className="board-bg border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              PORTFOLIO / SPRINT 02
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
              The board
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            view only
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-6 -mx-6 px-6 snap-x">
          {columns.map((c, i) => (
            <div key={c.key} className="snap-start">
              <ColumnView column={c} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
