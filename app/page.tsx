import { Hero } from '@/components/home/hero'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { SkillsSection } from '@/components/home/skills-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { ContactCta } from '@/components/home/contact-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <SkillsSection />
      <TestimonialsSection />
      <ContactCta />
    </>
  )
}
