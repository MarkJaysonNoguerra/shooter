export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  enemy

  constructor(scene, x, y, speed) {
    super(scene, x, y, 'enemy')
    scene.add.existing(this)
    this.setScale(0.25)
    // scene.add.image(0, 80, 'enemy', 0);

    scene.tweens.add({
      targets: this,
      props: {
          x: { value: Math.random() * window.innerWidth, duration: 5000 - speed, flipX: true },
          y: { value: Math.random() * window.innerHeight, duration: 6000 - speed, flipY: true },
      },
      ease: 'Sine.easeInOut',
      yoyo: true,
      repeat: -1
  });

    
  }
  update(score, enemy) {
    this.setInteractive()
        .on('pointerdown', () => {
          this.destroy();
          enemy.getChildren().pop();
          score.update();
        })
  } 

}
