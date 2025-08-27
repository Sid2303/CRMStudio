import { useEffect } from 'react'

export default function useReveal(rootRef, options = {}) {
  useEffect(() => {
    const rootEl = rootRef?.current
    if (!rootEl) return

    const elements = Array.from(rootEl.querySelectorAll('[data-reveal]'))
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            if (options.once !== false) observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -10% 0px',
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [rootRef, options.threshold, options.rootMargin, options.once])
}
