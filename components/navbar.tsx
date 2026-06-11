'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '/projects', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/projects'
      ? pathname.startsWith('/projects')
      : pathname === href

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors',
        scrolled
          ? 'bg-obsidian/80 border-b border-border'
          : 'bg-obsidian/40 border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          className="font-mono text-lg font-medium tracking-tight text-netflix-red"
          aria-label="Home"
        >
          SVM
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative font-mono text-sm text-near-white/90 transition-colors hover:text-near-white"
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-netflix-red"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-near-white md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-obsidian md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-mono text-lg font-medium text-netflix-red">
                SVM
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-near-white"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-1 flex-col items-start justify-center gap-8 px-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'font-heading text-4xl font-bold',
                      isActive(link.href)
                        ? 'text-netflix-red'
                        : 'text-near-white',
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
