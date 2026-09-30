import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function WorkPage() {
  return (
    <section className="work-page" aria-labelledby="work-title">
      <title>Work — Hannah Galocy</title>
      <div className="work-intro">
        <p className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true" />
          Projects & experiments
        </p>
        <h1 className="work-title" id="work-title">
          Work
        </h1>
        <p className="work-summary">
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
