import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, ExternalLink } from 'lucide-react'
import { hero, profile } from '../data/portfolio'
import AnimatedChromatogram from './AnimatedChromatogram'

function ScientificVisual() {
  return (
    <div className="relative w-full min-w-0 overflow-hidden border border-white/20 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(17,24,39,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,24,39,0.04) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,155,122,0.12),transparent_55%)]" />

      <div className="relative flex flex-col gap-4 p-4 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
            HPLC chromatogram
          </p>
          <div className="shrink-0 border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-[11px] text-[var(--color-muted)]">
            Analytical Research
          </div>
        </div>

        <AnimatedChromatogram title="HPLC chromatogram" />

        <div className="flex flex-wrap items-center gap-3 border-t border-[var(--color-border)] pt-4">
          <svg viewBox="0 0 64 40" className="h-8 w-14 shrink-0 text-[var(--color-text)]" role="presentation">
            <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="36" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="28" cy="12" r="2" fill="var(--color-accent)" />
            <circle cx="44" cy="28" r="2" fill="var(--color-accent)" />
            <line x1="26" y1="14" x2="20" y2="20" stroke="currentColor" strokeWidth="1.2" />
            <line x1="30" y1="14" x2="36" y2="20" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <p className="min-w-0 text-sm text-[var(--color-muted)]">
            Molecular structure motif · method development focus
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.55 } },
  }

  return (
    <section
      id="top"
      className="relative overflow-x-clip border-b border-white/10"
      aria-labelledby="hero-heading"
    >
      <div className="section-shell grid grid-cols-1 items-center gap-8 py-[clamp(2.5rem,6vw,5rem)] md:gap-10 lg:grid-cols-2 lg:gap-12">
        <motion.div className="min-w-0" initial="hidden" animate="show" variants={fadeUp}>
          <div className="flex items-center gap-3">
            <picture>
              <source srcSet={profile.photo.webp} type="image/webp" />
              <img
                src={profile.photo.png}
                alt={profile.photo.alt}
                width={64}
                height={64}
                className="size-14 shrink-0 rounded-full border-2 border-white/30 object-cover object-top sm:size-16"
              />
            </picture>
            <p className="text-sm font-medium text-emerald-300">{profile.identity}</p>
          </div>

          <h1
            id="hero-heading"
            className="font-display mt-5 text-[clamp(2rem,6vw,4rem)] font-semibold leading-[1.08] tracking-tight text-white break-words"
          >
            {hero.heading}
          </h1>

          <p className="mt-3 text-base text-slate-200 sm:text-lg md:text-xl">{hero.subtitle}</p>
          <p className="mt-1 text-sm font-medium text-emerald-300 sm:text-base">{hero.affiliation}</p>

          <p className="mt-5 max-w-xl leading-relaxed text-slate-300">{hero.statement}</p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
            {hero.tags.map((tag) => (
              <li
                key={tag}
                className="border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-slate-100 backdrop-blur-sm sm:text-sm"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={hero.primaryCta.href}
              className="inline-flex w-full items-center justify-center gap-2 bg-gradient-to-r from-[var(--color-accent)] to-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-900/30 transition-opacity hover:opacity-90 sm:w-auto"
            >
              {hero.primaryCta.label}
              <ArrowRight className="size-4 shrink-0" aria-hidden />
            </a>
            <a
              href={hero.secondaryCta.href}
              download={hero.secondaryCta.download || undefined}
              className="inline-flex w-full items-center justify-center gap-2 border border-white/25 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:w-auto"
            >
              {hero.secondaryCta.label}
              <ArrowDown className="size-4 shrink-0" aria-hidden />
            </a>
            <a
              href={hero.tertiaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 px-2 py-3 text-sm font-medium text-slate-200 transition-colors hover:text-emerald-300 sm:w-auto"
            >
              LinkedIn
              <ExternalLink className="size-4 shrink-0" aria-hidden />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="min-w-0 w-full"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.12 }}
        >
          <ScientificVisual />
        </motion.div>
      </div>
    </section>
  )
}
