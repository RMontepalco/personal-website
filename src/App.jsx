import './App.css'
import Navbar from './components/Navbar/Navbar'
import SplashPage from './components/SplashPage/SplashPage'
import AboutMePage from './components/AboutMePage/AboutMePage'
import SkillsPage from './components/SkillsPage/SkillsPage'
import ContactMePage from './components/ContactMePage/ContactMePage'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className="app">
      <div className="page">
        <Navbar />
        <SplashPage />
      </div>
      <div className="page">
        <AboutMePage />
      </div>
      <div className="page">
        <SkillsPage />
      </div>
      <div className="page">
        <ContactMePage />
        <Footer />
      </div>
    </div>
  )
}