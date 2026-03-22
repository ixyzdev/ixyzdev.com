'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/cn'

type Variant = 'fade' | 'slide-up' | 'slide-left'

interface AnimateInProps {
  children: React.ReactNode
  variant?: Variant
  delay?: number
  duration?: number
  className?: string
}

type MotionState = { opacity: number; y?: number; x?: number }

const motionVariants: Record<Variant, { hidden: MotionState; visible: MotionState }> = {
  'fade':       { hidden: { opacity: 0 },            visible: { opacity: 1 } },
  'slide-up':   { hidden: { opacity: 0, y: 48 },     visible: { opacity: 1, y: 0 } },
  'slide-left': { hidden: { opacity: 0, x: -48 },    visible: { opacity: 1, x: 0 } },
}

export function AnimateIn({
  children,
  variant = 'slide-up',
  delay = 0,
  duration = 0.65,
  className,
}: AnimateInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: motionVariants[variant].hidden,
        visible: {
          ...motionVariants[variant].visible,
          transition: { duration, delay, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
