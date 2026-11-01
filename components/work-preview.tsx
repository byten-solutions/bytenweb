import type { Project } from "@/lib/work";

const mono = "var(--font-geist-mono), monospace";
const display = "var(--font-archivo), sans-serif";

function PreviewShell({
  children,
  label,
  ground,
  labelColor = "var(--plate-muted)",
}: {
  children: React.ReactNode;
  label: string;
  ground: string;
  labelColor?: string;
}) {
  return (
    <svg viewBox="0 0 640 420" aria-hidden="true" focusable="false">
      <rect width="640" height="420" fill={ground} />
      <g
        stroke="var(--plate-foreground)"
        strokeWidth="0.6"
        opacity="0.16"
        fill="none"
      >
        <path d="M0 60h640M0 120h640M0 180h640M0 240h640M0 300h640M0 360h640" />
        <path d="M40 0v420M80 0v420M120 0v420M160 0v420M200 0v420M240 0v420M280 0v420M320 0v420M360 0v420M400 0v420M440 0v420M480 0v420M520 0v420M560 0v420M600 0v420" />
      </g>
      {children}
      <text
        x="22"
        y="402"
        fontFamily={mono}
        fontSize="7"
        letterSpacing="1.4"
        fill={labelColor}
      >
        {label}
      </text>
      <text
        x="618"
        y="402"
        fontFamily={mono}
        fontSize="7"
        letterSpacing="1.4"
        fill={labelColor}
        textAnchor="end"
      >
        SCHEMATIC / NOT TO SCALE
      </text>
    </svg>
  );
}

function CounterPreview() {
  return (
    <PreviewShell label="COUNTER / OFFLINE POS" ground="var(--plate)">
      <g fill="none">
        <rect x="54" y="82" width="316" height="238" rx="8" fill="var(--foreground)" />
        <rect x="70" y="98" width="284" height="188" fill="var(--surface)" />
        <text x="84" y="118" fontFamily={mono} fontSize="7" letterSpacing="1.2" fill="var(--signal)">
          COUNTER / 02
        </text>
        <path d="M84 128h256" stroke="var(--line-strong)" />
        <text x="84" y="146" fontFamily={mono} fontSize="7" fill="var(--subtle)">
          ITEM
        </text>
        <text x="252" y="146" fontFamily={mono} fontSize="7" fill="var(--subtle)" textAnchor="end">
          QTY
        </text>
        <text x="338" y="146" fontFamily={mono} fontSize="7" fill="var(--subtle)" textAnchor="end">
          AMOUNT
        </text>
        <path d="M84 156h256M84 172h256M84 188h256M84 204h256" stroke="var(--line)" />
        <rect x="84" y="216" width="120" height="7" fill="var(--line-strong)" />
        <rect x="84" y="230" width="86" height="6" fill="var(--line)" />
        <text x="84" y="258" fontFamily={mono} fontSize="7" fill="var(--subtle)">
          TOTAL
        </text>
        <text x="338" y="260" fontFamily={display} fontSize="18" fontWeight="700" fill="var(--foreground)" textAnchor="end">
          4,280
        </text>
        <rect x="70" y="270" width="284" height="16" fill="var(--signal)" />
        <text x="212" y="281" fontFamily={mono} fontSize="6.5" fill="#fff" textAnchor="middle">
          TENDER / COMPLETE
        </text>

        <path
          d="M394 66h134v244l-9 8-9-8-9 8-9-8-9 8-9-8-9 8-9-8-9 8-9-8-9 8-9-8-9 8V66Z"
          fill="var(--surface)"
          stroke="var(--line-strong)"
        />
        <text x="410" y="88" fontFamily={mono} fontSize="7" letterSpacing="1.2" fill="var(--signal)">
          BYTEN / RECEIPT
        </text>
        <path d="M410 100h100" stroke="var(--line-strong)" strokeDasharray="3 3" />
        <path d="M410 116h64M410 128h86M410 140h48M410 152h72" stroke="var(--line-strong)" />
        <rect x="410" y="172" width="100" height="18" fill="var(--primary)" />
        <text x="460" y="184" fontFamily={mono} fontSize="6.5" fill="#fff" textAnchor="middle">
          OFFLINE / QUEUED
        </text>
        <path d="M410 206h100M410 218h74" stroke="var(--line)" />
        <text x="410" y="244" fontFamily={mono} fontSize="6.5" fill="var(--subtle)">
          SYNC / WHEN LINKED
        </text>
        <path d="M460 260v14" stroke="var(--signal)" strokeDasharray="2 2" />
        <rect x="456" y="274" width="8" height="8" fill="var(--signal)" />

        <path d="M370 200h18" stroke="var(--primary)" strokeDasharray="3 3" />
        <circle cx="582" cy="300" r="26" fill="var(--plate-deep)" stroke="var(--plate-foreground)" />
        <text x="582" y="298" fontFamily={mono} fontSize="6" fill="var(--plate-foreground)" textAnchor="middle">
          STOCK
        </text>
        <text x="582" y="308" fontFamily={mono} fontSize="6" fill="var(--plate-muted)" textAnchor="middle">
          6,240
        </text>
      </g>
    </PreviewShell>
  );
}

