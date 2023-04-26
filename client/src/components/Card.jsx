import '../styles/Card.css'

const Card = ({ text, sendMessage }) => {
  return (
    <div
      onClick={sendMessage ? () => sendMessage(text) : () => console.log('no send message')}
      className='card'>
      {text}
    </div>
  )
}
export default Card
