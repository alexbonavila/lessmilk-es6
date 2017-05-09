import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#3498db'
  }

  preload () {
    this.state.start('Splash')
  }

  render () {
  }
}
