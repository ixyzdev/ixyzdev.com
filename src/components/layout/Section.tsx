import React from 'react'
import { cn } from '@/lib/cn'

interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
  as?: React.ElementType
}

export function Section({
  id,
  className,
  children,
  as: Tag = 'section',
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn('px-6 py-24 max-w-5xl mx-auto w-full', className)}
    >
      {children}
    </Tag>
  )
}
