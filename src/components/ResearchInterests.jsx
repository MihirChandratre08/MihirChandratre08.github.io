import { motion, useReducedMotion } from 'framer-motion'
import { researchInterests } from '../data/portfolio'

export default function ResearchInterests() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      className="section-pad border-t border-[var(--color-border)] bg-[var(--color-surface)]"
      aria-labelledby="interests-heading"
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
            Focus
          </p>
          <h2
            id="interests-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl"
          >
            Research Interests
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {researchInterests.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : index * 0.05,
              }}
              className="border border-[var(--color-border)] bg-[var(--color-bg)] p-5"
            >
              <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-l border-[var(--color-accent)] pl-3 text-sm text-[var(--color-muted)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
