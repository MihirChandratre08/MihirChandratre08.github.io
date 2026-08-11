export default function SectionPlaceholder({ id, label, phase }) {
  return (
    <section id={id} className="section-pad scroll-mt-[var(--spacing-nav)]">
      <div className="section-shell rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-12">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
          Phase {phase}
        </p>
        <h2 className="font-display mt-2 text-2xl font-semibold text-[var(--color-text)] sm:text-3xl">
          {label}
        </h2>
        <p className="mt-3 max-w-2xl text-[var(--color-muted)]">
          Section shell ready. Content and layout will be built in Phase {phase} per{' '}
          <code className="rounded bg-[var(--color-accent-soft)] px-1.5 py-0.5 text-sm text-[var(--color-text)]">
            plan.md
          </code>
          .
        </p>
      </div>
    </section>
  )
}
