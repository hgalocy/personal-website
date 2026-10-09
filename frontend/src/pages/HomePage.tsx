import { Link } from 'react-router'
import beachPortrait from '../../data/images/home/hannah_beach.jpeg'

export default function HomePage() {
  return (
    <>
      <title>Hannah Galocy — Software Engineer</title>
      <section className="hero" id="about" aria-labelledby="hero-title">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Hannah Galocy
          </p>
          <h1 id="hero-title">
            I build
            <br />
            software<span className="smile"> :)</span>
          </h1>
          <p className="hero-description">
            Software engineer focused on AI, robotics, and computer vision.
          </p>
          <div className="hero-actions">
            <Link className="button-primary" to="/work">
              View my work <span aria-hidden="true">↗</span>
            </Link>
            <a className="github-link" href="https://github.com/hgalocy">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img
            src={beachPortrait}
            alt="Hannah sitting on the rocks above the ocean at twilight"
            fetchPriority="high"
          />
        </div>
      </section>
    </>
  )
}
