import "./Card.css"

const Card = ({ backgroundColor }) => {
  const style = { backgroundColor }
  return <div className="card-container" style={style}></div>
}

export default Card
