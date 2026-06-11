'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/skills'
import { SectionHeading } from '@/components/section-heading'

export function SkillsSection() {
  return (
    <section className="bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionHeading label="Capabilities" title="What I Do" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              className="flex flex-col gap-3 rounded-lg border-l-2 border-netflix-red bg-surface p-6"
            >
              <skill.icon size={24} className="text-netflix-red" aria-hidden />
              <h3 className="font-heading text-lg font-bold text-near-white">
                {skill.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-text">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
