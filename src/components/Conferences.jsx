import { motion, useReducedMotion } from 'framer-motion'
import { conferences } from '../data/portfolio'
import { stagger } from '../lib/motion'

export default function Conferences() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      className="section-pad border-t border-[var(--color-border)]"
      aria-labelledby="conferences-heading"
    >
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Activities
          </p>
          <h2
            id="conferences-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl"
          >
            Beyond the Laboratory
          </h2>
        </motion.div>

        <ul className="mt-10 space-y-4">
          {conferences.map((item, index) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: reduceMotion ? 0 : -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: stagger(reduceMotion, index),
              }}
              className="border-l-2 border-[var(--color-accent)] bg-[var(--color-surface)] px-5 py-5"
            >
              <h3 className="font-display text-lg font-semibold text-[var(--color-text)] sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">{item.detail}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
