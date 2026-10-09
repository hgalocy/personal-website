import { Link } from 'react-router'
import genevaPortrait from '../../data/images/about/hannah_in_geneva.jpg'
import tokyoPortrait from '../../data/images/about/hannah_in_tokyo.jpg'
import '../about.css'

const areas = [
  'C++',
  'Python',
  'AI Applications',
  'Robotics',
  'Full-stack development',
  'Hardware & software integration',
  'Testing & automation',
]

export default function AboutPage() {
  return (
    <>
      <title>About — Hannah Galocy</title>
      <article className="about-page" aria-labelledby="about-title">
        <section className="about-intro" aria-labelledby="about-title">
          <div className="about-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />A little about
              Hannah
            </p>
            <h1 className="about-title" id="about-title">
              About me<span>.</span>
            </h1>
            <p className="about-lead">
              I’m a software engineer who likes building systems where software,
              hardware, and real-world behavior all have to work together.
            </p>
            <p>
              I studied Computer Engineering at San Diego State University,
              which gave me a strong foundation across both software and
              hardware. Since then, I’ve spent several years working on
              production systems in C++ and Python, building tools, interfaces,
              test infrastructure, and integrations across complex software
              systems.
            </p>
            <p>
              More recently, I’ve been especially interested in applied AI and
              robotics. I’m currently building Navi, an AI companion robot that
              combines natural conversation, persistent memory, speech
              recognition, text-to-speech, and a real-time animated interface.
            </p>
          </div>
          <figure className="about-photo about-photo-geneva">
            <img
              src={tokyoPortrait}
              alt="Hannah on a lively street in Tokyo at night"
              width="1080"
              height="1350"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <section className="about-areas" aria-labelledby="about-areas-title">
          <div>
            <p className="about-kicker">Tools & interests</p>
            <h2 id="about-areas-title">What I build with</h2>
          </div>
          <div>
            <p className="about-section-description">
              Technologies and areas I’ve worked with across production
              software, personal projects, hardware integration, and AI systems.
            </p>
            <ul className="about-tags" aria-label="Technologies and areas">
              {areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="about-personal"
          aria-labelledby="about-personal-title"
        >
          <figure className="about-photo about-photo-tokyo">
            <img
              src={genevaPortrait}
              alt="Hannah holding a warm drink at a café in Geneva"
              width="1536"
              height="2048"
            />
          </figure>
          <div className="about-copy">
            <p className="about-kicker">Beyond the keyboard</p>
            <h2 id="about-personal-title">A little more me</h2>
            <p>
              Outside of work, I’m usually hanging out with my Australian
              Shepherd, Penny, at hot yoga, rollerblading around San Diego, or
              finding an excuse to get to the mountains and ski. I love
              traveling, video games, and making things... although my personal
              projects have a habit of turning “I wonder if I could build that”
              into a much bigger undertaking than planned.
            </p>
          </div>
        </section>

        <section
          className="about-connect"
          aria-labelledby="about-connect-title"
        >
          <div>
            <p className="about-kicker">Keep exploring</p>
            <h2 id="about-connect-title">See what I’m building. Say hello.</h2>
          </div>
          <div className="about-actions">
            <Link className="button-primary" to="/work">
              View my work <span aria-hidden="true">↗</span>
            </Link>
            <a
              className="github-link"
              href="https://www.linkedin.com/in/hannah-galocy-0b10b3153/"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </article>
    </>
  )
}
