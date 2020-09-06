import Crosshair from '../objects/crosshair'
import Score from '../objects/score'
import Enemy from '../objects/enemy'
import Countdown from '../objects/countDown'
import Beta from '../objects/beta'
import Gamma from '../objects/gamma'

export default class MainScene extends Phaser.Scene {
  enemies
  crosshair
  index = 1;
  totalScore = 0;
  Score;
  level = 0;
  gameOver = false;
  
  constructor() {
    super({ key: 'MainScene' })
  }
   
  create() {

    
    let image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'bg');
    let scaleX = this.cameras.main.width / image.width;
    let scaleY = this.cameras.main.height / image.height;
    let scale = Math.max(scaleX, scaleY);
    image.setScale(scale).setScrollFactor(0);
    this.Score = new Score(this);
    this.enemies = this.add.group();
    this.crosshair = new Crosshair(this, this.cameras.main.width / 2, this.cameras.main.displayHeight /2)
    this.countDown = new Countdown(this);
    this.beta = new Beta(this);
    this.gamma = new Gamma(this);
    
  }

  update() {

    if(this.countDown.initialTime == 0 && this.enemies.getChildren().length > 0) {

      alert("Total Score: " + this.Score.score + "\n press Ok to play again");
      this.level = 0;
      this.scene.stop();
      this.scene.start();

    }
    if(this.enemies.getChildren().length == 0){
      this.level++;
      this.index = 0;
      this.countDown.initialTime = 16
      // this.countDown.initialTime = 30;
    }
    
    if(this.index < 9 + this.level){
      this.index++;
      this.createEnemies();
    }


  }

  createEnemies(){
    let enemy = new Enemy(this, Math.random() * this.cameras.main.width, Math.random() * this.cameras.main.displayHeight, this.level * 200);
    enemy.update(this.Score, this.enemies, this.totalScore);
    this.enemies.create(enemy);
  }
  
}
