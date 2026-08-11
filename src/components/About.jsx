import { motion, useReducedMotion } from 'framer-motion'
import { about } from '../data/portfolio'

export default function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id={about.id}
      className="section-pad scroll-mt-[var(--spacing-nav)] theme-band-soft"
      aria-labelledby="about-heading"
    >
      <div className="section-shell">
        <div className="theme-card grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:p-10">
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: reduceMotion ? 0 : 0.45 }}
          >
            <p className="eyebrow">About</p>
            <h2
              id="about-heading"
              className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl"
            >
              {about.heading}
            </h2>
            <div className="mt-5 h-1 w-16 bg-gradient-to-r from-[var(--color-accent-deep)] to-[var(--color-accent)]" />
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
                className="max-w-2xl text-base leading-relaxed text-[var(--color-text)]/85"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
