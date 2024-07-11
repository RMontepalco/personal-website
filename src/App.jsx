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

      <Navbar />
      <SplashPage />
      <AboutMePage />
      <SkillsPage />
      <PortfolioPage />
      <ContactMePage />
      <Footer />
    </div>
  )
}
