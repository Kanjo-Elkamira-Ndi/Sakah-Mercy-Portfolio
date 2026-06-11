import type { Testimonial } from '@/data/testimonials'
import { Quote } from 'lucide-react'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex w-[300px] shrink-0 flex-col gap-5 rounded-lg border border-border bg-surface p-6 sm:w-[360px]">
      <Quote size={24} className="text-netflix-red" aria-hidden />
      <blockquote className="flex-1 text-sm leading-relaxed text-near-white">
        {testimonial.quote}
      </blockquote>
      <figcaption className="border-t border-border pt-4">
        <p className="font-heading text-sm font-semibold text-near-white">
          {testimonial.name}
        </p>
        <p className="font-mono text-xs text-muted-text">
          {testimonial.role} · {testimonial.company}
        </p>
      </figcaption>
    </figure>
  )
}
