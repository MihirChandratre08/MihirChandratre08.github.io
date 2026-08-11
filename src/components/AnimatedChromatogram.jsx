import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/** HPLC chromatogram line only — headline lives in the parent card. */
export default function AnimatedChromatogram({
  className = '',
  title = 'HPLC chromatogram',
  animate = true,
}) {
  const reduceMotion = useReducedMotion()
  const pathRef = useRef(null)
  const [length, setLength] = useState(0)
  const [drawn, setDrawn] = useState(!animate || !!reduceMotion)

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
      viewBox="0 0 440 190"
      className={`h-auto w-full max-w-full ${className}`}
      role="img"
      aria-label={title}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{title}</title>

      {/* Axes — no tick labels */}
      <line x1="36" y1="24" x2="36" y2="168" stroke="#94a3b8" strokeWidth="1.2" />
      <line x1="36" y1="168" x2="410" y2="168" stroke="#94a3b8" strokeWidth="1.2" />

      {[48, 72, 96, 120, 144].map((y) => (
        <line key={y} x1="36" y1={y} x2="40" y2={y} stroke="#cbd5e1" strokeWidth="1" />
      ))}
      {[100, 164, 228, 292, 356, 410].map((x) => (
        <line key={x} x1={x} y1="168" x2={x} y2="172" stroke="#cbd5e1" strokeWidth="1" />
      ))}

      <path
        ref={pathRef}
        d={linePath}
        fill="none"
        stroke="#0b9b7a"
        strokeWidth="2.2"
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
    </svg>
  )
}
