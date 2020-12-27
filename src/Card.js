import "./Card.css"

const Card = ({ showing, backgroundColor, onClick }) => {
  const style = {}
  if (showing) {
    style.backgroundColor = backgroundColor
  }
  return <div className="card-container" style={style} onClick={onClick}></div>
}

export default Card
