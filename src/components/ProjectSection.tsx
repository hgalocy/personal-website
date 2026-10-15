import type { ProjectSection as Section } from '../data/projects'
import ProjectFigure from './ProjectFigure'

function Paragraphs({ paragraphs }: { paragraphs?: string[] }) {
  if (!paragraphs?.length) return null
  return (
    <div className="case-prose">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}

export default function ProjectSection({
  section,
  index,
}: {
  section: Section
  index: number
}) {
  const headingId = `section-${section.id}`
  const heading = (
    <div className="case-section-heading">
      <span className="case-section-number" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h2 id={headingId}>{section.heading}</h2>
    </div>
  )

  switch (section.type) {
    case 'text':
      return (
        <section
          className="case-section case-section-text"
          aria-labelledby={headingId}
        >
          {heading}
          <Paragraphs paragraphs={section.paragraphs} />
        </section>
      )
    case 'split':
      return (
        <section
          className={`case-section case-section-split${section.imagePosition === 'left' ? ' case-image-first' : ''}`}
          aria-labelledby={headingId}
        >
          <div className="case-split-copy">
            {heading}
            <Paragraphs paragraphs={section.paragraphs} />
          </div>
          <ProjectFigure image={section.image} />
        </section>
      )
    case 'image':
    case 'gallery':
      return (
        <section
          className={`case-section case-section-${section.type}`}
          aria-labelledby={headingId}
        >
          <div className="case-section-intro">
            {heading}
            <Paragraphs paragraphs={section.paragraphs} />
          </div>
          {section.type === 'image' ? (
            <ProjectFigure image={section.image} />
          ) : (
            <div className="case-gallery">
              {section.images.map((image, imageIndex) => (
                <ProjectFigure
                  key={`${image.src}-${imageIndex}`}
                  image={image}
                />
              ))}
            </div>
          )}
        </section>
      )
  }
}
