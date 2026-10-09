import { Link, NavLink } from 'react-router'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" to="/" aria-label="Hannah Galocy, home">
        hg<span aria-hidden="true">.</span>
      </Link>
      <nav aria-label="Main navigation">
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">About</NavLink>
        <a href="https://www.linkedin.com/in/hannah-galocy-0b10b3153/">
          Contact
        </a>
      </nav>
    </header>
  )
}
