const mono = "var(--font-geist-mono), monospace";

function DiagramFrame({
  children,
  label,
  viewBox = "0 0 640 360",
}: {
  children: React.ReactNode;
  label: string;
  viewBox?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width="100%" height="100%" fill="var(--surface)" />
      <g
        stroke="var(--line)"
        strokeWidth="1"
        fill="none"
        opacity="0.55"
        aria-hidden="true"
      >
        <path d="M0 40h640M0 80h640M0 120h640M0 160h640M0 200h640M0 240h640M0 280h640M0 320h640" />
        <path d="M40 0v360M80 0v360M120 0v360M160 0v360M200 0v360M240 0v360M280 0v360M320 0v360M360 0v360M400 0v360M440 0v360M480 0v360M520 0v360M560 0v360M600 0v360" />
      </g>
      {children}
      <text
        x="24"
        y="342"
        fontFamily={mono}
        fontSize="8"
        letterSpacing="1.4"
        fill="var(--subtle)"
      >
        {label}
      </text>
    </svg>
  );
}

function CornerTicks() {
  return (
    <g stroke="var(--line-strong)" strokeWidth="1" fill="none" aria-hidden="true">
      <path d="M18 32V18h14M608 18h14v14M622 328v14h-14M32 342H18v-14" />
    </g>
  );
}

export function WebDiagram() {
  return (
    <DiagramFrame label="SCHEMATIC / WEB PLATFORM">
      <CornerTicks />
      <g fill="none" aria-hidden="true">
        {/* browser chrome */}
        <rect
          x="62"
          y="44"
          width="516"
          height="270"
          fill="var(--background)"
          stroke="var(--line-strong)"
        />
        <path d="M62 78h516" stroke="var(--line-strong)" />
        <circle cx="80" cy="61" r="3" fill="var(--line-strong)" />
        <circle cx="92" cy="61" r="3" fill="var(--line-strong)" />
        <circle cx="104" cy="61" r="3" fill="var(--line-strong)" />
        <rect
          x="126"
          y="54"
          width="272"
          height="14"
          fill="var(--surface-2)"
        />
        <text x="134" y="64" fontFamily={mono} fontSize="7" fill="var(--subtle)">
          byten.in / systems
        </text>
        <rect x="414" y="53" width="58" height="16" fill="var(--primary)" />
        <text x="425" y="64" fontFamily={mono} fontSize="6.5" fill="#fff">
          LIVE
        </text>

        {/* content */}
        <rect x="86" y="100" width="76" height="190" fill="var(--surface-2)" />
        <rect x="98" y="114" width="50" height="5" fill="var(--primary)" />
        <path
          d="M98 138h48M98 154h38M98 170h46M98 186h30"
          stroke="var(--line-strong)"
        />
        <rect x="98" y="214" width="48" height="16" fill="var(--foreground)" />
        <rect x="98" y="240" width="48" height="16" fill="var(--surface)" />
        <rect x="98" y="266" width="48" height="16" fill="var(--surface)" />

        <text
          x="188"
          y="116"
          fontFamily={mono}
          fontSize="8"
          letterSpacing="1"
          fill="var(--signal)"
        >
          SYSTEM 01 / COMMERCE
        </text>
        <path
          d="M188 130h184M188 142h148M188 154h164"
          stroke="var(--foreground)"
          strokeWidth="6"
        />
        <path d="M188 174h96" stroke="var(--line-strong)" />

        <rect
          x="188"
          y="196"
          width="110"
          height="80"
          fill="var(--surface-2)"
          stroke="var(--line-strong)"
        />
        <path d="M200 214h44M200 228h68M200 242h54" stroke="var(--line-strong)" />
        <rect x="200" y="254" width="42" height="10" fill="var(--primary)" />

        <rect
          x="310"
          y="196"
          width="110"
          height="80"
          fill="var(--surface)"
          stroke="var(--line-strong)"
        />
        <path d="M322 214h44M322 228h68M322 242h54" stroke="var(--line-strong)" />
        <rect x="322" y="254" width="42" height="10" fill="var(--signal)" />

        <rect
          x="432"
          y="100"
          width="122"
          height="176"
          fill="var(--surface)"
          stroke="var(--line-strong)"
        />
        <text x="444" y="116" fontFamily={mono} fontSize="7" fill="var(--subtle)">
          CART / 03
        </text>
        <path d="M444 130h98" stroke="var(--line-strong)" />
        <path d="M444 148h64M444 162h84M444 176h52" stroke="var(--line-strong)" />
        <path d="M444 210h98" stroke="var(--line)" />
        <text x="444" y="228" fontFamily={mono} fontSize="7" fill="var(--subtle)">
          SUBTOTAL
        </text>
        <text x="542" y="228" fontFamily={mono} fontSize="7" fill="var(--foreground)" textAnchor="end">
          12,480
        </text>
        <rect x="444" y="242" width="98" height="20" fill="var(--foreground)" />
        <text x="493" y="255" fontFamily={mono} fontSize="7" fill="var(--background)" textAnchor="middle">
          CHECKOUT
        </text>

        {/* selection */}
        <rect
          x="306"
          y="192"
          width="118"
          height="88"
          fill="none"
          stroke="var(--signal)"
          strokeDasharray="4 3"
        />
        <rect x="306" y="180" width="48" height="12" fill="var(--signal)" />
        <text x="311" y="189" fontFamily={mono} fontSize="6" fill="#fff">
          CARD / 02
        </text>

        {/* dimensions */}
        <path d="M62 328h516" stroke="var(--line-strong)" />
        <path d="M62 324v8M578 324v8" stroke="var(--line-strong)" />
        <text x="320" y="338" fontFamily={mono} fontSize="6.5" fill="var(--subtle)" textAnchor="middle">
          1440 GRID / 12 COL
        </text>
      </g>
    </DiagramFrame>
  );
}

