import { Hero } from '@/components/home/hero'
import { AboutSection } from '@/components/home/about-section'
import { ExpertiseSection } from '@/components/home/expertise-section'
import { FeaturedProjects } from '@/components/home/featured-projects'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { ContactCta } from '@/components/home/contact-cta'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <ContactCta />
    </>
  )
}
