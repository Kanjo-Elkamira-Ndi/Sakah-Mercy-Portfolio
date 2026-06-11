import type { Metadata } from 'next'
import { ProjectsGrid } from '@/components/projects/projects-grid'
import { PageTransition } from '@/components/page-transition'
import { SectionHeading } from '@/components/section-heading'

export const metadata: Metadata = {
  title: 'Projects — Sakah Vernyuy Mercy',
  description: 'A selection of product design and UX case studies.',
}

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-32 lg:px-8 lg:pt-40">
        <SectionHeading label="Portfolio" title="All Projects" />
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-text">
          A collection of case studies spanning UX research, interface design,
          and end-to-end product work.
        </p>
        <div className="mt-12">
          <ProjectsGrid />
        </div>
      </div>
    </PageTransition>
  )
}
