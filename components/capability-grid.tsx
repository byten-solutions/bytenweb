import {
  BackendDiagram,
  MobileDiagram,
  RetailDiagram,
  WebDiagram,
} from "@/components/diagrams";

const capabilities = [
  {
    index: "01",
    title: "Enterprise ERP & SaaS",
    body: "Full-stack business platforms: quarry & mining operations, school management with fee engines, delivery orchestration with immutable ledgers, and multi-tenant admin consoles. Built for heavy data, real users, and zero downtime.",
    items: ["byteSTRATA", "EduByte", "byteFlow", "Multi-tenant", "Double-entry accounts"],
    art: <WebDiagram />,
  },
  {
    index: "02",
    title: "Mobile apps",
    body: "Cross-platform Flutter and React Native applications for tablets and phones: restaurant POS with thermal KOT printing, offline-first transactions, and native device integrations that survive poor connectivity.",
    items: ["Flutter", "React Native", "bytePOS", "Offline-first", "ESC/POS printing"],
    art: <MobileDiagram />,
  },
  {
    index: "03",
    title: "Websites & client portals",
    body: "Modern marketing websites, school portals, consultancy landing pages, and food brand websites. SEO-optimized, responsive, and designed to convert visitors into leads and admissions.",
    items: ["Cuplana", "KidsCove", "Skyra", "Next.js", "SEO & conversion"],
    art: <RetailDiagram />,
  },
  {
    index: "04",
    title: "Services & integrations",
    body: "WhatsApp messaging automation, payment gateway integrations, voting simulators, inventory tracking, and custom API backends. The unglamorous parts that make the whole system actually work.",
    items: ["WhatsApp API", "Payment gateways", "byteBallot", "APIs", "Inventory sync"],
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
