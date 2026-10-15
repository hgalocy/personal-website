import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <section className="projects-page" aria-labelledby="not-found-title">
      <title>Page not found — Hannah Galocy</title>
      <p className="eyebrow">404</p>
      <h1 className="projects-title" id="not-found-title">
        Page not found
      </h1>
      <p className="projects-summary">
        This page doesn’t exist. Explore the projects instead.
      </p>
      <Link className="back-link" to="/projects">
        <span aria-hidden="true">←</span> Back to Projects
      </Link>
    </section>
  )
}
