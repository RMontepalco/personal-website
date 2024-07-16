import './SplashPage.css'
import envelopeFill from '/envelope-fill.svg'
import linkedIn from '/linkedin.svg'
import profilePicture from '/profile-picture.png'

export default function SplashPage() {
  return (
    <div className="splash-page">
      <div className="summary">
        <h1>Hey! I'm <span className="highlight">Ross</span></h1>
        <p>
          I am a software engineer specializing
          in full-stack development to design and
          develop exceptional software solutions.
        </p>
        <div className="splash-buttons">
          {/*
            TO DO: Find a safer alternative to mailto
          */}
          <a href="mailto:montepalco.ross@gmail.com">
            <div className="button">
              <img src={envelopeFill}/>
              <p>&nbsp;&nbsp;Email</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/rmontepalco/">
            <div className="button">
              <img src={linkedIn}/>
              <p>&nbsp;&nbsp;LinkedIn</p>
            </div>
          </a>
        </div>
      </div>
      <img className="profile-picture" src={profilePicture} alt="Profile Picture"/>
    </div>
  )
}
