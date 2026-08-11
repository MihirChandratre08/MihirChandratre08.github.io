import { motion, useReducedMotion } from 'framer-motion'
import { achievements } from '../data/portfolio'

export default function Achievements() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id={achievements.id}
      className="section-pad scroll-mt-[var(--spacing-nav)] border-t border-[var(--color-border)] theme-band-soft"
      aria-labelledby="achievements-heading"
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
            Milestones
          </p>
          <h2
            id="achievements-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl"
          >
            Achievements
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {achievements.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : index * 0.06,
              }}
              className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
                {item.title}
              </p>
              <h3 className="font-display mt-4 text-xl font-semibold leading-snug text-[var(--color-text)]">
                {item.detail}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
