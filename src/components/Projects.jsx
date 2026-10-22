import { useRef } from 'react'

const projects = Array.from({ length: 6 }, (_, index) => index + 1)

export default function Projects() {
  const galleryRef = useRef(null)

  function scrollGallery(direction) {
    const gallery = galleryRef.current
    if (!gallery) return

    const card = gallery.querySelector('.video-card')
    const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 0
    const amount = card ? (card.getBoundingClientRect().width + gap) * 2 : gallery.clientWidth * 0.85
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    gallery.scrollBy({ left: direction * amount, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <section id="projects" className="dark-section">
      <p className="eyebrow">SELECTED WORKS</p>
      <h2>My <span>Projects</span></h2>
      <p className="section-intro">Explore some of my video editing projects and creative work.</p>

      <div className="video-gallery">
        <div className="video-gallery-controls" role="group" aria-label="Video gallery navigation">
          <button type="button" className="video-gallery-button" aria-label="Scroll videos left" onClick={() => scrollGallery(-1)}>&lt;</button>
          <button type="button" className="video-gallery-button" aria-label="Scroll videos right" onClick={() => scrollGallery(1)}>&gt;</button>
        </div>
        <div className="video-gallery-track" ref={galleryRef} role="region" aria-label="Video projects">
          {projects.map((projectId) => (
            <article className="card video-card" key={projectId}>
              <video controls preload="metadata" playsInline aria-label={`Portfolio video ${projectId}`}>
                <source src={`/videos/project-${projectId}.mp4`} type="video/mp4" />
              </video>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}