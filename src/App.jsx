import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  useEffect(() => {
    const videos = Array.from(document.querySelectorAll('video'))
    const pauseOtherVideos = (event) => {
      const playingVideo = event.currentTarget
      videos.forEach((video) => {
        if (video !== playingVideo) video.pause()
      })
    }

    videos.forEach((video) => video.addEventListener('play', pauseOtherVideos))
    return () => videos.forEach((video) => video.removeEventListener('play', pauseOtherVideos))
  }, [])

  return (
    <div className="min-h-screen overflow-x-clip bg-[#070707] text-[#f5f5f0]">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}