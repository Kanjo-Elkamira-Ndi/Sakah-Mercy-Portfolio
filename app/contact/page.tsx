import type { Metadata } from 'next'
import { Mail } from 'lucide-react'
import {
  LinkedinIcon,
  DribbbleIcon,
  GithubIcon,
  BehanceIcon,
} from '@/components/brand-icons'
import { ContactForm } from '@/components/contact/contact-form'
import { SocialLink } from '@/components/social-link'
import { PageTransition } from '@/components/page-transition'

export const metadata: Metadata = {
  title: 'Contact — Sakah Vernyuy Mercy',
  description: 'Get in touch with Sakah Vernyuy Mercy for projects and collaborations.',
}

const socials = [
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: LinkedinIcon },
  { href: 'https://behance.net', label: 'Behance', icon: BehanceIcon },
  { href: 'https://dribbble.com', label: 'Dribbble', icon: DribbbleIcon },
  { href: 'https://github.com', label: 'GitHub', icon: GithubIcon },
  { href: 'mailto:hello@example.com', label: 'Email', icon: Mail },
]

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-5 pb-28 pt-32 lg:px-8 lg:pt-40">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-netflix-red">
          Contact
        </span>
        <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-near-white text-balance sm:text-5xl">
          Let&apos;s build something
        </h1>

        <div className="mt-14 grid gap-14 lg:grid-cols-[3fr_2fr]">
          <div>
            <ContactForm />
          </div>

          <aside className="flex flex-col gap-8">
            <div>
              <h2 className="font-heading text-xl font-bold text-near-white">
                Get in touch
              </h2>
              <p className="mt-3 leading-relaxed text-muted-text">
                Whether you have a project in mind or just want to say hi, my
                inbox is always open.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {socials.map((s) => (
                <SocialLink
                  key={s.label}
                  href={s.href}
                  label={s.label}
                  icon={s.icon}
                />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </PageTransition>
  )
}
