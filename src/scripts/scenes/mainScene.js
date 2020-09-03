import Crosshair from '../objects/crosshair'
import FpsText from '../objects/fpsText'
import Enemy from '../objects/enemy'

export default class MainScene extends Phaser.Scene {
  fpsText
  enemies
  crosshair
  index = 0;
  constructor() {
    super({ key: 'MainScene' })
  }
   
  create() {

    // this.add.image(window.innerWidth / 2, window.innerHeight / 2, 'bg');
    let image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg');
    let scaleX = this.cameras.main.width / image.width;
    let scaleY = this.cameras.main.height / image.height;
    let scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(0);
    this.fpsText = new FpsText(this);
    this.enemies = this.add.group();
    this.crosshair = new Crosshair(this, this.cameras.main.width / 2, this.cameras.main.displayHeight /2)
    
  }

  update() {
    this.fpsText.update()
    if(this.index < 10){
      this.createEnemies();
    }
    this.index++;

  }

  createEnemies(){
    let enemy = new Enemy(this, Math.random() * this.cameras.main.width, Math.random() * this.cameras.main.displayHeight);
    enemy.update()
    this.enemies.create(enemy);
    // this.enemies.update();
  }
  
}
