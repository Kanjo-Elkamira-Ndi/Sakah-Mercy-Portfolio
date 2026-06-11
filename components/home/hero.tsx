'use client'

import { motion } from 'framer-motion'
import { ActionLink } from '@/components/action-button'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(600px circle at 0% 0%, rgba(229,9,20,0.06), transparent 60%)',
        }}
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-5 py-28 lg:px-8"
      >
        <motion.p
          variants={item}
          className="font-mono text-sm uppercase tracking-[0.25em] text-netflix-red"
        >
          Product Designer &amp; UX Researcher
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-6 max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-near-white text-balance sm:text-6xl lg:text-7xl"
        >
          Sakah Vernyuy Mercy
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted-text sm:text-xl"
        >
          Designing meaningful digital experiences that help people achieve
          their goals.
        </motion.p>
        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <ActionLink href="/projects" variant="filled" size="lg">
            View Projects
          </ActionLink>
          <ActionLink href="/contact" variant="outlined" size="lg">
            Contact Me
          </ActionLink>
        </motion.div>
      </motion.div>
    </section>
  )
}
