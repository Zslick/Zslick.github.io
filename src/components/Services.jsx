const services = [
  { title: 'Video Editing', description: 'Engaging, polished videos with strong storytelling, smooth pacing, and seamless transitions.' },
  { title: 'Web Development', description: 'Responsive, user-friendly websites designed for functionality, accessibility, and a clean user experience.' },
]

export default function Services() {
  return (
    <section id="service">
      <p className="eyebrow">WHAT I DO</p>
      <h2>My <span>Services</span></h2>
      <div className="grid">
        {services.map(({ title, description }) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}