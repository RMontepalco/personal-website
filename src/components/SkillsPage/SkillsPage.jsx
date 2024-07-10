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

      {/*
      <div className="skills-text">
        <p>
          I have a deep understanding of the software development life cycle, including
          requirements analysis, design, implementation, testing, deployment, and maintenance.
          I am knowledgeable in agile methodologies to adapt to various work environments while
          adhering to deadlines. I have exceptional interpersonal skills to work with people
          from all organizational levels.
        </p>
      </div>
      */}

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
