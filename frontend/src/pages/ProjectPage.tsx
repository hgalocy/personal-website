import { Link, useParams } from 'react-router'
import { projects } from '../data/projects'
import NotFoundPage from './NotFoundPage'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((entry) => entry.slug === slug)

  if (!project) return <NotFoundPage />

  return (
    <article className="work-page project-page" aria-labelledby="project-title">
      <title>{`${project.title} — Hannah Galocy`}</title>
      <Link className="back-link" to="/work">
        <span aria-hidden="true">←</span> Back to Work
      </Link>
      <h1 className="work-title" id="project-title">
        {project.title}
      </h1>
      <div className="project-detail">
        <img
          className="project-detail-image"
          src={project.image}
          alt={`${project.title} placeholder illustration`}
          width="1200"
          height="800"
        />
        <div className="project-detail-copy">
          <h2>About the project</h2>
          <p>{project.description}</p>
          <a className="project-external-link" href={project.link}>
            Visit project (placeholder) <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  )
}
