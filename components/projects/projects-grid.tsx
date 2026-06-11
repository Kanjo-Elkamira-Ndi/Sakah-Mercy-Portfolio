'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, categories } from '@/data/projects'
import { ProjectCard } from '@/components/project-card'
import { cn } from '@/lib/utils'

export function ProjectsGrid() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () =>
      active === 'All'
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  )

  return (
    <div>
      <div className="no-scrollbar flex gap-6 overflow-x-auto border-b border-border pb-px">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              'relative shrink-0 pb-3 font-mono text-sm transition-colors',
              active === cat
                ? 'text-netflix-red'
                : 'text-muted-text hover:text-near-white',
            )}
          >
            {cat}
            {active === cat && (
              <motion.span
                layoutId="filter-underline"
                className="absolute -bottom-px left-0 h-0.5 w-full bg-netflix-red"
              />
            )}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
