'use client'

import { motion } from 'framer-motion'

export function SectionHeading({
  label,
  title,
  align = 'left',
}: {
  label?: string
  title: string
  align?: 'left' | 'center'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={align === 'center' ? 'text-center' : 'text-left'}
    >
      {label && (
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-netflix-red">
          {label}
        </span>
      )}
      <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-near-white text-balance sm:text-4xl">
        {title}
      </h2>
    </motion.div>
  )
}
