export type Persona = {
  name: string
  age: number
  occupation: string
  goals: string[]
  painPoints: string[]
}

export type Metric = {
  label: string
  value: string
}

export type Project = {
  id: string
  slug: string
  title: string
  category: string
  shortDescription: string
  coverImage: string
  featured: boolean
  // Case study fields
  overview: string
  problem: string
  researchFindings: string[]
  personas: Persona[]
  journeyStages: string[]
  wireframeImages: string[]
  hifiImages: string[]
  usabilityFindings: string[]
  metrics: Metric[]
  tools: string[]
  duration: string
  role: string
  year: string
  reflection: string
}

const img = (seed: string, w = 800, h = 600) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`

const careerFlight: Project = {
  id: '1',
  slug: 'careerflight',
  title: 'CareerFlight',
  category: 'UX Design',
  shortDescription:
    'A career-discovery platform that helps recent graduates map a path into their first role.',
  coverImage: img('careerflight-cover', 1600, 900),
  featured: true,
  overview:
    'CareerFlight is a guided career-discovery platform built to help recent graduates and career switchers translate their interests and skills into a concrete, actionable job search. The product combines assessment, personalized roadmaps, and curated learning resources into a single calm, confidence-building experience.',
  problem:
    'Recent graduates are overwhelmed by fragmented job-search tools and generic advice. They lack a clear, personalized path from "I have a degree" to "I landed my first role," which leads to anxiety, decision paralysis, and high drop-off before they ever apply.',
  researchFindings: [
    '78% of interviewed graduates felt existing job boards were "noisy" and impersonal.',
    'Users abandoned the search process most often during the application stage.',
    'Participants wanted step-by-step guidance, not more raw listings.',
    'Trust signals (real salaries, real timelines) strongly influenced engagement.',
  ],
  personas: [
    {
      name: 'Amara Okoye',
      age: 23,
      occupation: 'Recent CS Graduate',
      goals: [
        'Find an entry-level role within 3 months',
        'Understand which skills to prioritize',
        'Build confidence before interviews',
      ],
      painPoints: [
        'Too many job boards with low-quality listings',
        'Unsure how to position a thin resume',
        'Feels isolated during the search',
      ],
    },
    {
      name: 'David Mensah',
      age: 29,
      occupation: 'Career Switcher (Teaching → UX)',
      goals: [
        'Translate transferable skills into a new field',
        'Find a structured learning path',
        'Connect with mentors',
      ],
      painPoints: [
        'Imposter syndrome entering a new industry',
        'Overwhelmed by conflicting online advice',
        'Limited time alongside a full-time job',
      ],
    },
  ],
  journeyStages: [
    'Discover',
    'Assess',
    'Plan',
    'Learn',
    'Apply',
    'Land',
  ],
  wireframeImages: [
    img('cf-wire-1'),
    img('cf-wire-2'),
    img('cf-wire-3'),
    img('cf-wire-4'),
  ],
  hifiImages: [
    img('cf-hifi-1'),
    img('cf-hifi-2'),
    img('cf-hifi-3'),
    img('cf-hifi-4'),
    img('cf-hifi-5'),
    img('cf-hifi-6'),
  ],
  usabilityFindings: [
    'Users completed onboarding 32% faster after simplifying the assessment to 5 steps.',
    'Renaming "Roadmap" to "My Path" improved comprehension in testing.',
    'Adding progress indicators reduced mid-flow abandonment significantly.',
    'A persistent "next best action" card became the most-used feature.',
  ],
  metrics: [
    { label: 'Reduction in drop-off', value: '40%' },
    { label: 'Faster onboarding', value: '32%' },
    { label: 'Task success rate', value: '94%' },
  ],
  tools: ['Figma', 'Maze', 'Notion', 'FigJam'],
  duration: '12 weeks',
  role: 'Lead Product Designer',
  year: '2024',
  reflection:
    'CareerFlight reinforced how much clarity matters under stress. The biggest wins came not from new features but from removing friction and naming things in the userʼs own language. If I revisited it, I would invest earlier in measuring emotional confidence, not just task completion.',
}

// Helper to clone the case study shape for other projects
const makeProject = (
  overrides: Partial<Project> & Pick<Project, 'id' | 'slug' | 'title' | 'category' | 'shortDescription' | 'coverImage' | 'featured'>,
): Project => ({
  ...careerFlight,
  ...overrides,
})

export const projects: Project[] = [
  careerFlight,
  makeProject({
    id: '2',
    slug: 'houseman',
    title: 'Houseman',
    category: 'Mobile',
    shortDescription:
      'A home-services marketplace mobile app connecting homeowners with trusted local pros.',
    coverImage: img('houseman-cover', 1600, 900),
    featured: true,
  }),
  makeProject({
    id: '3',
    slug: 'community-health-center',
    title: 'Community Health Center',
    category: 'Web',
    shortDescription:
      'A redesigned patient portal making appointment booking and records access effortless.',
    coverImage: img('chc-cover', 1600, 900),
    featured: true,
  }),
  makeProject({
    id: '4',
    slug: 'lumen-banking',
    title: 'Lumen Banking',
    category: 'UI Design',
    shortDescription:
      'A clean mobile banking interface focused on spending clarity and effortless transfers.',
    coverImage: img('lumen-cover', 1600, 900),
    featured: false,
  }),
  makeProject({
    id: '5',
    slug: 'verde-grocery',
    title: 'Verde Grocery',
    category: 'Mobile',
    shortDescription:
      'A sustainable grocery delivery app that surfaces local, low-waste choices.',
    coverImage: img('verde-cover', 1600, 900),
    featured: false,
  }),
  makeProject({
    id: '6',
    slug: 'atlas-analytics',
    title: 'Atlas Analytics',
    category: 'Web',
    shortDescription:
      'A SaaS analytics dashboard that turns dense data into clear, actionable stories.',
    coverImage: img('atlas-cover', 1600, 900),
    featured: false,
  }),
]

export const categories = ['All', 'UX Design', 'UI Design', 'Mobile', 'Web']

export const getProjectBySlug = (slug: string): Project =>
  projects.find((p) => p.slug === slug) ?? careerFlight

export const featuredProjects = projects.filter((p) => p.featured)
