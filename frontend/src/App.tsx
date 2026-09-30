import beachPortrait from '../data/hannah_beach.jpeg'

const githubUrl = 'https://github.com/hgalocy'
const workUrl = `${githubUrl}?tab=repositories`

export default function App() {
  return (
    <div className="portfolio">
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#about" aria-label="Hannah Galocy, home">
          hg<span aria-hidden="true">.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href={workUrl}>Work</a>
          <a href="#about">About</a>
          <a href="https://www.linkedin.com/in/hannah-galocy-0b10b3153/">
            Contact
          </a>
        </nav>
      </header>
      <main>
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
              <a className="button-primary" href={workUrl}>
                View my work <span aria-hidden="true">↗</span>
              </a>
              <a className="github-link" href={githubUrl}>
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
      </main>
    </div>
  )
}