function AtlasPreview() {
  return (
    <PreviewShell
      label="ATLAS / B2B COMMERCE"
      ground="var(--plate-deep)"
    >
      <g fill="none">
        <rect x="44" y="58" width="552" height="286" fill="var(--surface)" stroke="var(--foreground)" />
        <path d="M44 88h552" stroke="var(--foreground)" />
        <circle cx="60" cy="73" r="3" fill="var(--foreground)" />
        <circle cx="72" cy="73" r="3" fill="var(--foreground)" />
        <circle cx="84" cy="73" r="3" fill="var(--foreground)" />
        <rect x="102" y="66" width="300" height="14" fill="var(--surface-2)" />
        <text x="110" y="76" fontFamily={mono} fontSize="6.5" fill="var(--subtle)">
          atlas / catalogue / search
        </text>
        <rect x="486" y="64" width="94" height="18" fill="var(--foreground)" />
        <text x="533" y="76" fontFamily={mono} fontSize="6.5" fill="var(--surface)" textAnchor="middle">
          QUOTE / 03
        </text>

        <text x="62" y="112" fontFamily={mono} fontSize="6.5" letterSpacing="1.2" fill="var(--signal)">
          CATALOGUE / 40,012
        </text>
        <rect x="62" y="122" width="330" height="22" fill="var(--surface-2)" />
        <text x="72" y="137" fontFamily={mono} fontSize="7" fill="var(--subtle)">
          SEARCH / PART NUMBER, TYPE, SYNONYM
        </text>

        <g fontFamily={mono} fontSize="6.5" fill="var(--subtle)">
          <text x="62" y="164">PART</text>
          <text x="214" y="164">STOCK</text>
          <text x="286" y="164">PRICE</text>
          <text x="356" y="164">LEAD</text>
        </g>
        <path d="M62 172h330M62 198h330M62 224h330M62 250h330M62 276h330" stroke="var(--line)" />
        <g fontFamily={mono} fontSize="6.5" fill="var(--foreground)">
          <text x="62" y="188">BX-4021 / SEAL KIT</text>
          <text x="214" y="188">126</text>
          <text x="286" y="188">4,280</text>
          <text x="356" y="188">2d</text>
          <text x="62" y="214">BX-4021-A / SERVICE</text>
          <text x="214" y="214">18</text>
          <text x="286" y="214">4,280</text>
          <text x="356" y="214">5d</text>
          <text x="62" y="240">CV-88 / VALVE BODY</text>
          <text x="214" y="240">342</text>
          <text x="286" y="240">11,900</text>
          <text x="356" y="240">1d</text>
          <text x="62" y="266">CV-88-S / SEAT</text>
          <text x="214" y="266">54</text>
          <text x="286" y="266">2,140</text>
          <text x="356" y="266">3d</text>
        </g>

        <rect x="412" y="122" width="164" height="200" fill="var(--surface-2)" />
        <text x="426" y="142" fontFamily={mono} fontSize="6.5" letterSpacing="1" fill="var(--signal)">
          QUOTE / ACCOUNT 090
        </text>
        <path d="M426 152h136" stroke="var(--line-strong)" />
        <path d="M426 168h88M426 182h112M426 196h72" stroke="var(--line-strong)" />
        <text x="426" y="226" fontFamily={mono} fontSize="6.5" fill="var(--subtle)">
          ACCOUNT PRICE
        </text>
        <text x="562" y="226" fontFamily={mono} fontSize="6.5" fill="var(--foreground)" textAnchor="end">
          APPLIED
        </text>
        <text x="426" y="244" fontFamily={mono} fontSize="6.5" fill="var(--subtle)">
          APPROVAL
        </text>
        <text x="562" y="244" fontFamily={mono} fontSize="6.5" fill="var(--foreground)" textAnchor="end">
          AUTO
        </text>
        <rect x="426" y="264" width="136" height="20" fill="var(--foreground)" />
        <text x="494" y="277" fontFamily={mono} fontSize="6.5" fill="var(--surface)" textAnchor="middle">
          SEND QUOTE
        </text>

        <path d="M382 330h72" stroke="var(--plate-line)" strokeWidth="1.5" />
        <text x="458" y="334" fontFamily={mono} fontSize="6.5" fill="var(--plate-muted)">
          ERP SYNC / 15M
        </text>
      </g>
    </PreviewShell>
  );
}

