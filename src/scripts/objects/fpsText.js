export default class FpsText extends Phaser.GameObjects.Text {
  score = 0
  constructor(scene) {
    super(scene, 10, 10, '', { color: 'white', fontSize: '28px' })
    scene.add.existing(this)
    this.setOrigin(0)
    this.setText(`Score: ${this.score}`);
  }

  update() {
    this.score++;
    this.setText(`Score: ${this.score}`)
  }
}
