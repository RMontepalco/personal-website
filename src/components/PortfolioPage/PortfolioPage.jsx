import './PortfolioPage.css'
import placeholderImage from '/image.svg'

export default function PortfolioPage() {
  const project = []

  /*
    TO DO: Create Project component and map through each project
    TO DO: Make sure each component has a unique key prop
  */
  for (let i = 0; i < 10; i++) {
    project.push(
        <div className="project">
          <h2>Project</h2>
          <img className="image" src={placeholderImage} alt="Image"/>
          <p>Description</p>
        </div>
    )
  }

  return (
    <div className="portfolio-page">
      <h1>My <span className="highlight">Work</span></h1>
      <div className="projects">
        {project}
      </div>
    </div>
  )
}
