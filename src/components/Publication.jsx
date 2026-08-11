import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { publication } from '../data/portfolio'

export default function Publication() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id={publication.id}
      className="section-pad scroll-mt-[var(--spacing-nav)] border-t border-[var(--color-border)] bg-[var(--color-graphite)]"
      aria-labelledby="publication-heading"
    >
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Publication
          </p>
          <h2
            id="publication-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl"
          >
            Published Research
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="mt-10 border border-[var(--color-border)] bg-[var(--color-bg)] p-6 sm:p-8"
        >
          <p className="text-sm text-[var(--color-accent)]">
            {publication.venue} — {publication.year}
          </p>
          <h3 className="font-display mt-3 text-2xl font-semibold leading-snug text-[var(--color-text)]">
            {publication.title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
            {publication.authors}
          </p>
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            <div>
              <dt className="text-[var(--color-muted)]">Impact Factor</dt>
              <dd className="mt-1 font-medium text-[var(--color-text)]">{publication.impactFactor}</dd>
            </div>
            <div>
              <dt className="text-[var(--color-muted)]">Article</dt>
              <dd className="mt-1 font-medium text-[var(--color-text)]">{publication.articleId}</dd>
            </div>
            <div>
              <dt className="text-[var(--color-muted)]">DOI</dt>
              <dd className="mt-1 font-medium text-[var(--color-text)]">{publication.doi}</dd>
            </div>
          </dl>
          <a
            href={publication.doiUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            View Publication
            <ExternalLink className="size-4" aria-hidden />
          </a>
        </motion.article>
      </div>
    </section>
  )
}
