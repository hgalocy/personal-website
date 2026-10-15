import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <section className="projects-page" aria-labelledby="projects-title">
      <title>Projects — Hannah Galocy</title>
      <div className="projects-intro">
        <p className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true" />
          Projects & experiments
        </p>
        <h1 className="projects-title" id="projects-title">
          Projects
        </h1>
        <p className="projects-summary">
          A collection of things I’m building and exploring.
        </p>
      </div>
      <ul className="project-grid" aria-label="Projects">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  )
}
