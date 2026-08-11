import { useEffect, useId, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow,color] ${
        scrolled
          ? 'border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_88%,transparent)] text-[var(--color-text)] shadow-sm backdrop-blur-md'
          : 'border-transparent bg-gradient-to-b from-black/35 to-transparent text-white backdrop-blur-sm'
      }`}
    >
      <nav
        className="section-shell flex h-[var(--spacing-nav)] min-w-0 items-center justify-between gap-2 sm:gap-4"
        aria-label="Primary"
      >
        <a
          href="#top"
          className={`font-display min-w-0 truncate text-sm font-semibold tracking-[0.08em] sm:text-base ${
            scrolled ? 'text-[var(--color-text)]' : 'text-white'
          }`}
          onClick={close}
        >
          {profile.brand}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`rounded-md px-2.5 py-2 text-sm transition-colors ${
                  scrolled
                    ? 'text-[var(--color-muted)] hover:text-[var(--color-accent)]'
                    : 'text-white/80 hover:text-emerald-300'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-1.5 rounded-md border border-transparent bg-gradient-to-r from-[var(--color-accent)] to-emerald-600 px-3 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Download className="size-4" aria-hidden />
            <span className="hidden sm:inline">{profile.cvLabel}</span>
            <span className="sm:hidden">CV</span>
          </a>

          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-md border p-2 lg:hidden ${
              scrolled
                ? 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]'
                : 'border-white/25 bg-white/10 text-white'
            }`}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id={menuId}
          className="border-t border-[var(--color-border)] bg-[var(--color-surface)] lg:hidden"
        >
          <ul className="section-shell flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="block rounded-md px-3 py-3 text-[var(--color-text)] hover:bg-[var(--color-accent-soft)]"
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  )
}
