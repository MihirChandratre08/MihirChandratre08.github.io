import { motion, useReducedMotion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/portfolio'

export default function Certifications() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      className="section-pad border-t border-[var(--color-border)]"
      aria-labelledby="certifications-heading"
    >
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Learning
          </p>
          <h2
            id="certifications-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl"
          >
            Certifications
          </h2>
        </motion.div>
      </div>

      <div
        className="mt-8 overflow-x-auto pb-2 [scrollbar-width:thin]"
        tabIndex={0}
        aria-label="Certification cards, scroll horizontally"
      >
        <ul className="section-shell flex w-max snap-x snap-mandatory gap-4 pr-4">
          {certifications.map((cert, index) => (
            <motion.li
              key={cert}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                delay: reduceMotion ? 0 : index * 0.05,
              }}
              className="flex w-[260px] shrink-0 snap-start flex-col justify-between border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:w-[300px]"
            >
              <Award className="size-5 text-[var(--color-accent)]" aria-hidden />
              <p className="font-display mt-8 text-lg font-semibold leading-snug text-[var(--color-text)]">
                {cert}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
