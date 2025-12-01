'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps extends Omit<HTMLMotionProps<'div'>, 'initial' | 'whileInView' | 'viewport' | 'transition'> {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  className?: string
  once?: boolean
}

/**
 * FadeIn - Wiederverwendbare Scroll-Animation
 *
 * Dezent und professionell für Unternehmenswebsites.
 * Standardmäßig: fade von unten nach oben, 600ms, nur einmal.
 *
 * @example
 * <FadeIn>
 *   <h2>Überschrift</h2>
 * </FadeIn>
 *
 * @example mit Verzögerung für gestaffelte Animationen
 * <FadeIn delay={0.1}>
 *   <Card />
 * </FadeIn>
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 20,
  className = '',
  once = true,
  ...props
}: FadeInProps) {
  // Richtung bestimmt die initiale Position
  const directionOffset = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }

  const offset = directionOffset[direction]

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Smooth easing
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/**
 * FadeInStagger - Container für gestaffelte Kind-Animationen
 * Jedes direkte Kind wird nacheinander animiert.
 */
export function FadeInStagger({
  children,
  staggerDelay = 0.1,
  className = '',
}: {
  children: ReactNode
  staggerDelay?: number
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * FadeInItem - Kind-Element für FadeInStagger
 */
export function FadeInItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
