'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <motion.article
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden rounded-lg border border-border bg-surface transition-shadow duration-200 group-hover:[box-shadow:0_0_0_1px_#E50914]"
        >
          <div className="aspect-[16/10] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.coverImage || '/placeholder.svg'}
              alt={`${project.title} cover`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-3 p-6">
            <span className="font-mono text-xs uppercase tracking-wider text-netflix-red">
              {project.category}
            </span>
            <h3 className="font-heading text-xl font-bold text-near-white">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-text">
              {project.shortDescription}
            </p>
            <span className="mt-1 inline-flex items-center gap-1.5 font-mono text-sm text-near-white transition-colors group-hover:text-netflix-red">
              View Case Study
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  )
}
