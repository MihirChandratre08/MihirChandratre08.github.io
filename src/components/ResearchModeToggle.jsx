import { FlaskConical } from 'lucide-react'
import { useResearchMode } from '../context/ResearchModeContext'
import { researchModeFocus } from '../data/portfolio'

export default function ResearchModeToggle() {
  const { enabled, toggle } = useResearchMode()

  return (
    <div className="fixed bottom-3 right-3 z-40 flex max-w-[calc(100vw-1.5rem)] flex-col items-end gap-2 sm:bottom-4 sm:right-4">
      {enabled ? (
        <div className="hidden w-56 max-w-full border border-[var(--color-accent)] bg-[var(--color-surface)] p-3 shadow-lg sm:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-accent)]">
            Research Mode
          </p>
          <ul className="mt-2 space-y-1.5">
            {researchModeFocus.map((item) => (
              <li key={item.area} className="text-xs text-[var(--color-muted)]">
                <span className="font-medium text-[var(--color-text)]">{item.area}</span>
                <span className="mx-1 text-[var(--color-accent)]">·</span>
                {item.focus}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <button
        type="button"
        onClick={toggle}
        aria-pressed={enabled}
        className={`inline-flex max-w-full items-center gap-2 border px-3 py-2 text-xs font-medium shadow-md transition-colors ${
          enabled
            ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-white'
            : 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-accent)]'
        }`}
      >
        <FlaskConical className="size-3.5 shrink-0" aria-hidden />
        <span className="truncate">Research Mode {enabled ? 'On' : 'Off'}</span>
      </button>
    </div>
  )
}
