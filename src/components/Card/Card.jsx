import './Card.css'
import placeholderImage from '/image.jpg'

export default function Card() {
  return (
    <div className="card">
      <img className="card-image" src={placeholderImage} alt="Image"/>
      <div className="card-text">
        <h2>Project Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  )
}
