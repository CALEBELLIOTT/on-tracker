import { SocketHandler } from '../utils/SocketHandler'

export class TestHandler extends SocketHandler {
  /**
   * @param {import("socket.io").Server} io
   * @param {import("socket.io").Socket} socket
   */
  constructor(io, socket) {
    super(io, socket)
    this
      .on('SOCKET_TEST', this.testEvent)
      .on('join_room', this.joinRoom)
  }

  async testEvent(payload) {
    this.socket.emit('IS_TESTED', payload)
  }

  joinRoom(payload) {
    if (!payload.room) {
      this.socket.emit('error', { message: "please provide a room name" })
    }
    this.socket.join(payload.room)
    this.socket.emit('joined:room', payload)
  }
}
