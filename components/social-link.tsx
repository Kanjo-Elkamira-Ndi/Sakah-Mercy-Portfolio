import Link from 'next/link'
import type { ComponentType, SVGProps } from 'react'

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>

export function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string
  label: string
  icon: IconComponent
}) {
  const external = href.startsWith('http')
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-3 text-muted-text transition-colors hover:text-netflix-red"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border transition-colors group-hover:border-netflix-red">
        <Icon size={18} />
      </span>
      <span className="font-mono text-sm">{label}</span>
    </Link>
  )
}
