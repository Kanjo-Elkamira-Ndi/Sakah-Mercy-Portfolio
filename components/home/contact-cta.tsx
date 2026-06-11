'use client'

import { motion } from 'framer-motion'
import { ActionLink } from '@/components/action-button'

export function ContactCta() {
  return (
    <section className="border-t border-border bg-surface/40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center lg:px-8 lg:py-32"
      >
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-near-white text-balance sm:text-5xl">
          Let&apos;s work together
        </h2>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-text">
          Open to freelance projects, collaborations, and full-time roles.
        </p>
        <div className="mt-9">
          <ActionLink href="/contact" variant="filled" size="lg">
            Get In Touch
          </ActionLink>
        </div>
      </motion.div>
    </section>
  )
}
