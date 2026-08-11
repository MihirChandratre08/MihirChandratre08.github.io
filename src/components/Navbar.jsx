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
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] ${
        scrolled
          ? 'border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_82%,transparent)] shadow-sm backdrop-blur-md'
          : 'border-transparent bg-[color-mix(in_srgb,var(--color-bg)_70%,transparent)] backdrop-blur-sm'
      }`}
    >
      <nav
        className="section-shell flex h-[var(--spacing-nav)] items-center justify-between gap-4"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-[0.08em] text-[var(--color-text)] sm:text-base"
          onClick={close}
        >
          {profile.brand}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="rounded-md px-2.5 py-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
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
            className="inline-flex items-center gap-1.5 rounded-md border border-[var(--color-accent)] bg-[var(--color-accent)] px-3 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Download className="size-4" aria-hidden />
            <span className="hidden sm:inline">{profile.cvLabel}</span>
            <span className="sm:hidden">CV</span>
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-2 text-[var(--color-text)] lg:hidden"
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
