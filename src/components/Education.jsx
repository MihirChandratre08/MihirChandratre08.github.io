import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { earlierEducation, education } from '../data/portfolio'
import { stagger } from '../lib/motion'

export default function Education() {
  const reduceMotion = useReducedMotion()
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <section
      id="education"
      className="section-pad scroll-mt-[var(--spacing-nav)] border-t border-[var(--color-border)]"
      aria-labelledby="education-heading"
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
            Education
          </p>
          <h2
            id="education-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl"
          >
            Academic Journey
          </h2>
        </motion.div>

        <ol className="mt-10 space-y-5">
          {education.map((item, index) => (
            <motion.li
              key={item.degree}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: stagger(reduceMotion, index),
              }}
              className="grid gap-3 border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:grid-cols-[140px_1fr_auto] sm:items-start sm:gap-6 sm:p-6"
            >
              <p className="text-sm font-semibold text-[var(--color-accent)]">{item.period}</p>
              <div>
                <h3 className="font-display text-lg font-semibold text-[var(--color-text)] sm:text-xl">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted)] sm:text-base">{item.institute}</p>
              </div>
              <p className="text-sm font-medium text-[var(--color-text)] sm:text-right">
                {item.result}
              </p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-6 border border-[var(--color-border)] bg-[var(--color-surface)]">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-bg)]"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            Earlier Education (SSC / HSC)
            <ChevronDown
              className={`size-4 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              aria-hidden
            />
          </button>
          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                id={panelId}
                key="earlier-edu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.3, ease: 'easeOut' }}
                className="overflow-hidden border-t border-[var(--color-border)]"
              >
                <ul className="space-y-4 px-5 py-4">
                  {earlierEducation.map((item) => (
                    <li key={item.degree} className="grid gap-1 sm:grid-cols-[120px_1fr_auto]">
                      <p className="text-sm text-[var(--color-accent)]">{item.period}</p>
                      <div>
                        <p className="font-medium text-[var(--color-text)]">{item.degree}</p>
                        <p className="text-sm text-[var(--color-muted)]">{item.institute}</p>
                      </div>
                      <p className="text-sm text-[var(--color-muted)]">{item.result}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
