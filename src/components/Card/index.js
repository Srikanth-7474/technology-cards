// Write your code here.
import './index.css'

const Card = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData
  return (
    <div className={`card ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} alt="img" className="image" />
    </div>
  )
}
export default Card