export function MobileDiagram() {
  return (
    <DiagramFrame label="SCHEMATIC / MOBILE APPLICATION">
      <CornerTicks />
      <g fill="none" aria-hidden="true">
        {/* back phone */}
        <rect
          x="112"
          y="52"
          width="148"
          height="252"
          rx="16"
          fill="var(--surface-2)"
          stroke="var(--line-strong)"
        />
        <rect x="124" y="66" width="124" height="224" rx="10" fill="var(--background)" />
        <rect x="158" y="58" width="56" height="5" rx="2.5" fill="var(--line-strong)" />
        <path d="M138 88h96M138 102h64M138 116h82" stroke="var(--line-strong)" />
        <rect x="138" y="132" width="96" height="42" fill="var(--surface-2)" />
        <rect x="138" y="184" width="96" height="42" fill="var(--surface)" stroke="var(--line)" />
        <rect x="138" y="236" width="96" height="42" fill="var(--surface)" stroke="var(--line)" />

        {/* front phone */}
        <rect
          x="268"
          y="38"
          width="160"
          height="278"
          rx="18"
          fill="var(--background)"
          stroke="var(--foreground)"
          strokeWidth="1.5"
        />
        <rect x="282" y="54" width="132" height="246" rx="10" fill="var(--surface)" />
        <rect x="320" y="43" width="56" height="4" rx="2" fill="var(--line-strong)" />
        <text x="294" y="72" fontFamily={mono} fontSize="6.5" letterSpacing="1" fill="var(--signal)">
          JOB / 2048
        </text>
        <path d="M294 80h82" stroke="var(--line-strong)" />
        <text x="294" y="98" fontFamily={mono} fontSize="6.5" fill="var(--subtle)">
          SITE / LEVEL B2
        </text>
        <rect x="294" y="108" width="108" height="54" fill="var(--surface-2)" />
        <path d="M304 124h54M304 136h78M304 148h42" stroke="var(--line-strong)" />
        <rect x="294" y="174" width="108" height="30" fill="var(--primary)" />
        <text x="348" y="193" fontFamily={mono} fontSize="7" fill="#fff" textAnchor="middle">
          COMPLETE JOB
        </text>
        <rect x="294" y="214" width="108" height="30" fill="var(--surface)" stroke="var(--line-strong)" />
        <text x="348" y="233" fontFamily={mono} fontSize="7" fill="var(--foreground)" textAnchor="middle">
          CAPTURE PHOTO
        </text>
        <path d="M294 258h108" stroke="var(--line)" />
        <circle cx="310" cy="276" r="4" fill="var(--signal)" />
        <text x="322" y="279" fontFamily={mono} fontSize="6.5" fill="var(--subtle)">
          QUEUED / 3 ITEMS
        </text>

        {/* sync path */}
        <path
          d="M430 108c44 0 58 26 58 58s-16 58-58 58"
          stroke="var(--primary)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <path d="m478 214 10 10-14 4" stroke="var(--primary)" strokeWidth="1.5" />
        <circle cx="488" cy="166" r="28" fill="var(--surface)" stroke="var(--primary)" />
        <path d="M476 172a12 12 0 0 1 22-4" stroke="var(--primary)" strokeWidth="1.5" />
        <path d="M486 158v6h-6" stroke="var(--primary)" strokeWidth="1.5" />
        <text x="488" y="207" fontFamily={mono} fontSize="6" fill="var(--subtle)" textAnchor="middle">
          SYNC / WHEN LINKED
        </text>

        <text x="112" y="328" fontFamily={mono} fontSize="6.5" fill="var(--subtle)">
          OFFLINE FIRST / LOCAL DRAFT
        </text>
        <path d="M112 320h316" stroke="var(--line-strong)" />
        <path d="M112 316v8M428 316v8" stroke="var(--line-strong)" />
      </g>
    </DiagramFrame>
  );
}

