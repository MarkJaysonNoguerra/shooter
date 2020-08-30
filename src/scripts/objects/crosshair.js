export default class CrossHair extends Phaser.Physics.Arcade.Sprite {
constructor(scene, x, y) {
    super(scene, x, y, 'crosshair')
    scene.add.existing(this)
    this.displayWidth = 60;
    this.displayHeight = 60;    
    
    scene.input
        .on('pointermove', (pointer) => this.setVisible(true).setPosition(pointer.x, pointer.y), true)
    }
}
  