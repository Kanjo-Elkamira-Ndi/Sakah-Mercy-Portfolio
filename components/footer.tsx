import Link from 'next/link'
import { Mail } from 'lucide-react'
import { LinkedinIcon, DribbbleIcon, GithubIcon } from '@/components/brand-icons'

const socials = [
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: LinkedinIcon },
  { href: 'https://dribbble.com', label: 'Dribbble', icon: DribbbleIcon },
  { href: 'https://github.com', label: 'GitHub', icon: GithubIcon },
  { href: 'mailto:hello@example.com', label: 'Email', icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-obsidian">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row lg:px-8">
        <p className="font-mono text-sm text-muted-text">
          &copy; 2025 Sakah Vernyuy Mercy
        </p>
        <ul className="flex items-center gap-5">
          {socials.map((s) => (
            <li key={s.label}>
              <Link
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-text transition-colors hover:text-netflix-red"
                aria-label={s.label}
              >
                <s.icon size={18} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
