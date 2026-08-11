import { motion, useReducedMotion } from 'framer-motion'
import { FlaskConical, ScanSearch, Dna } from 'lucide-react'
import { analyticalSkills, computationalTools, regulatory } from '../data/portfolio'
import { stagger } from '../lib/motion'

const cardIcons = [FlaskConical, ScanSearch, Dna]

export default function Expertise() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id={analyticalSkills.id}
      className="section-pad scroll-mt-[var(--spacing-nav)] border-t border-[var(--color-border)] theme-band-soft"
      aria-labelledby="expertise-heading"
    >
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="max-w-2xl"
        >
          <p className="eyebrow">Expertise</p>
          <h2
            id="expertise-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl"
          >
            {analyticalSkills.heading}
          </h2>
          <p className="mt-3 text-[var(--color-muted)]">{analyticalSkills.subheading}</p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {analyticalSkills.cards.map((card, index) => {
            const Icon = cardIcons[index] || FlaskConical
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: stagger(reduceMotion, index, 0.06),
                }}
                className="theme-card p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
              >
                <Icon className="size-5 text-[var(--color-accent)]" aria-hidden />
                <h3 className="font-display mt-4 text-xl font-semibold text-[var(--color-text)]">
                  {card.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{card.subtitle}</p>
                <ul className="mt-5 space-y-2">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-[var(--color-accent-soft)] pl-3 text-sm text-[var(--color-muted)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="mt-16 border-t border-[var(--color-border)] pt-12"
        >
          <h3 className="font-display text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
            {regulatory.heading}
          </h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {regulatory.guidelines.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.3,
                  delay: stagger(reduceMotion, index, 0.04),
                }}
                className="border border-[var(--color-text)] bg-[var(--color-accent)] px-3 py-1.5 text-sm font-medium text-[var(--color-deep)]"
              >
                {item}
              </motion.span>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {regulatory.practices.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.3,
                  delay: stagger(reduceMotion, index + regulatory.guidelines.length, 0.04),
                }}
                className="border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-sm text-[var(--color-muted)]"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="mt-16"
        >
          <h3 className="font-display text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
            {computationalTools.heading}
          </h3>
          <p className="mt-2 max-w-2xl text-sm text-[var(--color-muted)]">
            Research software grouped by workflow — visually distinct from instrumental expertise.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {computationalTools.groups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, x: reduceMotion ? 0 : -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                  delay: stagger(reduceMotion, groupIndex, 0.08),
                }}
                className="relative border-l border-transparent pl-4"
              >
                <motion.span
                  className="absolute bottom-0 left-0 top-0 w-px origin-top bg-[var(--color-accent)]"
                  initial={{ scaleY: reduceMotion ? 1 : 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: stagger(reduceMotion, groupIndex, 0.08),
                  }}
                  aria-hidden
                />
                <h4 className="text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-text)]">
                  {group.title}
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.tools.map((tool, toolIndex) => (
                    <motion.li
                      key={tool}
                      initial={{ opacity: 0, y: reduceMotion ? 0 : 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.3,
                        delay: stagger(reduceMotion, groupIndex * 4 + toolIndex, 0.03),
                      }}
                      className="bg-[var(--color-accent-soft)] px-2.5 py-1 text-sm text-[var(--color-text)]"
                    >
                      {tool}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
