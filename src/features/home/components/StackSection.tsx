import { Section } from '@/components/layout/Section'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { StackCard } from './StackCard'
import type { TechStack } from './StackCard'

interface StackSectionProps {
  stacks: TechStack[]
}

export function StackSection({ stacks }: StackSectionProps) {
  return (
    <Section id="stack">
      <AnimateIn>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/25">
          — Stack
        </p>
      </AnimateIn>
      <AnimateIn delay={0.1}>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stacks.map((stack) => (
            <StackCard key={stack.name} stack={stack} />
          ))}
        </div>
      </AnimateIn>
    </Section>
  )
}
