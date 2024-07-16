import { useId } from 'react'
import './PortfolioPage.css'
import Card from '../Card/Card'
import portfolioData from './PortfolioData.js'

export default function PortfolioPage() {
  const project = portfolioData.map(project => {
    return <Card
      key={useId()}
      name={project.name}
      description={project.description}
      image={project.image}
      link={project.link}
    />
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
