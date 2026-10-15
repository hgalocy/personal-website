import type { ProjectImage } from '../data/projects'

interface ProjectFigureProps {
  image: ProjectImage
  priority?: boolean
}

export default function ProjectFigure({
  image,
  priority = false,
}: ProjectFigureProps) {
  return (
    <figure className="case-figure">
      <a
        className="case-image-link"
        href={image.src}
        target="_blank"
        rel="noreferrer"
        aria-label={`View full-size image: ${image.alt} (opens in a new tab)`}
      >
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
        />
      </a>
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  )
}