export function RetailDiagram() {
  return (
    <DiagramFrame label="SCHEMATIC / RETAIL POS SYSTEM">
      <CornerTicks />
      <g fill="none" aria-hidden="true">
        {/* terminal */}
        <rect x="66" y="104" width="280" height="184" rx="8" fill="var(--foreground)" />
        <rect x="82" y="120" width="248" height="118" fill="var(--surface)" />
        <text x="96" y="138" fontFamily={mono} fontSize="7" letterSpacing="1" fill="var(--signal)">
          COUNTER / 02
        </text>
        <path d="M96 148h220" stroke="var(--line-strong)" />
        <text x="96" y="166" fontFamily={mono} fontSize="7" fill="var(--subtle)">
          ITEM / QTY / AMOUNT
        </text>
        <path d="M96 176h190M96 190h214M96 204h168M96 218h196" stroke="var(--line)" />
        <text x="96" y="240" fontFamily={mono} fontSize="7" fill="var(--subtle)">
          TOTAL
        </text>
        <text x="312" y="240" fontFamily={mono} fontSize="12" fill="var(--foreground)" textAnchor="end">
          4,280
        </text>
        <rect x="82" y="252" width="248" height="22" fill="var(--signal)" />
        <text x="206" y="266" fontFamily={mono} fontSize="7" fill="#fff" textAnchor="middle">
          TENDER / COMPLETE
        </text>
        <rect x="146" y="288" width="120" height="24" fill="var(--foreground)" />
        <path d="M154 300h104" stroke="var(--line-strong)" />
        <text x="206" y="311" fontFamily={mono} fontSize="5.5" fill="var(--plate-muted)" textAnchor="middle">
          ESC / POS
        </text>

        {/* receipt */}
        <path
          d="M372 92h136v196l-9 8-9-8-9 8-9-8-9 8-9-8-9 8-9-8-9 8-9-8-9 8-9-8-9 8-9-8-9 8V92Z"
          fill="var(--surface)"
          stroke="var(--line-strong)"
        />
        <text x="388" y="112" fontFamily={mono} fontSize="7" letterSpacing="1" fill="var(--signal)">
          BYTEN / RECEIPT
        </text>
        <path d="M388 124h104" stroke="var(--line-strong)" strokeDasharray="3 3" />
        <path d="M388 140h72M388 152h90M388 164h58" stroke="var(--line-strong)" />
        <text x="388" y="192" fontFamily={mono} fontSize="6.5" fill="var(--subtle)">
          OFFLINE LEDGER
        </text>
        <rect x="388" y="202" width="104" height="18" fill="var(--primary)" />
        <text x="440" y="214" fontFamily={mono} fontSize="6.5" fill="#fff" textAnchor="middle">
          QUEUED
        </text>
        <path d="M388 236h104M388 248h80" stroke="var(--line)" />
        <text x="388" y="270" fontFamily={mono} fontSize="6" fill="var(--subtle)">
          SYNC / 00:14
        </text>

        {/* inventory nodes */}
        <path
          d="M346 238h24M382 238h-12"
          stroke="var(--primary)"
          strokeDasharray="3 3"
        />
        <circle cx="556" cy="140" r="30" fill="var(--surface)" stroke="var(--primary)" />
        <text x="556" y="136" fontFamily={mono} fontSize="6.5" fill="var(--foreground)" textAnchor="middle">
          STOCK
        </text>
        <text x="556" y="146" fontFamily={mono} fontSize="5.5" fill="var(--subtle)" textAnchor="middle">
          6,240
        </text>
        <path d="M526 140H508v98" stroke="var(--line-strong)" strokeDasharray="3 3" />
        <circle cx="508" cy="252" r="5" fill="var(--signal)" />
        <text x="520" y="255" fontFamily={mono} fontSize="6" fill="var(--subtle)">
          OUTLET 03
        </text>

        <text x="66" y="328" fontFamily={mono} fontSize="6.5" fill="var(--subtle)">
          LOCAL COMMIT / CLOUD RECONCILE
        </text>
      </g>
    </DiagramFrame>
  );
}

