export default class CrossHair extends Phaser.Physics.Arcade.Sprite {

constructor(scene, x, y) {
    super(scene, x, y, 'crosshair')
    scene.add.existing(this)
    this.displayWidth = 60;
    this.displayHeight = 60;    

    gyro.frequency = 10;
        // start gyroscope detection
    console.log(gyro.getOrientation());
    gyro.startTracking(function(o) {
          // updating player velocity
        //   scene.Score.score = o.beta;
        //   let y = window.innerHeight / 2;
        //   let x = window.innerWidth / 2;
          let y = 0;
          let x = 0;

          if(o.beta <= 0){
            y = y - o.beta/20
          } else {
            y = y + o.beta/20
          } 

          if(o.gamma <= 0) {
              x = x - o.gamma
          } else {
              x = x + o.gamma;
          }
        //   scene.CrossHair.setPosition(x, y);
        //   scene.CrossHair.
        //   console.log(this);
        // console.log(scene.CrossHair.x);
        scene.beta.update(y);
        scene.gamma.update(x);
        // scene.crosshair.update(x, y);
        // scene.CrossHair.y = y;

        // scene.Score.score = o.gamma;
        // scene.Score.update();
        // this.Score.score = o.gamma/20;
        // console.log(o.gamma/20);
        // console.log(o.beta/20);
    });		

    scene.input
        .on('pointermove', (pointer) => this.setVisible(true).setPosition(pointer.x, pointer.y), true)
    }
    update(x, y){
        this.setPosition(x, y);
    }    
}
