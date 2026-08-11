/** Shared Framer Motion presets — respect reduced motion at call sites. */

export const viewportOnce = { once: true, amount: 0.35 }
export const viewportLoose = { once: true, amount: 0.25 }

export function duration(reduceMotion, ms = 0.45) {
  return reduceMotion ? 0 : ms
}

export function stagger(reduceMotion, index, step = 0.05) {
  return reduceMotion ? 0 : index * step
}

export function fadeUpVariants(reduceMotion, y = 16) {
  return {
    hidden: { opacity: 0, y: reduceMotion ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: duration(reduceMotion, 0.5) },
    },
  }
}

export function staggerContainer(reduceMotion, staggerChildren = 0.08, delayChildren = 0.05) {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : staggerChildren,
        delayChildren: reduceMotion ? 0 : delayChildren,
      },
    },
  }
}
