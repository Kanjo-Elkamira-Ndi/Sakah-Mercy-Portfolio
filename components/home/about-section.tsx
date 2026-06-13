'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section className="relative overflow-hidden border-t border-line/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(600px circle at 30% 50%, rgba(229,9,20,0.04), transparent 60%)',
        }}
      />
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-20">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col gap-6"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-netflix-red">
              About
            </span>
            <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-near-white text-balance sm:text-4xl lg:text-5xl">
              Designing products that solve real human problems.
            </h2>
            <div className="max-w-md space-y-4 text-base leading-relaxed text-muted-text">
              <p>
                I bridge the gap between user research and product execution.
                Every design decision I make starts with a question: does this
                solve a real problem for a real person?
              </p>
              <p>
                With a background spanning product design, UX research, and
                frontend engineering, I bring a holistic perspective to every
                project. I don&apos;t just design screens; I design systems that
                scale, interfaces that communicate, and experiences that feel
                intuitive.
              </p>
              <p>
                My process is research-driven, my tools are modern, and my
                standard is simple: if it isn&apos;t good enough to ship, it
                isn&apos;t done.
              </p>
            </div>
          </motion.div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Background glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-12 rounded-full"
                style={{
                  background:
                    'radial-gradient(400px circle at center, rgba(229,9,20,0.08), transparent 70%)',
                }}
              />
              {/* Decorative framing lines */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-netflix-red/30"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 border-b-2 border-r-2 border-netflix-red/30"
              />
              {/* Image container */}
              <div className="relative aspect-[4/5] w-72 overflow-hidden rounded-lg border border-line bg-surface shadow-[0_4px_24px_rgba(0,0,0,0.4)] sm:w-80">
                <Image
                  src="/profile.png"
                  alt="Sakah Vernyuy Mercy — Product Designer & UX Researcher"
                  width={400}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating decorative badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -right-4 top-8 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] tracking-wider text-muted-text shadow-lg"
              >
                UX Research
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -left-4 bottom-16 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] tracking-wider text-muted-text shadow-lg"
              >
                Product Design
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
