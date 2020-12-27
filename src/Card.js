import "./Card.css"

const Card = ({ showing, backgroundColor }) => {
  const style = {}
  if (showing) {
    style.backgroundColor = backgroundColor
  }
  return <div className="card-container" style={style}></div>
}

export default Card
