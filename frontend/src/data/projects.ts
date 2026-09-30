import projectData from '../../data/projects.json'

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

interface SectionBase {
  id: string
  heading: string
}

export type ProjectSection = SectionBase &
  (
    | { type: 'text'; paragraphs: string[] }
    | { type: 'image'; paragraphs?: string[]; image: ProjectImage }
    | {
        type: 'split'
        paragraphs: string[]
        image: ProjectImage
        imagePosition?: 'left' | 'right'
      }
    | { type: 'gallery'; paragraphs?: string[]; images: ProjectImage[] }
  )

export interface Project {
  slug: string
  title: string
  heroImage: ProjectImage
  summary: string
  technologies?: string[]
  externalLink?: { label: string; url: string }
  sections: ProjectSection[]
}

// JSON strings are not literal types. Narrow section types at the data boundary
// so components can use a discriminated union without unsafe type assertions.
interface RawSection extends SectionBase {
  type: string
  paragraphs?: string[]
  image?: ProjectImage
  images?: ProjectImage[]
  imagePosition?: string
}

interface RawProject extends Omit<Project, 'sections'> {
  sections: RawSection[]
}

const imageUrls = import.meta.glob<string>(
  '../../data/images/**/*.{png,jpg,jpeg,svg,webp,avif}',
  // File URLs also let visitors open small SVGs in a new tab (not data URLs).
  { eager: true, query: '?url&no-inline', import: 'default' },
)

function resolveImage(image: ProjectImage): ProjectImage {
  const src = imageUrls[`../../data/images/${image.src}`]
  if (!src) throw new Error(`Project image not found: ${image.src}`)
  return { ...image, src }
}

function required<T>(
  value: T | undefined,
  field: string,
  sectionId: string,
): T {
  if (value === undefined) {
    throw new Error(`Project section "${sectionId}" requires ${field}.`)
  }
  return value
}

function resolveSection(section: RawSection): ProjectSection {
  const { id, heading, paragraphs } = section
  const base = { id, heading, paragraphs }

  switch (section.type) {
    case 'text':
      return {
        ...base,
        type: 'text',
        paragraphs: required(paragraphs, 'paragraphs', id),
      }
    case 'image':
      return {
        ...base,
        type: 'image',
        image: resolveImage(required(section.image, 'image', id)),
      }
    case 'split': {
      const imagePosition = section.imagePosition ?? 'right'
      if (imagePosition !== 'left' && imagePosition !== 'right') {
        throw new Error(`Invalid imagePosition in section "${id}".`)
      }
      return {
        ...base,
        type: 'split',
        paragraphs: required(paragraphs, 'paragraphs', id),
        image: resolveImage(required(section.image, 'image', id)),
        imagePosition,
      }
    }
    case 'gallery':
      return {
        ...base,
        type: 'gallery',
        images: required(section.images, 'images', id).map(resolveImage),
      }
    default:
      throw new Error(`Unknown project section type: ${section.type}`)
  }
}

const rawProjects: RawProject[] = projectData

export const projects: Project[] = rawProjects.map((project) => ({
  ...project,
  heroImage: resolveImage(project.heroImage),
  sections: project.sections.map(resolveSection),
}))
