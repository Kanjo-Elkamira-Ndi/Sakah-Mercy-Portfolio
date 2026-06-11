export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'Sakah has a rare gift for turning ambiguous problems into clear, elegant flows. She listens deeply to users and translates that into design decisions everyone can rally behind.',
    name: 'Lena Fischer',
    role: 'Head of Product',
    company: 'CareerFlight',
  },
  {
    id: '2',
    quote:
      'Working with Sakah raised the bar for our whole team. Her research was rigorous, her prototypes were polished, and she always kept the user at the center.',
    name: 'Marcus Bello',
    role: 'Engineering Lead',
    company: 'Houseman',
  },
  {
    id: '3',
    quote:
      'She delivered a patient portal that our least tech-savvy users actually enjoy. The drop in support calls spoke for itself. A thoughtful, dependable designer.',
    name: 'Dr. Priya Nair',
    role: 'Clinical Director',
    company: 'Community Health Center',
  },
]
