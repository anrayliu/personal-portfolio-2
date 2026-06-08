// =====================================================================
// PORTFOLIO BOARD DATA — Edit this file to add/remove/customize tickets.
// Each ticket: { id, title, description?, tags?, href? }
//   - id: unique short code shown on the ticket (e.g. "OPS-12")
//   - href: optional link; if present, clicking the ticket opens it
//   - tags: small labels shown on the ticket
// =====================================================================

export type Ticket = {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  href?: string;
};

export type Column = {
  key: string;
  name: string;
  accent?: "blue" | "muted";
  tickets: Ticket[];
};

// Column order on the board:
//   Column 1 (stacked): In Progress (top) → Backlog (below)
//   Column 2: Finished
//   Column 3: Skills
//   Column 4: Interests
export const columns: Column[] = [
  {
    key: "in-progress",
    name: "In Progress",
    accent: "blue",
    tickets: [
      {
        id: "OPS-18",
        title: "GitOps pipeline with ArgoCD",
        description: "Promoting builds across dev → staging → prod.",
        tags: ["argocd", "k8s"],
        href: "https://argo-cd.readthedocs.io/",
      },
      {
        id: "OPS-19",
        title: "Zero-downtime DB migrations",
        description: "Expand/contract rollout pattern with feature flags.",
        tags: ["postgres"],
      },
    ],
  },
  {
    key: "finished",
    name: "Finished",
    tickets: [
      {
        id: "PRJ-07",
        title: "Kubernetes home lab",
        description: "3-node k3s cluster with Traefik, cert-manager, ArgoCD.",
        tags: ["k3s", "homelab"],
        href: "https://github.com",
      },
      {
        id: "PRJ-08",
        title: "Terraform AWS landing zone",
        description: "Reusable modules for VPC, IAM, EKS bootstrap.",
        tags: ["terraform", "aws"],
        href: "https://github.com",
      },
      {
        id: "PRJ-09",
        title: "Observability stack",
        description: "Prometheus + Grafana + Loki + Tempo on EKS.",
        tags: ["o11y"],
        href: "https://github.com",
      },
    ],
  },
  {
    key: "backlog",
    name: "Backlog",
    tickets: [
      {
        id: "OPS-21",
        title: "Multi-region failover automation",
        description: "Cross-region active/active with Route53 health checks.",
        tags: ["aws", "terraform"],
      },
      {
        id: "OPS-22",
        title: "Service mesh migration",
        description: "Evaluate Linkerd vs Istio for internal traffic.",
        tags: ["k8s", "mesh"],
      },
      {
        id: "OPS-23",
        title: "Cost anomaly detection",
        description: "Slack alerts on >15% daily cloud spend deltas.",
        tags: ["finops"],
      },
    ],
  },
  {
    key: "skills",
    name: "Skills",
    tickets: [
      { id: "SK-01", title: "Kubernetes", tags: ["k8s", "eks", "k3s"] },
      { id: "SK-02", title: "Terraform & Pulumi", tags: ["iac"] },
      { id: "SK-03", title: "AWS / GCP", tags: ["cloud"] },
      { id: "SK-04", title: "CI/CD", tags: ["github actions", "argo"] },
      { id: "SK-05", title: "Observability", tags: ["prometheus", "grafana"] },
      { id: "SK-06", title: "Go & Python", tags: ["backend"] },
    ],
  },
  {
    key: "interests",
    name: "Interests",
    tickets: [
      { id: "IN-01", title: "Platform engineering", tags: ["dx"] },
      { id: "IN-02", title: "Distributed systems", tags: ["theory"] },
      { id: "IN-03", title: "Open source", tags: ["community"] },
      { id: "IN-04", title: "Espresso & pour-over", tags: ["coffee"] },
    ],
  },
];

// =====================================================================
// HERO — name, tagline, socials. Replace freely.
// =====================================================================
export const hero = {
  name: "Your Name",
  role: "DevOps / Cloud Engineer",
  description:
    "I build resilient cloud platforms, automate everything that moves, and ship developer experience that feels invisible. Currently shipping Kubernetes-native infrastructure for teams that want to focus on product, not pipelines.",
};

export const socials: { label: string; href: string }[] = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X / Twitter", href: "https://x.com" },
  { label: "Email", href: "mailto:hello@example.com" },
];
