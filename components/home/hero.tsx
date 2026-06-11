'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ActionLink } from '@/components/action-button'
import { useTypewriter } from '@/hooks/use-typewriter'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

const metrics = [
  { label: 'Experience', value: '5+ Years' },
  { label: 'Projects', value: '20+' },
  { label: 'Technologies', value: '15+' },
]

export function Hero() {
  const roles = ['Product Designer', 'UX Researcher']
  const { displayText, isDeleting } = useTypewriter(roles)

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(800px circle at 70% 40%, rgba(229,9,20,0.06), transparent 60%)',
        }}
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl px-5 py-28 lg:px-8"
      >
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-text">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-near-white text-balance sm:text-5xl lg:text-6xl"
            >
              {displayText}
              <motion.span
                aria-hidden
                animate={isDeleting ? { opacity: 0.4 } : { opacity: [1, 0] }}
                transition={
                  isDeleting
                    ? { duration: 0 }
                    : { duration: 0.6, repeat: Infinity, repeatType: 'reverse' }
                }
                className="relative -ml-0.5 inline-block h-[0.075em] w-[0.05em] bg-netflix-red align-middle"
              />
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-md text-lg leading-relaxed text-muted-text"
            >
              Designing meaningful digital experiences that help people achieve
              their goals through research-driven, user-centered solutions.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <ActionLink href="/projects" variant="filled" size="lg">
                View Projects
              </ActionLink>
              <ActionLink href="/contact" variant="outlined" size="lg">
                Contact Me
              </ActionLink>
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center gap-0 pt-4"
            >
              {metrics.map((m, i) => (
                <div key={m.label} className="flex items-center gap-0">
                  {i > 0 && <div className="mx-6 h-8 w-px bg-line" />}
                  <div className="flex flex-col">
                    <span className="font-heading text-xl font-extrabold text-near-white">
                      {m.value}
                    </span>
                    <span className="font-mono text-xs text-muted-text">
                      {m.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            variants={item}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 rounded-full"
                style={{
                  background:
                    'radial-gradient(350px circle at center, rgba(229,9,20,0.12), transparent 70%)',
                }}
              />
              <div className="relative aspect-square w-80 rounded-full border-2 border-line bg-surface p-2 sm:w-96">
                <div className="h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/profile.png"
                    alt="Sakah Vernyuy Mercy"
                    width={384}
                    height={384}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-line bg-surface px-4 py-1.5 font-mono text-xs text-near-white shadow-lg">
                Sakah V. Mercy
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
