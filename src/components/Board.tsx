import { columns, type Column, type Ticket } from "@/data/board";

function Tag({ label, accent }: { label: string; accent?: boolean }) {
  return (
    <span
      className={
        "inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wide " +
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
        "block border border-ticket-border bg-ticket p-3 text-left shadow-[var(--shadow-ticket)] " +
        (isLink ? "ticket-clickable cursor-pointer" : "cursor-default")
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

      {ticket.tags && ticket.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {ticket.tags.map((t, i) => (
            <Tag key={t} label={t} accent={accent && i === 0} />
          ))}
        </div>
      )}
    </Element>
  );
}

function ColumnView({ column, index }: { column: Column; index: number }) {
  return (
    <div
      className="column-in relative flex w-full flex-col self-start overflow-hidden bg-column p-3"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="mb-3 flex items-center justify-between px-1 pt-1">
        <div className="flex items-center gap-2">
          <h2 className="text-[11px] font-semibold uppercase tracking-wider text-[color:var(--column-header)]">
            {column.name}
          </h2>
        </div>
        <span className="bg-card px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground border border-border">
          {column.tickets.length}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {column.tickets.map((t) => (
          <TicketCard key={t.id} ticket={t} accent={column.accent === "blue"} />
        ))}
      </div>
    </div>
  );
}

export function Board() {
  const byKey = Object.fromEntries(columns.map((c) => [c.key, c]));
  const inProgress = byKey["in-progress"];
  const backlog = byKey["backlog"];
  const finished = byKey["finished"];
  const skills = byKey["skills"];
  const interests = byKey["interests"];

  return (
    <section className="board-bg relative border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            The board
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: In Progress stacked above Backlog */}
          <div className="flex flex-col gap-4">
            {inProgress && <ColumnView column={inProgress} index={0} />}
            {backlog && <ColumnView column={backlog} index={1} />}
          </div>
          {finished && <ColumnView column={finished} index={2} />}
          {skills && <ColumnView column={skills} index={3} />}
          {interests && <ColumnView column={interests} index={4} />}
        </div>
      </div>
    </section>
  );
}
