import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { projects } from '../data/portfolio'
import ResearchDetailModal from './ResearchDetailModal'
import {
  BsaNanoparticleDiagram,
  ChromatogramDiagram,
  FacewashFlowDiagram,
} from './research/Diagrams'

export default function Research() {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const [rpHplc, polyherbal] = projects.secondary

  return (
    <section
      id={projects.id}
      className="section-pad scroll-mt-[var(--spacing-nav)] border-t border-[var(--color-border)]"
      aria-labelledby="research-heading"
    >
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Research
          </p>
          <h2
            id="research-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl"
          >
            Featured Research
          </h2>
          <p className="mt-3 text-[var(--color-muted)]">
            Primary M.S. research with supporting analytical and formulation projects.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
          className="mt-10 border border-[var(--color-border)] bg-[var(--color-surface)] transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border-b border-[var(--color-border)] p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
                M.S. Research Project
              </p>
              <h3 className="font-display mt-3 text-2xl font-semibold leading-snug text-[var(--color-text)] sm:text-[1.7rem]">
                {projects.featured.shortTitle}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                {projects.featured.title}
              </p>
              <p className="mt-4 text-[var(--color-muted)]">{projects.featured.summary}</p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Research areas">
                {projects.featured.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1 text-xs text-[var(--color-muted)]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group mt-8 inline-flex items-center gap-2 bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                {projects.featured.cta}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </button>
            </div>

            <div className="flex items-center bg-[color-mix(in_srgb,var(--color-accent-soft)_45%,var(--color-surface))] p-4 sm:p-6">
              <BsaNanoparticleDiagram className="w-full" />
            </div>
          </div>
        </motion.article>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.article
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reduceMotion ? 0 : 0.4 }}
            className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] sm:p-7"
          >
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Analytical Project
            </p>
            <h3 className="font-display mt-3 text-xl font-semibold text-[var(--color-text)] sm:text-2xl">
              {rpHplc.title}
            </h3>
            <p className="mt-3 text-[var(--color-muted)]">{rpHplc.description}</p>
            <div className="mt-5 border border-[var(--color-border)] bg-[var(--color-bg)] p-3">
              <ChromatogramDiagram className="w-full" />
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {rpHplc.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-muted)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : 0.05 }}
            className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] sm:p-7"
          >
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Formulation Project
            </p>
            <h3 className="font-display mt-3 text-xl font-semibold text-[var(--color-text)]">
              {polyherbal.title}
            </h3>
            <p className="mt-3 text-[var(--color-muted)]">{polyherbal.description}</p>
            <div className="mt-5 overflow-x-auto border border-[var(--color-border)] bg-[var(--color-bg)] p-2">
              <FacewashFlowDiagram className="min-w-[360px] w-full" />
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {polyherbal.tags.map((tag) => (
                <li
                  key={tag}
                  className="border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-muted)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>

      <ResearchDetailModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
