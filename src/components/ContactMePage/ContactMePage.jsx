import './ContactMePage.css'
import envelopeFill from '/envelope-fill.svg'
import linkedIn from '/linkedin.svg'

export default function ContactMePage() {
	return (
		<div className="contact-me-page">
			<h1>Let's Connect</h1>
			<p>Interested in discussing networking opportunities? Send me a message!</p>
				<div className="contact-me-buttons">
					<a href="">&nbsp;&nbsp;<img src={envelopeFill}/>&nbsp;&nbsp;Email&nbsp;&nbsp;</a>
					<a href=""><img src={linkedIn}/>&nbsp;&nbsp;LinkedIn</a>
				</div>
		</div>
	)
}