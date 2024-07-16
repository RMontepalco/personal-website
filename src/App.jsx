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
      */}
      <div id="home">
        <Navbar />
        <SplashPage />
      </div>
      <div id="about">
        <AboutMePage />
      </div>
      <div id="skills">
        <SkillsPage />
      </div>
      <div id="portfolio">
        <PortfolioPage />
      </div>
      <div id="contact">
        <ContactMePage />
        <Footer />
      </div>
    </div>
  )
}
