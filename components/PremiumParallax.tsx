'use client'

import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import { useRef, ReactNode, useState, useEffect } from 'react'
import Image from 'next/image'

interface ParallaxImageProps {
  src: string
  alt: string
  speed?: number
  className?: string
  priority?: boolean
}

export function ParallaxImage({ src, alt, speed = 0.5, className = '', priority = false }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ y: springY }}
        className="relative h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  )
}

interface ParallaxBackgroundProps {
  children: ReactNode
  className?: string
  speed?: number
}

export function ParallaxBackground({ children, className = '', speed = 0.5 }: ParallaxBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -100}%`, `${speed * 100}%`])
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y: springY }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>
    </div>
  )
}

interface ZoomOnScrollProps {
  children: ReactNode
  className?: string
  scale?: number
}

export function ZoomOnScroll({ children, className = '', scale = 1.2 }: ZoomOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [1, scale, 1])
  const springScale = useSpring(scaleValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ scale: springScale }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  )
}

interface RevealOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function RevealOnScroll({ children, className = '', delay = 0 }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'start 0.2']
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [50, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface MagneticHoverProps {
  children: ReactNode
  className?: string
  strength?: number
}

export function MagneticHover({ children, className = '', strength = 0.3 }: MagneticHoverProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength

    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const x = useSpring(position.x, {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  })

  const y = useSpring(position.y, {
    stiffness: 150,
    damping: 15,
    mass: 0.1
  })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface ParallaxTextProps {
  children: ReactNode
  className?: string
  speed?: number
}

export function ParallaxText({ children, className = '', speed = 0.3 }: ParallaxTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [`${speed * -100}px`, `${speed * 100}px`])
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      ref={ref}
      style={{ y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface SmoothScrollContainerProps {
  children: ReactNode
  className?: string
}

export function SmoothScrollContainer({ children, className = '' }: SmoothScrollContainerProps) {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleScroll = () => {
      setIsScrolling(true)
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        setIsScrolling(false)
      }, 150)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className={`${className} ${isScrolling ? 'pointer-events-none' : ''}`}>
      {children}
    </div>
  )
}

interface FloatingElementProps {
  children: ReactNode
  className?: string
  duration?: number
  yOffset?: number
}

export function FloatingElement({ children, className = '', duration = 3, yOffset = 10 }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface RotateOnScrollProps {
  children: ReactNode
  className?: string
  rotation?: number
}

export function RotateOnScroll({ children, className = '', rotation = 360 }: RotateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, rotation])
  const springRotate = useSpring(rotate, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      ref={ref}
      style={{ rotate: springRotate }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
