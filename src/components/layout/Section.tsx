import React from 'react'
import { cn } from '@/lib/cn'

interface SectionProps {
  id?: string
  className?: string
  outerClassName?: string
  children: React.ReactNode
  as?: React.ElementType
}

export function Section({
  id,
  className,
  outerClassName,
  children,
  as: Tag = 'section',
}: SectionProps) {
  if (outerClassName) {
    return (
      <div id={id} className={outerClassName}>
        <Tag className={cn('px-6 py-28 max-w-5xl mx-auto w-full', className)}>
          {children}
        </Tag>
      </div>
    )
  }

  return (
    <Tag id={id} className={cn('px-6 py-28 max-w-5xl mx-auto w-full', className)}>
      {children}
    </Tag>
  )
}
