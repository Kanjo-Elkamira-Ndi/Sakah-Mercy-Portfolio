'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Sparkles, GitBranch } from 'lucide-react'
import { FigmaIcon } from '@/components/brand-icons'

interface Category {
  title: string
  description: string
  technologies: string[]
  icon?: React.ElementType
  featured?: boolean
}

const categories: Category[] = [
  {
    title: 'Design & Research',
    description:
      'Transforming user insights into meaningful product experiences.',
    technologies: ['Figma', 'FigJam', 'Miro', 'Whimsical', 'Canva'],
    icon: FigmaIcon,
    featured: true,
  },
  {
    title: 'Frontend Development',
    description:
      'Building responsive, scalable, and accessible digital products.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    icon: Code2,
  },
  {
    title: 'UI Engineering',
    description:
      'Creating polished interfaces with modern frontend ecosystems.',
    technologies: ['Tailwind CSS', 'Bootstrap', 'Material UI', 'shadcn/ui'],
    icon: Palette,
  },
  {
    title: 'Interaction & Motion',
    description:
      'Enhancing user experiences through thoughtful animation.',
    technologies: ['Framer Motion'],
    icon: Sparkles,
  },
  {
    title: 'Collaboration & Version Control',
    description:
      'Maintaining efficient workflows and collaborative product development.',
    technologies: ['Git', 'GitHub'],
    icon: GitBranch,
  },
]

function TechPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line/60 bg-surface/60 px-3 py-1 font-mono text-[11px] tracking-wide text-muted-text transition-colors duration-200 group-hover/expertise:border-netflix-red/30 group-hover/expertise:text-near-white">
      {label}
    </span>
  )
}

export function ExpertiseSection() {
  const featured = categories[0]
  const FeaturedIcon = featured.icon

  return (
    <section className="border-t border-line/40">
      <div className="mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-netflix-red">
            Capabilities
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-near-white text-balance sm:text-4xl lg:text-5xl">
            Technical Expertise
          </h2>
        </motion.div>

        {/* Featured: Design & Research */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="group/expertise mb-6"
        >
          <div className="relative overflow-hidden rounded-lg border border-line/60 bg-surface p-8 transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(229,9,20,0.08)] sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-[0.04]"
              style={{
                background:
                  'radial-gradient(circle, #e50914, transparent 70%)',
              }}
            />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  {FeaturedIcon && <FeaturedIcon size={22} className="text-netflix-red" />}
                  <h3 className="font-display text-xl font-semibold text-near-white">
                    {featured.title}
                  </h3>
                </div>
                <p className="max-w-lg text-sm leading-relaxed text-muted-text">
                  {featured.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {featured.technologies.map((t) => (
                  <TechPill key={t} label={t} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Remaining categories: 2x2 grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {categories.slice(1).map((category, i) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + i * 0.08,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <div className="group/expertise relative flex h-full flex-col gap-4 rounded-lg border border-line/60 bg-surface/80 p-6 transition-all duration-300 hover:border-netflix-red/30 hover:shadow-[0_4px_20px_rgba(229,9,20,0.06)] sm:p-7">
                  <div className="flex items-center gap-3">
                    {Icon && <Icon size={20} className="text-netflix-red" />}
                    <h3 className="font-display text-base font-semibold text-near-white">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-text">
                    {category.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {category.technologies.map((t) => (
                      <TechPill key={t} label={t} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
