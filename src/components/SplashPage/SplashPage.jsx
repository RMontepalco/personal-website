import './SplashPage.css'
import envelopeFill from '/envelope-fill.svg'
import linkedIn from '/linkedin.svg'
import profilePicture from '/profile-picture.png'

export default function SplashPage() {
	return (
		<div className="splash-page">
			<div className="summary">
				<h1>Hey! I'm <span>Ross</span></h1>
				<p>
					I am a software engineer specializing
					in full-stack development to design and
					develop exceptional software solutions.
				</p>
				<div>
					{/*
						TO DO: Do something about these spaces because I wanted to 
						make both of these buttons the same width
					*/}
					<a href="">&nbsp;&nbsp;<img src={envelopeFill}/>&nbsp;&nbsp;Email&nbsp;&nbsp;</a>
					<a href=""><img src={linkedIn}/>&nbsp;&nbsp;LinkedIn</a>
				</div>
			</div>
			<img className="profile-picture" src={profilePicture}/>
		</div>
	)
}