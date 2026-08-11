import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, FileDown, Mail, Phone, MapPin } from 'lucide-react'
import { contact, profile, social } from '../data/portfolio'

export default function Contact() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id={contact.id}
      className="section-pad scroll-mt-[var(--spacing-nav)] border-t border-[var(--color-border)] bg-[var(--color-graphite)]"
      aria-labelledby="contact-heading"
    >
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl"
          >
            {contact.heading}
          </h2>
          <p className="mt-4 max-w-xl text-[var(--color-muted)] leading-relaxed">{contact.copy}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={profile.emailHref}
              className="inline-flex w-full items-center justify-center gap-2 bg-[var(--color-accent)] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
            >
              <Mail className="size-4" aria-hidden />
              Email Me
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-3 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] sm:w-auto"
            >
              LinkedIn
              <ExternalLink className="size-4" aria-hidden />
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex w-full items-center justify-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-3 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-accent)] sm:w-auto"
            >
              <FileDown className="size-4" aria-hidden />
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.06 }}
          className="border border-[var(--color-border)] bg-[var(--color-bg)] p-6 sm:p-7"
        >
          <ul className="space-y-5">
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-[var(--color-accent)]" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">Email</p>
                <a
                  href={profile.emailHref}
                  className="mt-1 block text-[var(--color-text)] hover:text-[var(--color-accent)]"
                >
                  {profile.email}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-[var(--color-accent)]" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">Phone</p>
                <a
                  href={profile.phoneHref}
                  className="mt-1 block text-[var(--color-text)] hover:text-[var(--color-accent)]"
                >
                  {profile.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--color-accent)]" aria-hidden />
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">
                  Location
                </p>
                <p className="mt-1 text-[var(--color-text)]">{profile.location}</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
