import { motion, useReducedMotion } from 'framer-motion'
import { about } from '../data/portfolio'

export default function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id={about.id}
      className="section-pad scroll-mt-[var(--spacing-nav)]"
      aria-labelledby="about-heading"
    >
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-accent)]">
            About
          </p>
          <h2
            id="about-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl"
          >
            {about.heading}
          </h2>
        </motion.div>

        <div className="space-y-5">
          {about.paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph.slice(0, 24)}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : index * 0.06,
              }}
              className="max-w-2xl text-[var(--color-muted)] leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
