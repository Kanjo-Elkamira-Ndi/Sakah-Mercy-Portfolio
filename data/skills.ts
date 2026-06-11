import type { LucideIcon } from 'lucide-react'
import {
  Search,
  Palette,
  PenTool,
  MousePointerClick,
  ClipboardCheck,
  Layers,
} from 'lucide-react'

export type Skill = {
  icon: LucideIcon
  name: string
  description: string
}

export const skills: Skill[] = [
  {
    icon: Search,
    name: 'UX Research',
    description: 'Interviews, surveys, and synthesis that uncover what users truly need.',
  },
  {
    icon: Palette,
    name: 'UI Design',
    description: 'Crafting clean, accessible interfaces with strong visual hierarchy.',
  },
  {
    icon: PenTool,
    name: 'Wireframing',
    description: 'Rapidly translating ideas into low-fidelity structure and flow.',
  },
  {
    icon: Layers,
    name: 'Prototyping',
    description: 'Building interactive prototypes to validate ideas before build.',
  },
  {
    icon: ClipboardCheck,
    name: 'Usability Testing',
    description: 'Designing and running tests that turn observations into fixes.',
  },
  {
    icon: MousePointerClick,
    name: 'Interaction Design',
    description: 'Defining motion, states, and micro-interactions that feel right.',
  },
]

export type ProficiencySkill = {
  name: string
  level: number
}

export const designSkills: ProficiencySkill[] = [
  { name: 'Figma', level: 95 },
  { name: 'User Research', level: 90 },
  { name: 'Wireframing', level: 92 },
  { name: 'Prototyping', level: 88 },
  { name: 'Usability Testing', level: 85 },
  { name: 'Information Architecture', level: 82 },
]

export const technicalSkills: ProficiencySkill[] = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 88 },
  { name: 'JavaScript', level: 78 },
  { name: 'React', level: 72 },
  { name: 'Git', level: 80 },
]

export type ProcessStepData = {
  number: string
  name: string
  description: string
}

export const processSteps: ProcessStepData[] = [
  { number: '01', name: 'Research', description: 'Understand users, context, and constraints.' },
  { number: '02', name: 'Define', description: 'Frame the real problem worth solving.' },
  { number: '03', name: 'Ideate', description: 'Explore many directions, fast.' },
  { number: '04', name: 'Design', description: 'Craft the interface and the flow.' },
  { number: '05', name: 'Test', description: 'Validate with real people.' },
  { number: '06', name: 'Improve', description: 'Iterate based on what we learn.' },
]
