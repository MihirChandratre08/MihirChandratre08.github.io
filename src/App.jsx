import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Expertise from './components/Expertise'
import Research from './components/Research'
import Timeline from './components/Timeline'
import Education from './components/Education'
import Publication from './components/Publication'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Conferences from './components/Conferences'
import ResearchInterests from './components/ResearchInterests'
import CurrentlyExploring from './components/CurrentlyExploring'
import Contact from './components/Contact'
import ResearchModeToggle from './components/ResearchModeToggle'

export default function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="relative z-[1] bg-gradient-to-b from-[#cfe9df] via-[#dceee6] to-[#c8e4d8] text-[var(--color-text)] shadow-[0_-16px_40px_rgba(12,22,20,0.22)]">
          <Stats />
          <About />
          <Expertise />
          <Research />
          <Timeline />
          <Education />
          <Publication />
          <Certifications />
          <Achievements />
          <Conferences />
          <ResearchInterests />
          <CurrentlyExploring />
          <Contact />
        </div>
      </main>
      <Footer />
      <ResearchModeToggle />
    </div>
  )
}
