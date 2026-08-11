import { useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { X } from 'lucide-react'
import { projects, researchDetailSections } from '../data/portfolio'
import { BsaNanoparticleDiagram } from './research/Diagrams'

export default function ResearchDetailModal({ open, onClose }) {
  const reduceMotion = useReducedMotion()
  const titleId = useId()
  const closeRef = useRef(null)
  const previouslyFocused = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    previouslyFocused.current = document.activeElement
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => closeRef.current?.focus(), 20)

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const dialog = document.getElementById('research-detail-dialog')
      if (!dialog) return

      const focusable = dialog.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus()
      }
    }
  }, [open, onClose])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-stretch justify-center bg-[color-mix(in_srgb,var(--color-text)_45%,transparent)] p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <motion.div
            id="research-detail-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            transition={{ duration: reduceMotion ? 0 : 0.28 }}
            className="flex h-full w-full max-w-4xl flex-col overflow-hidden bg-[var(--color-bg)] shadow-2xl sm:h-[min(92vh,900px)] sm:rounded-lg sm:border sm:border-[var(--color-border)]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 sm:px-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-accent)]">
                  Featured Research
                </p>
                <h2
                  id={titleId}
                  className="font-display mt-2 max-w-2xl text-xl font-semibold text-[var(--color-text)] sm:text-2xl"
                >
                  {projects.featured.shortTitle}
                </h2>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="inline-flex size-10 shrink-0 items-center justify-center border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] hover:border-[var(--color-accent)]"
                aria-label="Close research details"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
              <BsaNanoparticleDiagram className="mb-8 w-full border border-[var(--color-border)] bg-[var(--color-surface)]" />

              <ol className="space-y-6">
                {researchDetailSections.map((section) => (
                  <li
                    key={section.number}
                    className="border-b border-[var(--color-border)] pb-6 last:border-b-0"
                  >
                    <p className="text-xs font-medium tracking-[0.14em] text-[var(--color-accent)]">
                      {section.number}
                    </p>
                    <h3 className="font-display mt-1 text-lg font-semibold text-[var(--color-text)]">
                      {section.title}
                    </h3>
                    <p className="mt-2 text-[var(--color-muted)] leading-relaxed">{section.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
