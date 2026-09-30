import projectData from '../../data/projects.json'

export interface Project {
  slug: string
  title: string
  image: string
  description: string
  link: string
}

export const projects: Project[] = projectData
