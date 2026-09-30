import { Route, Routes } from 'react-router'
import RouteFocus from './components/RouteFocus'
import SiteHeader from './components/SiteHeader'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import ProjectPage from './pages/ProjectPage'
import WorkPage from './pages/WorkPage'

export default function App() {
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <RouteFocus />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}
