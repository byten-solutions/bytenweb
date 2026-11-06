export type ProjectAccent = "teal" | "signal" | "ink";

export const REPRESENTATIVE_NOTE =
  "Client production engagement: engineered, deployed, and supported by Byten.";

export type ProjectScreenshot = {
  src: string;
  label: string;
  caption: string;
};

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
  preview:
    | "bytestrata"
    | "edubyte"
    | "byteflow"
    | "bytepos"
    | "byteballot"
    | "cuplana"
    | "kidscove"
    | "skyra";
  next: string;
  screenshots?: ProjectScreenshot[];
};

export const projects: Project[] = [
  {
    slug: "bytestrata",
    name: "byteSTRATA",
    client: "Heavy mining & aggregate enterprise",
    sector: "Mining / Heavy Industrial ERP",
    year: "2026",
    scope: ["Web", "Weighbridge", "Accounts & ERP"],
    summary:
      "A quarry and crusher operating system unifying weighbridge telemetry, fleet logistics, and full double-entry accounting.",
    brief:
      "Quarries and stone crushing plants operated across harsh physical dust environments, disconnected weighbridge slips, manual gate passes, and uncoordinated spreadsheets. Unenforced credit limits caused multi-lakh debt leakage, and plant owners lacked real-time visibility into crusher OEE, stockpile balances, vendor AP, shift payroll, or true EBITDA margins.",
    approach: [
      "Direct weighbridge serial and TCP automation to capture gross/tare weights in real time and generate tamper-proof digital gate passes.",
      "An end-to-end commercial accounting engine covering multi-tenant customer and vendor ledgers, statutory licenses, and real-time payment aging.",
      "Hard credit limit safeguards that automatically lock gate-pass issuance when an RMC contractor or buyer breaches payment thresholds.",
      "A comprehensive operational ledger tracking site diesel burn, heavy fleet maintenance, shift-worker wage slips, and mineral royalties.",
      "Automated Daily Production Reports (DPR v2.6) and executive P&L dashboards showing net operational margins across all active mining leases.",
    ],
    outcome:
      "Weighbridge turnaround dropped under two minutes per truck with zero manual slip tampering. Plant operators run complete double-entry accounts, payroll slips, and receivables reconciliation within one unified pane.",
    tradeoff:
      "Instantaneous multi-plant sync, traded for local edge weighbridge resiliency during mountain quarry network dropouts.",
    constraint: "3 mining plants / 63,000+ monthly tons / harsh dust environment / strict credit cycles",
    loads: [
      { label: "Dispatch", value: "63.2k T", note: "monthly volume" },
      { label: "Billing", value: "₹3.78 Cr", note: "MTD turnover" },
      { label: "Crusher OEE", value: "96.2%", note: "shift efficiency" },
    ],
    stack: ["Next.js", "Express.js", "PostgreSQL", "Tailwind CSS", "TypeScript"],
    accent: "teal",
    preview: "bytestrata",
    next: "edubyte",
    screenshots: [
      {
        src: "/work/bytestrata/01-landing.png",
        label: "Landing & Mineral Value Chain",
        caption:
          "The enterprise gateway: unifying pit blasting, weighbridge dispatches, and commercial debt recovery for aggregate leaseholders.",
      },
      {
        src: "/work/bytestrata/02-multi-tenant-admin.jpg",
        label: "Multi-Tenant Enterprise Admin Console",
        caption:
          "Consolidated multi-plant telemetry: monitoring ₹3.78 Cr MTD turnover, 63,250 tons dispatched, and active fleet logistics across all mining operations.",
      },
      {
        src: "/work/bytestrata/03-plant-workspace.jpg",
        label: "Live Plant Workspace (BlueRock Crushers)",
        caption:
          "Active Shift 2 command centre: real-time revenue (₹6.85L), weighbridge dispatch tonnage, 96.2% crusher OEE, and material volume mix (20mm blue metal, VSI M-sand).",
      },
      {
        src: "/work/bytestrata/04-enterprise-reports.png",
        label: "Executive DPR v2.6 & Financial Ledger Audit",
        caption:
          "Audit-ready production & financial reports: gross dispatch turnover (₹1.48 Cr), net EBITDA margins (39.05% after royalty/fuel), and realized collection rates.",
      },
      {
        src: "/work/bytestrata/05-party-management.jpg",
        label: "Commercial Party, Receivables & Credit Safeguards",
        caption:
          "Double-entry commercial accounts: tracking bulk RMC buyers (UltraTech), blasting suppliers (Deccan Explosives with PESO licensing), vehicle fleet payables, and real-time credit limit enforcement.",
      },
    ],
  },
  {
    slug: "edubyte",
    name: "EduByte",
    client: "K-12 Academy & Preschool Network",
    sector: "Education / School ERP & FinTech",
    year: "2026",
    scope: ["Web", "Fee Engine", "WhatsApp API", "Accounts"],
    summary:
      "A calm school operating system with student-level fee generation, automated WhatsApp receipts, and route-by-route transport cost tracking.",
    brief:
      "Institutions and preschool networks struggled with fragmented fee tracking across manual receipt books, missed installments, and delayed parent communications. Office administrators spent hours fielding calls about payment balances, transport vans ran at unchecked operational deficits, and campus expenses were tracked separately from tuition cash flow.",
    approach: [
      "Individualized student fee ledgers with custom installment schedules, partial payment receipts, and automated fine calculation.",
      "Direct WhatsApp Business API automation delivering instant fee payment confirmations, balance reminders, and digital payment receipts to parents.",
      "Per-vehicle transport profitability tracking, pairing bus fee collections directly against driver salaries, route fuel consumption, and vehicle maintenance.",
      "Double-entry institutional accounting categorizing tuition, admission, and transport inflows against monthly payroll, kitchen supplies, and utility expenses.",
      "Executive academic year analytics displaying live collection realization rates (85.8%), net operating cash flow, and multi-account banking splits (UPI, Cash, Current Account).",
    ],
    outcome:
      "Fee collection efficiency surged to 85.8% within scheduled terms with zero manual receipt-book errors. Office staff eliminated manual payment reminder calls, and transport managers achieved route-by-route operating surplus visibility.",
    tradeoff:
      "Generic LMS bloat, traded for bulletproof financial ledger accuracy, instant WhatsApp delivery, and a calm, uncluttered administrative interface.",
    constraint: "Multi-tier fee structures / 4+ fleet routes / UPI, card & cash reconciliations / instant WhatsApp messaging",
    loads: [
      { label: "Collection", value: "85.8%", note: "recovery rate" },
      { label: "Fleet Routes", value: "04", note: "P&L tracked" },
      { label: "Alerts", value: "WhatsApp", note: "automated" },
    ],
    stack: ["Next.js", "Express.js", "PostgreSQL", "WhatsApp API", "Tailwind CSS"],
    accent: "signal",
    preview: "edubyte",
    next: "byteflow",
    screenshots: [
      {
        src: "/work/edubyte/01-portal-login.jpg",
        label: "KidsCove Enterprise Portal Gateway",
        caption:
          "Calm, focused authentication architecture for administrators, office teams, teachers, and school accountants.",
      },
      {
        src: "/work/edubyte/02-workspace-dashboard.jpg",
        label: "Operational Workspace Dashboard",
        caption:
          "Daily collections (₹56.4K), weekly intake (₹2.61L), multi-bank payment method split (UPI, SBI, HDFC POS, Cash), and categorized expense burn.",
      },
      {
        src: "/work/edubyte/03-academic-summary.jpg",
        label: "Academic Year Financial Summary",
        caption:
          "Institutional overview: ₹8.32L fee revenue collected (85.77% realization rate), operating expenditure, and net operating cash flow (₹3.10L).",
      },
      {
        src: "/work/edubyte/04-fee-ledgers.jpg",
        label: "Individual Student Fee Ledgers",
        caption:
          "Granular fee billing statements per student with admission numbers, partial balances, payment histories, and instant receipt triggers.",
      },
      {
        src: "/work/edubyte/05-transport-analytics.jpg",
        label: "Fleet Transport Revenue & Cost Analysis",
        caption:
          "Vehicle-by-vehicle P&L analysis: tracking passenger collections against diesel and maintenance costs across Ozhukur, Kondotty, and Kuzhimanna routes.",
      },
    ],
  },
  {
    slug: "byteflow",
    name: "byteFlow",
    client: "Byten engineering studio",
    sector: "Internal tooling / Delivery ERP",
    year: "2026",
    scope: ["Web", "Kanban", "Activity Ledger", "Realtime"],
    summary:
      "The internal delivery platform Byten runs on: boards, tasks, comments, and role governance with an immutable mutation history.",
    brief:
      "Off-the-shelf project trackers either hide history under silent state overwrites or buckle under heavy real-time team collaboration. Byten needed an internal delivery tool built for total delivery clarity: drag-and-drop workflow lanes, fine-grained role governance, and an audit trail where every card move, comment, and tag mutation is permanently preserved rather than destroyed.",
    approach: [
      "An immutable event log architecture where every card mutation, lane transition, and tag update writes an append-only activity record.",
      "Real-time WebSocket synchronization with live peer presence, instant board broadcasts, and conflict-free visual re-ordering.",
      "Hierarchical project workspace governance spanning multi-lane boards, custom tags, critical priority escalations, and @mention comment threads.",
      "Executive workspace reporting tracking active organizational boards, team capacity utilization, and task velocity across workflow stages.",
      "Granular task detail inspection drawers with single-use invite tokens, role pre-assignment, and sprint deadline telemetry.",
    ],
    outcome:
      "Byten orchestrates all client and studio delivery runs through byteFlow. Zero task state is silently lost, team handoffs are logged with exact timestamps, and board latency remains sub-100ms under active concurrent sprints.",
    tradeoff:
      "Third-party plugin ecosystems, traded for zero bloat, an immutable audit trail, and instant keyboard and drag performance.",
    constraint: "Live multi-user sync / zero silent overwrites / immutable audit history / sub-100ms drag response",
    loads: [
      { label: "Active Boards", value: "06", note: "org projects" },
      { label: "Live Sync", value: "Sub-100ms", note: "event stream" },
      { label: "Audit Log", value: "100%", note: "immutable events" },
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket", "Tailwind CSS"],
    accent: "ink",
    preview: "byteflow",
    next: "bytepos",
    screenshots: [
      {
        src: "/work/byteflow/01-landing.png",
        label: "byteFlow Platform Gateway",
        caption:
          "Orchestrate Workflows, Align Teams, Ship Faster: real-time Kanban platform with role-based governance and activity audit trails.",
      },
      {
        src: "/work/byteflow/02-kanban-board.png",
        label: "Real-Time Sprint Kanban Board",
        caption:
          "Active sprint execution board with live sync, multi-lane workflows (Backlog, Active Sprint, Staging, Shipped), tags, priorities, and assignees.",
      },
      {
        src: "/work/byteflow/03-projects-directory.png",
        label: "Projects & Workspace Hub",
        caption:
          "High-level directory tracking 6 active organizational boards, 27 workflow lanes, and 44 tasks across client engineering engagements.",
      },
      {
        src: "/work/byteflow/04-admin-overview.png",
        label: "Workspace Overview & Executive Reports",
        caption:
          "Team capacity management, task resolution rate telemetry, and individual project velocity reports across engineering squads.",
      },
      {
        src: "/work/byteflow/05-task-drawer.jpg",
        label: "Task Detail & Activity Drawer",
        caption:
          "Granular task inspector featuring priority flags, role assignment, sprint deadlines, and timestamped @mention collaborative discussion threads.",
      },
    ],
  },
  {
    slug: "bytepos",
    name: "bytePOS",
    client: "Multi-service restaurant & dining group",
    sector: "Hospitality / Flutter Tablet & Mobile POS",
    year: "2026",
    scope: ["Flutter", "Android & iOS", "POS & KOT", "Inventory"],
    summary:
      "A cross-platform Flutter tablet and mobile application for restaurants: touchscreen ordering, instant thermal KOT kitchen printing, live ingredient consumption, and cash reconciliation.",
    brief:
      "High-volume dining establishments face constant chaos between front-of-house waitstaff, kitchen order tickets (KOT), and back-office stock. Traditional billing systems tether staff to bulky desktop PCs, delay kitchen orders, lose track of raw ingredient consumption, and fail to reconcile cash drawers at closing. bytePOS was engineered as a native Flutter application for Android tablets and iOS iPads to deliver fluid, portable, sub-second terminal performance.",
    approach: [
      "Native Flutter architecture deployed across Android tablets and iOS iPads, optimized for fluid 60fps touch interactions during peak rush hours.",
      "High-speed ordering flow allowing one-tap table selection and instant ESC/POS thermal kitchen order ticket (KOT) printing via network and Bluetooth.",
      "Real-time raw material and ingredient consumption mapping that automatically deducts inventory as dishes are billed.",
      "Omnichannel order handling supporting simultaneous Dine-In (56%), Take-Away (44%), and Online delivery queues with dedicated status tracking.",
      "End-to-end restaurant financial accounting tracking hourly sales velocity, average order value (AOV ₹387), ingredient purchases, and cash drawer reconciliation.",
    ],
    outcome:
      "Kitchen turnaround times reduced by over 30% with zero lost tickets. Food waste and ingredient leakage dropped as consumption mapped directly to billed items, and waitstaff completed mobile table orders and cash reconciliation seamlessly.",
    tradeoff:
      "Complex cloud-only table reservation bells and whistles, sacrificed for an ultra-fast, local-first kitchen printing pipeline that never drops a ticket during internet blackouts.",
    constraint: "Sub-second touch response / offline KOT printing / live ingredient consumption / cash drawer auditing",
    loads: [
      { label: "KOT Dispatch", value: "Instant", note: "thermal print" },
      { label: "Platform", value: "Flutter", note: "Android & iOS" },
      { label: "AOV", value: "₹387", note: "ticket average" },
    ],
    stack: ["Flutter", "Dart", "Android", "iOS", "ESC/POS", "PostgreSQL"],
    accent: "teal",
    preview: "bytepos",
    next: "byteballot",
    screenshots: [
      {
        src: "/work/bytepos/01-pos-terminal-v2.jpg",
        label: "Touchscreen POS & KOT Terminal",
        caption:
          "High-speed ordering interface with category filtering (Alfham, Biryani, Burger, Juice), table assignment, and one-tap KOT printing.",
      },
      {
        src: "/work/bytepos/02-overview-dashboard-v2.jpg",
        label: "Restaurant Management & Revenue Analytics",
        caption:
          "Live managerial metrics on total revenue, average order value (₹387), hourly sales distribution, and dine-in (56%) vs take-away (44%) split.",
      },
      {
        src: "/work/bytepos/03-sales-history-v2.jpg",
        label: "Real-Time Sales History & Top Products",
        caption:
          "Continuous transaction logging with payment method tracking (Cash, UPI, Card) and top-selling dishes.",
      },
      {
        src: "/work/bytepos/04-bill-modal-v2.jpg",
        label: "Digital Bill & Itemized Checkout",
        caption:
          "Itemized tax invoicing with clear unit prices, quantities, and cash settlement reconciliation.",
      },
      {
        src: "/work/bytepos/05-product-consumption-v2.jpg",
        label: "Ingredient Consumption & Material Reports",
        caption:
          "Direct linkage between billed food items and raw material inventory depletion.",
      },
    ],
  },
  {
    slug: "byteballot",
    name: "byteBallot",
    client: "Civic tech & voter education platform",
    sector: "Civic Tech / EVM Simulation & Education",
    year: "2026",
    scope: ["Web", "EVM Simulator", "Audio/Visual Feedback", "VVPAT Engine"],
    summary:
      "A faithful digital twin of the Indian Electronic Voting Machine (EVM) and VVPAT printer educating citizens on the complete ballot procedure.",
    brief:
      "First-time voters and citizens across diverse state assembly constituencies frequently encounter unfamiliarity with the multi-step Electronic Voting Machine (EVM) and Voter Verifiable Paper Audit Trail (VVPAT) verification process. byteBallot was engineered as an authentic physical twin of the ballot unit: tactile blue push-buttons, candidate party symbols, bilingual localized ballots, active red LED triggers, and 7-second VVPAT thermal slip inspections.",
    approach: [
      "Pixel-accurate physical twin of the Indian EVM Ballot Unit (BU) featuring authentic candidate rows, localized script typography, and realistic blue voting buttons.",
      "Interactive VVPAT window simulating the mandatory 7-second paper slip inspection, candidate symbol imprint, and cutoff deposit.",
      "Realistic audio-visual feedback loops reproducing the long confirmation beep and LED registration indicator upon vote casting.",
      "Multi-constituency mock ballot builder supporting state assembly simulations across Dharmadom, Palakkad, Thiruvananthapuram, and Thrissur.",
      "High-concurrency civic portal infrastructure handling 148,000+ simulated votes cast with zero voter data retention or tracking.",
    ],
    outcome:
      "Over 148,000 simulated votes cast across 16+ assembly constituencies with zero ballot errors. Citizens and community groups successfully used the simulator to educate first-time voters before state general elections.",
    tradeoff:
      "Online identity verification and binding voter registration, deliberately omitted to preserve 100% anonymous, frictionless civic education.",
    constraint: "Authentic EVM/VVPAT timing / multi-lingual ballots / zero-tracking anonymity / high concurrency during election weeks",
    loads: [
      { label: "Simulated Votes", value: "148k+", note: "cast anonymously" },
      { label: "Constituencies", value: "16+", note: "mock ballots" },
      { label: "Feedback", value: "VVPAT", note: "audio & slip" },
    ],
    stack: ["Next.js", "TypeScript", "Web Audio API", "Tailwind CSS", "Vercel"],
    accent: "signal",
    preview: "byteballot",
    next: "cuplana",
    screenshots: [
      {
        src: "/work/byteballot/01-landing.jpg",
        label: "byteBallot Civic Portal Gateway",
        caption:
          "Digital Democracy & Voter Education Platform: experience realistic ballot units with authentic political symbols, active LED indicators, and instant VVPAT audio confirmation.",
      },
      {
        src: "/work/byteballot/02-evm-vvpat-simulator.jpg",
        label: "Interactive EVM Ballot Unit & VVPAT Simulator",
        caption:
          "Dharmadom constituency model ballot: candidate rows, authentic blue voting buttons, red registration LEDs, and the synchronized 7-second VVPAT verification window.",
      },
      {
        src: "/work/byteballot/03-voting-simulations.jpg",
        label: "State Assembly Constituency Simulations",
        caption:
          "Active ballot directory across Kerala assembly constituencies (Dharmadom, Palakkad Fast-Track, Thiruvananthapuram Central, Thrissur).",
      },
      {
        src: "/work/byteballot/04-admin-dashboard.png",
        label: "Civic Portal Admin & Telemetry Dashboard",
        caption:
          "Superadmin console tracking 148,922 platform impressions, active ballot configurations, candidate rosters, and campaign partner grids.",
      },
    ],
  },
  {
    slug: "cuplana",
    name: "Cuplana",
    client: "Food consulting & restaurant strategy brand",
    sector: "Hospitality / Brand & Culinary Advisory",
    year: "2026",
    scope: ["Web", "Brand Design", "Consulting Portal"],
    summary:
      "A high-impact culinary consulting web experience helping restaurants engineer profitable menus, kitchen workflows, and operational strategy.",
    brief:
      "Modern restaurant brands face high kitchen failure rates from uncalibrated menu engineering, unchecked food costs, and poor kitchen workflow architecture. Cuplana needed a high-impact digital platform to articulate their culinary advisory services, showcase operational track records, and capture consultation bookings from expanding dining groups.",
    approach: [
      "High-contrast dark editorial aesthetic anchored by signature electric yellow typography and a bespoke geometric brand mark.",
      "Focused service architecture communicating menu engineering, kitchen systems, operational cost control, and multi-unit scaling.",
      "Integrated consultation scheduling funnel converting restaurateurs into client discovery sessions.",
      "Mobile-responsive performance with sub-second page loads and zero layout shift across devices.",
    ],
    outcome:
      "Positioned Cuplana as a premium culinary authority, establishing direct conversion pathways for restaurant founders and dining brand developers.",
    tradeoff:
      "Lengthy multi-page marketing fluff, traded for a high-impact single-scroll narrative that delivers the core value proposition upfront.",
    constraint: "High-contrast visual craft / direct booking funnel / mobile performance / culinary brand storytelling",
    loads: [
      { label: "Experience", value: "4+ Yrs", note: "restaurant advisory" },
      { label: "Funnel", value: "Direct", note: "consultation booking" },
      { label: "Design", value: "Custom", note: "bespoke brand mark" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    accent: "signal",
    preview: "cuplana",
    next: "kidscove",
    screenshots: [
      {
        src: "/work/cuplana/01-landing.jpg",
        label: "Cuplana Platform & Culinary Advisory Gateway",
        caption:
          "High-contrast food consulting platform: menu development, kitchen systems, cost control, and restaurant operational strategy.",
      },
    ],
  },
  {
    slug: "kidscove",
    name: "KidsCove",
    client: "KidsCove School of Excellence",
    sector: "Education / School Web Portal",
    year: "2026",
    scope: ["Web", "Admissions Funnel", "Campus Story"],
    summary:
      "A warm, welcoming school web portal showcasing nature-friendly campus life, curriculum excellence, and interactive admissions booking.",
    brief:
      "Traditional school websites are often cold, bureaucratic, and difficult for young parents to navigate on mobile devices. KidsCove needed a warm, emotionally engaging digital presence to communicate their Montessori and primary curriculum, announce the 2027–28 admissions cycle, and provide instant WhatsApp communication for prospective families in Ozhukur, Kerala.",
    approach: [
      "Playful, nature-inspired visual design language featuring custom illustrated campus graphics and child-centered pastel palettes.",
      "Prominent admissions booking banner and digital inquiry workflow for Montessori 1 through Grade 4 applicants.",
      "Seamless floating WhatsApp integration connecting parents directly to the admissions desk for rapid query resolution.",
      "Fast, lightweight mobile layout designed for parents browsing on smartphones across varied cellular networks.",
    ],
    outcome:
      "Generated a surge in early admissions inquiries for the upcoming academic year and established a trusted digital identity for the school community.",
    tradeoff:
      "Complex bureaucratic portals, replaced by a warm, welcoming, parent-friendly public showcase.",
    constraint: "Playful child-friendly aesthetic / WhatsApp inquiry conversion / mobile responsiveness / local community resonance",
    loads: [
      { label: "Curriculum", value: "Mont-Gr 4", note: "7 grades" },
      { label: "Admissions", value: "Open", note: "2027–28 booking" },
      { label: "Inquiry", value: "WhatsApp", note: "direct helpline" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "WhatsApp Chat", "Vercel"],
    accent: "teal",
    preview: "kidscove",
    next: "skyra",
    screenshots: [
      {
        src: "/work/kidscove/01-landing.jpg",
        label: "KidsCove School of Excellence Web Portal",
        caption:
          "Welcoming early education experience: admissions booking, campus storytelling, and curriculum transparency in Ozhukur, Kerala.",
      },
    ],
  },
  {
    slug: "skyra",
    name: "Skyra",
    client: "Global Education & Career Consultancy",
    sector: "Corporate / International Education & HR",
    year: "2026",
    scope: ["Web", "Lead Generation", "Global Careers"],
    summary:
      "A modern international consultancy portal connecting students and professionals with elite global academic programmes and career placements.",
    brief:
      "International education and overseas career recruitment require immense trust, authority, and modern polish. Outdated consultancy websites fail to convey the prestige of international universities or the seriousness of global corporate placements. Skyra required a high-trust, cutting-edge digital presence to attract ambitious students and global job-seekers.",
    approach: [
      "Sophisticated glassmorphism dark mode interface with luminous blue and indigo ambient lighting accents.",
      "Clear dual-path lead funnels directing visitors into either Global Education pathways or International Career opportunities.",
      "Frictionless 'Let's Talk' consultation workflows optimized for high conversion rates.",
      "Performance-tuned responsive layout ensuring flawless rendering across executive desktop displays and mobile phones.",
    ],
    outcome:
      "Elevated Skyra's market positioning into a premier international consultancy with substantial increases in qualified student and candidate consultation bookings.",
    tradeoff:
      "Generic stock-photo layouts, rejected in favor of an immersive, tech-forward aesthetic with custom glassmorphism typography.",
    constraint: "High-trust corporate authority / dual-stream lead capture / glassmorphism visual craft / global mobile audience",
    loads: [
      { label: "Programs", value: "Global", note: "study abroad" },
      { label: "Careers", value: "Overseas", note: "HR placements" },
      { label: "Conversion", value: "Dual", note: "lead funnels" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    accent: "ink",
    preview: "skyra",
    next: "bytestrata",
    screenshots: [
      {
        src: "/work/skyra/01-landing.jpg",
        label: "Skyra Global Education & Career Gateway",
        caption:
          "Immersive glassmorphism consultancy portal: connecting ambitious minds with elite academic programmes and lucrative overseas careers.",
      },
    ],
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
