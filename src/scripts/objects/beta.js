export default class Beta extends Phaser.GameObjects.Text {
    constructor(scene) {
      super(scene, 10, 30, '', { color: 'white', fontSize: '28px' })
      scene.add.existing(this)
      this.setOrigin(0)
      this.setText(`Beta: 0`);
    }
  
    update(beta) {
      this.setText(`Beta: ${beta}`)
    }
  }
  