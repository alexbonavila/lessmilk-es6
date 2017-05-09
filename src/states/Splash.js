import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}

  preload () {
    //
    // load your assets
    //
    this.load.spritesheet('player', 'assets/player.png', 28, 22)
    this.load.image('wall', 'assets/wall.png')
    this.load.image('ground', 'assets/ground.png')
    this.load.image('dust', 'assets/dust.png')
    this.load.image('exp', 'assets/exp.png')
    this.load.image('enemy', 'assets/enemy.png')
    this.load.image('coin', 'assets/coin.png')

    if (!this.desktop) {
      this.load.image('right', 'assets/right.png')
      this.load.image('left', 'assets/left.png')
    }
    this.load.image('jump', 'assets/jump.png')

    this.load.audio('dead', ['assets/dead.wav', 'assets/dead.mp3'])
    this.load.audio('dust', ['assets/dust.wav', 'assets/dust.mp3'])
    this.load.audio('jump', ['assets/jump.wav', 'assets/jump.mp3'])
    this.load.audio('coin', ['assets/coin.wav', 'assets/coin.mp3'])
  }

  create () {
    this.state.start('Game')
  }
}
