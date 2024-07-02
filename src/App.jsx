import './App.css'
import Navbar from './components/Navbar/Navbar'
import SplashPage from './components/SplashPage/SplashPage'

export default function App() {
  return (
    <div className="app">
      <div className="screen">
        <Navbar />
        <SplashPage />
      </div>
      <div className="screen">
        <Navbar />
        <SplashPage />
      </div>
    </div>
  )
}