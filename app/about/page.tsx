import type { Metadata } from 'next'
import { GraduationCap } from 'lucide-react'
import { designSkills, technicalSkills, processSteps } from '@/data/skills'
import { SkillBar } from '@/components/skill-bar'
import { ProcessStep } from '@/components/process-step'
import { SectionHeading } from '@/components/section-heading'
import { ActionLink } from '@/components/action-button'
import { PageTransition } from '@/components/page-transition'

export const metadata: Metadata = {
  title: 'About — Sakah Vernyuy Mercy',
  description:
    'About Sakah Vernyuy Mercy, a Product Designer and Software Engineering student passionate about user-centered design.',
}

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="mx-auto max-w-6xl px-5 pb-28 pt-32 lg:px-8 lg:pt-40">
        {/* Intro */}
        <section className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-netflix-red">
              About Me
            </span>
            <h1 className="mt-3 font-heading text-4xl font-extrabold tracking-tight text-near-white text-balance sm:text-5xl">
              Designing with empathy and intent
            </h1>
            <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-text">
              <p>
                I&apos;m Sakah Vernyuy Mercy, a Product Designer and Software
                Engineering student who believes the best products feel
                effortless because someone cared deeply about the details. My
                work sits at the intersection of research, design, and
                engineering.
              </p>
              <p>
                I focus on understanding the people I design for. Through
                interviews, testing, and a healthy obsession with clarity, I
                turn messy problems into experiences that feel calm, confident,
                and genuinely useful.
              </p>
              <p>
                When I&apos;m not in Figma, I&apos;m exploring how design and
                code come together, prototyping ideas, and learning from the
                communities and mentors who push my craft forward.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-full p-1.5 ring-2 ring-netflix-red">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.png"
                alt="Portrait of Sakah Vernyuy Mercy"
                className="h-56 w-56 rounded-full object-cover sm:h-64 sm:w-64"
              />
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mt-24">
          <SectionHeading label="How I Work" title="My Process" />
          <div className="mt-10 flex flex-col gap-4 lg:flex-row">
            {processSteps.map((step, i) => (
              <ProcessStep key={step.number} step={step} index={i} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-24">
          <SectionHeading label="Skills" title="What I Bring" />
          <div className="mt-10 grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="font-heading text-lg font-bold text-near-white">
                Design Skills
              </h3>
              <div className="mt-6 flex flex-col gap-5">
                {designSkills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-near-white">
                Technical Skills
              </h3>
              <div className="mt-6 flex flex-col gap-5">
                {technicalSkills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mt-24">
          <SectionHeading label="Background" title="Education" />
          <div className="mt-10 flex items-start gap-5 rounded-lg border-l-2 border-netflix-red bg-surface p-6">
            <GraduationCap size={28} className="mt-1 shrink-0 text-netflix-red" aria-hidden />
            <div>
              <h3 className="font-heading text-lg font-bold text-near-white">
                Bachelor of Technology in Software Engineering
              </h3>
              <p className="mt-1 font-mono text-sm text-muted-text">
                ICT University · 2021 — 2025
              </p>
            </div>
          </div>
        </section>

        {/* Resume */}
        <section className="mt-24 flex flex-col items-center text-center">
          <h2 className="font-heading text-2xl font-bold text-near-white">
            Want the full picture?
          </h2>
          <p className="mt-3 max-w-md text-muted-text">
            Download my resume for a detailed look at my experience and work.
          </p>
          <div className="mt-8">
            <ActionLink href="#" variant="outlined" size="lg">
              Download Resume
            </ActionLink>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
