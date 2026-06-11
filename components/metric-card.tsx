'use client'

import { motion } from 'framer-motion'

export function MetricCard({
  label,
  value,
  index = 0,
}: {
  label: string
  value: string
  index?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex flex-col gap-2 rounded-lg border border-border bg-surface p-6"
    >
      <span className="font-heading text-4xl font-extrabold text-netflix-red">
        {value}
      </span>
      <span className="font-mono text-sm text-muted-text">{label}</span>
    </motion.div>
  )
}