function RelayPreview() {
  return (
    <PreviewShell
      label="RELAY / FIELD OPERATIONS"
      ground="#08252b"
      labelColor="#a7b1a9"
    >
      <g fill="none">
        <rect x="46" y="60" width="252" height="286" fill="#18201b" stroke="#3d493f" />
        <text x="62" y="82" fontFamily={mono} fontSize="6.5" letterSpacing="1.2" fill="#ff8a6b">
          DISPATCH / TODAY
        </text>
        <path d="M62 92h220" stroke="#3d493f" />
        <g fontFamily={mono} fontSize="6.5" fill="#a7b1a9">
          <text x="62" y="112">08:00 / ROUTE A</text>
          <text x="62" y="132">09:30 / ROUTE B</text>
          <text x="62" y="152">11:00 / ROUTE C</text>
        </g>
        <path d="M62 164h220M62 202h220M62 240h220M62 278h220" stroke="#2a342d" />
        <g fill="#4cc9d9">
          <rect x="62" y="174" width="8" height="8" />
          <rect x="62" y="212" width="8" height="8" />
          <rect x="62" y="250" width="8" height="8" />
        </g>
        <g fontFamily={mono} fontSize="6.5" fill="#ecefe8">
          <text x="80" y="182">JOB 2048 / LEVEL B2</text>
          <text x="80" y="220">JOB 2049 / ROOF</text>
          <text x="80" y="258">JOB 2050 / PLANT</text>
        </g>
        <text x="62" y="306" fontFamily={mono} fontSize="6" fill="#a7b1a9">
          LOW SIGNAL / QUEUE ACTIVE
        </text>
        <rect x="62" y="316" width="54" height="12" fill="#e8451f" />
        <text x="89" y="325" fontFamily={mono} fontSize="6" fill="#101512" textAnchor="middle">
          SYNC 03
        </text>

        <rect x="342" y="38" width="160" height="318" rx="18" fill="#f4f5f1" stroke="#f4f5f1" strokeWidth="1.5" />
        <rect x="356" y="54" width="132" height="286" rx="10" fill="#e7e9e4" />
        <rect x="392" y="43" width="60" height="4" rx="2" fill="#c3c8c1" />
        <text x="368" y="74" fontFamily={mono} fontSize="6.5" letterSpacing="1" fill="#c93410">
          JOB / 2048
        </text>
        <path d="M368 84h108" stroke="#c3c8c1" />
        <text x="368" y="102" fontFamily={mono} fontSize="6.5" fill="#4c544e">
          SITE / LEVEL B2
        </text>
        <rect x="368" y="112" width="108" height="80" fill="#007487" />
        <path d="M380 170c14-30 24-10 34-28s22-8 30-20" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="380" cy="170" r="4" fill="#e8451f" />
        <circle cx="444" cy="122" r="4" fill="#e8451f" />
        <text x="374" y="186" fontFamily={mono} fontSize="6" fill="#ffffff">
          ROUTE / 04 STOPS
        </text>
        <rect x="368" y="204" width="108" height="24" fill="#006e7e" />
        <text x="422" y="219" fontFamily={mono} fontSize="6.5" fill="#ffffff" textAnchor="middle">
          COMPLETE JOB
        </text>
        <rect x="368" y="236" width="108" height="24" fill="#f4f5f1" stroke="#c3c8c1" />
        <text x="422" y="251" fontFamily={mono} fontSize="6.5" fill="#101512" textAnchor="middle">
          CAPTURE PHOTO
        </text>
        <path d="M368 274h108" stroke="#c3c8c1" />
        <rect x="368" y="288" width="108" height="20" fill="#f4f5f1" stroke="#c3c8c1" />
        <text x="422" y="301" fontFamily={mono} fontSize="6" fill="#101512" textAnchor="middle">
          REPORT / READY
        </text>
        <text x="368" y="326" fontFamily={mono} fontSize="6" fill="#4c544e">
          OFFLINE / 8H LOCAL
        </text>

        <path d="M298 196h44" stroke="#4cc9d9" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="m336 191 6 5-6 5" stroke="#4cc9d9" strokeWidth="1.5" />
        <text x="522" y="120" fontFamily={mono} fontSize="6.5" fill="#a7b1a9">
          SYNC / CONFLICT
        </text>
        <text x="522" y="132" fontFamily={mono} fontSize="6.5" fill="#a7b1a9">
          PROMPT / NEVER
        </text>
        <text x="522" y="144" fontFamily={mono} fontSize="6.5" fill="#a7b1a9">
          SILENT
        </text>
        <path d="M502 158h58" stroke="#3d493f" />
      </g>
    </PreviewShell>
  );
}

export function WorkPreview({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div className={className}>
      {project.preview === "counter" ? (
        <CounterPreview />
      ) : project.preview === "atlas" ? (
        <AtlasPreview />
      ) : (
        <RelayPreview />
      )}
    </div>
  );
}
