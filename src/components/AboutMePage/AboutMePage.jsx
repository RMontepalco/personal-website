import './AboutMePage.css'
import gradPhoto from '/grad-photo.jpg'

export default function AboutMePage() {
  return (
    <div className="about-me-page">
      <img className="grad-photo" src={gradPhoto} alt="Grad Photo"/>
      <div className="about-me-text">
        <h1>Who I <span className="highlight">Am</span></h1>
        <p>
          I am a recent graduate from San Jose State University
          with a Bachelors of Science in Software Engineering.
          <br/><br/>
          I am currently looking for opportunities to refine my
          technical and interpersonal skills, while contributing
          my efforts to a growth-oriented company.
        </p>
      </div>
    </div>
  )
}
