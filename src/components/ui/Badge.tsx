import React from 'react'
import { cn } from '@/lib/cn'

type BadgeVariant = 'default' | 'outline' | 'muted'

export interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-foreground/10 text-foreground',
  outline: 'border border-border text-muted',
  muted: 'bg-foreground/5 text-muted',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded px-2 py-0.5 text-xs font-medium font-mono',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
