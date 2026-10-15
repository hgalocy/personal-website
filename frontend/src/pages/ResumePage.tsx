import resumeUrl from '../../data/Hannah_Galocy_Resume_2026_Public.pdf?url'
import '../resume.css'

export default function ResumePage() {
  return (
    <section className="resume-page" aria-labelledby="resume-title">
      <title>Resume — Hannah Galocy</title>
      <h1 className="resume-title" id="resume-title">
        Resume
      </h1>
      <div className="resume-actions">
        <a
          className="button-primary"
          href={resumeUrl}
          download="Hannah_Galocy_Resume_2026_Public.pdf"
        >
          Download resume <span aria-hidden="true">↓</span>
        </a>
        <a
          className="github-link"
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open PDF in a new tab <span aria-hidden="true">↗</span>
        </a>
      </div>
      <object
        className="resume-viewer"
        data={resumeUrl}
        type="application/pdf"
        aria-label="Hannah Galocy's resume"
      >
        <p>
          Preview unavailable. <a href={resumeUrl}>Open the resume PDF</a> or
          use the download button above.
        </p>
      </object>
    </section>
  )
}
