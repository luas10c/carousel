export class Carousel {
  constructor(target) {
    this.target = typeof target === 'string' ? document.querySelector(target) : target
    this.config = {
      finalPosition: 0,
      startX: 0,
      movePosition: 0,
      movement: 0
    }
  }

  /**
   *  updatePosition
   *
   * @param {number} clientX
   * @returns {number}
   */
  updatePosition(clientX) {
    this.config.movement = (this.config.startX - clientX) * 1.6
    return this.config.finalPosition - this.config.movement
  }

  onStart(event) {
    event.preventDefault()

    this.config.startX = event.clientX

    this.target.addEventListener('mousemove', this.onMove)
    this.target.addEventListener('mouseleave', this.onEnd)
  }

  onEnd(event) {
    event.preventDefault()

    this.config.finalPosition = this.config.movePosition

    this.target.removeEventListener('mousemove', this.onMove)
  }

  updateWindow(x) {
    this.config.movePosition = x
    this.target.querySelector(
      '.carousel-items'
    ).style.transform = `translate3d(${x}px, 0, 0)`
  }

  onMove(event) {
    const finalPosition = this.updatePosition(event.clientX)

    this.updateWindow(finalPosition)
  }

  addEvents() {
    this.target.addEventListener('mousedown', this.onStart)
    this.target.addEventListener('mouseup', this.onEnd)
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this)
    this.onEnd = this.onEnd.bind(this)
    this.onMove = this.onMove.bind(this)
  }

  bootstrap() {
    this.bindEvents()
    this.addEvents()
  }
}
