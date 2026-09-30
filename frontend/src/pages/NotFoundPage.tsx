import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <section className="work-page" aria-labelledby="not-found-title">
      <title>Page not found — Hannah Galocy</title>
      <p className="eyebrow">404</p>
      <h1 className="work-title" id="not-found-title">
        Page not found
      </h1>
      <p className="work-summary">
        This page doesn’t exist. Explore the projects instead.
      </p>
      <Link className="back-link" to="/work">
        <span aria-hidden="true">←</span> Back to Work
      </Link>
    </section>
  )
}
