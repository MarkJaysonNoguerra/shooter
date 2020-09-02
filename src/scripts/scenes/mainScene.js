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

    this.add.image(1280 / 2, 720 / 2, 'bg');
    this.fpsText = new FpsText(this)
    this.enemies = new Enemy(this, this.cameras.main.width / 2, this.cameras.main.displayHeight /2);
    this.enemies2 = new Enemy(this, this.cameras.main.width / 2.3, this.cameras.main.displayHeight /2);
    this.enemies3 = new Enemy(this, this.cameras.main.width / 1, this.cameras.main.displayHeight /2);
    this.enemies4 = new Enemy(this, this.cameras.main.width / 3, this.cameras.main.displayHeight /2);
    this.enemies5 = new Enemy(this, this.cameras.main.width / 6, this.cameras.main.displayHeight /2);

    this.enemies.update()
    this.enemies2.update()
    this.enemies3.update()
    this.enemies4.update()
    this.enemies5.update()
    this.crosshair = new Crosshair(this, this.cameras.main.width / 2, this.cameras.main.displayHeight /2)
    
  }

  update() {
    this.fpsText.update()

  }
  
}
