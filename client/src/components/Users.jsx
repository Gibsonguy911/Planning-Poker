import { all, isUserEvent } from '../helpers/connections'
import useWebSocket from 'react-use-websocket'
import { Container, Row } from 'reactstrap'

const Users = () => {
  const { lastJsonMessage } = useWebSocket(process.env.REACT_APP_WS_URL, {
    share: true,
    filter: isUserEvent,
  })

  console.log('users', lastJsonMessage)
  const users = lastJsonMessage?.data?.users ?? {}

  return (
    <Container>
      <Row>
        <ul>
          {Object.keys(users).map(u => (
            <li key={u}>{users[u].username}</li>
          ))}
        </ul>
      </Row>
    </Container>
  )
}
export default Users
