import { FigmaIcon } from '@/components/brand-icons'

export function PrototypeEmbed() {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-lg border border-border bg-surface">
      <FigmaIcon size={40} className="text-muted-text" />
      <span className="font-mono text-sm uppercase tracking-[0.2em] text-muted-text">
        Prototype Preview
      </span>
    </div>
  )
}
