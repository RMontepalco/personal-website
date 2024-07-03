import './SkillsPage.css'
import java from '/filetype-java.svg'
import python from '/filetype-py.svg'
import javaScript from '/filetype-js.svg'
import react from '/filetype-jsx.svg'
import html from '/filetype-html.svg'
import css from '/filetype-css.svg'
import sql from '/filetype-sql.svg'

export default function SkillsPage() {
	return (
		/*
			TO DO: Find a way to display skills, maybe categorize them as frontend or backend
		*/
		<div className="skills-page">
			<h1>What I do</h1>
			<div className="images">
				<img src={java}/>
				<img src={python}/>
				<img src={javaScript}/>
				<img src={react}/>
				<img src={html}/>
				<img src={css}/>
				<img src={sql}/>
			</div>
		</div>
	)
}