import { testimonials } from '@/data/testimonials'
import { TestimonialCard } from '@/components/testimonial-card'
import { SectionHeading } from '@/components/section-heading'

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading label="Testimonials" title="Kind Words" />
      <div className="no-scrollbar mt-12 flex gap-5 overflow-x-auto pb-2">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </section>
  )
}
