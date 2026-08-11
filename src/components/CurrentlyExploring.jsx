import { motion, useReducedMotion } from 'framer-motion'
import { currentlyExploring } from '../data/portfolio'
import { stagger } from '../lib/motion'

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
          className="mx-auto max-w-2xl text-center"
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

        <ol className="relative mx-auto mt-12 max-w-lg">
          <motion.div
            className="pointer-events-none absolute bottom-4 left-1/2 top-4 w-px origin-top -translate-x-1/2 bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent-soft)] to-transparent"
            initial={{ scaleY: reduceMotion ? 1 : 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: 'easeOut' }}
            aria-hidden
          />

          {currentlyExploring.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                delay: stagger(reduceMotion, index, 0.07),
              }}
              className="relative flex flex-col items-center pb-8 last:pb-0"
            >
              <div className="relative z-[1] w-full border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 text-center shadow-[0_1px_0_rgba(15,23,42,0.04)] transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[var(--color-accent)]">
                <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="font-display text-base font-semibold text-[var(--color-text)] sm:text-lg">
                  {item}
                </p>
              </div>

              {index < currentlyExploring.length - 1 ? (
                <motion.span
                  className="relative z-[1] mt-3 flex size-7 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-bg)] text-[var(--color-accent)]"
                  aria-hidden
                  initial={false}
                  whileInView={
                    reduceMotion
                      ? undefined
                      : {
                          boxShadow: [
                            '0 0 0 0 rgba(52,211,153,0)',
                            '0 0 0 6px rgba(52,211,153,0.25)',
                            '0 0 0 0 rgba(52,211,153,0)',
                          ],
                        }
                  }
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.9, delay: stagger(reduceMotion, index, 0.07) + 0.2 }}
                >
                  <svg viewBox="0 0 16 16" className="size-3.5" fill="none">
                    <path
                      d="M8 3v8M4.5 8.5 8 12l3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.span>
              ) : null}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
