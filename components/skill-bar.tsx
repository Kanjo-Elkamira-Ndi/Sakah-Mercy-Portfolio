'use client'

import { motion } from 'framer-motion'

export function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-near-white">{name}</span>
        <span className="font-mono text-xs text-muted-text">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
        <motion.div
          className="h-full rounded-full bg-netflix-red"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
