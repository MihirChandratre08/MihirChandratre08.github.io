import { motion, useReducedMotion } from 'framer-motion'
import { stats } from '../data/portfolio'

export default function Stats() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      aria-label="Key credentials"
      className="border-b border-[var(--color-border)] bg-[var(--color-graphite)]"
    >
      <div className="section-shell grid grid-cols-2 gap-px bg-[var(--color-border)] md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : index * 0.05 }}
            className="bg-[var(--color-surface)] px-4 py-7 sm:px-6 sm:py-8"
          >
            <p className="font-display text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
