export default class PhaserLogo extends Phaser.Physics.Arcade.Sprite {
constructor(scene, x, y) {
    super(scene, x, y, 'crosshair')
    scene.add.existing(this)
    
    scene.input
        .on('pointermove', (pointer) => this.setVisible(true).setPosition(pointer.x, pointer.y), true)
        .on('pointerdown', () => console.log("gun fired"), true);

    this.displayWidth = 60;
    this.displayHeight = 60;    
    }
}
  