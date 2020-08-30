export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  enemy

  constructor(scene, x, y) {
    super(scene, x, y, 'enemy')
    scene.add.existing(this)

  }
  update() {
    this.setInteractive()
        .on('pointerdown', () => console.log("enemy shoot!"))
  }
}
