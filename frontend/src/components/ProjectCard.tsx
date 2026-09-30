import { Link } from 'react-router'
import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <li>
      <Link className="project-card" to={`/work/${project.slug}`}>
        <div className="project-card-image">
          <img
            src={project.image}
            alt=""
            width="1200"
            height="800"
            loading="lazy"
          />
        </div>
        <div className="project-card-caption">
          <h2>{project.title}</h2>
          <span aria-hidden="true">↗</span>
        </div>
        <p className="project-card-label">View project</p>
      </Link>
    </li>
  )
}
