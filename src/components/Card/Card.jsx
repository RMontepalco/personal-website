import './Card.css'
import placeholderImage from '/image.jpg'

export default function Card() {
  return (
    <div className="card">
      <img className="card-image" src={placeholderImage} alt="Image"/>
      <div className="card-text">
        <h2>Project</h2>
        <p>Description</p>
      </div>
    </div>
  )
}