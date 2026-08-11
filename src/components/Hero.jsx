import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, ExternalLink } from 'lucide-react'
import { hero, profile } from '../data/portfolio'
import { fadeUpVariants, staggerContainer } from '../lib/motion'
import AnimatedChromatogram from './AnimatedChromatogram'

function ScientificVisual() {
  return (
    <div className="relative w-full min-w-0 overflow-hidden border border-white/25 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
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
  const item = fadeUpVariants(reduceMotion, 16)
  const container = staggerContainer(reduceMotion, 0.09, 0.04)

  return (
    <section
      id="top"
      className="relative overflow-x-clip"
      aria-labelledby="hero-heading"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 90% 60% at 90% 0%, rgba(5,150,105,0.28), transparent 55%), linear-gradient(180deg, #0c1614 0%, #111827 28%, #134e4a 62%, #0f766e 82%, #0b9b7a 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full max-w-3xl bg-gradient-to-r from-black/50 via-black/25 to-transparent lg:max-w-[58%]"
        aria-hidden
      />

      <div className="section-shell relative grid grid-cols-1 items-center gap-8 py-[clamp(2.5rem,6vw,5rem)] md:gap-10 lg:grid-cols-2 lg:gap-12">
        <motion.div className="min-w-0" initial="hidden" animate="show" variants={container}>
          <motion.div className="flex items-center gap-3" variants={item}>
            <picture>
              <source srcSet={profile.photo.webp} type="image/webp" />
              <motion.img
                src={profile.photo.png}
                alt={profile.photo.alt}
                width={64}
                height={64}
                className="size-14 shrink-0 rounded-full border-2 border-white/50 object-cover object-top sm:size-16"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        boxShadow: [
                          '0 0 0 0 rgba(52, 211, 153, 0)',
                          '0 0 0 6px rgba(52, 211, 153, 0.35)',
                          '0 0 0 0 rgba(52, 211, 153, 0)',
                        ],
                      }
                }
                transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
              />
            </picture>
            <p className="text-sm font-semibold text-emerald-300 drop-shadow-sm">
              {profile.identity}
            </p>
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="font-display mt-5 text-[clamp(2rem,6vw,4rem)] font-semibold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] break-words"
          >
            {hero.heading}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 text-base font-medium text-white sm:text-lg md:text-xl"
          >
            {hero.subtitle}
          </motion.p>
          <motion.p
            variants={item}
            className="mt-1 text-sm font-semibold text-emerald-300 sm:text-base"
          >
            {hero.affiliation}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/95 sm:text-base"
          >
            {hero.statement}
          </motion.p>

          <motion.ul
            className="mt-6 flex flex-wrap gap-2"
            aria-label="Focus areas"
            variants={staggerContainer(reduceMotion, 0.05, 0)}
          >
            {hero.tags.map((tag) => (
              <motion.li
                key={tag}
                variants={item}
                className="border border-white/30 bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:text-sm"
              >
                {tag}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            variants={item}
          >
            <motion.a
              href={hero.primaryCta.href}
              initial={reduceMotion ? false : { scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : 0.55 }}
              className="inline-flex w-full items-center justify-center gap-2 bg-gradient-to-r from-[var(--color-accent)] to-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-opacity hover:opacity-90 sm:w-auto"
            >
              {hero.primaryCta.label}
              <ArrowRight className="size-4 shrink-0" aria-hidden />
            </motion.a>
            <a
              href={hero.secondaryCta.href}
              download={hero.secondaryCta.download || undefined}
              className="inline-flex w-full items-center justify-center gap-2 border-2 border-white bg-white px-5 py-3 text-sm font-semibold text-[var(--color-graphite)] shadow-lg shadow-black/25 transition-colors hover:bg-emerald-50 sm:w-auto"
            >
              {hero.secondaryCta.label}
              <ArrowDown className="size-4 shrink-0" aria-hidden />
            </a>
            <a
              href={hero.tertiaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 border border-white/50 bg-black/30 px-4 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-emerald-300 hover:text-emerald-200 sm:w-auto"
            >
              LinkedIn
              <ExternalLink className="size-4 shrink-0" aria-hidden />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="min-w-0 w-full"
          initial={{ opacity: 0, x: reduceMotion ? 0 : 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.15 }}
        >
          <ScientificVisual />
        </motion.div>
      </div>
    </section>
  )
}
