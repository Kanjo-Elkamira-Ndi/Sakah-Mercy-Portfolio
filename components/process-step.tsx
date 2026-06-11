'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import type { ProcessStepData } from '@/data/skills'

export function ProcessStep({
  step,
  index,
}: {
  step: ProcessStepData
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="flex flex-1 flex-col gap-2 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-netflix-red"
    >
      <span className="font-mono text-sm text-netflix-red">{step.number}</span>
      <h3
        className="font-heading text-lg font-bold transition-colors"
        style={{ color: hovered ? '#E50914' : '#F5F5F5' }}
      >
        {step.name}
      </h3>
      <p className="text-sm leading-relaxed text-muted-text">
        {step.description}
      </p>
    </motion.div>
  )
}
