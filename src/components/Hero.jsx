export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <h1>
          Hi, I'm <span>Zack</span><br />
          <span className="job-title" aria-label="Video Editor or Web Developer">
            <span className="job-title__track"><span>Video Editor</span><span>Web Developer</span></span>
          </span><br />
        </h1>
        <p className="hero-description">
          Combining Computer Science with creative direction, I craft high-retention videos and design modern, interactive websites. I take raw concepts and engineer them into polished visual assets that engage, convert, and leave a lasting impression.
        </p>
        <a href="#projects" className="button">See My Work <span aria-hidden="true">↓</span></a>
      </div>
      <div className="hero-portrait">
        <img src="/images/zack-portrait.png" alt="Zack wearing glasses and holding a camera" fetchPriority="high" />
      </div>
    </section>
  )
}