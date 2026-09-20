export function CampusVisual() {
  return (
    <div className="campus-float relative mx-auto aspect-square w-full max-w-[32rem]" aria-hidden="true">
      <svg viewBox="0 0 480 480" className="h-full w-full" role="img">
        <title>Digital growth system for education organisations</title>
        <defs>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#163448" />
            <stop offset="100%" stopColor="#0c1f2e" />
          </linearGradient>
          <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2eb88a" />
            <stop offset="100%" stopColor="#0d7c5f" />
          </linearGradient>
          <linearGradient id="beamGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d4a745" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#2eb88a" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        {/* Background base */}
        <rect width="480" height="480" fill="#0c1f2e" rx="12" />
        <rect x="20" y="20" width="440" height="440" rx="8" fill="none" stroke="#1a3a4e" strokeWidth="1.5" />

        {/* Subtle grid dots */}
        <g fill="#1a3a4e" opacity="0.4">
          {Array.from({ length: 81 }).map((_, i) => {
            const row = Math.floor(i / 9);
            const col = i % 9;
            return (
              <circle key={`dot-${i}`} cx={44 + col * 48} cy={44 + row * 48} r="1.5" />
            );
          })}
        </g>

        {/* Connection beams */}
        <polygon className="campus-beam" points="40,420 160,260 320,180 440,280 440,440 40,440" fill="url(#beamGrad)" />

        {/* Central laptop / website */}
        <rect x="120" y="140" width="240" height="160" rx="8" fill="url(#screenGrad)" stroke="#1a3a4e" strokeWidth="1.5" />
        {/* Screen header */}
        <rect x="120" y="140" width="240" height="28" rx="8" fill="#0c1f2e" />
        <rect x="132" y="150" width="10" height="10" rx="5" fill="#d4a745" opacity="0.8" />
        <rect x="148" y="152" width="40" height="6" rx="3" fill="#d4dde2" opacity="0.3" />
        {/* Website content blocks */}
        <rect x="136" y="180" width="80" height="50" rx="4" fill="#0d7c5f" opacity="0.9" />
        <rect x="228" y="180" width="116" height="10" rx="3" fill="#2eb88a" opacity="0.5" />
        <rect x="228" y="198" width="80" height="8" rx="2" fill="#d4dde2" opacity="0.25" />
        <rect x="228" y="212" width="100" height="8" rx="2" fill="#d4dde2" opacity="0.15" />
        <rect x="136" y="242" width="208" height="8" rx="2" fill="#d4dde2" opacity="0.2" />
        <rect x="136" y="256" width="160" height="8" rx="2" fill="#d4dde2" opacity="0.12" />
        <rect x="136" y="276" width="72" height="14" rx="4" fill="#d4a745" opacity="0.9" />

        {/* Laptop base / keyboard bar */}
        <rect x="100" y="300" width="280" height="12" rx="6" fill="#163448" stroke="#1a3a4e" strokeWidth="1" />

        {/* Growth chart behind laptop */}
        <polyline points="80,340 140,300 200,310 260,260 320,240 380,200 420,210" fill="none" stroke="#0d7c5f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.35" />
        <polyline points="80,340 140,300 200,310 260,260 320,240 380,200 420,210" fill="none" stroke="#2eb88a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        <circle cx="380" cy="200" r="5" fill="#2eb88a" opacity="0.8" />
        <circle cx="380" cy="200" r="9" fill="#2eb88a" opacity="0.2" />

        {/* Search / magnifying glass */}
        <g transform="translate(56, 80)">
          <circle cx="0" cy="0" r="28" fill="#163448" stroke="#1a3a4e" strokeWidth="1.5" />
          <circle cx="-4" cy="-4" r="12" fill="none" stroke="#d4a745" strokeWidth="2.5" />
          <line x1="4" y1="4" x2="14" y2="14" stroke="#d4a745" strokeWidth="2.5" strokeLinecap="round" />
          {/* Search result lines */}
          <rect x="40" y="-16" width="72" height="6" rx="3" fill="#2eb88a" opacity="0.5" />
          <rect x="40" y="-4" width="56" height="5" rx="2.5" fill="#d4dde2" opacity="0.25" />
          <rect x="40" y="6" width="64" height="5" rx="2.5" fill="#d4dde2" opacity="0.15" />
        </g>

        {/* Ad / social burst icon */}
        <g transform="translate(380, 100)">
          <circle cx="0" cy="0" r="32" fill="#163448" stroke="#1a3a4e" strokeWidth="1.5" />
          <polygon points="-10,-14 0,-4 10,-14 4,-4 14,6 0,2 -14,6 -4,-4" fill="#d4a745" opacity="0.9" />
          <circle cx="0" cy="14" r="4" fill="#2eb88a" opacity="0.8" />
          {/* Connection lines to burst */}
          <line x1="-32" y1="0" x2="-80" y2="20" stroke="#d4a745" strokeWidth="1" opacity="0.25" strokeDasharray="4 3" />
          <line x1="32" y1="0" x2="60" y2="40" stroke="#d4a745" strokeWidth="1" opacity="0.25" strokeDasharray="4 3" />
        </g>

        {/* Lead funnel / user icons */}
        <g transform="translate(80, 380)">
          <circle cx="0" cy="0" r="20" fill="#163448" stroke="#1a3a4e" strokeWidth="1.5" />
          <circle cx="0" cy="-6" r="6" fill="#f1f5f3" opacity="0.8" />
          <path d="M-10,10 Q0,2 10,10" fill="#f1f5f3" opacity="0.6" />
          {/* Arrow pointing to form */}
          <line x1="20" y1="0" x2="48" y2="-20" stroke="#2eb88a" strokeWidth="1.5" opacity="0.5" strokeDasharray="3 3" />
          <polygon points="48,-20 44,-14 52,-16" fill="#2eb88a" opacity="0.6" />
        </g>

        {/* Enquiry form card */}
        <g transform="translate(220, 370)" opacity="0.3">
          <rect x="-60" y="-30" width="120" height="60" rx="6" fill="#f1f5f3" opacity="0.25" stroke="#2eb88a" strokeWidth="1" />
          <rect x="-48" y="-18" width="36" height="6" rx="3" fill="#0d7c5f" opacity="0.8" />
          <rect x="-48" y="-6" width="72" height="5" rx="2" fill="#d4dde2" opacity="0.25" />
          <rect x="-48" y="4" width="56" height="5" rx="2" fill="#d4dde2" opacity="0.18" />
          <rect x="-48" y="14" width="32" height="10" rx="3" fill="#d4a745" opacity="0.8" />
        </g>

        {/* Growth bars on right */}
        <g transform="translate(400, 360)">
          <rect x="-8" y="-60" width="14" height="60" rx="4" fill="#0d7c5f" opacity="0.25" />
          <rect x="-8" y="-60" width="14" height="42" rx="4" fill="url(#barGrad)" opacity="0.85" />
          <rect x="16" y="-40" width="14" height="40" rx="4" fill="#0d7c5f" opacity="0.25" />
          <rect x="16" y="-40" width="14" height="28" rx="4" fill="url(#barGrad)" opacity="0.65" />
          <rect x="40" y="-20" width="14" height="20" rx="4" fill="#0d7c5f" opacity="0.25" />
          <rect x="40" y="-20" width="14" height="14" rx="4" fill="url(#barGrad)" opacity="0.45" />
        </g>

        {/* Floating connector nodes */}
        <circle cx="100" cy="200" r="4" fill="#d4a745" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="340" cy="160" r="3" fill="#2eb88a" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="380" r="3.5" fill="#d4a745" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.85;0.5" dur="5s" repeatCount="indefinite" />
        </circle>

        {/* Connection wires between elements */}
        <path d="M100,200 Q140,180 160,260" fill="none" stroke="#2eb88a" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />
        <path d="M340,160 Q320,180 280,200" fill="none" stroke="#d4a745" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />
        <path d="M160,380 Q200,350 220,340" fill="none" stroke="#2eb88a" strokeWidth="1" opacity="0.2" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}
