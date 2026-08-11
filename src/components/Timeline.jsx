import { motion, useReducedMotion } from 'framer-motion'
import { timeline } from '../data/portfolio'

export default function Timeline() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      className="section-pad border-t border-[var(--color-border)] bg-[var(--color-graphite)]"
      aria-labelledby="timeline-heading"
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
            Journey
          </p>
          <h2
            id="timeline-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl"
          >
            Research Timeline
          </h2>
          <p className="mt-3 text-[var(--color-muted)]">
            From pharmacy foundations to pharmaceutical analysis research at NIPER Kolkata.
          </p>
        </motion.div>

        {/* Mobile / tablet: vertical */}
        <ol className="relative mt-10 space-y-0 border-l border-[var(--color-border)] lg:hidden">
          {timeline.map((item, index) => (
            <motion.li
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, x: reduceMotion ? 0 : -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : index * 0.04 }}
              className="relative pb-8 pl-6 last:pb-0"
            >
              <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-[var(--color-accent)]" />
              <p className="text-sm font-semibold text-[var(--color-accent)]">{item.year}</p>
              <h3 className="mt-1 font-medium text-[var(--color-text)]">{item.title}</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{item.detail}</p>
            </motion.li>
          ))}
        </ol>

        {/* Desktop: horizontal */}
        <div className="mt-12 hidden lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[34px] h-px bg-[var(--color-border)]" />
            <ol className="grid grid-cols-6 gap-3">
              {timeline.map((item, index) => (
                <motion.li
                  key={`${item.year}-${item.title}-desk`}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.35,
                    delay: reduceMotion ? 0 : index * 0.05,
                  }}
                  className="relative pt-2"
                >
                  <span className="absolute left-0 top-[30px] size-2.5 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-graphite)]" />
                  <p className="text-sm font-semibold text-[var(--color-accent)]">{item.year}</p>
                  <h3 className="mt-8 text-sm font-medium leading-snug text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)]">
                    {item.detail}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
