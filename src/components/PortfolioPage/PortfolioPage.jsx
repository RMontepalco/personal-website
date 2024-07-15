import './PortfolioPage.css'
import Card from '../Card/Card'
import portfolioData from './PortfolioData.js'

export default function PortfolioPage() {

  const project = portfolioData.map(project => {
    // TO DO: Generate ids for component keys
    return <Card name={project.name} description={project.description} image={project.image}/>
  })

  return (
    <div className="portfolio-page">
      <h1>My <span className="highlight">Work</span></h1>
      <div className="projects">
        {project}
      </div>
    </div>
  )
}
