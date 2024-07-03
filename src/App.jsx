import './App.css'
import Navbar from './components/Navbar/Navbar'
import SplashPage from './components/SplashPage/SplashPage'
import AboutMePage from './components/AboutMePage/AboutMePage'

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
    </div>
  )
}