import React, { useEffect, useState } from 'react'
import './styles/App.css'
import { Navbar, NavbarBrand, UncontrolledTooltip } from 'reactstrap'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { ROLES } from './types/roles'
import { EVENT_TYPES } from './types/events'

import { none } from './helpers/connections'

import Login from './components/Login'
import Voter from './components/Voter'
import Admin from './components/Admin'
import Spectator from './components/Spectator'

function App() {
  const [username, setUsername] = useState('')
  const [role, setRole] = useState(ROLES.VOTER)
  const { sendJsonMessage, readyState } = useWebSocket(process.env.REACT_APP_WS_URL, {
    onOpen: () => {
      console.log('WebSocket connection established.')
    },
    share: true,
    filter: none,
    retryOnError: true,
    shouldReconnect: () => true,
  })

  useEffect(() => {
    if (username && readyState === ReadyState.OPEN) {
      sendJsonMessage({
        username,
        type: EVENT_TYPES.USER,
      })
    }
  }, [username, sendJsonMessage, readyState])

  return !username ? (
    <Login onLogin={setUsername} />
  ) : (
    <>
      <div>{role}</div>
      {Object.keys(ROLES).map(role => (
        <button onClick={() => setRole(ROLES[role])} key={role}>
          Change to {ROLES[role]}
        </button>
      ))}
      {role === ROLES.ADMIN ? <Admin /> : role === ROLES.SPECTATOR ? <Spectator /> : <Voter />}
    </>
  )
}

export default App
