import Link from 'next/link'
import { cn } from '@/lib/utils'

type CommonProps = {
  variant?: 'filled' | 'outlined'
  size?: 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-md font-mono font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-netflix-red focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian'

const sizes = {
  md: 'h-11 px-6 text-sm',
  lg: 'h-13 px-8 text-base',
}

const variants = {
  filled:
    'border border-netflix-red bg-netflix-red text-near-white hover:bg-transparent hover:text-netflix-red',
  outlined:
    'border border-netflix-red bg-transparent text-netflix-red hover:bg-netflix-red hover:text-near-white',
}

function classes(variant: CommonProps['variant'] = 'outlined', size: CommonProps['size'] = 'md', className?: string) {
  return cn(base, sizes[size], variants[variant], className)
}

export function ActionLink({
  href,
  variant,
  size,
  className,
  children,
}: CommonProps & { href: string }) {
  const external = href.startsWith('http') || href.startsWith('mailto')
  if (external) {
    return (
      <a href={href} className={classes(variant, size, className)}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={classes(variant, size, className)}>
      {children}
    </Link>
  )
}

export function ActionButton({
  variant,
  size,
  className,
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classes(variant, size, className)} {...props}>
      {children}
    </button>
  )
}
