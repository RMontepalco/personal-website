import './Card.css'
import placeholderImage from '/image.jpg'

export default function Card(props) {
  return (
    <a href={props.link}>
      <div className="card">
        <img className="card-image" src={props.image} alt="Image"/>
        <div className="card-text">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </a>
  )
}
