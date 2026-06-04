import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Runs a GSAP animation context scoped to the component.
 * The callback receives (gsap, ScrollTrigger) and may optionally return a cleanup fn.
 * All tweens and ScrollTriggers created inside the context are automatically
 * reverted on unmount — no memory leaks.
 *
 * @param {(gsap: gsap.core.GSAP, ST: typeof ScrollTrigger) => void | (() => void)} callback
 * @param {any[]} deps - React dependency array
 */
export function useGSAPEffect(callback, deps = []) {
  const ctx = useRef(null)

  useEffect(() => {
    // Create a GSAP context so every tween / ScrollTrigger inside is scoped
    ctx.current = gsap.context(() => {
      callback(gsap, ScrollTrigger)
    })

    return () => {
      ctx.current && ctx.current.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

// ─────────────────────────────────────────────────────────────────────────────
// Reusable animation helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Shorthand fade-up reveal, optionally scroll-triggered.
 * @param {gsap.TweenTarget} targets
 * @param {{
 *   y?: number, duration?: number, ease?: string,
 *   stagger?: number, delay?: number,
 *   scrollTrigger?: ScrollTrigger.Vars, extra?: gsap.TweenVars
 * }} vars
 */
export function fadeUp(targets, vars = {}) {
  return gsap.fromTo(
    targets,
    { opacity: 0, y: vars.y ?? 50 },
    {
      opacity: 1,
      y: 0,
      duration: vars.duration ?? 0.9,
      ease: vars.ease ?? 'power2.out',
      stagger: vars.stagger ?? 0,
      delay: vars.delay ?? 0,
      scrollTrigger: vars.scrollTrigger ?? undefined,
      ...vars.extra,
    }
  )
}

/**
 * Shorthand fade-from-left reveal.
 */
export function fadeLeft(targets, vars = {}) {
  return gsap.fromTo(
    targets,
    { opacity: 0, x: vars.x ?? -60 },
    {
      opacity: 1,
      x: 0,
      duration: vars.duration ?? 0.9,
      ease: vars.ease ?? 'power2.out',
      stagger: vars.stagger ?? 0,
      delay: vars.delay ?? 0,
      scrollTrigger: vars.scrollTrigger ?? undefined,
      ...vars.extra,
    }
  )
}

/**
 * Shorthand fade-from-right reveal.
 */
export function fadeRight(targets, vars = {}) {
  return gsap.fromTo(
    targets,
    { opacity: 0, x: vars.x ?? 60 },
    {
      opacity: 1,
      x: 0,
      duration: vars.duration ?? 0.9,
      ease: vars.ease ?? 'power2.out',
      stagger: vars.stagger ?? 0,
      delay: vars.delay ?? 0,
      scrollTrigger: vars.scrollTrigger ?? undefined,
      ...vars.extra,
    }
  )
}

/**
 * Shorthand scale + fade reveal.
 */
export function scaleFade(targets, vars = {}) {
  return gsap.fromTo(
    targets,
    { opacity: 0, scale: vars.fromScale ?? 0.85 },
    {
      opacity: 1,
      scale: 1,
      duration: vars.duration ?? 0.8,
      ease: vars.ease ?? 'power2.out',
      stagger: vars.stagger ?? 0,
      delay: vars.delay ?? 0,
      scrollTrigger: vars.scrollTrigger ?? undefined,
      ...vars.extra,
    }
  )
}

/**
 * Returns a standard ScrollTrigger config object.
 * @param {Element} trigger - The trigger element
 * @param {string} [start='top 82%']
 * @param {boolean} [once=true]
 */
export function makeST(trigger, start = 'top 82%', once = true) {
  return { trigger, start, once }
}

/**
 * Returns true if the device is small (width < 480px) or user
 * prefers reduced motion. Use this to skip expensive animations.
 */
export function isMobile() {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(max-width: 480px)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export { gsap, ScrollTrigger }
