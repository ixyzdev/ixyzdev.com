import React from 'react'
import { cn } from '@/lib/cn'

type BadgeVariant = 'default' | 'outline' | 'muted'

export interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-turquoise/10 text-turquoise border border-turquoise/20',
  outline: 'border border-border text-steel',
  muted:   'bg-foreground/5 text-steel',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-0.5 text-xs font-mono',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
