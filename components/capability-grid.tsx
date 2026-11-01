import {
  BackendDiagram,
  MobileDiagram,
  RetailDiagram,
  WebDiagram,
} from "@/components/diagrams";

const capabilities = [
  {
    index: "01",
    title: "Web platforms",
    body: "Product interfaces, commerce, dashboards, and content systems built with Next.js and a typed front end. Fast by default, accessible at the edges, and designed to be extended by your team.",
    items: ["Next.js", "TypeScript", "Design systems", "Commerce", "Edge rendering"],
    art: <WebDiagram />,
  },
  {
    index: "02",
    title: "Mobile apps",
    body: "Cross-platform applications that respect the device: offline storage, camera and location flows, push, and a sync model you can explain to a support team.",
    items: ["React Native", "Expo", "Offline sync", "iOS + Android"],
    art: <MobileDiagram />,
  },
  {
    index: "03",
    title: "Retail systems",
    body: "Point of sale, inventory, and back-office tools for counters that cannot stop. Local-first transactions, hardware integrations, and one stock ledger across outlets.",
    items: ["POS", "ESC/POS", "Inventory", "Payments"],
    art: <RetailDiagram />,
  },
  {
    index: "04",
    title: "Enterprise backends",
    body: "APIs, data models, integrations, and event-driven services with the unglamorous parts included: validation, retries, observability, and a failure path that is visible.",
    items: ["PostgreSQL", "APIs", "Queues", "Integrations", "Observability"],
    art: <BackendDiagram />,
  },
];

export function CapabilityGrid() {
  return (
    <div className="capability-grid">
      {capabilities.map((capability, index) => (
        <article
          key={capability.index}
          className={`capability reveal reveal-late`}
          style={{ animationDelay: `${index * 40}ms` }}
        >
          <div className="capability__top">
            <h3 className="capability__title">{capability.title}</h3>
            <span className="mono-label">{capability.index}</span>
          </div>
          <p className="capability__body">{capability.body}</p>
          <ul className="capability__list" aria-label={`${capability.title} technologies`}>
            {capability.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div
            className={`capability__art${
              capability.index === "03" ? " capability__art--tall" : ""
            }`}
          >
            {capability.art}
          </div>
        </article>
      ))}
    </div>
  );
}
