'use client'

import { motion } from 'framer-motion'
import { featuredProjects } from '@/data/projects'
import { ProjectCard } from '@/components/project-card'
import { SectionHeading } from '@/components/section-heading'

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading label="Portfolio" title="Selected Work" />
      <motion.div
        className="mt-12 grid gap-6 md:grid-cols-2"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
      >
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
}
