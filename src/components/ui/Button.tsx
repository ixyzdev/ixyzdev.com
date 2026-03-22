import React from 'react'
import { cn } from '@/lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
  isLoading?: boolean
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:   'bg-turquoise text-background font-semibold hover:opacity-85',
  secondary: 'border border-turquoise/40 text-turquoise hover:bg-turquoise/10',
  ghost:     'text-steel hover:text-foreground hover:bg-foreground/5',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-xs',
  md: 'px-5 py-2 text-sm',
  lg: 'px-7 py-3 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  asChild = false,
  isLoading = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-medium tracking-wide transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
      className: cn(classes, (children.props as { className?: string }).className),
    })
  }

  return (
    <button className={classes} disabled={isLoading || props.disabled} {...props}>
      {isLoading ? 'Loading…' : children}
    </button>
  )
}
