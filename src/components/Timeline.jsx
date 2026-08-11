import { motion, useReducedMotion } from 'framer-motion'
import { timeline } from '../data/portfolio'
import { stagger } from '../lib/motion'

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
        <div className="relative mt-10 lg:hidden">
          <motion.div
            className="absolute bottom-0 left-0 top-0 w-px origin-top bg-[var(--color-border)]"
            initial={{ scaleY: reduceMotion ? 1 : 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, ease: 'easeOut' }}
            aria-hidden
          />
          <ol className="relative space-y-0">
            {timeline.map((item, index) => (
              <motion.li
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, x: reduceMotion ? 0 : -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  delay: stagger(reduceMotion, index, 0.05),
                }}
                className="relative pb-8 pl-6 last:pb-0"
              >
                <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-[var(--color-accent)]" />
                <p className="text-sm font-semibold text-[var(--color-accent)]">{item.year}</p>
                <h3 className="mt-1 font-medium text-[var(--color-text)]">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{item.detail}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Desktop: horizontal */}
        <div className="mt-12 hidden lg:block">
          <div className="relative">
            <motion.div
              className="absolute left-0 right-0 top-[34px] h-px origin-left bg-[var(--color-border)]"
              initial={{ scaleX: reduceMotion ? 1 : 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: reduceMotion ? 0 : 0.85, ease: 'easeOut' }}
              aria-hidden
            />
            <ol className="grid grid-cols-6 gap-3">
              {timeline.map((item, index) => (
                <motion.li
                  key={`${item.year}-${item.title}-desk`}
                  initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.35,
                    delay: stagger(reduceMotion, index, 0.06),
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
