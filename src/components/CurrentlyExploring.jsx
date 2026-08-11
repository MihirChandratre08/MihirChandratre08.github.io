import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { currentlyExploring } from '../data/portfolio'

export default function CurrentlyExploring() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      className="section-pad border-t border-[var(--color-border)]"
      aria-labelledby="exploring-heading"
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
            Ongoing
          </p>
          <h2
            id="exploring-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl"
          >
            Currently Exploring
          </h2>
          <p className="mt-3 text-sm text-[var(--color-muted)]">
            Growth areas related to the research agenda — not formal credentials.
          </p>
        </motion.div>

        <ol className="mt-10 max-w-xl space-y-0">
          {currentlyExploring.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
                delay: reduceMotion ? 0 : index * 0.04,
              }}
              className="flex flex-col items-start"
            >
              <div className="border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm font-medium text-[var(--color-text)] sm:text-base">
                {item}
              </div>
              {index < currentlyExploring.length - 1 ? (
                <ArrowDown className="my-2 size-4 text-[var(--color-accent)]" aria-hidden />
              ) : null}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
