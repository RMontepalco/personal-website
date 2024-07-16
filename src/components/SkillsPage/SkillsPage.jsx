import './SkillsPage.css'
import react from '/filetype-jsx.svg'
import javaScript from '/filetype-js.svg'
import html from '/filetype-html.svg'
import css from '/filetype-css.svg'
import java from '/filetype-java.svg'
import python from '/filetype-py.svg'
import sql from '/filetype-sql.svg'

export default function SkillsPage() {
  return (
    <div className="skills-page">
      <h1>What I <span className="highlight">Do</span></h1>
      <div className="skills">
        <div className="skill">
          <h2>Front-End</h2>
          <div className="images">
            <img src={react}/>
            <img src={html}/>
            <img src={css}/>
          </div>
          <p>ReactJS • HTML • CSS</p>
        </div>
        <div className="skill">
          <h2>Back-End</h2>
          <div className="images">
            <img src={java}/>
            <img src={python}/>
            <img src={sql}/>
          </div>
          <p>Java • Python • SQL</p>
        </div>
      </div>
    </div>
  )
}
