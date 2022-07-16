import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { SocketHandler } from '../utils/SocketHandler'

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('error', this.onError)
      .on('joined:room', this.joinedRoom)
      .on('new:note', this.newNote)

  }

  onError(e) {
    Pop.toast(e.message, 'error')
  }

  newNote(payload) {
    AppState.projectNotes.push(payload)
    logger.log(payload, 'socket note is working')
  }

  joinedRoom(payload) {
    logger.log(payload, "im in the room")
  }

  joinRoom(room) {
    this.emit('join_room', { room })
  }
}

export const socketService = new SocketService()
