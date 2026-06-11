import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { getProjectBySlug, projects } from '@/data/projects'
import { CaseStudySection } from '@/components/case-study-section'
import { ImageGrid } from '@/components/image-grid'
import { MetricCard } from '@/components/metric-card'
import { PrototypeEmbed } from '@/components/prototype-embed'
import { PageTransition } from '@/components/page-transition'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  return {
    title: `${project.title} — Case Study`,
    description: project.shortDescription,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  return (
    <PageTransition>
      <article className="mx-auto max-w-4xl px-5 pb-28 pt-28 lg:px-8 lg:pt-36">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted-text transition-colors hover:text-netflix-red"
        >
          <ArrowLeft size={16} />
          All Projects
        </Link>

        {/* Hero */}
        <header className="mt-10">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-netflix-red">
            {project.category}
          </span>
          <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-near-white text-balance sm:text-5xl">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs text-muted-text">
            <span>{project.role}</span>
            <span className="text-netflix-red">·</span>
            <span>{project.duration}</span>
            <span className="text-netflix-red">·</span>
            <span>{project.tools.join(', ')}</span>
            <span className="text-netflix-red">·</span>
            <span>{project.year}</span>
          </div>
        </header>

        <div className="mt-10 overflow-hidden rounded-xl border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.coverImage || '/placeholder.svg'}
            alt={`${project.title} cover`}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="mt-16 flex flex-col gap-16">
          <CaseStudySection label="01 — Overview" title="Overview">
            <p className="leading-relaxed text-muted-text">{project.overview}</p>
          </CaseStudySection>

          <CaseStudySection label="02 — Problem" title="Problem Statement">
            <p className="leading-relaxed text-muted-text">{project.problem}</p>
            <div className="mt-6 rounded-lg border border-netflix-red bg-surface p-6">
              <p className="font-mono text-sm leading-relaxed text-near-white">
                &ldquo;How might we guide users from uncertainty to confident
                action without overwhelming them?&rdquo;
              </p>
            </div>
          </CaseStudySection>

          <CaseStudySection label="03 — Research" title="Research">
            <p className="leading-relaxed text-muted-text">
              Through interviews, surveys, and competitive analysis, a few clear
              themes emerged that shaped the direction of the product.
            </p>
            <ul className="mt-5 flex flex-col gap-3">
              {project.researchFindings.map((finding) => (
                <li
                  key={finding}
                  className="flex gap-3 text-sm leading-relaxed text-muted-text"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-netflix-red" />
                  {finding}
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection label="04 — Personas" title="User Personas">
            <div className="grid gap-5 md:grid-cols-2">
              {project.personas.map((persona) => (
                <div
                  key={persona.name}
                  className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6"
                >
                  <div>
                    <h3 className="font-heading text-lg font-bold text-near-white">
                      {persona.name}
                    </h3>
                    <p className="font-mono text-xs text-muted-text">
                      {persona.age} · {persona.occupation}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-netflix-red">
                      Goals
                    </p>
                    <ul className="mt-2 flex flex-col gap-1.5">
                      {persona.goals.map((g) => (
                        <li key={g} className="text-sm text-muted-text">
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-netflix-red">
                      Pain Points
                    </p>
                    <ul className="mt-2 flex flex-col gap-1.5">
                      {persona.painPoints.map((p) => (
                        <li key={p} className="text-sm text-muted-text">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection label="05 — Journey" title="User Journey">
            <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
              {project.journeyStages.map((stage, i) => (
                <div
                  key={stage}
                  className="flex min-w-[120px] flex-1 flex-col gap-2 rounded-lg border border-border bg-surface p-4"
                >
                  <span className="font-mono text-xs text-netflix-red">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-heading text-sm font-semibold text-near-white">
                    {stage}
                  </span>
                </div>
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection label="06 — Wireframes" title="Wireframes">
            <ImageGrid images={project.wireframeImages} columns={2} />
          </CaseStudySection>

          <CaseStudySection
            label="07 — Hi-Fi"
            title="High-Fidelity Designs"
          >
            <ImageGrid images={project.hifiImages} columns={3} />
          </CaseStudySection>

          <CaseStudySection label="08 — Prototype" title="Prototype">
            <PrototypeEmbed />
          </CaseStudySection>

          <CaseStudySection label="09 — Testing" title="Usability Testing">
            <p className="leading-relaxed text-muted-text">
              Moderated usability sessions surfaced concrete opportunities to
              reduce friction and clarify the experience.
            </p>
            <ol className="mt-5 flex flex-col gap-3">
              {project.usabilityFindings.map((finding, i) => (
                <li
                  key={finding}
                  className="flex gap-4 text-sm leading-relaxed text-muted-text"
                >
                  <span className="font-mono text-netflix-red">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {finding}
                </li>
              ))}
            </ol>
          </CaseStudySection>

          <CaseStudySection label="10 — Outcome" title="Final Outcome">
            <p className="leading-relaxed text-muted-text">
              The redesign delivered measurable improvements across the key
              metrics we set out to move.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {project.metrics.map((metric, i) => (
                <MetricCard
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                  index={i}
                />
              ))}
            </div>
          </CaseStudySection>

          <CaseStudySection label="11 — Reflection" title="Reflection">
            <p className="leading-relaxed text-muted-text">
              {project.reflection}
            </p>
          </CaseStudySection>
        </div>
      </article>
    </PageTransition>
  )
}
