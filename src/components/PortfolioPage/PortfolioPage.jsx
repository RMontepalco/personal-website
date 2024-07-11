import './PortfolioPage.css'
import Card from '../Card/Card'

export default function PortfolioPage() {

  return (
    <div className="portfolio-page">
      <h1>My <span className="highlight">Work</span></h1>
      <div className="projects">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
