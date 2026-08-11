import { useEffect, useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')
  const menuId = useId()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  const linkClass = (id) =>
    `relative rounded-md px-2.5 py-2 text-sm transition-colors ${
      activeId === id
        ? 'text-emerald-300'
        : 'text-emerald-50/85 hover:bg-white/10 hover:text-emerald-300'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b border-emerald-900/40 text-white transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? 'bg-[#0c1614]/95 shadow-lg shadow-black/25 backdrop-blur-md'
          : 'bg-[#0c1614]/80 backdrop-blur-md'
      }`}
    >
      <nav
        className="section-shell flex h-[var(--spacing-nav)] min-w-0 items-center justify-between gap-2 sm:gap-4"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-display min-w-0 truncate text-sm font-semibold tracking-[0.08em] text-white sm:text-base"
          onClick={close}
        >
          {profile.brand}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <a href={`#${link.id}`} className={linkClass(link.id)}>
                {link.label}
                {activeId === link.id ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-emerald-400"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                ) : null}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-1.5 rounded-md bg-gradient-to-r from-[var(--color-accent)] to-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-md shadow-black/20 transition-opacity hover:opacity-90"
          >
            <Download className="size-4" aria-hidden />
            <span className="hidden sm:inline">{profile.cvLabel}</span>
            <span className="sm:hidden">CV</span>
          </a>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 p-2 text-white lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={menuId}
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: 'easeOut' }}
            className="overflow-hidden border-t border-white/10 bg-[#0c1614] lg:hidden"
          >
            <ul className="section-shell flex flex-col gap-1 py-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: reduceMotion ? 0 : -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.25,
                    delay: reduceMotion ? 0 : 0.04 + index * 0.04,
                  }}
                >
                  <a
                    href={`#${link.id}`}
                    className={`block rounded-md px-3 py-3 hover:bg-white/10 ${
                      activeId === link.id ? 'text-emerald-300' : 'text-emerald-50 hover:text-emerald-300'
                    }`}
                    onClick={close}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
