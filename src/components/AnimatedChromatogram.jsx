import { useEffect, useId, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/** Classic HPLC chromatogram matching the reference: Target + Non-target peaks, AU vs Time. */
export default function AnimatedChromatogram({
  className = '',
  title = 'HPLC chromatogram',
  showLabels = true,
  animate = true,
}) {
  const reduceMotion = useReducedMotion()
  const pathRef = useRef(null)
  const [length, setLength] = useState(0)
  const [drawn, setDrawn] = useState(!animate || !!reduceMotion)
  const uid = useId().replace(/:/g, '')

  // Sharp chromatographic profile: baseline → Target → noise → two Non-target peaks → hump
  const linePath =
    'M36 168 L70 166 L95 167 L118 165 L128 168 L136 92 L142 168 L152 165 L158 148 L164 160 L170 152 L176 162 L182 158 L190 166 L210 168 L248 167 L258 168 L266 78 L272 168 L288 167 L300 168 L310 48 L316 168 L340 166 L355 152 L370 160 L390 167 L410 168'

  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    const total = path.getTotalLength()
    setLength(total)

    if (!animate || reduceMotion) {
      setDrawn(true)
      return undefined
    }

    setDrawn(false)
    const frame = requestAnimationFrame(() => setDrawn(true))
    return () => cancelAnimationFrame(frame)
  }, [animate, reduceMotion, linePath])

  return (
    <svg
      viewBox="0 0 440 220"
      className={`h-auto w-full max-w-full ${className}`}
      role="img"
      aria-label={`${title}: absorbance units versus time with target and non-target peaks`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{title}</title>

      <text
        x="220"
        y="22"
        textAnchor="middle"
        fill="#0f172a"
        fontSize="13"
        fontFamily="IBM Plex Sans, sans-serif"
        fontWeight="600"
      >
        {title}
      </text>

      {/* Axes */}
      <line x1="36" y1="36" x2="36" y2="168" stroke="#0f172a" strokeWidth="1.4" />
      <line x1="36" y1="168" x2="410" y2="168" stroke="#0f172a" strokeWidth="1.4" />

      {/* Y ticks + AU */}
      {[48, 72, 96, 120, 144].map((y) => (
        <line key={y} x1="36" y1={y} x2="42" y2={y} stroke="#0f172a" strokeWidth="1.2" />
      ))}
      <text
        x="18"
        y="108"
        fill="#0f172a"
        fontSize="12"
        fontFamily="IBM Plex Sans, sans-serif"
        transform="rotate(-90 18 108)"
        textAnchor="middle"
      >
        AU
      </text>

      {/* X ticks + Time */}
      {[100, 164, 228, 292, 356, 410].map((x) => (
        <line key={x} x1={x} y1="168" x2={x} y2="174" stroke="#0f172a" strokeWidth="1.2" />
      ))}
      <text
        x="410"
        y="198"
        textAnchor="end"
        fill="#0f172a"
        fontSize="12"
        fontFamily="IBM Plex Sans, sans-serif"
      >
        Time
      </text>

      <path
        ref={pathRef}
        d={linePath}
        fill="none"
        stroke="#0f766e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={
          length
            ? {
                strokeDasharray: length,
                strokeDashoffset: drawn ? 0 : length,
                transition: reduceMotion
                  ? 'none'
                  : 'stroke-dashoffset 2.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }
            : undefined
        }
      />

      {showLabels ? (
        <g
          opacity={drawn ? 1 : 0}
          style={{
            transition: reduceMotion ? 'none' : 'opacity 0.45s ease 1.6s',
          }}
        >
          {/* Target */}
          <line x1="139" y1="70" x2="139" y2="88" stroke="#0f172a" strokeWidth="1" />
          <polygon points="139,92 136,86 142,86" fill="#0f172a" />
          <text
            x="139"
            y="62"
            textAnchor="middle"
            fill="#0f172a"
            fontSize="12"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="600"
          >
            Target
          </text>

          {/* Non-target */}
          <text
            x="288"
            y="28"
            textAnchor="middle"
            fill="#0f172a"
            fontSize="12"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="600"
          >
            Non-target
          </text>
          <line x1="269" y1="32" x2="269" y2="72" stroke="#0f172a" strokeWidth="1" />
          <polygon points="269,76 266,70 272,70" fill="#0f172a" />
          <line x1="313" y1="32" x2="313" y2="44" stroke="#0f172a" strokeWidth="1" />
          <polygon points="313,48 310,42 316,42" fill="#0f172a" />
        </g>
      ) : null}

      <defs>
        <clipPath id={`chrom-clip-${uid}`}>
          <rect x="36" y="36" width="374" height="132" />
        </clipPath>
      </defs>
    </svg>
  )
}
