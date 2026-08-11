import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { stats } from '../data/portfolio'
import { stagger } from '../lib/motion'

function parseNumeric(value) {
  const match = String(value).match(/^(\d+(?:\.\d+)?)/)
  if (!match) return null
  const decimals = match[1].includes('.') ? match[1].split('.')[1].length : 0
  return { target: Number(match[1]), decimals, suffix: String(value).slice(match[0].length) }
}

function CountUpValue({ value, active, reduceMotion }) {
  const [display, setDisplay] = useState(() => {
    const parsed = parseNumeric(value)
    return parsed && !reduceMotion ? '0' : value
  })

  useEffect(() => {
    const parsed = parseNumeric(value)
    if (!parsed || reduceMotion || !active) {
      setDisplay(value)
      return undefined
    }

    const durationMs = 1100
    const start = performance.now()
    let frame = 0

    const tick = (now) => {
      const t = Math.min(1, (now - start) / durationMs)
      const eased = 1 - (1 - t) ** 3
      const current = parsed.target * eased
      setDisplay(`${current.toFixed(parsed.decimals)}${parsed.suffix}`)
      if (t < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, reduceMotion, value])

  return display
}

function StatCell({ stat, index, reduceMotion }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: reduceMotion ? 0 : 0.4, delay: stagger(reduceMotion, index) }}
      className="bg-[var(--color-surface)] px-4 py-7 sm:px-6 sm:py-8"
    >
      <p className="font-display text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
        <CountUpValue value={stat.value} active={inView} reduceMotion={reduceMotion} />
      </p>
      <p className="mt-2 text-sm text-[var(--color-muted)]">{stat.label}</p>
    </motion.div>
  )
}

export default function Stats() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      aria-label="Key credentials"
      className="border-b border-[var(--color-border)] bg-[var(--color-graphite)]"
    >
      <div className="section-shell grid grid-cols-2 gap-px bg-[var(--color-border)] md:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCell key={stat.label} stat={stat} index={index} reduceMotion={reduceMotion} />
        ))}
      </div>
    </section>
  )
}
