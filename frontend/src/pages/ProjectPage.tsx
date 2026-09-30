import { Link, useParams } from 'react-router'
import ProjectFigure from '../components/ProjectFigure'
import ProjectSection from '../components/ProjectSection'
import { projects } from '../data/projects'
import NotFoundPage from './NotFoundPage'
import '../project.css'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((entry) => entry.slug === slug)

  if (!project) return <NotFoundPage />

  return (
    <article className="case-study" aria-labelledby="project-title">
      <title>{`${project.title} \u2014 Hannah Galocy`}</title>
      <Link className="back-link" to="/work">
        <span aria-hidden="true">&larr;</span> Back to Work
      </Link>

      <header className="case-header">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Project notes
          </p>
          <h1 className="case-title" id="project-title">
            {project.title}
          </h1>
        </div>
        <div className="case-overview">
          <p className="case-summary">{project.summary}</p>
          {project.technologies && project.technologies.length > 0 && (
            <ul className="case-tags" aria-label="Technologies">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          )}
          {project.externalLink && (
            <a className="case-external-link" href={project.externalLink.url}>
              {project.externalLink.label} <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </header>

      <div className="case-hero">
        <ProjectFigure image={project.heroImage} priority />
      </div>

      <div className="case-sections">
        {project.sections.map((section, index) => (
          <ProjectSection key={section.id} section={section} index={index} />
        ))}
      </div>

      <footer className="case-footer">
        <Link className="back-link" to="/work">
          <span aria-hidden="true">&larr;</span> Back to Work
        </Link>
        {project.externalLink && (
          <a className="case-external-link" href={project.externalLink.url}>
            {project.externalLink.label} <span aria-hidden="true">↗</span>
          </a>
        )}
      </footer>
    </article>
  )
}
