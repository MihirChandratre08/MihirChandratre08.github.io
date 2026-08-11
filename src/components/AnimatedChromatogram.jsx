import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/** Peak apex X positions — keep labels/arrows locked to these. */
const TARGET_X = 136
const NON_TARGET_A_X = 266
const NON_TARGET_B_X = 310
const NON_TARGET_LABEL_X = (NON_TARGET_A_X + NON_TARGET_B_X) / 2

/** Classic HPLC chromatogram: Target + Non-target peaks, AU vs Time. */
export default function AnimatedChromatogram({
  className = '',
  title = 'HPLC chromatogram',
  showLabels = true,
  showTitle = false,
  animate = true,
}) {
  const reduceMotion = useReducedMotion()
  const pathRef = useRef(null)
  const [length, setLength] = useState(0)
  const [drawn, setDrawn] = useState(!animate || !!reduceMotion)

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
      viewBox="0 0 440 210"
      className={`h-auto w-full max-w-full ${className}`}
      role="img"
      aria-label={`${title}: absorbance units versus time with target and non-target peaks`}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{title}</title>

      {showTitle ? (
        <text
          x="220"
          y="18"
          textAnchor="middle"
          fill="#0f172a"
          fontSize="13"
          fontFamily="IBM Plex Sans, sans-serif"
          fontWeight="600"
        >
          {title}
        </text>
      ) : null}

      {/* Axes */}
      <line x1="36" y1="28" x2="36" y2="168" stroke="#0f172a" strokeWidth="1.4" />
      <line x1="36" y1="168" x2="410" y2="168" stroke="#0f172a" strokeWidth="1.4" />

      {/* Y ticks + AU */}
      {[48, 72, 96, 120, 144].map((y) => (
        <line key={y} x1="36" y1={y} x2="42" y2={y} stroke="#0f172a" strokeWidth="1.2" />
      ))}
      <text
        x="18"
        y="100"
        fill="#0f172a"
        fontSize="12"
        fontFamily="IBM Plex Sans, sans-serif"
        transform="rotate(-90 18 100)"
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
        y="196"
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
          {/* Target — centered on peak apex x=136, y=92 */}
          <text
            x={TARGET_X}
            y="58"
            textAnchor="middle"
            fill="#0f172a"
            fontSize="12"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="600"
          >
            Target
          </text>
          <line
            x1={TARGET_X}
            y1="62"
            x2={TARGET_X}
            y2="84"
            stroke="#0f172a"
            strokeWidth="1.2"
          />
          <polygon
            points={`${TARGET_X},90 ${TARGET_X - 3.5},83 ${TARGET_X + 3.5},83`}
            fill="#0f172a"
          />

          {/* Non-target — label centered between peaks; arrows on each apex */}
          <text
            x={NON_TARGET_LABEL_X}
            y="22"
            textAnchor="middle"
            fill="#0f172a"
            fontSize="12"
            fontFamily="IBM Plex Sans, sans-serif"
            fontWeight="600"
          >
            Non-target
          </text>
          <line
            x1={NON_TARGET_A_X}
            y1="26"
            x2={NON_TARGET_A_X}
            y2="70"
            stroke="#0f172a"
            strokeWidth="1.2"
          />
          <polygon
            points={`${NON_TARGET_A_X},76 ${NON_TARGET_A_X - 3.5},69 ${NON_TARGET_A_X + 3.5},69`}
            fill="#0f172a"
          />
          <line
            x1={NON_TARGET_B_X}
            y1="26"
            x2={NON_TARGET_B_X}
            y2="40"
            stroke="#0f172a"
            strokeWidth="1.2"
          />
          <polygon
            points={`${NON_TARGET_B_X},46 ${NON_TARGET_B_X - 3.5},39 ${NON_TARGET_B_X + 3.5},39`}
            fill="#0f172a"
          />
        </g>
      ) : null}
    </svg>
  )
}
