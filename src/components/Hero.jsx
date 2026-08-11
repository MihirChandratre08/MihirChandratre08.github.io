import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, ExternalLink } from 'lucide-react'
import { hero, profile } from '../data/portfolio'

function ScientificVisual() {
  return (
    <div
      className="relative min-h-[280px] overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)] sm:min-h-[340px] lg:min-h-[420px]"
      aria-hidden="true"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,118,110,0.12),transparent_55%)]" />

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-accent)]">
              HPLC chromatogram
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">Analytical response vs time</p>
          </div>
          <div className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-[11px] text-[var(--color-muted)]">
            Analytical Research
          </div>
        </div>

        <svg viewBox="0 0 440 200" className="mt-6 w-full text-[var(--color-accent)]" role="presentation">
          <line x1="24" y1="168" x2="420" y2="168" stroke="currentColor" strokeOpacity="0.2" />
          <line x1="24" y1="24" x2="24" y2="168" stroke="currentColor" strokeOpacity="0.2" />
          <text x="8" y="20" className="fill-[var(--color-muted)]" fontSize="10">
            Response
          </text>
          <text x="390" y="186" className="fill-[var(--color-muted)]" fontSize="10">
            Time →
          </text>
          <path
            d="M24 150 C48 150 58 148 70 146 C92 140 98 70 120 52 C142 34 148 34 160 52 C178 80 186 145 210 148 C236 152 248 90 270 68 C292 46 304 48 320 70 C338 96 348 140 372 146 C392 150 404 150 420 150"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M24 150 C48 150 58 148 70 146 C92 140 98 70 120 52 C142 34 148 34 160 52 C178 80 186 145 210 148 C236 152 248 90 270 68 C292 46 304 48 320 70 C338 96 348 140 372 146 C392 150 404 150 420 150 L420 168 L24 168 Z"
            fill="currentColor"
            fillOpacity="0.08"
          />
          <circle cx="120" cy="52" r="3.5" fill="currentColor" />
          <circle cx="270" cy="68" r="3.5" fill="currentColor" />
        </svg>

        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-[var(--color-border)] pt-4">
          <svg viewBox="0 0 64 40" className="h-8 w-14 text-[var(--color-text)]" role="presentation">
            <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="36" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="28" cy="12" r="2" fill="var(--color-accent)" />
            <circle cx="44" cy="28" r="2" fill="var(--color-accent)" />
            <line x1="26" y1="14" x2="20" y2="20" stroke="currentColor" strokeWidth="1.2" />
            <line x1="30" y1="14" x2="36" y2="20" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          <p className="text-sm text-[var(--color-muted)]">
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
      className="relative overflow-hidden border-b border-[var(--color-border)]"
      aria-labelledby="hero-heading"
    >
      <div className="section-shell grid items-center gap-10 py-[clamp(3rem,7vw,5.5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <div className="flex items-center gap-3">
            <picture>
              <source srcSet={profile.photo.webp} type="image/webp" />
              <img
                src={profile.photo.png}
                alt={profile.photo.alt}
                width={64}
                height={64}
                className="size-14 rounded-full border border-[var(--color-border)] object-cover object-top sm:size-16"
              />
            </picture>
            <p className="text-sm font-medium text-[var(--color-accent)]">{profile.identity}</p>
          </div>

          <h1
            id="hero-heading"
            className="font-display mt-6 text-[clamp(2.4rem,5.5vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-[var(--color-text)]"
          >
            {hero.heading}
          </h1>

          <p className="mt-4 text-lg text-[var(--color-muted)] sm:text-xl">{hero.subtitle}</p>

          <p className="mt-5 max-w-xl text-[var(--color-muted)] leading-relaxed">{hero.statement}</p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
            {hero.tags.map((tag) => (
              <li
                key={tag}
                className="border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-muted)] sm:text-sm"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={hero.primaryCta.href}
              className="inline-flex w-full items-center justify-center gap-2 bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
            >
              {hero.primaryCta.label}
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href={hero.secondaryCta.href}
              download={hero.secondaryCta.download || undefined}
              className="inline-flex w-full items-center justify-center gap-2 border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] sm:w-auto"
            >
              {hero.secondaryCta.label}
              <ArrowDown className="size-4" aria-hidden />
            </a>
            <a
              href={hero.tertiaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 px-2 py-3 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] sm:w-auto"
            >
              LinkedIn
              <ExternalLink className="size-4" aria-hidden />
            </a>
          </div>
        </motion.div>

        <motion.div
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
