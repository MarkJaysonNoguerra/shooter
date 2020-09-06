export default class Gamma extends Phaser.GameObjects.Text {
    constructor(scene) {
      super(scene, 10, 50, '', { color: 'white', fontSize: '28px' })
      scene.add.existing(this)
      this.setOrigin(0)
      this.setText(`Gamma: 0`);
    }
  
    update(gamma) {
      this.setText(`Gamma: ${gamma}`)
    }
  }
  