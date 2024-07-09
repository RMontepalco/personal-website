import './ContactMePage.css'
import envelopeFill from '/envelope-fill.svg'
import linkedIn from '/linkedin.svg'

export default function ContactMePage() {
  return (
    <div className="contact-me-page">
      <div className="contact-me-text">
        <h1>Let's <span className="highlight">Connect</span></h1>
        <p>Interested in discussing networking opportunities? Send me a message!</p>
        <div className="contact-me-buttons">
          <a href="">
            <div className="button">
              <img src={envelopeFill}/>
              <p>&nbsp;&nbsp;Email</p>
            </div>
          </a>
          <a href="">
            <div className="button">
              <img src={linkedIn}/>
              <p>&nbsp;&nbsp;LinkedIn</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
