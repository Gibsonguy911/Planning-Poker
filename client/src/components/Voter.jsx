import useWebSocket from 'react-use-websocket'
import Card from './Card'
import { EVENT_TYPES } from '../types/events'
import { all, isVoteEvent } from '../helpers/connections'
import Users from './Users'

const Voter = () => {
  const { lastJsonMessage, sendJsonMessage } = useWebSocket(process.env.REACT_APP_WS_URL, {
    share: true,
    filter: all,
  })

  console.log('test', lastJsonMessage)

  const sendMessage = text => {
    const json = {
      type: EVENT_TYPES.CONTENT,
      content: text,
    }
    console.log('sending message', json)
    sendJsonMessage(json)
  }

  return (
    <>
      <Users />
      <div className='card-holder'>
        <Card sendMessage={sendMessage} text='S' />
        <Card text='M' />
        <Card text='L' />
        <Card text='XL' />
      </div>
    </>
  )
}

export default Voter
