import './App.css'
import Navbar from './components/Navbar/Navbar'
import SplashPage from './components/SplashPage/SplashPage'
import AboutMePage from './components/AboutMePage/AboutMePage'
import SkillsPage from './components/SkillsPage/SkillsPage'
import PortfolioPage from './components/PortfolioPage/PortfolioPage'
import ContactMePage from './components/ContactMePage/ContactMePage'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className="app">

      {/*
        TO DO: Add scrolling animation to each page
        TO DO: Remove fullscreen scrolling
      */}
      <div className="page" id="home">
        <Navbar />
        <SplashPage />
      </div>
      <div className="page" id="about">
        <AboutMePage />
      </div>
      <div className="page" id="skills">
        <SkillsPage />
      </div>
      <div className="page" id="portfolio">
        <PortfolioPage />
      </div>
      <div className="page" id="contact">
        <ContactMePage />
        <Footer />
      </div>
    </div>
  )
}
