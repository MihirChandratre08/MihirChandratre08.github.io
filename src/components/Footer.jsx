import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Mail, FileDown } from 'lucide-react'
import { profile, social } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  const reduceMotion = useReducedMotion()

  return (
    <motion.footer
      className="border-t border-[var(--color-border)] bg-[#070d0c]"
      initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: reduceMotion ? 0 : 0.45 }}
    >
      <div className="section-shell flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold tracking-[0.06em] text-[var(--color-text)]">
            {profile.brand}
          </p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">{profile.title}</p>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            Analytical R&amp;D · Pharmaceutical Research · HPLC
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-accent)]"
          >
            <ExternalLink className="size-4" aria-hidden />
            LinkedIn
          </a>
          <a
            href={profile.emailHref}
            className="inline-flex items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-accent)]"
          >
            <Mail className="size-4" aria-hidden />
            Email
          </a>
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-1.5 text-[var(--color-muted)] hover:text-[var(--color-accent)]"
          >
            <FileDown className="size-4" aria-hidden />
            CV
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <p className="section-shell py-4 text-xs text-[var(--color-muted)]">
          © {year} {profile.name}
        </p>
      </div>
    </motion.footer>
  )
}
