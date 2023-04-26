import { EVENT_TYPES } from '../types/events'

export const all = () => {
  return true
}

export const none = () => {
  return false
}

export const isUserEvent = message => {
  let evt = JSON.parse(message.data)
  return evt.type === EVENT_TYPES.USER
}

export const isDocumentEvent = message => {
  let evt = JSON.parse(message.data)
  return evt.type === EVENT_TYPES.CONTENT
}

export const isVoteEvent = message => {
  let evt = JSON.parse(message.data)
  return evt.type === EVENT_TYPES.VOTE
}
