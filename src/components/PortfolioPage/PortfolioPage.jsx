import './PortfolioPage.css'
import Card from '../Card/Card'

export default function PortfolioPage() {

  return (
    <div className="portfolio-page">
      <h1>My <span className="highlight">Work</span></h1>
      <div className="projects">

        {/*
          TO DO: Create a .js file that stores each project as an object in a list
        */}

        <Card />
        <Card />
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
