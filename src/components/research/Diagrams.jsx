export function BsaNanoparticleDiagram({ className = '' }) {
  return (
    <svg
      viewBox="0 0 520 280"
      className={className}
      role="img"
      aria-label="Diagram of niclosamide and ribociclib loading into a BSA nanoparticle decorated with PD-L1 peptide"
    >
      <defs>
        <radialGradient id="bsaCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ccfbf1" />
          <stop offset="100%" stopColor="#0f766e" stopOpacity="0.35" />
        </radialGradient>
      </defs>

      <text x="40" y="42" fill="#0f172a" fontSize="13" fontFamily="IBM Plex Sans, sans-serif">
        Niclosamide
      </text>
      <path d="M70 52 L70 100 L210 130" fill="none" stroke="#0f766e" strokeWidth="1.6" />
      <polygon points="205,122 218,132 205,138" fill="#0f766e" />

      <text x="400" y="42" fill="#0f172a" fontSize="13" fontFamily="IBM Plex Sans, sans-serif" textAnchor="end">
        Ribociclib
      </text>
      <path d="M450 52 L450 100 L310 130" fill="none" stroke="#0f766e" strokeWidth="1.6" />
      <polygon points="315,122 302,132 315,138" fill="#0f766e" />

      <circle cx="260" cy="150" r="58" fill="url(#bsaCore)" stroke="#0f766e" strokeWidth="2" />
      <circle cx="260" cy="150" r="34" fill="#ffffff" fillOpacity="0.55" stroke="#0f172a" strokeWidth="1" />
      <text
        x="260"
        y="146"
        textAnchor="middle"
        fill="#0f172a"
        fontSize="14"
        fontFamily="Source Serif 4, Georgia, serif"
        fontWeight="600"
      >
        BSA
      </text>
      <text
        x="260"
        y="166"
        textAnchor="middle"
        fill="#475569"
        fontSize="12"
        fontFamily="IBM Plex Sans, sans-serif"
      >
        NP
      </text>

      <circle cx="318" cy="118" r="7" fill="#0f766e" />
      <circle cx="330" cy="156" r="6" fill="#0f766e" />
      <circle cx="312" cy="188" r="7" fill="#0f766e" />
      <path d="M324 118 L380 96" stroke="#0f172a" strokeWidth="1.2" />
      <text x="386" y="100" fill="#0f172a" fontSize="12" fontFamily="IBM Plex Sans, sans-serif">
        PD-L1 peptide
      </text>

      <text
        x="260"
        y="250"
        textAnchor="middle"
        fill="#475569"
        fontSize="12"
        fontFamily="IBM Plex Sans, sans-serif"
      >
        Dual-drug loaded · peptide-decorated targeting
      </text>
    </svg>
  )
}

export function ChromatogramDiagram({ className = '' }) {
  return (
    <svg
      viewBox="0 0 420 180"
      className={className}
      role="img"
      aria-label="Simplified chromatogram showing analyte peaks over time"
    >
      <text x="8" y="18" fill="#475569" fontSize="11" fontFamily="IBM Plex Sans, sans-serif">
        Response
      </text>
      <line x1="28" y1="28" x2="28" y2="140" stroke="#94a3b8" strokeWidth="1" />
      <line x1="28" y1="140" x2="400" y2="140" stroke="#94a3b8" strokeWidth="1" />
      <path
        d="M28 132 C55 132 70 128 85 90 C100 52 112 48 125 72 C140 102 150 128 175 130 C205 132 220 70 245 48 C270 26 285 30 300 58 C318 94 330 126 360 130 C380 132 392 132 400 132"
        fill="none"
        stroke="#0f766e"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M28 132 C55 132 70 128 85 90 C100 52 112 48 125 72 C140 102 150 128 175 130 C205 132 220 70 245 48 C270 26 285 30 300 58 C318 94 330 126 360 130 C380 132 392 132 400 132 L400 140 L28 140 Z"
        fill="#0f766e"
        fillOpacity="0.08"
      />
      <text x="360" y="158" fill="#475569" fontSize="11" fontFamily="IBM Plex Sans, sans-serif">
        Time →
      </text>
    </svg>
  )
}

export function FacewashFlowDiagram({ className = '' }) {
  const steps = ['Formulation', 'Evaluation', 'Characterization', 'Product Performance']
  return (
    <svg
      viewBox="0 0 420 120"
      className={className}
      role="img"
      aria-label="Process flow from formulation to product performance"
    >
      {steps.map((step, index) => {
        const x = 20 + index * 100
        return (
          <g key={step}>
            <rect
              x={x}
              y="28"
              width="88"
              height="48"
              rx="4"
              fill="#ffffff"
              stroke="#0f766e"
              strokeWidth="1.4"
            />
            <text
              x={x + 44}
              y="56"
              textAnchor="middle"
              fill="#0f172a"
              fontSize="10"
              fontFamily="IBM Plex Sans, sans-serif"
            >
              {step.split(' ')[0]}
            </text>
            {step.includes(' ') ? (
              <text
                x={x + 44}
                y="70"
                textAnchor="middle"
                fill="#475569"
                fontSize="10"
                fontFamily="IBM Plex Sans, sans-serif"
              >
                {step.split(' ').slice(1).join(' ')}
              </text>
            ) : null}
            {index < steps.length - 1 ? (
              <path
                d={`M${x + 90} 52 L${x + 98} 52`}
                stroke="#0f172a"
                strokeWidth="1.4"
                markerEnd="url(#arrow)"
              />
            ) : null}
          </g>
        )
      })}
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#0f172a" />
        </marker>
      </defs>
    </svg>
  )
}
