'use client'

import { motion } from 'framer-motion'

export function CaseStudySection({
  label,
  title,
  children,
}: {
  label: string
  title?: string
  children: React.ReactNode
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4 }}
      className="border-l-[3px] border-netflix-red pl-6 sm:pl-8"
    >
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-netflix-red">
        {label}
      </span>
      {title && (
        <h2 className="mt-2 font-heading text-2xl font-bold text-near-white sm:text-3xl">
          {title}
        </h2>
      )}
      <div className="mt-4">{children}</div>
    </motion.section>
  )
}
