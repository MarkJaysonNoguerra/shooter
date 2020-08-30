import Crosshair from '../objects/crosshair'
import FpsText from '../objects/fpsText'
import Enemy from '../objects/enemy'

export default class MainScene extends Phaser.Scene {
  fpsText
  enemies
  crosshair

  constructor() {
    super({ key: 'MainScene' })
  }
   
  create() {
    /**
     * Delete all the code below to start a fresh scene
     */
    this.add.image(1280 / 2, 720 / 2, 'bg');
    this.fpsText = new FpsText(this)
    this.enemies = new Enemy(this, this.cameras.main.width / 2, this.cameras.main.displayHeight /2);
    this.enemies.update()
    this.crosshair = new Crosshair(this, this.cameras.main.width / 2, this.cameras.main.displayHeight /2)
  }

  update() {
    this.fpsText.update()
    // this.enemies.update()
  }
  
}