export function BackendDiagram() {
  return (
    <DiagramFrame label="SCHEMATIC / ENTERPRISE BACKEND">
      <CornerTicks />
      <g fill="none" aria-hidden="true">
        <rect x="54" y="126" width="86" height="96" fill="var(--surface)" stroke="var(--line-strong)" />
        <text x="66" y="144" fontFamily={mono} fontSize="6.5" fill="var(--subtle)">
          CLIENT
        </text>
        <path d="M66 158h58M66 172h44M66 186h52" stroke="var(--line-strong)" />
        <rect x="66" y="200" width="44" height="10" fill="var(--primary)" />

        <path d="M140 174h70" stroke="var(--foreground)" strokeWidth="1.5" />
        <path d="m204 169 6 5-6 5" stroke="var(--foreground)" strokeWidth="1.5" />

        <rect x="210" y="110" width="118" height="128" fill="var(--surface-2)" stroke="var(--foreground)" />
        <text x="224" y="130" fontFamily={mono} fontSize="7" letterSpacing="1" fill="var(--signal)">
          API / GATEWAY
        </text>
        <path d="M224 144h90" stroke="var(--line-strong)" />
        <text x="224" y="162" fontFamily={mono} fontSize="6.5" fill="var(--subtle)">
          AUTH / RATE / VALIDATE
        </text>
        <rect x="224" y="178" width="42" height="16" fill="var(--primary)" />
        <rect x="272" y="178" width="42" height="16" fill="var(--surface)" stroke="var(--line-strong)" />
        <path d="M224 208h90M224 220h62" stroke="var(--line)" />

        <path d="M328 174h54" stroke="var(--foreground)" strokeWidth="1.5" />
        <path d="m376 169 6 5-6 5" stroke="var(--foreground)" strokeWidth="1.5" />

        <rect x="382" y="96" width="96" height="62" fill="var(--surface)" stroke="var(--line-strong)" />
        <text x="394" y="114" fontFamily={mono} fontSize="6.5" fill="var(--subtle)">
          QUEUE
        </text>
        <path d="M394 128h70" stroke="var(--line-strong)" strokeDasharray="3 3" />
        <rect x="394" y="138" width="12" height="8" fill="var(--signal)" />
        <rect x="412" y="138" width="12" height="8" fill="var(--primary)" />
        <rect x="430" y="138" width="12" height="8" fill="var(--line-strong)" />

        <rect x="382" y="184" width="96" height="62" fill="var(--surface)" stroke="var(--line-strong)" />
        <text x="394" y="202" fontFamily={mono} fontSize="6.5" fill="var(--subtle)">
          WORKERS
        </text>
        <path d="M394 216h70M394 228h44" stroke="var(--line-strong)" />

        <path d="M478 127h40v-28h38" stroke="var(--line-strong)" />
        <path d="M478 215h40v28h38" stroke="var(--line-strong)" />

        <rect x="556" y="78" width="56" height="44" fill="var(--surface-2)" stroke="var(--foreground)" />
        <text x="584" y="96" fontFamily={mono} fontSize="6.5" fill="var(--foreground)" textAnchor="middle">
          DB
        </text>
        <path d="M568 106h32M568 112h24" stroke="var(--line-strong)" />
        <rect x="556" y="202" width="56" height="44" fill="var(--surface)" stroke="var(--line-strong)" />
        <text x="584" y="220" fontFamily={mono} fontSize="6.5" fill="var(--foreground)" textAnchor="middle">
          CACHE
        </text>
        <path d="M568 230h32" stroke="var(--line-strong)" strokeDasharray="3 3" />

        <path d="M280 238v34h176v-8" stroke="var(--line-strong)" strokeDasharray="3 3" />
        <text x="300" y="286" fontFamily={mono} fontSize="6" fill="var(--subtle)">
          OBSERVABILITY / TRACE
        </text>

        <text x="54" y="328" fontFamily={mono} fontSize="6.5" fill="var(--subtle)">
          REQUEST PATH / FALLBACK PATH
        </text>
      </g>
    </DiagramFrame>
  );
}
