export type ProjectAccent = "teal" | "signal" | "ink";

export const REPRESENTATIVE_NOTE =
  "Representative engagement: synthetic brief, no client name, no audited results.";

export type Project = {
  slug: string;
  name: string;
  client: string;
  sector: string;
  year: string;
  scope: string[];
  summary: string;
  brief: string;
  approach: string[];
  outcome: string;
  tradeoff: string;
  constraint: string;
  loads: { label: string; value: string; note: string }[];
  stack: string[];
  accent: ProjectAccent;
  preview: "counter" | "atlas" | "relay";
  next: string;
};

export const projects: Project[] = [
  {
    slug: "counter",
    name: "Counter",
    client: "Multi-outlet apparel retailer",
    sector: "Retail / POS",
    year: "2026",
    scope: ["POS", "Inventory", "Hardware"],
    summary: "A checkout system that keeps selling when the network does not.",
    brief:
      "Four outlets ran on disconnected billing software and a spreadsheet inventory. Peak-hour billing stalled, stock counts diverged, and every new outlet meant another manual setup. The counter had to keep working when the internet did not.",
    approach: [
      "An offline-first transaction ledger on every counter, with the cloud as a reconciliation target rather than a dependency.",
      "One inventory model shared by outlets, the warehouse, and purchasing, instead of four separately maintained sheets.",
      "Direct drivers for ESC/POS printers, barcode scanners, cash drawers, and card terminals.",
      "A back-office reconciliation pass that surfaces conflicts instead of resolving them silently.",
    ],
    outcome:
      "Checkout completes locally and reconciles to the central ledger when the link returns. Stock is one number across the estate, and a new outlet is a configuration task rather than a software project.",
    tradeoff:
      "Instant estate-wide stock, given up for a checkout that never waits on the network.",
    constraint: "Intermittent connectivity / 4 outlets / 6,000+ SKUs",
    loads: [
      { label: "Outlets", value: "04", note: "one ledger" },
      { label: "SKUs", value: "6k+", note: "shared inventory" },
      { label: "Checkout", value: "Offline", note: "local path" },
    ],
    stack: ["Next.js", "React Native", "PostgreSQL", "ESC/POS", "Docker"],
    accent: "teal",
    preview: "counter",
    next: "atlas",
  },
  {
    slug: "atlas",
    name: "Atlas",
    client: "Industrial supply distributor",
    sector: "B2B commerce",
    year: "2025",
    scope: ["Web", "Search", "Quoting"],
    summary: "A 40,000-item catalogue that a buyer can actually navigate.",
    brief:
      "A distributor's sales team quoted from PDFs and a twenty-year-old ERP. Buyers could not see stock, pricing was assembled by hand, and every quote became a new email thread. The catalogue existed; finding the right part in it did not.",
    approach: [
      "A typed product model that handles variants, compatibility, and superseded part numbers without collapsing them into one record.",
      "Search built around how buyers actually type: part fragments, synonyms, abbreviations, and mistakes.",
      "A quote builder that applies account pricing and approval rules before a salesperson touches it.",
      "An ERP sync with a visible failure queue, so a failed line is a task rather than a surprise.",
    ],
    outcome:
      "Buyers self-serve routine quotes and the sales team spends its time on exceptions. Catalogue, stock, and price resolve from one source instead of three.",
    tradeoff:
      "One universal price list, given up for account-level pricing and approval rules that cannot be flattened.",
    constraint: "40k SKUs / 900 accounts / legacy ERP",
    loads: [
      { label: "Catalogue", value: "40k", note: "indexed items" },
      { label: "Accounts", value: "900", note: "pricing rules" },
      { label: "ERP sync", value: "15m", note: "visible cycle" },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Meilisearch", "REST"],
    accent: "signal",
    preview: "atlas",
    next: "relay",
  },
  {
    slug: "relay",
    name: "Relay",
    client: "Facilities services company",
    sector: "Mobile / Field ops",
    year: "2025",
    scope: ["Mobile", "Scheduling", "Offline"],
    summary: "Job cards that work in a basement, a lift shaft, or a dead zone.",
    brief:
      "Technicians carried paper job cards and photographed them at the end of the day. Dispatch had no live view, and site reports were assembled from memory. The work happened on site; the record of it happened hours later.",
    approach: [
      "Offline job cards with local drafts, photo capture, and a clear sync state for every record.",
      "Background sync that asks before it overwrites a conflict, rather than quietly choosing a winner.",
      "A dispatch board with route, SLA, and site-access context in the same view.",
      "Client-ready PDF reports generated on the device before the technician leaves the site.",
    ],
    outcome:
      "Technicians finish the record on site, not at the kitchen table. Dispatch sees the day as it happens, including the gaps, and the client gets the report while the job is still fresh.",
    tradeoff:
      "Live dispatch with zero sync delay, given up for a job card that survives a dead zone.",
    constraint: "120 technicians / low-signal sites / iOS + Android",
    loads: [
      { label: "Technicians", value: "120", note: "field users" },
      { label: "Offline", value: "8h", note: "local shift" },
      { label: "Reports", value: "Auto", note: "client-ready" },
    ],
    stack: ["React Native", "Expo", "SQLite", "Node.js", "S3"],
    accent: "ink",
    preview: "relay",
    next: "counter",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const current = getProject(slug);
  if (!current) return projects[0];
  return getProject(current.next) ?? projects[0];
}
